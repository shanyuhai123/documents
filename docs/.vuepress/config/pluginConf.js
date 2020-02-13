const moment = require('moment');
const secretKeyConf = require('./secretKeyConf.js');

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': secretKeyConf.ga
  },
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format(' YYYY 年 MM 月 DD 日 HH:mm:ss')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase"
  }
};