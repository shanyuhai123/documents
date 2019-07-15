const getFilenames = require('./syh-vuepress-getFilenames.js');

getFilenames({
  DOCSPATH: '/home/shanyuhai/Amusement/documents/docs',
  TARGETDIRS: ["BackEnd", "Base", "FrontEnd", "/guide", "OS"],
  OUTPUTPATH: '/home/shanyuhai/Amusement/documents/config'
});