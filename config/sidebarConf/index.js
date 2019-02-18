const css = require('./css/index.js');
const javascript = require('./javascript/index.js');
const guide = require('./guide/index.js');
const git = require('./base/git/index.js');
const interview = require('./base/interview/index.js');
const windows = require('./OS/windows/index.js');
const manjaro = require('./OS/manjaro/index.js');
const features = require('./more/features/index.js');


/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // 基础 base
  '/base/git/': git,
  '/base/interview/': interview,

  // 操作系统 OS
  '/OS/manjaro/': manjaro,
  '/OS/windows/': windows,

  // 更多
  '/more/features/': features,

  // 指南 guide
  '/guide/': guide,

  '/css/': css,
  '/javascript/': javascript,

  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};