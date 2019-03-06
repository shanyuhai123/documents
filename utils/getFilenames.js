/**
 * 该文件用于获取一个目录下的所有文件名
 * 2019-03-02 手动获取某个目录下的所有文件名
 * 2019-03-06 增加排序
 */

const { readdir, writeFile } = require('fs');
const { resolve } = require('path');

const FOLDERPATH = '/home/yuan/Projects/documents/docs/guide';

readdir(FOLDERPATH, (err, files) => {
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

  filenames.sort(); // 排序

  writeFile(resolve(__dirname, './filenames.js'), `[${filenames}]`, () => {
    console.log('文件名获取完成.');
  })
});