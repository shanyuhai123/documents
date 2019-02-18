const css = require('./css/index.js');
const javascript = require('./javascript/index.js');
const guide = require('./guide/index.js');
const git = require('./base/git/index.js');
const interview = require('./base/interview/index.js');

/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  '/base/git/': git,
  '/base/interview/': interview,

  '/css/': css,

  '/javascript/': javascript,

  '/guide/': guide

  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};