// 介绍
const guide = require('./Guide/index.js');

// 基础
const git = require('./Base/git/index.js');
const interview = require('./Base/interview/index.js');
const algorithm = require('./Base/algorithm/index.js');
const clean = require('./Base/clean/index.js');

// 操作系统
const windows = require('./OS/windows/index.js');
const manjaro = require('./OS/manjaro/index.js');
const centos = require('./OS/centos/index.js');

// 前端
const javascript = require('./FrontEnd/javascript/index.js');
const webpack = require('./FrontEnd/webpack/index.js');
const css = require('./FrontEnd/css/index.js');
const nodejs = require('./FrontEnd/nodejs/index.js');

// 后端
const koa = require('./BackEnd/koa/index.js');
const mongodb =require('./BackEnd/mongodb/index.js');
const nginx = require('./BackEnd/nginx/index.js');

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
  // 指南 Guide
  '/guide/': guide,

  // 基础 Base
  '/Base/git/': git,
  '/Base/interview/': interview,
  '/Base/clean/': clean,
  '/Base/algorithm/': algorithm,

  // 操作系统 OS
  '/OS/manjaro/': manjaro,
  '/OS/windows/': windows,
  '/OS/centos/': centos,

  /* 开发 */
  // 前端
  '/FrontEnd/javascript/': javascript,
  '/FrontEnd/webpack/': webpack,
  '/FrontEnd/css/': css,
  '/FrontEnd/nodejs/': nodejs,
  // 后端
  '/BackEnd/koa/': koa,
  '/BackEnd/mongodb/': mongodb,
  '/BackEnd/nginx/': nginx,

  // 更多
  '/More/features/': features,



  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};