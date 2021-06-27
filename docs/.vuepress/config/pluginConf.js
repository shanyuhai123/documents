const moment = require('moment');
require('dotenv').config();

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
    'ga': process.env.GOOGLE_GA
  },
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    title: {
      mode: "uppercase",
      map: {
        "/frontend/javascript/": "JS 基础",
      }
    },
    collapse: {
      collapseList: ["/frontend/javascript/"]
    }
  }
};