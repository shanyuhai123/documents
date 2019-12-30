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
    transformer: (timestamp) => {
      moment.locale('zh-CN')
      const isBefore30D = moment(timestamp).isBefore(moment().subtract(30, 'days'), 'day');
      return isBefore30D ? moment(timestamp).format(' YYYY年 MM月 DD日 HH:mm:ss') : moment(timestamp).fromNow();
    }
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase"
  }
};