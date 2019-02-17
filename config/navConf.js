module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: '基础', items: [
    { text: 'Algorithm', link: '/algorithm/' },
    { text: 'Interview', link: '/interview/' },
  ]},
  { text: '系统', items: [
    { text: 'Windows', link: '/windows/' },
    { text: 'Manjaro', link: '/manjaro/' },
  ]},
  {
    text: '开发',
    items: [
      { text: 'FrontEnd', items: [
        { text: 'JavaScript', link: '/javascript/' },
        { text: 'CSS', link: '/css/' },
      ]},
      { text: 'BackEnd', items: [
        { text: 'Koa', link: '/koa/' },
        { text: 'MongoDB', link: '/mongodb/' },
      ] },
    ]
  },
  { text: '实验', items: [
    { text: '特性', link: '/features/' },
    { text: '待办', link: '/todos/' },
    { text: '源码阅读', link: '/source-reading/' },
  ]},
];