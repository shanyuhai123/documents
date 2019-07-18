const { readdirSync, lstatSync, writeFileSync } = require('fs');
const { resolve } = require('path');

async function getFilenames(DOCSPATH, OUTPUTPATH, options = {}) {
  // 必填项
  if (!DOCSPATH || !OUTPUTPATH) {
    throw new Error("文档路径或输出路径不能为空!");
  }

  // 可选配置
  const conifg = {};
  const BLACKLIST = ['.vuepress', 'README.md'];
  const OUTPUTNAME = "filenames.json";
  Object.assign(conifg, { blacklsit: BLACKLIST, outputname: OUTPUTNAME }, options);

  // 初始化输出
  const FILENAMES = Object.create(null);

  // 处理路径地址
  !DOCSPATH.endsWith("/") && (DOCSPATH += '/');
  !OUTPUTPATH.endsWith("/") && (OUTPUTPATH += '/');

  // 获取目标文件夹
  const TARGETDIRS = await readdirSync(DOCSPATH).filter(dir => !conifg.blacklsit.includes(dir));


  // 执行操作
  const filenames = await path2Filenames(FILENAMES, DOCSPATH, TARGETDIRS); // 生成文件名

  const result = await writeFilenames(filenames, OUTPUTPATH, conifg.outputname); // 写入对应的目录

  if (result) {
    // 提示
    console.log(`\n
      🎉🎉🎉  获取完成  🎉🎉🎉\n
      文档地址: ${DOCSPATH}\n
      选中的文档目录: ${TARGETDIRS}\n
      输出文件地址：${OUTPUTPATH}${conifg.outputname}\n
      🎉🎉🎉  获取完成  🎉🎉🎉
    `);
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

/**
 * 格式化文件名
 * @param {*} filenames 
 */
function formatFilenames(filenames) {
  return filenames.map(file => {
    if (file === 'README.md') {
      return '';
    } else {
      return file.replace('.md', '');
    }
  }).sort();
}

/**
 * 写入
 * @param {*} filenames 
 * @param {*} path 
 * @param {*} name 
 */
async function writeFilenames(filenames, path, name) {
  const result = await writeFileSync(resolve(path, name), JSON.stringify(filenames));
  return !result;
}

module.exports = getFilenames;