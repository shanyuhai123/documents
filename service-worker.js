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
    "revision": "dd17b2736426d9b0da83cccb44685ac3"
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
    "url": "assets/js/10.440f1cc6.js",
    "revision": "eaad01e2886b86a5ac1161012d27cbf5"
  },
  {
    "url": "assets/js/11.01fd4a36.js",
    "revision": "abe36ad43e7374d4ba0a6cff4cf8f787"
  },
  {
    "url": "assets/js/12.17fc6827.js",
    "revision": "ed38c223ca53c63bebdb4312cd736b39"
  },
  {
    "url": "assets/js/13.2aabbfc3.js",
    "revision": "391a4649bf654c6785714b5412e6ca92"
  },
  {
    "url": "assets/js/14.34a28094.js",
    "revision": "1c3370b3e53844db209846075baa7c95"
  },
  {
    "url": "assets/js/15.43d895e9.js",
    "revision": "eea5f9c8bc709975a61be9c255996f26"
  },
  {
    "url": "assets/js/16.19746d91.js",
    "revision": "20cc8e4a7e46326fb26f7467b147794e"
  },
  {
    "url": "assets/js/17.cc55e0fa.js",
    "revision": "b2705971c9fe57fdf59c21f790fd1a98"
  },
  {
    "url": "assets/js/18.596d5d44.js",
    "revision": "a0359e2f56cb8b351d85f178615afbc7"
  },
  {
    "url": "assets/js/19.6b5b4916.js",
    "revision": "c4ea69b6d20d097238c2b2cde987f5f3"
  },
  {
    "url": "assets/js/20.e0cf7551.js",
    "revision": "9b435a32bf956b8996ad284142d6c515"
  },
  {
    "url": "assets/js/21.8584e361.js",
    "revision": "c8bceb4afb061f9f023f412a13528f02"
  },
  {
    "url": "assets/js/22.56b86907.js",
    "revision": "170e3d7a274afbc6786644ebe7bdfbf8"
  },
  {
    "url": "assets/js/23.85b9acb4.js",
    "revision": "ad7abc13cff92854624fca28c56ef325"
  },
  {
    "url": "assets/js/24.562d0557.js",
    "revision": "b297494d3e26987c21633f386fcb40ea"
  },
  {
    "url": "assets/js/25.d5c84dd4.js",
    "revision": "10852ef70ce74fc273c880af00b89e8f"
  },
  {
    "url": "assets/js/26.855b7d9b.js",
    "revision": "f104c1b9388ec45519bc5ac50a042270"
  },
  {
    "url": "assets/js/27.36b975d6.js",
    "revision": "62025a64e7e6c59f3fa10067e21e478e"
  },
  {
    "url": "assets/js/28.6044967d.js",
    "revision": "c04c83f0895cc7dbf250d5e82d41d52e"
  },
  {
    "url": "assets/js/29.c702b2e5.js",
    "revision": "3b712f01c89fe92be1f2c490488a25f8"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.9db994c7.js",
    "revision": "2331e71f0b3e191bb7c0875b3b3200a2"
  },
  {
    "url": "assets/js/31.4fd84f69.js",
    "revision": "79a69a32e0aa84628ed92e5c58bef1c7"
  },
  {
    "url": "assets/js/32.37405df1.js",
    "revision": "7dc5f42ec06b62b4083c372ba32bc66c"
  },
  {
    "url": "assets/js/33.4c28361b.js",
    "revision": "88edbb6a9e71b1825e4e264136cbe037"
  },
  {
    "url": "assets/js/34.f4a957b8.js",
    "revision": "b65dbcfd63900211a5f083624eefe7c9"
  },
  {
    "url": "assets/js/35.525180e3.js",
    "revision": "3bb0d89461672c1527cda0160272a5de"
  },
  {
    "url": "assets/js/36.0f1ce9bc.js",
    "revision": "039a0ca44e73f0ecbde6bc0a19a446bd"
  },
  {
    "url": "assets/js/37.59ccaeea.js",
    "revision": "edb42570e4e6e3630458a66b560fd90b"
  },
  {
    "url": "assets/js/38.55312654.js",
    "revision": "1562b7b05f02077ceb0ab767ceab1630"
  },
  {
    "url": "assets/js/39.f9547e49.js",
    "revision": "0db3d2ab52a136c898ae47cf2ecf0122"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.d4aaf541.js",
    "revision": "b17e18885bf7ec4d85915103a9b87b5d"
  },
  {
    "url": "assets/js/41.87eb42a6.js",
    "revision": "4a44dea9f0cae5a04cdc646c00ab90b1"
  },
  {
    "url": "assets/js/42.069b346b.js",
    "revision": "2fa0db8ccfb909349c0bc05106f7664e"
  },
  {
    "url": "assets/js/43.8f06fb42.js",
    "revision": "fbee13060749be426450bffce6e922f6"
  },
  {
    "url": "assets/js/44.31467766.js",
    "revision": "055e55fcae28743595c7bddafb3b84d8"
  },
  {
    "url": "assets/js/45.05442c9c.js",
    "revision": "17ad55f11bffb1fd8984dc71c849f6bf"
  },
  {
    "url": "assets/js/46.891bbd44.js",
    "revision": "f4af3818b07637d5b94889d913458b49"
  },
  {
    "url": "assets/js/47.e10fbfce.js",
    "revision": "ebf38e62f88aca1826f8d21de47e4a3a"
  },
  {
    "url": "assets/js/48.2cde7933.js",
    "revision": "d4f1f33fb66c86c43d1c09a7392e1001"
  },
  {
    "url": "assets/js/49.26970b3b.js",
    "revision": "8e44b0b5298057e45505c20b2bbda961"
  },
  {
    "url": "assets/js/5.881b9557.js",
    "revision": "32a7deb43225deea48b2aaeea87dee2f"
  },
  {
    "url": "assets/js/50.e7f7ac4e.js",
    "revision": "d92be36b132a4b8e02af408bfddb10db"
  },
  {
    "url": "assets/js/51.fbb9a670.js",
    "revision": "af572dd64de5e02a1b1dd22a21bd584c"
  },
  {
    "url": "assets/js/52.1923365a.js",
    "revision": "b2b954ea9933b10e510a82f7b6d832f9"
  },
  {
    "url": "assets/js/53.fc9acfb2.js",
    "revision": "d32b326aee97cfda6832389f5f1c7f0a"
  },
  {
    "url": "assets/js/54.86a4f7b3.js",
    "revision": "c74afb34e69bc09dddd77a351361f906"
  },
  {
    "url": "assets/js/55.73c9a95e.js",
    "revision": "0a9f22391283495f50976aeae76153e1"
  },
  {
    "url": "assets/js/56.7e3cdde7.js",
    "revision": "a8205c46d5e3aa88bfe257b59a48bd45"
  },
  {
    "url": "assets/js/57.18464789.js",
    "revision": "9b2a370d2d40244b68ea6a365abd0895"
  },
  {
    "url": "assets/js/58.0411c59a.js",
    "revision": "52b89c63acaa7d332b47b1d45bdd6ed6"
  },
  {
    "url": "assets/js/59.45c81f6f.js",
    "revision": "1c6d93f4dd9e82a09247f1eb66bc8f2f"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.8598f07c.js",
    "revision": "88f890430f2a2b2c000e4c4841c89c0f"
  },
  {
    "url": "assets/js/61.93c4f956.js",
    "revision": "b6f6945f43873d53ba34ed8a481bd829"
  },
  {
    "url": "assets/js/7.d72185e1.js",
    "revision": "85dd857690f79d7f03db75c9c71bd5c3"
  },
  {
    "url": "assets/js/8.5396c4d5.js",
    "revision": "8eb3b461099607f39accda4670e4a929"
  },
  {
    "url": "assets/js/9.60b709bc.js",
    "revision": "ea975a7e51638ac5a35b5cfbd54a11f9"
  },
  {
    "url": "assets/js/app.12641f32.js",
    "revision": "bf2903088d4a9a20d447b977bfef140d"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "edffd5805a4ea65b942c9a44a857b9fa"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "0466c40ea3d0b80c46f31ee026494b80"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "4fe102bd71b89b3b6e513d8132c50ca2"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "33e7913c8b000bfa5c861da90b7ee347"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "292bf9fd876aa88d7f27a205ae8f3d5d"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "2af970824f71624ab8bdbb843ef2a9a3"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "186420960b268ca8d4c971616d81b360"
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
    "revision": "d3aa3067178616f2c65d672a29cfed8a"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "53ad8b27382e8750d283c565b49a5498"
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
    "revision": "c21b3b29c85bb4a08c4fdd4592c4df84"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "92f21028f537366ddd3beb76db073d16"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "dba1e86074d276ffdb3677e1ab34ce52"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "114078243f0a8f00d7a0bf63992a4ba3"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "ecaab1da20f86a0bae7c4e2c1bd96663"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "847f6e9673c94e5416ec7c2adac0197f"
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
    "revision": "2763b4cf20742383ba1bd396a392ecaa"
  },
  {
    "url": "guide/index.html",
    "revision": "c9c9a0df7cf1159b7e492d725728bafc"
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
    "revision": "ae733a6a6aa010b8d4f6b4428452e19c"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "68cfbe60a6535d30bac6979d05c58195"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "6e9239740bea5eca717c4f4943b23371"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "4f2e5ca6cfcf90bd4b2c9837af65021b"
  },
  {
    "url": "more/clean/index.html",
    "revision": "e0f99a44744c15e147f7541987427887"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "02486751761668f12be2974406e44537"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "125c55b71488a107636f168e6710f21f"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "6468d0a0ecc9ef5e636333f35c815730"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "e4c8829e340547355d35bbae30aa3bc5"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "d0a0f1e99aacdc8ca3d9d7068d9cc0bd"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "5cee6d061fd68f3ddb0f00707ecff36c"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "74a62f70ad4028a34fb5a4a638f5178b"
  },
  {
    "url": "more/interview/index.html",
    "revision": "ad8ecba003a68b52999c5b703d67b296"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "81bbf2ca8a8065e9afa8f0b71b3745a3"
  },
  {
    "url": "os/linux/index.html",
    "revision": "39822afe1d0f4dd42d340c6870e9fa5d"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "1fdbfaa341a70119aba3656bf7ab3408"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "c3180769d9d1b49273126745baf774b3"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "19ea30178dc483c8909dee21924e115b"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "b09644ffca48a0aee832e3a2ec3380b7"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "1034035616307af96e1ef7ca9df73381"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "00969539b3e79c8063ad1926166fec7a"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "0de457efc09dd8de1878302a636d77e5"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "70ee1da1af192bf16f5196d4d29c7d34"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "f1e23eeb56bbca5545c9d54343e5646c"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "11002aefa220a4998655cd0cebe33515"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "6b71242dfceda8af6d7676b97f8bcab1"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "8c8a8af694b9eae10983b013312cbaef"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "6e86eb189271786317678d4a441c4adf"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "3ab7d87a02b5e7d37c09d8f1870e8e4b"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "447267381a7d9ddc6c81ce4e4d135cea"
  },
  {
    "url": "tools/git/index.html",
    "revision": "faa076dad18783b981e3f41941adaada"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "681f97f5922db967cd8b3b4947590511"
  },
  {
    "url": "tools/github/index.html",
    "revision": "81cb5728e824d0cc229801ba918a2541"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d018b00381e869444e3e79a85e411099"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "3956ffb56898130af238c02080a4af7e"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "b34445ac9785bdee3b7ff8b95c8f2322"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "79e103888c9ab2ca48ef266742486966"
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
