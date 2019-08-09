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
    "revision": "c972a1a3c6bb378455f2b173880f935c"
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
    "url": "assets/js/16.83db8ff9.js",
    "revision": "d3ec07ca3a7a67a65ab2019197ac86a7"
  },
  {
    "url": "assets/js/17.22168e41.js",
    "revision": "9a400807182e6cc9e6f24586801b79e7"
  },
  {
    "url": "assets/js/18.6d3df28c.js",
    "revision": "5802c2b4376d8ad964e0336c55b9ded0"
  },
  {
    "url": "assets/js/19.d1e09ccd.js",
    "revision": "f079bb1f699bbbb6d29568ca5f2eedef"
  },
  {
    "url": "assets/js/20.6800b3a4.js",
    "revision": "c07a10388be561cff7da0fb31d88a478"
  },
  {
    "url": "assets/js/21.233d72a2.js",
    "revision": "a1bf869162940653a3853d713378fe1c"
  },
  {
    "url": "assets/js/22.7aafe18c.js",
    "revision": "ac45bab31edde0a88f631e674ed6de6e"
  },
  {
    "url": "assets/js/23.f88caadd.js",
    "revision": "97bcd9ed59b6771b920f0179a67b133c"
  },
  {
    "url": "assets/js/24.4b5099d8.js",
    "revision": "1786e48d13a8e23c9e589795c451014b"
  },
  {
    "url": "assets/js/25.a4e9aeb5.js",
    "revision": "e679380acb7bd1e4bad536fa9159ca54"
  },
  {
    "url": "assets/js/26.7c9de541.js",
    "revision": "33f2b01b386939c16df380a63e7f3086"
  },
  {
    "url": "assets/js/27.0dd32167.js",
    "revision": "121163fe4da2f5f149d6a42ef403395f"
  },
  {
    "url": "assets/js/28.c070ac4c.js",
    "revision": "d26bf4351fb019496fcbb25f5f014793"
  },
  {
    "url": "assets/js/29.2d5fe826.js",
    "revision": "545d1b0744f2fbb21cff014305f8ca77"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.daba9363.js",
    "revision": "40fc44688f9d3c82c92f20f1e712ee9f"
  },
  {
    "url": "assets/js/31.6812c73b.js",
    "revision": "3030cfdd388343945ce0d826e251944d"
  },
  {
    "url": "assets/js/32.6b02338b.js",
    "revision": "81fb5b370bb97f9748cad433d7c874c2"
  },
  {
    "url": "assets/js/33.ffe5ba32.js",
    "revision": "bcd523e22d6c55c0c95fb0902cc946c1"
  },
  {
    "url": "assets/js/34.d800f9e7.js",
    "revision": "12f87c8c47053552ae691e445c7861b9"
  },
  {
    "url": "assets/js/35.fb0dd90f.js",
    "revision": "0cb3bd10ad6f1af39c6edbdaf617b927"
  },
  {
    "url": "assets/js/36.864fc2ee.js",
    "revision": "49e082c3fe3636ae26f3ca6c24499193"
  },
  {
    "url": "assets/js/37.fce90b10.js",
    "revision": "c1a88ffbccb3e5f21ae3c661350596be"
  },
  {
    "url": "assets/js/38.218b3b0b.js",
    "revision": "124d43cdc74dd052e84e6a0fa24fafc8"
  },
  {
    "url": "assets/js/39.4e642fdb.js",
    "revision": "d5e3f19ff9211c38d890c008407dea63"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.d64dff4f.js",
    "revision": "a4b1680dff6a91d3898738ad767067c3"
  },
  {
    "url": "assets/js/41.a5d13cc5.js",
    "revision": "6b92ea33e4892e753e9416344fa0b230"
  },
  {
    "url": "assets/js/42.84f4f17f.js",
    "revision": "4c5f650b4145204aed48d8a3f9919c16"
  },
  {
    "url": "assets/js/43.3f4cbbc8.js",
    "revision": "68b5d79c5d1e3f9f38fd9124f13f1a64"
  },
  {
    "url": "assets/js/44.95a2baec.js",
    "revision": "8cc309dbd16ff96f51befdc33f8d8470"
  },
  {
    "url": "assets/js/45.5f165657.js",
    "revision": "a2e774b7ad813dd43b7ffce57d632c36"
  },
  {
    "url": "assets/js/46.73bb8178.js",
    "revision": "35883bbda2dec05b685a9d5eaa4a8d3f"
  },
  {
    "url": "assets/js/47.2f1301d5.js",
    "revision": "b3cf3d038170224b54c292c5d8e02347"
  },
  {
    "url": "assets/js/48.3216733e.js",
    "revision": "9f009db4a948baa1b248d73ea1186136"
  },
  {
    "url": "assets/js/49.07ee8e23.js",
    "revision": "b3d813b931bdaf42858356256f5fa027"
  },
  {
    "url": "assets/js/5.e5c77ff8.js",
    "revision": "b447c0eb72cbf82176e25801d07297ce"
  },
  {
    "url": "assets/js/50.70961423.js",
    "revision": "32b6d18a6efcde87af4700f6a630d7fc"
  },
  {
    "url": "assets/js/51.823e34bd.js",
    "revision": "f3d839670e998700dba072e4f73ee56b"
  },
  {
    "url": "assets/js/52.e172f9f6.js",
    "revision": "e7b5f75c52df560f89189585950d412d"
  },
  {
    "url": "assets/js/53.87689621.js",
    "revision": "6173ed8dbe34f598e7e6c60bff34a28d"
  },
  {
    "url": "assets/js/54.194b9cee.js",
    "revision": "a07ac0f9719ed4ac751a8f39f195f964"
  },
  {
    "url": "assets/js/55.00f4ebd9.js",
    "revision": "61f7e33ee8b9a0e3ecf0e7d8c188b59c"
  },
  {
    "url": "assets/js/56.ab12fa0d.js",
    "revision": "bcf83e169c0d76fb1ddb3acae75903a1"
  },
  {
    "url": "assets/js/57.0da806e5.js",
    "revision": "3f46e1f66cb494ca6fab5f99f0f0cdac"
  },
  {
    "url": "assets/js/58.649ff721.js",
    "revision": "3c53517079c23ee49cc608f4781439cf"
  },
  {
    "url": "assets/js/59.4c371759.js",
    "revision": "dd32a841ea1665a2407c238371e2fe8a"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.97c755f4.js",
    "revision": "6f371bbe916e1c2d08ffe7a54f72f1fb"
  },
  {
    "url": "assets/js/61.61c28b32.js",
    "revision": "8e54a55fa2e55e0ca4b407c7b96d7fcb"
  },
  {
    "url": "assets/js/62.0bd7cb91.js",
    "revision": "60060afa567add38a7f83c0b2ef255ec"
  },
  {
    "url": "assets/js/63.d9d2321a.js",
    "revision": "bdc1695b6ed11188c1c7eaa6ed586d83"
  },
  {
    "url": "assets/js/64.4ac687fc.js",
    "revision": "38daa4cf49f1e9fdd9a7b0f9e01601fc"
  },
  {
    "url": "assets/js/65.6db15159.js",
    "revision": "7e2896cc4f9e384da7d9f0931989c52c"
  },
  {
    "url": "assets/js/66.b2940896.js",
    "revision": "2609f8afbf5c459dcdb3813bd0c698fa"
  },
  {
    "url": "assets/js/67.b03df223.js",
    "revision": "a7da2b4af53519c14cde20217b6931e9"
  },
  {
    "url": "assets/js/68.e401ba02.js",
    "revision": "815b17f1d8556ced347cb63858c8e7f5"
  },
  {
    "url": "assets/js/69.5b6d7e96.js",
    "revision": "1265a48514ff3647fbacda6674bc04cb"
  },
  {
    "url": "assets/js/7.d72185e1.js",
    "revision": "85dd857690f79d7f03db75c9c71bd5c3"
  },
  {
    "url": "assets/js/70.f4098fb0.js",
    "revision": "7a66b5a824f53fb9cd75740fa2b4ed60"
  },
  {
    "url": "assets/js/71.c64896e8.js",
    "revision": "db3ac56fb28dccbb2cb666812cc170a2"
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
    "url": "assets/js/app.fc7b5b60.js",
    "revision": "fd0b114b7616df69cb11386678780b3c"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "9a680ecb24241f5d93ffb274c1a47a5a"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "6c99b0a3eb6d4e99fe005072cf71062c"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "1a6bf2aaf0f30dca68bb474ece9ee2e2"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "23a505304764940c459321a503be5c03"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "a1818f5f044cd720016ce975f39b7d75"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "9d9839dcb1821098a6a67597b7b2efa5"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "04ef1a7a04599154c8142c43bac25d5f"
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
    "revision": "ddf9c493a3222ef7ce98029934f4cfd7"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "1c732c275532a5ac25d88644a17e2b9a"
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
    "revision": "215cd27b87c59ae6a0ae239b6c414b05"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "014811e24af6d0198156774db96a6e07"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "95b5d51c25fb38234611550f39b10ab3"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "2fe9e659b935026139866be8bad9c307"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "0aecabf37cb2443f77de2e80ef07ef78"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "e84d7e18f87e7fba0c9ee9cf4a3e18bb"
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
    "revision": "2ce22879a67def76c169ec392008eae4"
  },
  {
    "url": "guide/index.html",
    "revision": "6914d127860cafee5534abd63aaa26c7"
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
    "revision": "32ec8f3f41b650076b9ac4f82f7adfbe"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "edea53f2a312309594fcda29181567fe"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "d2ccae4b818ea57a875daaecc2be5ba8"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "c7fffe8300c38103ef432eac5abbafe6"
  },
  {
    "url": "more/clean/index.html",
    "revision": "270970999b9f0d1893c960cc4df7a5bf"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "ec7315c7d20d1d890a0658a7742c3c9d"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "d7d84bd481a575124daa4734d4800f6c"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "4e97b75f26a7753bb0cbb034a59e409c"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "69c2c55653ec6bdc3067329f0933c3d6"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "191f33c11c5ce576cbad348e309babea"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "44f052e8b64f00de0420bf1956d99613"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "95540d19e0c2b01ce4933281af5a29d3"
  },
  {
    "url": "more/interview/index.html",
    "revision": "a31cb87fa6ff585d8e05d5c0c6d440bf"
  },
  {
    "url": "os/centos/index.html",
    "revision": "7caaca41c9718d1444e94d38cd9ee138"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "08a7a8049266f8de696c18ba8e10600c"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "c28e0582f2b1ad292e63e96a1d4097c0"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "42d5ecec20dd171d4e0618ed7eaa77fa"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "e75d04028db7f65d4a86585896aa9a98"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "d23c931161cbe758713c2605873cc30b"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "27268b9154af9a59f853a567a554998d"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "b568244de3452093e7c12fed3bf25461"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "c9b6e9fb6544cb708c10d8adce779983"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "395ba5923ad61c72b376f45677b20754"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "b3760f3ffdf161979b17ee7ea27414ad"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "b26352fd1f8b47f11b7c7e1003b0c7d7"
  },
  {
    "url": "os/linux/index.html",
    "revision": "be792b27e35875fbcca3d6fd8c321602"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "77f34041e6cd2356d5dd56b5a88dfe10"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "f9ecb5dccf3e3b0fe8125ff2d856c7dd"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "46a0174abdaca9b159c8a44d2a628ecd"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "ba5adad71f901221555412b0afce8611"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "062ab59c91af3d94659ff6e57b56804c"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "ff5b5bc148ee80c116cd637ad857bee5"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "fdd80632d18b4cdb98e857db5f5ab29b"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "85d38f9579f298b92bba5973ba61e1ca"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "d3f4f4718b882815e02504be39bfee2e"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "60a574a2cd8121fdbd9b290f8d7660b7"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "ab19fc4b0a64bda974599d6b648b5f26"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "8083eb6b245ae4b689b63d70aa169701"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "b7439b2b1e20a9d8bcc08f3f4df2ae79"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "57a23f07556217c7d23b761d04693505"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0d741b6e2d05ad9677855c2e0ea76920"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "e405e31d661d22331cdf07d1a08ff858"
  },
  {
    "url": "tools/github/index.html",
    "revision": "26e34d15fb010a2873b43ac5bc7482c3"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "eb6a42b8b861cfdaa7ae3f1ba57723b0"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "4e2049722bcede8280a7e1bc773a1b48"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "945b57a7d79e63beee4cb47927d95d68"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "f35cfb86c4d9bd03f818730e0a4f9b1d"
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
