const getFilenames = require('./syh-vuepress-getFilenames.js');

getFilenames({
  DOCSPATH: '/home/shanyuhai/Amusement/documents/docs',
  TARGETDIRS: ["backend", "more", "frontend", "/guide", "tools", "os"],
  OUTPUTPATH: '/home/shanyuhai/Amusement/documents/config'
});