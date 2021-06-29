module.exports = [
  { text: '首页', link: '/' },
  { text: '先导', link: '/guide/' },
  { text: '计算机', link: '/computer/' },
  { text: '基石', items: [
    { text: '数学', link: '/cornerstone/math/' },
  ]},
  { text: '系统', items: [
    { text: 'Linux', link: '/os/linux/' },
    { text: 'Manjaro', link: '/os/manjaro/' },
    { text: 'Ubuntu', link: '/os/ubuntu/' },
    { text: 'CentOS', link: '/os/centos/' },
    { text: 'Kubernetes', link: '/os/kubernetes/' },
  ]},
  { text: '前端', items: [
    { text: 'JavaScript', link: '/frontend/javascript/' },
    { text: 'TypeScript', link: '/frontend/typescript/' },
    { text: 'CSS', link: '/frontend/css/' },
    { text: 'Vue', link: '/frontend/vue/' },
    { text: 'Webpack', link: '/frontend/webpack/' },
    { text: 'Canvas', link: '/frontend/canvas/' },
    { text: 'Flutter', link: '/frontend/flutter/' },
    { text: 'WeApp', link: '/frontend/weapp/' },
    { text: 'D3', link: '/frontend/d3js/' },
    { text: 'Jest', link: '/frontend/jest/' },
    { text: 'Utils', link: '/frontend/utils/' },
  ]},
  { text: '后端', items: [
    { text: 'Nodejs', link: '/backend/nodejs/' },
    { text: 'Nestjs', link: '/backend/nestjs/' },
    { text: 'Golang', link: '/backend/golang/' },
    { text: 'Nginx', link: '/backend/nginx/' },
    { text: 'Traefik', link: '/backend/traefik/' },
    { text: 'MySQL', link: '/backend/mysql/' },
    { text: 'MongoDB', link: '/backend/mongodb/' },
    { text: 'Redis', link: '/backend/redis/' },
    { text: 'Docker', link: '/backend/docker/' },
  ]},
  { text: '算法', items: [
    { text: '排序', link: '/algorithms/sort/' },
    { text: '分而治之', link: '/algorithms/divide-and-conquer/' },
    { text: '动态规划', link: '/algorithms/dynamic-programming/' },
  ]},
  { text: '设计', items: [
    { text: '像素风', link: '/design/pixel/' },
  ]},
  { text: '开发工具', items: [
    { text: 'Git', link: '/tools/git/' },
    { text: 'Github', link: '/tools/github/' },
    { text: 'VSCode', link: '/tools/vscode/' },
    { text: 'Chrome Developer tools', link: '/tools/chrome/' },
    { text: 'Bookmark scripts', link: '/tools/bookmark-scripts/' },
  ]},
  { text: '教程', items: [
    { text: 'Aseprite 安装', link: '/tutorials/aseprite/install-aseprite' },
  ]},
  { text: '更多', items: [
    { text: '导航 🎉', link: '/更多🎉/navigation' },
    { text: 'VuePress 侧边栏插件', link: 'https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/' },
    { text: 'VuePress 官网', link: 'https://vuepress.vuejs.org/zh/' },
  ]}
];