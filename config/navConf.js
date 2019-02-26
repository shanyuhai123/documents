module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: '基础', items: [
    { text: 'Algorithm', link: '/base/algorithm/' },
    { text: 'Interview', link: '/base/interview/' },
    { text: 'Git', link: '/base/git/' },
  ]},
  { text: '系统', items: [
    { text: 'Windows', link: '/os/windows/' },
    { text: 'Manjaro', link: '/os/manjaro/' },
  ]},
  {
    text: '开发',
    items: [
      { text: 'FrontEnd', items: [
        { text: 'JavaScript', link: '/FrontEnd/javascript/' },
        { text: 'CSS', link: '/FrontEnd/css/' },
        { text: 'Webpack', link: '/FrontEnd/webpack/' },
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
    { text: '待办', link: '/more/todos/' },
    { text: '源码阅读', link: '/source-reading/' },
    { text: 'RESUME', link: 'http://resume.shanyuhai.top' },
  ]},
];