module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: '计算机', link: '/computer/' },
  { text: '系统', items: [
    { text: 'Linux', link: '/os/linux/' },
    { text: 'Manjaro', link: '/os/manjaro/' },
    { text: 'Ubuntu', link: '/os/ubuntu/' },
    { text: 'CentOS', link: '/os/centos/' },
  ]},
  { text: '前端', items: [
    { text: 'JavaScript', link: '/frontend/javascript/' },
    { text: 'CSS', link: 'https://css.shanyuhai.top/' },
    { text: 'Webpack', link: '/frontend/webpack/' },
    { text: 'Nodejs', link: '/frontend/nodejs/' },
    { text: 'Utils', link: '/frontend/utils/' },
  ]},
  { text: '后端', items: [
    { text: 'Koa', link: '/backend/koa/' },
    { text: 'MongoDB', link: '/backend/mongodb/' },
    { text: 'Nginx', link: '/backend/nginx/' },
  ]},
  { text: '开发工具', items: [
    { text: 'Git', link: '/tools/git/' },
    { text: 'Github', link: '/tools/github/' },
    { text: 'VSCode', link: '/tools/vscode/' },
    { text: 'Chrome Developer tools', link: '/tools/chrome/' },
  ]},
  { text: '更多', items: [
    { text: '算法', link: '/more/algorithm/' },
    { text: '面试题', link: '/more/interview/' },
    { text: '大杂烩', link: '/more/hodgepodge/' },
    { text: '书签', link: '/more/bookmark/' },
    { text: '风格指南', link: '/more/clean/' },
    { text: 'VuePress1.x 官网', link: 'https://v1.vuepress.vuejs.org/zh/' },
  ]}
];