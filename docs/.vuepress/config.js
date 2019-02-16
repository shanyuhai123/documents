const pluginConf = require('../../config/pluginConf.js');
const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');

module.exports = {
  title: '飞跃高山与大洋的鱼',
  description: '飞跃高山与大洋的鱼的文档, vuepress 文档',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'shanyuhai123/documents',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf,
    sidebar: sidebarConf
  }
}