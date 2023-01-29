import path from 'path'
import katex from 'markdown-it-katex'
import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import navConf from './config/navConf'
import sidebarConf from './config/sidebarConf'
import pluginConf from './config/pluginConf'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '飞跃高山与大洋的鱼',
  description: '飞跃高山与大洋的鱼的文档, vuepress 文档',
  head: [
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => ['mi', 'msup', 'mo', 'mrow', 'annotation', 'semantics', 'math', 'msub'].includes(tag)
        }
      }
    }
  }),
  theme: defaultTheme({
    logo: '/hero.jpg',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    docsRepo: 'shanyuhai123/documents',
    editLink: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    docsBranch: 'master',
    navbar: navConf,
    sidebar: sidebarConf
  }),
  plugins: pluginConf,
  markdown: {
    importCode: {
      handleImportPath: str => str.replace(/^@components/, path.resolve(__dirname, './components'))
    },
    code: {
      lineNumbers: false
    }
  },
  extendsMarkdown(md) {
    md.use(katex)
  }
})
