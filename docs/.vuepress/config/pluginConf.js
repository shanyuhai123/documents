const moment = require('moment');
const secretKeyConf = require('./secretKeyConf.js');

moment.locale("zh-cn");

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
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    titleMap: {
      javascript: "JS 基础",
    },
    collapseList: [
      "/frontend/javascript/"
    ]
  }
};