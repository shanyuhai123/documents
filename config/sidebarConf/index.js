// 介绍
const guide = require('./Guide/index.js');

// 基础
const git = require('./Base/git/index.js');
const interview = require('./Base/interview/index.js');

// 操作系统
const windows = require('./OS/windows/index.js');
const manjaro = require('./OS/manjaro/index.js');

// 前端
// const javascript = require();
// 后端

// 更多
const features = require('./More/features/index.js');


/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // 基础 Base
  '/Base/git/': git,
  '/Base/interview/': interview,

  // 操作系统 OS
  '/OS/manjaro/': manjaro,
  '/OS/windows/': windows,

  // 更多
  '/More/features/': features,

  // 指南 Guide
  '/guide/': guide,


  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};