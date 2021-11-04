const path = require('path');
require('dotenv').config();

module.exports = [
  ['@vuepress/plugin-pwa'],
  ['@vuepress/plugin-pwa-popup', {
    locales: {
      '/': {
        message: '发现新内容可用',
        buttonText: '刷新',
      },
    },
  }],
  ['@vuepress/google-analytics', {
    id: process.env.GOOGLE_GA
  }],
  ["vuepress-plugin-auto-sidebar", {
    output: {
      filename: 'config/sidebarConf'
    },
    title: {
      mode: "uppercase",
      map: {
        "/more/": "更多🎉"
      }
    },
    git: {
      trackStatus: 'add'
    }
  }],
  ['@vuepress/plugin-search', {
    locales: {
      '/': {
        placeholder: '搜索',
      }
    },
    maxSuggestions: 10,
    // 排除首页
    isSearchable: (page) => page.path !== '/',
    // 允许搜索 Frontmatter 中的 `tags`
    getExtraFields: (page) => page.frontmatter.tags ?? [],
  }],
  ['@vuepress/register-components', {
    componentsDir: path.resolve(__dirname, '../components'),
  }],
];