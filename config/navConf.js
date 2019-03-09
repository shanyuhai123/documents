module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: '基础', items: [
    { text: 'Algorithm', link: '/base/algorithm/' },
    { text: 'Interview', link: '/base/interview/' },
    { text: 'Clean', link: '/base/clean/' },
    { text: 'Git', link: '/base/git/' },
  ]},
  { text: '系统', items: [
    { text: 'Manjaro', link: '/os/manjaro/' },
    { text: 'Windows', link: '/os/windows/' },
    { text: 'CentOS', link: '/os/centos/' },
  ]},
  {
    text: '开发',
    items: [
      { text: 'FrontEnd', items: [
        { text: 'JavaScript', link: '/FrontEnd/javascript/' },
        { text: 'CSS', link: '/FrontEnd/css/' },
        { text: 'Webpack', link: '/FrontEnd/webpack/' },
        { text: 'Nodejs', link: '/FrontEnd/nodejs/' },
      ]},
      { text: 'BackEnd', items: [
        { text: 'Koa', link: '/BackEnd/koa/' },
        { text: 'MongoDB', link: '/BackEnd/mongodb/' },
        { text: 'Nginx', link: '/BackEnd/nginx/' },
      ] },
    ]
  },
  { text: '更多', items: [
    { text: '特性', link: '/more/features/' },
    { text: '服务', link: '/more/services/' },
    { text: '源码阅读', link: '/source-reading/' },
    { text: 'RESUME', link: 'http://resume.shanyuhai.top' },
  ]},
];