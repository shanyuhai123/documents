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
    "revision": "479929d55253a91c77dacc15b9c25c45"
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
    "url": "assets/css/0.styles.41b9b6d4.css",
    "revision": "41b4bce5fca5323cf675768bd241bc9d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c48e9eb7.js",
    "revision": "1d8afa98bd51dc11e5cd8e817b416c09"
  },
  {
    "url": "assets/js/11.fb76920c.js",
    "revision": "9f7270dd65230c9e93e7960e140835c6"
  },
  {
    "url": "assets/js/12.40c661cb.js",
    "revision": "fa93fb25db75c9a5bd99a204adb124e1"
  },
  {
    "url": "assets/js/13.46bcb0c2.js",
    "revision": "ef68b6ec8220a60996d2253124edf3fc"
  },
  {
    "url": "assets/js/14.4e3edac8.js",
    "revision": "66c6640989eeeceace74cef98ab1d5b6"
  },
  {
    "url": "assets/js/15.7be96a95.js",
    "revision": "b035f7c1e95e801efda8f3f358ef562a"
  },
  {
    "url": "assets/js/16.1e646840.js",
    "revision": "2a172684e1765c33a7bc3c841f5762fa"
  },
  {
    "url": "assets/js/17.1c72bf38.js",
    "revision": "e907f72cdf4067bf8cf2b0ca2a4bf3b4"
  },
  {
    "url": "assets/js/18.c75760c1.js",
    "revision": "b641d8c3726b84c703c53f8dff339d50"
  },
  {
    "url": "assets/js/19.c09ad138.js",
    "revision": "13d432cb34814ab22ed39f490f9d8e4e"
  },
  {
    "url": "assets/js/20.97f752ba.js",
    "revision": "9fc48fd64be34fddf54dd240bb2e6be4"
  },
  {
    "url": "assets/js/21.88f7eb63.js",
    "revision": "6f9b1203ed1b21c4fc50c0dcc7e4177d"
  },
  {
    "url": "assets/js/22.01bdc0aa.js",
    "revision": "f12c98980c722e3a6868ff14f739ec97"
  },
  {
    "url": "assets/js/23.2ad4df28.js",
    "revision": "7a7cb14b50f69b95a1f2e9a22fc780b4"
  },
  {
    "url": "assets/js/24.161d0d82.js",
    "revision": "2fe54ffa63fd0d3d6e651755beded897"
  },
  {
    "url": "assets/js/25.890c28b5.js",
    "revision": "490f537823a0abe8a9677cbb9fbeb480"
  },
  {
    "url": "assets/js/26.cf0a4295.js",
    "revision": "d68db41d8c7584384f54cdee9f6850ac"
  },
  {
    "url": "assets/js/27.8e887c33.js",
    "revision": "06339ca8c95d76021f8a237e1e2eead5"
  },
  {
    "url": "assets/js/28.8b11f988.js",
    "revision": "8f8a23a7d045992df2f6605472949d7e"
  },
  {
    "url": "assets/js/29.9701a457.js",
    "revision": "6f1422b7790f7a1f80db98624c8926f0"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.b22aa502.js",
    "revision": "3711ef8b3fa3e51e69d50bbad1b5460a"
  },
  {
    "url": "assets/js/31.2b9196d1.js",
    "revision": "0c7c3ed3b1bdd8aa916982f72759ff08"
  },
  {
    "url": "assets/js/32.68622eb4.js",
    "revision": "8e66b9fb0cef38c24f4feb29987e831d"
  },
  {
    "url": "assets/js/33.1cdb82a1.js",
    "revision": "f4fc5181ed3adf0377b110ece3d83f6a"
  },
  {
    "url": "assets/js/34.21891b6d.js",
    "revision": "9f186fed49f1b67470b70514661299ea"
  },
  {
    "url": "assets/js/35.d82b3727.js",
    "revision": "a67516adbaf2fd3a4736dd1f1d7cee0d"
  },
  {
    "url": "assets/js/36.a5e62c83.js",
    "revision": "19b7ca2cc7bb639d084616be32e845de"
  },
  {
    "url": "assets/js/37.8a6421ef.js",
    "revision": "dd3cbb41d678a77a760b5365417acd9b"
  },
  {
    "url": "assets/js/38.47e595d5.js",
    "revision": "1a6cbd81c6920394028ebd015193866e"
  },
  {
    "url": "assets/js/39.61e0225a.js",
    "revision": "53676c5f95c0c7fbd2e5383c8aa05403"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.5675d745.js",
    "revision": "dee22fbb46ffa16c8c20762262ff4dec"
  },
  {
    "url": "assets/js/41.3887f115.js",
    "revision": "af7187b00efa00165445b95d4df70a53"
  },
  {
    "url": "assets/js/42.45465353.js",
    "revision": "999c31110907c779d1d800e79face676"
  },
  {
    "url": "assets/js/43.ca214d24.js",
    "revision": "5300b5b776242c411fedee5481459067"
  },
  {
    "url": "assets/js/44.05535fc9.js",
    "revision": "b4a8432bb726d8086f0bdce68c2299cf"
  },
  {
    "url": "assets/js/45.036cca53.js",
    "revision": "bafe52cc8e92dfff5fe6c254746d5d60"
  },
  {
    "url": "assets/js/46.29f06ab4.js",
    "revision": "751f3e224f95e6f7bf97f749e766bd1c"
  },
  {
    "url": "assets/js/47.f7823e7f.js",
    "revision": "53ecf6da7761e6f5558f257f84a9f609"
  },
  {
    "url": "assets/js/48.a7012336.js",
    "revision": "04f5c1e2e0e88adf6dc48a7401a860f2"
  },
  {
    "url": "assets/js/49.8af9f67f.js",
    "revision": "e65e5c30ef835c4f3753d94ca89287ba"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.3d364ec9.js",
    "revision": "6f729131f4c028e8950fe24d4f56bcbd"
  },
  {
    "url": "assets/js/51.d2552372.js",
    "revision": "029e8266de75493bbc2f52797ea30fd1"
  },
  {
    "url": "assets/js/52.23c9aa96.js",
    "revision": "0668faff89f9be4433d2c0cd1158edf4"
  },
  {
    "url": "assets/js/53.5d65bc47.js",
    "revision": "8ec59656fb5988502bf1add507d36cb0"
  },
  {
    "url": "assets/js/54.fb1ce77c.js",
    "revision": "f97e4a37d936c0fcbb25edfccf5564c7"
  },
  {
    "url": "assets/js/55.2250c055.js",
    "revision": "9860eed8fb438972e4bddf30c490cf20"
  },
  {
    "url": "assets/js/56.77795f8c.js",
    "revision": "5b52e0b44c0e9cbb090f26261a94551e"
  },
  {
    "url": "assets/js/57.e2f65b08.js",
    "revision": "366fc15cb0cccb6701a044d274f2aa25"
  },
  {
    "url": "assets/js/58.505efe12.js",
    "revision": "214a8b581f299ca89c05b8f275f71973"
  },
  {
    "url": "assets/js/59.7c1ffa98.js",
    "revision": "e157e582174ccb3e6b0fa4072ec552df"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.b6ee39fb.js",
    "revision": "36e6b8a52063d4ce8a55201fa0831ce1"
  },
  {
    "url": "assets/js/61.04fe01d8.js",
    "revision": "74a5f5d165c1f84e01c83cedf18ab369"
  },
  {
    "url": "assets/js/62.a8ad02ee.js",
    "revision": "b50d26e27d4b95f5715a4b87eb04a64d"
  },
  {
    "url": "assets/js/63.61006d17.js",
    "revision": "2be7f4536284e26df93acc78d999cc1b"
  },
  {
    "url": "assets/js/64.adb296e5.js",
    "revision": "54f3cd5b3dd115fd56df3433bc13cc86"
  },
  {
    "url": "assets/js/65.ea7e3787.js",
    "revision": "c52fab42ac05e2e475dc7d4c54b89ba9"
  },
  {
    "url": "assets/js/66.49b838b6.js",
    "revision": "c255f42375a835278e4a498c4ab89396"
  },
  {
    "url": "assets/js/67.7f69862d.js",
    "revision": "90126a35db0dc13d71eb1039de7a991d"
  },
  {
    "url": "assets/js/68.7f22cc53.js",
    "revision": "2e947faaa699f2610fcfd2c905e52cce"
  },
  {
    "url": "assets/js/7.38423a22.js",
    "revision": "986a33a4b7c8e0a2e5d6c52e9f6dd941"
  },
  {
    "url": "assets/js/8.1accd2ee.js",
    "revision": "031b6a020e400cb139da9741f8322475"
  },
  {
    "url": "assets/js/9.98226a0c.js",
    "revision": "ed3a37aa4c6dee5b2ed909b7a20db553"
  },
  {
    "url": "assets/js/app.a45f36f1.js",
    "revision": "e928be42ab187889650f26842c5e691a"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "7df9f32e16d05f1955d9736cc3395c8c"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "7f1931485218278570ccc3bba6567f00"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "84a0b5fd6f89e3e9104e6c0ede33a03e"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "f59f8d043ab7400f287397db935ad422"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "6ac7303bde4489da0ea0443768df7808"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "ec65f27b80a49957011fbb5c12e580c5"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "0469547a5b746d90de4b9465a9995bdc"
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
    "revision": "93914ea45ea8e01a4abf01b71cc17825"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "1278cdd1768513e06700328998f49697"
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
    "revision": "e898b475b47c785be590ace33f05a600"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "ce39d827a360e571784a326020329438"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "779c7b0df49f00a4adae71ebbdbe8634"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "9e66f72f7b38f85f0582fb4c660b256f"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "a2070e011ff06bac5962d7e4251aad21"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "717fccafb176b5a634f8ef9b2b5f43ae"
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
    "revision": "db0b7783dcee4f5818e8a40897d3f9f1"
  },
  {
    "url": "guide/index.html",
    "revision": "a26f4fc9b058cf613abb0e995e2b2b8a"
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
    "revision": "20e8a2f3997419ea56406913914b8858"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "da66148b6c11e087d314419eb4962264"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "bac2c707e4f9039e5e4967505b33c34f"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "db59f3ed75933a4514f926e67c79e96e"
  },
  {
    "url": "more/clean/index.html",
    "revision": "9037e0e4bc6da621161d7d04f2bcac8b"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "209df16a0287aa73ce109b2880be5129"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "77fd3e3a62f5374de7c5a638c16398f7"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "58c48c6d7afd1f47d802b48be1e75eeb"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "c9e69d1540f63dbabe4b8464486d982e"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "585e1ed11d1f7859cdffd8c6251f6c6c"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "37f685ce459abf8499f3070d7e582eec"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "f4375df5c62f333a38fca68893986d90"
  },
  {
    "url": "more/interview/index.html",
    "revision": "f9b270931bf0164e5a6444590ea6ada8"
  },
  {
    "url": "os/centos/index.html",
    "revision": "73cdfc9979f4bae9787ebaabcdc2ea79"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "1f3c8d8629a6bb90e3621efb246c1848"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "e8f05b5643acf09e9ff4ad5dbcc1644c"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "c004347f86c3c2de6846c39520353cbb"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "facb808ff6fef1c619f343b3886c3258"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "23bb87063060bd66112248b618b82882"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "305524801a290257718b092c0b506573"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "d83f30702a44be6a38d8d7666d4fc0b7"
  },
  {
    "url": "os/linux/index.html",
    "revision": "a0e7f222b4ce544da4044c7905d832f1"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "1a425d8f68dea3781747cd90dfa7c9ab"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "b91b42d7571c226381d37a1439284f15"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "7d076dafe49d5ccee527931d731a1dac"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "0a3e130d552a50d0bfa4200101938742"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "17c2e5d3494d3e664f66c773ddaf950e"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "e7302fe95f15ae47ed772313b6b775e5"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "2fb99e452fcbfa785cd3a3312a3cb48c"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "a0c760a6ca18bb5a4951dd7c3ca17012"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "45d71b402795513726320d96a5d5d98f"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "8d8878ce8ee9bd39d898ef3bcc124328"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "451162473f6c567a2c4a8e6d40b50390"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "f30c8a06fe2251cf8e1789c8c4886a2d"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "15dc6362e7d02c61da082fdf94aed509"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "76beaf13338920a554a43070b7588392"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "8feebb42fe648a946b23f33531e20c15"
  },
  {
    "url": "tools/git/index.html",
    "revision": "75cd75b802102f258d3ffdc1dde77718"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "6706f3f1b14f85f9a3fc40a005745a30"
  },
  {
    "url": "tools/github/index.html",
    "revision": "9b7d3029699917b271c3ce391fc626ea"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "65b7a6acd64b6731241e4e37ac0302d4"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "c1f52497f7ea6de963d386ef7d6d3252"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "c44be84d4bb6a5c8618714b36672c615"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "b5ed428816af3783710674d959315a77"
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
