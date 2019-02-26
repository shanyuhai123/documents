/**
 * 该文件为获取一个目录下的所有文件名
 * 2019-02-27 手动获取某个目录下的所有文件名
 */

const { readdir, writeFile } = require('fs');
const { resolve } = require('path');

// 目录地址
const testFolder = '/home/yuan/Projects/documents/docs/FrontEnd/javascript';


readdir(testFolder, (err, files) => {
  let filenames = [];
  files.forEach(file => {
    if (file === 'README.md') {
      file = `''`;
    } else {
      file = file.replace('.md', '');
      file = `'${file}'`;
    }
    filenames.push(file);
  });

  // 使用 writeFile 要求第二个参数类型是 string 或者 buffer, 会导致变成字符串
  writeFile(resolve(__dirname, './filenames.js'), `[${filenames}]`, () => {
    console.log('文件名导出完成');
  });
})