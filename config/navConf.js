module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: '系统', items: [
    { text: 'Manjaro', link: '/os/manjaro/' },
    { text: 'Windows', link: '/os/windows/' },
    { text: 'Ubuntu', link: '/os/ubuntu/' },
  ]},
  { text: '前端', items: [
    { text: 'JavaScript', link: '/frontend/javascript/' },
    { text: 'CSS', link: 'https://css.shanyuhai.top/' },
    { text: 'Webpack', link: '/frontend/webpack/' },
    { text: 'Nodejs', link: '/frontend/nodejs/' },
  ]},
  { text: '后端', items: [
    { text: 'Koa', link: '/backend/koa/' },
    { text: 'MongoDB', link: '/backend/mongodb/' },
    { text: 'Nginx', link: '/backend/nginx/' },
  ]},
  { text: '开发工具', items: [
    { text: 'Git', link: '/tools/git/' },
    { text: 'Github', link: '/tools/github/' },
  ]},
  { text: '更多', items: [
    { text: '算法', link: '/more/algorithm/' },
    { text: '面试题', link: '/more/interview/' },
    { text: '风格指南', link: '/more/clean/' },
    { text: 'VuePress1.x 官网', link: 'https://v1.vuepress.vuejs.org/zh/' },
  ]}
];