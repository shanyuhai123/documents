const { readdirSync, lstatSync, writeFileSync } = require('fs');
const { resolve } = require('path');

async function getFilenames(options) {
  if (!options) throw new Error("请输入的配置！");
  let { DOCSPATH = '', TARGETDIRS = [], OUTPUTPATH = '', OUTPUTNAME = "filenames.json" } = options;

  if (!DOCSPATH || !TARGETDIRS.length || !OUTPUTPATH) {
    throw new Error("请输入正确的文档路径、目标文件夹或输出路径！");
  }

  // 处理输入的目录
  !DOCSPATH.endsWith("/") && (DOCSPATH += '/');
  !OUTPUTPATH.endsWith("/") && (OUTPUTPATH += '/');
  TARGETDIRS = TARGETDIRS.map(DIR => {
    if (DIR.startsWith("/")) {
      return DIR.slice(1);
    } 
    return DIR;
  });

  const FILENAMES = Object.create(null); // 初始化文件目录

  const filenames = await path2Filenames(FILENAMES, DOCSPATH, TARGETDIRS); // 生成文件名
  
  const result = await writeFilenames(filenames, OUTPUTPATH, OUTPUTNAME); // 写入对应的目录

  if (result) {
    console.log(`${DOCSPATH} 文档的 ${[...TARGETDIRS]} 目录已导入 ${OUTPUTPATH}${OUTPUTNAME} 文件中`);
  }
}

/**
 * 根据路径生成文件名
 * @param {*} filenames 
 * @param {*} path 
 * @param {*} dirs 
 */
async function path2Filenames(filenames, path, dirs) {
  for (const dir of dirs) {
    const completePath = path + dir;
    const files = await readdirSync(completePath);

    for (const file of files) {
      const nextPath = `${completePath}/${file}`;
      const isDirectory = await lstatSync(nextPath).isDirectory();

      if (isDirectory) {
        !filenames[dir] && (filenames[dir] = {});
        const children = await readdirSync(nextPath);
        filenames[dir][file] = formatFilenames(children);
      } else {
        const children = await readdirSync(completePath);
        filenames[dir] = formatFilenames(children);
      }
    }
  }
  
  return filenames;
}

function formatFilenames(filenames) {
  return filenames.map(file => {
    if (file === 'README.md') {
      return '';
    } else {
      return file.replace('.md', '');
    }
  }).sort();
}

async function writeFilenames(filenames, path, name) {
  const result = await writeFileSync(resolve(path, name), JSON.stringify(filenames));
  return !result;
}

module.exports = getFilenames;

// let directory = Object.create(null);
// for (const fold of FOLDERPATHS) {
//   const COMPLETE = RELATIVEPATH + fold;
//   readdir(COMPLETE, (err, files) => {
//     if (!err) {
//       const SUBDIRS = [...files];

//       for (const dir of SUBDIRS) {
//         const COMPLETE_SUB = `${COMPLETE}/${dir}`
//         directory[dir] = [];

//         readdir(COMPLETE_SUB, (err, files) => {
//           if (!err) {
//             const SUBFILES = [...files];

//             SUBFILES.forEach(file => {
//               if (file === 'README.md') {
//                 file = ``;
//               } else {
//                 file = file.replace('.md', '');
//               }
//               directory[dir].push(file);
//             })

//             directory[dir].sort(); // 排序

//             writeFile(resolve(__dirname, '../config/filenames.json'), JSON.stringify(directory), () => {
//               console.log(`${FOLDERPATHS}/${dir} 文件名获取完成。`);
//             })
//           }
//         })
//       }
//     }
//   })
// }