import path from 'path'
import * as dotenv from 'dotenv'
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

dotenv.config()

export default [
  searchPlugin({
    locales: {
      '/': {
        placeholder: 'ctrl + k 搜索',
      }
    },
    hotKeys: [
      {
        key: 'k',
        ctrl: true
      },
      {
        key: 'K',
        ctrl: true
      },
    ],
    maxSuggestions: 10,
    // 排除首页
    isSearchable: (page) => page.path !== '/',
    // 允许搜索 Frontmatter 中的 `tags`
    getExtraFields: (page) => (page.frontmatter.tags ?? []) as string[],
  }),
  googleAnalyticsPlugin({
    id: process.env.GOOGLE_GA ?? '',
  }),
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, '../components'),
  }),
  prismjsPlugin({
    lineNumbers: false
  })
  // // ["vuepress-plugin-auto-sidebar", {
  // //   output: {
  // //     filename: 'config/sidebarConf'
  // //   },
  // //   title: {
  // //     mode: "uppercase",
  // //     map: {
  // //       "/more/": "更多🎉"
  // //     }
  // //   },
  // //   git: {
  // //     trackStatus: 'add'
  // //   }
  // // }],
];
