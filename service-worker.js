/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d1f44e234583dea101e5416b915a61d3"
  },
  {
    "url": "app.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "64e7898cfb3772c29adab4d98c93e261"
  },
  {
    "url": "assets/css/0.styles.b3afae91.css",
    "revision": "41b4bce5fca5323cf675768bd241bc9d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.79276b18.js",
    "revision": "d334e07401cb5ab70ff4b735ce0d5fa3"
  },
  {
    "url": "assets/js/11.6e078e61.js",
    "revision": "067eada8079b9f058ea86704964b0019"
  },
  {
    "url": "assets/js/12.b8a42daf.js",
    "revision": "cf4d5c03b8b7410771a0b6fa7c4b6ef7"
  },
  {
    "url": "assets/js/13.d96e5bca.js",
    "revision": "5ea96fa9254d24d9fcfcd97160cf13f1"
  },
  {
    "url": "assets/js/14.5967bd5c.js",
    "revision": "f5baf0b0ea44b20f2b56a27536691fe3"
  },
  {
    "url": "assets/js/15.11e7b7ab.js",
    "revision": "d8e1aed811bb03583adad23702b3339d"
  },
  {
    "url": "assets/js/16.530e234a.js",
    "revision": "ca6c46e4b7cc53f0d1cdbcb15a22375a"
  },
  {
    "url": "assets/js/17.b132399a.js",
    "revision": "61286477567be5792bbcc72203a03152"
  },
  {
    "url": "assets/js/18.0dba3587.js",
    "revision": "ec1d8fe5c75071daeb81fa70c9f869fe"
  },
  {
    "url": "assets/js/19.1bd523a8.js",
    "revision": "c51eaa27b59e138bff9cb80a53e98349"
  },
  {
    "url": "assets/js/20.d4a54d9a.js",
    "revision": "bb71769d5e9c1166a3cb10f6fec94214"
  },
  {
    "url": "assets/js/21.41a9fbe4.js",
    "revision": "908b8334a04030635182402c2144e685"
  },
  {
    "url": "assets/js/22.ec9070c2.js",
    "revision": "9827f4cd5bc6ef9b0b7030ec4c1d3ed3"
  },
  {
    "url": "assets/js/23.08fb6b1f.js",
    "revision": "cd1a60dc462e02c8173a083c57737e27"
  },
  {
    "url": "assets/js/24.533b363d.js",
    "revision": "4a186e3877388493e12bf10084e71371"
  },
  {
    "url": "assets/js/25.282c6646.js",
    "revision": "be074cd81f933db4d45b01bdfd0765e2"
  },
  {
    "url": "assets/js/26.32eb9b1a.js",
    "revision": "d5faab1da5231d6d509931f70b602007"
  },
  {
    "url": "assets/js/27.9404b4a8.js",
    "revision": "8ca8b4cfacc3cdbd1f727d2d093724e5"
  },
  {
    "url": "assets/js/28.4d2cb599.js",
    "revision": "57109019cd4ce5123444d71a67b906be"
  },
  {
    "url": "assets/js/29.3235521d.js",
    "revision": "76a039436d54ece887a0657dd304a92c"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.7283e14b.js",
    "revision": "a8041cef4d8b07a4be3a61fa45d45b43"
  },
  {
    "url": "assets/js/31.517dfbf2.js",
    "revision": "5d3f9d9e690d36e41f4b721dbd1581b6"
  },
  {
    "url": "assets/js/32.074649ad.js",
    "revision": "62fd5bc7144eb715fd79cef8e9fef5e0"
  },
  {
    "url": "assets/js/33.30ee37e0.js",
    "revision": "195f94ff0e9f99abe4bc9a4ef8be4d72"
  },
  {
    "url": "assets/js/34.1effb3b2.js",
    "revision": "9b99655e02e1f5bfe50d68194e050e49"
  },
  {
    "url": "assets/js/35.dd125fe8.js",
    "revision": "6ddd3d597b2c4a817bae6ccb888cf379"
  },
  {
    "url": "assets/js/36.2978a324.js",
    "revision": "9cbbb3b1cc9a4395288944366202f40a"
  },
  {
    "url": "assets/js/37.38beca23.js",
    "revision": "e2535f3c1b6efa3bc77a38c31b480793"
  },
  {
    "url": "assets/js/38.1569c2ec.js",
    "revision": "dd7e66128a913d650e7904dfe4e4a8b8"
  },
  {
    "url": "assets/js/39.bede6a12.js",
    "revision": "8058f1d0544e5e3adbdca989b6fef899"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.16ec019e.js",
    "revision": "4cb239160786dd7f4450c63c17f604a3"
  },
  {
    "url": "assets/js/41.1ef15134.js",
    "revision": "c4cfee4a9b2068fbe55b8f49aefc1e3f"
  },
  {
    "url": "assets/js/42.d236036a.js",
    "revision": "a6110d5bda4b2d5aef8db71124860f60"
  },
  {
    "url": "assets/js/43.7f201275.js",
    "revision": "f57b1069978d7e3ca88be1cfcd8e29ec"
  },
  {
    "url": "assets/js/44.f9eeeae2.js",
    "revision": "8b3acc239787ab317394b7963e758171"
  },
  {
    "url": "assets/js/45.1ed5808e.js",
    "revision": "df118c4e262839b749f8b29cc9bf57a4"
  },
  {
    "url": "assets/js/46.e89f330d.js",
    "revision": "2d0b9587e83bb73997aee07b3f5c8357"
  },
  {
    "url": "assets/js/47.e3ec6c1b.js",
    "revision": "86df465767d69fd063475308848a3193"
  },
  {
    "url": "assets/js/48.028bad7e.js",
    "revision": "7aed95d15a138d8405a6e49cfaacbd46"
  },
  {
    "url": "assets/js/49.0b2c6787.js",
    "revision": "12ae61e3fa1192a05a0dcb77aa4979f2"
  },
  {
    "url": "assets/js/5.c33cb045.js",
    "revision": "6c4724bffe513ebc6ba5612d54ac7ef8"
  },
  {
    "url": "assets/js/50.a5f41969.js",
    "revision": "062411ec0a444e1912e30d1317a7d2bf"
  },
  {
    "url": "assets/js/51.c807efc2.js",
    "revision": "f9308f413985cb677d9122acc7481aec"
  },
  {
    "url": "assets/js/52.a82e246c.js",
    "revision": "1b4c41bdbbf405f22bc138ca1829f585"
  },
  {
    "url": "assets/js/53.2809809e.js",
    "revision": "ad0ca41c9430f8cd4159a3220a1a5518"
  },
  {
    "url": "assets/js/54.2929841d.js",
    "revision": "8fde82309054440dc768ca8647456912"
  },
  {
    "url": "assets/js/55.75f4da62.js",
    "revision": "74dddfbf43eff3256cdd0ddf10f8a5c8"
  },
  {
    "url": "assets/js/56.99b4537d.js",
    "revision": "54cef20bb16acf9107556c122de0614b"
  },
  {
    "url": "assets/js/57.c9894fd0.js",
    "revision": "131f143a8ea32a6f2f0a12239ab4c29c"
  },
  {
    "url": "assets/js/58.9cf22f17.js",
    "revision": "28613acec28f7482d0ac19882e39f8de"
  },
  {
    "url": "assets/js/59.69999ed5.js",
    "revision": "5c986725c596efd864acad3d79006694"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/60.af74c3d4.js",
    "revision": "2a0f13b144429b881c8fee72b7bfffca"
  },
  {
    "url": "assets/js/61.34b5c51f.js",
    "revision": "bd1fbf7c2c7b6e5318f56efc912663ec"
  },
  {
    "url": "assets/js/62.df5113ee.js",
    "revision": "311ceaa3530d9b826f21e1e933888258"
  },
  {
    "url": "assets/js/63.43ca150d.js",
    "revision": "cafe0063e51545e5e28badf15c2c8aa0"
  },
  {
    "url": "assets/js/64.31215eba.js",
    "revision": "f0a04421a9765545b79e5001c1f47bd2"
  },
  {
    "url": "assets/js/7.a29456f2.js",
    "revision": "0e8f778a06af930f85dd500e53afd9ef"
  },
  {
    "url": "assets/js/8.585f6b1a.js",
    "revision": "b5cd28118d3e11cbef12a201b27740e9"
  },
  {
    "url": "assets/js/9.75331bf8.js",
    "revision": "06a89b902757c8b2076a4b36ca2f054c"
  },
  {
    "url": "assets/js/app.52841af9.js",
    "revision": "f32d10545d9a20b47fbc0d166aa9e01e"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "0fb526145e867f8d92a1edeba0959f2e"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4c6c472a9f8659f0f2199d0d986d4598"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "c7bd5457a3eb1acb45117113baa6a5d0"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "107f2ae6f1dc09f70d17fe5cb2d2c806"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "8d3c8390f7c45edcbbb003d569d2f2e6"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "bb6de59c1260d45aad36d92ae3235f88"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "610e7d7a6e6e841871b1f9da3a066b97"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "0632cc1706804fe5487cf7e7ab57c04a"
  },
  {
    "url": "frontend/javascript/01-let-and-const.html",
    "revision": "dc2e4b1c44e74ac9dbee24c136ce8259"
  },
  {
    "url": "frontend/javascript/02-deconstruction-assignment-of-variables.html",
    "revision": "38ae4dbcd441aa255e06f224212f7ae4"
  },
  {
    "url": "frontend/javascript/03-string-extension.html",
    "revision": "68652841faaf597816b4761c87ef63c8"
  },
  {
    "url": "frontend/javascript/04-regular-extension.html",
    "revision": "1fb24a98e02f36c2bfca06a38ab80649"
  },
  {
    "url": "frontend/javascript/05-number-extension.html",
    "revision": "a01d0ceb87d466dc9b741d583f983cc9"
  },
  {
    "url": "frontend/javascript/06-function-extension.html",
    "revision": "ba1804db446d1e02234b818fdc6f400b"
  },
  {
    "url": "frontend/javascript/07-array-extension.html",
    "revision": "b4dac41b13b4df27256b78a6eac31c52"
  },
  {
    "url": "frontend/javascript/08-object-extension.html",
    "revision": "6c533b146d4f886e69d4baae99294422"
  },
  {
    "url": "frontend/javascript/09-new-methods-for-objects.html",
    "revision": "28b82b726437952bcfd81a810785825e"
  },
  {
    "url": "frontend/javascript/11-set-and-map-data-structure.html",
    "revision": "daebc33a615e4002dcb02dc515120be3"
  },
  {
    "url": "frontend/javascript/14-promise-object.html",
    "revision": "c5520245f81b1eda39154c667dd37784"
  },
  {
    "url": "frontend/javascript/18-async-function.html",
    "revision": "da0966224ae35d9c1a0901d76cbb384c"
  },
  {
    "url": "frontend/javascript/19-basic-syntax-of-class.html",
    "revision": "161c823f045ec9749c2fa031f079830b"
  },
  {
    "url": "frontend/javascript/20-class-inheritance.html",
    "revision": "b74587e0f8cb5988ba87c3e51fee0dae"
  },
  {
    "url": "FrontEnd/javascript/es6_20190112123602.png",
    "revision": "75d98604fc12a843008c3cbedb4536fc"
  },
  {
    "url": "FrontEnd/javascript/es6_20190112124206.png",
    "revision": "7bb959a1492907894f9e4df6daaa68cc"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "b6e89fa52eddd704155959869eb9e0d4"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "53b925512674a41f0165e18c1e9c6a4e"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "9c4903f4d67e77ac25adef4968c5e113"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "cf2ea70101bbdca1101fd6a84884ae75"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "e9e1817b2003ccba82f9cf3c718379b0"
  },
  {
    "url": "git/git_20190217234850-1550418619928.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "git/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "guide/about-me.html",
    "revision": "1a2b531fa391fc724ca94bbc62845c88"
  },
  {
    "url": "guide/index.html",
    "revision": "971ff27c0ec2b038db7be9e751dea81a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "ba8adf3512b4745c910f0d2428f18ff8"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "caf3fa68eb7536fcf76c4ae2186da40e"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "60e4982a750b5eb464c15fef4abcc655"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "523c0fb8f57f93b468e0ed78ecdf86e8"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c38228266f233432c21c871626ffaacd"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7f78124d42ce759625665a6b36ecba5b"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "0f3cc531ed40a48f2dfaac0c236c173d"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "220c53a703dfabc0bdbfa56063264a00"
  },
  {
    "url": "index.html",
    "revision": "81715724aba897e8f61dd89ccff8cc36"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "e5856e859fda01f7a268d8d19e0acc74"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "346ee608ceff0bb74a8fdb47b48888c2"
  },
  {
    "url": "more/clean/index.html",
    "revision": "b3d979bec1db39c5a529d9ba5488326e"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "30c76bbf3010001923d70dbfab4d259f"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "e3fe417687dabebf297de6fd9fc84b8b"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "529f7054c56bc8f7d911b47a25cdcb87"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "5d52f87beb612f5fc30098d277e8f537"
  },
  {
    "url": "more/interview/index.html",
    "revision": "a67ca6ea65b54f4d38efcf92c771199f"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "bbcbc56fcfbf3be791a41e1ecfbd2f74"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "7b902f724736433a28646d4e7ac9b10a"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "13001ea2dd72dd54f957c4f706bf6565"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "a53445543b74e7e2d6719c0efe4415ff"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "aaea4df7ab5fb745e4dedf3379cf0879"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/01-add-user.html",
    "revision": "0b2e3460499e0609fc95855445af98fe"
  },
  {
    "url": "os/ubuntu/02-login-with-rsa-key.html",
    "revision": "46fe25d402be8e75a2cb198e043d1857"
  },
  {
    "url": "os/ubuntu/03-upload-file-to-server.html",
    "revision": "d622cefbd98daa64b16a3a25daaa2d96"
  },
  {
    "url": "os/ubuntu/04-clone-project-to-server.html",
    "revision": "21465b16386cad96bd0432a22e6a635d"
  },
  {
    "url": "os/ubuntu/05-fix-date.html",
    "revision": "00512fb8470ec10cd32c300d52c007c9"
  },
  {
    "url": "os/ubuntu/06-systemd-introduction.html",
    "revision": "652496a85f7dd8c0cf19ffcbd4a69e12"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "a05b9b64a478bfa8d06976bc2115298d"
  },
  {
    "url": "os/windows/index.html",
    "revision": "9019f95039d18e00f88bf1957b305eb4"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "769b08548cb73e0de29fd72e76cc38b1"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "6444fe6a097952da1fd2a5920f8c5473"
  },
  {
    "url": "tools/git/03-generate-ssh-key.html",
    "revision": "aa5a25dd5756048bc37ebd7c101d97f2"
  },
  {
    "url": "tools/git/04-switch-multiple-github-accounts.html",
    "revision": "20d7d95820221524540cbb5db3c28932"
  },
  {
    "url": "tools/git/05-download-huge-project-from-github.html",
    "revision": "ba8478a0dbb57a4ad27edfc51da48223"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3fa38d4f7fe25253a7d117bded4d2272"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
