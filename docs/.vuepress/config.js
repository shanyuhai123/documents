const pluginConf = require('../../config/pluginConf.js');
const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');
const headConf = require('../../config/headConf.js');

module.exports = {
  title: '飞跃高山与大洋的鱼',
  description: '飞跃高山与大洋的鱼的文档, vuepress 文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'shanyuhai123/documents',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf,
    sidebar: sidebarConf,
    algolia: {
      appId: 'M698VCXCJN',
      apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
      indexName: 'shanyuhai_documents',
      algoliaOptions: {
        hitsPerPage: 10,
        facetFilters: ""
      }
    }
  },
}