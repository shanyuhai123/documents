module.exports = [
  { text: '首页', link: '/' },
  { text: '先导', link: '/guide/' },
  { text: '计算机', link: '/computer/' },
  { text: '系统', items: [
    { text: 'Linux', link: '/os/linux/' },
    { text: 'Manjaro', link: '/os/manjaro/' },
    { text: 'Ubuntu', link: '/os/ubuntu/' },
    { text: 'CentOS', link: '/os/centos/' },
  ]},
  { text: '前端', items: [
    { text: 'JavaScript', link: '/frontend/javascript/' },
    { text: 'CSS', link: '/frontend/css/' },
    { text: 'Webpack', link: '/frontend/webpack/' },
    { text: 'D3', link: '/frontend/d3js/' },
    { text: 'Utils', link: '/frontend/utils/' },
  ]},
  { text: '后端', items: [
    { text: 'Nodejs', link: '/backend/nodejs/' },
    { text: 'Koa', link: '/backend/koa/' },
    { text: 'Nginx', link: '/backend/nginx/' },
    { text: 'MongoDB', link: '/backend/mongodb/' },
    { text: 'Docker', link: '/backend/docker/' },
  ]},
  { text: '开发工具', items: [
    { text: 'Git', link: '/tools/git/' },
    { text: 'Github', link: '/tools/github/' },
    { text: 'VSCode', link: '/tools/vscode/' },
    { text: 'Chrome Developer tools', link: '/tools/chrome/' },
    { text: 'Bookmark scripts', link: '/tools/bookmark-scripts/' },
  ]},
  { text: '更多', items: [
    { text: '面试题', link: '/more/interview/' },
    { text: '小工具', link: '/more/hodgepodge/' },
    { text: 'VuePress1.x 官网', link: 'https://v1.vuepress.vuejs.org/zh/' },
  ]}
];