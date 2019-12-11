// 介绍
const guide = require('./guide/index.js');

// 计算机
const computer = require('./computer/index.js');

// 操作系统
const linux = require('./os/linux/index.js');
const manjaro = require('./os/manjaro/index.js');
const ubuntu = require('./os/ubuntu/index.js');
const centos = require('./os/centos/index.js');

// 前端
const javascript = require('./frontend/javascript/index.js');
const webpack = require('./frontend/webpack/index.js');
const css = require('./frontend/css/index.js');
const nodejs = require('./frontend/nodejs/index.js');
const d3js = require('./frontend/d3js/index.js');
const utils = require('./frontend/utils/index.js');

// 后端
const koa = require('./backend/koa/index.js');
const mongodb =require('./backend/mongodb/index.js');
const nginx = require('./backend/nginx/index.js');

// 工具
const git = require('./tools/git/index.js');
const github = require('./tools/github/index.js');
const vscode = require('./tools/vscode/index.js');
const chrome = require('./tools/chrome/index.js');

// 更多
const algorithm = require('./more/algorithm/index.js');
const interview = require('./more/interview/index.js');
const hodgepodge = require('./more/hodgepodge/index.js');
const bookmark = require('./more/bookmark/index.js');
const clean = require('./more/clean/index.js');

/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // 指南 guide
  '/guide/': guide,

  // 计算机
  '/computer/': computer,

  // 操作系统 os
  '/os/linux/': linux,
  '/os/manjaro/': manjaro,
  '/os/ubuntu/': ubuntu,
  '/os/centos/': centos,

  // 前端 frontend
  '/frontend/javascript/': javascript,
  '/frontend/webpack/': webpack,
  '/frontend/css/': css,
  '/frontend/nodejs/': nodejs,
  '/frontend/d3js/': d3js,
  '/frontend/utils/': utils,

  // 后端 backend
  '/backend/koa/': koa,
  '/backend/mongodb/': mongodb,
  '/backend/nginx/': nginx,

  // 工具 tools
  '/tools/git/': git,
  '/tools/github/': github,
  '/tools/vscode/': vscode,
  '/tools/chrome/': chrome,

  // 更多 more
  '/more/algorithm/': algorithm,
  '/more/interview/': interview,
  '/more/hodgepodge/': hodgepodge,
  '/more/bookmark/': bookmark,
  '/more/clean/': clean,

  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};