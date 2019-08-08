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
    "revision": "5afe80b781de293e4a65d733c4230c81"
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
    "url": "assets/js/17.c516e6b4.js",
    "revision": "ce52964be5115cb9a3019bce7140121e"
  },
  {
    "url": "assets/js/18.553689a2.js",
    "revision": "e35ecb52666915c9a05e705ea8822142"
  },
  {
    "url": "assets/js/19.01048250.js",
    "revision": "4366157bb9e1965e894a4a7e3233520c"
  },
  {
    "url": "assets/js/20.c9dbb8e9.js",
    "revision": "90f246b4ec3603d7b409b9cc39192328"
  },
  {
    "url": "assets/js/21.04f0ebcf.js",
    "revision": "17ebcbb4f8738f1acfdf000e1d4b533f"
  },
  {
    "url": "assets/js/22.d19d5220.js",
    "revision": "aecb76994caac921604319706492c8a9"
  },
  {
    "url": "assets/js/23.b6508f57.js",
    "revision": "b2e9263007b0343792fde5a2f6e3fb1f"
  },
  {
    "url": "assets/js/24.eb5a034f.js",
    "revision": "b31100d850b49c0eea64dc20ffb50dbd"
  },
  {
    "url": "assets/js/25.21ebbd0c.js",
    "revision": "bb72c8996074757b0d12690fcce855c2"
  },
  {
    "url": "assets/js/26.16f26aeb.js",
    "revision": "da872ca9d0fb48a24e02aa9f0b2dbf16"
  },
  {
    "url": "assets/js/27.ad637951.js",
    "revision": "69674cd5834215b15694bd5c048ae9d9"
  },
  {
    "url": "assets/js/28.c070ac4c.js",
    "revision": "d26bf4351fb019496fcbb25f5f014793"
  },
  {
    "url": "assets/js/29.aef63c25.js",
    "revision": "678ec3838c0cc35c90e7cda3edf74135"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.199f499b.js",
    "revision": "b1c1ddb27bf55f1934643ea96ea2edaf"
  },
  {
    "url": "assets/js/31.cae3d37e.js",
    "revision": "0e1f3a7ab453de87ba7e282913c3fdb9"
  },
  {
    "url": "assets/js/32.7394fe8e.js",
    "revision": "54d08730f02cb9d7155c28038f6d8e4c"
  },
  {
    "url": "assets/js/33.25c21968.js",
    "revision": "ddc5a03d1a6000b245803485dd388883"
  },
  {
    "url": "assets/js/34.a6edeead.js",
    "revision": "e26dfe2f66eb7f973a957fa764ed65fb"
  },
  {
    "url": "assets/js/35.51b258e9.js",
    "revision": "3a352bf712124050ec26138fe930f58f"
  },
  {
    "url": "assets/js/36.bda317ca.js",
    "revision": "d341bdf260a2d62f72bda59a0a8486a1"
  },
  {
    "url": "assets/js/37.fce90b10.js",
    "revision": "c1a88ffbccb3e5f21ae3c661350596be"
  },
  {
    "url": "assets/js/38.a232e32d.js",
    "revision": "8984cbf626517e11b6881d467da9a5e0"
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
    "url": "assets/js/40.03be2be8.js",
    "revision": "590624e25fcbebde91faf80205b7ae5d"
  },
  {
    "url": "assets/js/41.a5d13cc5.js",
    "revision": "6b92ea33e4892e753e9416344fa0b230"
  },
  {
    "url": "assets/js/42.b3874b08.js",
    "revision": "088a86c68ee02825bdb5a0406a0be36e"
  },
  {
    "url": "assets/js/43.11dd5820.js",
    "revision": "1b76ffd6ef4a780dab577b83c131acc8"
  },
  {
    "url": "assets/js/44.0fadd149.js",
    "revision": "7186d4efd94ce807ca088d79c6138149"
  },
  {
    "url": "assets/js/45.6318ff7d.js",
    "revision": "0e4bd3265e277479114858613c495306"
  },
  {
    "url": "assets/js/46.e3b54e56.js",
    "revision": "fc50edc10e7d06a4ff9036a90d7c0088"
  },
  {
    "url": "assets/js/47.353294b5.js",
    "revision": "b02dfec8bef573cb801990d1c820fc7d"
  },
  {
    "url": "assets/js/48.9068f04b.js",
    "revision": "382ebc7e6d04e468745da621f33c3205"
  },
  {
    "url": "assets/js/49.ab07bc56.js",
    "revision": "f2e8f3750df24b36c63282020b3f27fc"
  },
  {
    "url": "assets/js/5.e5c77ff8.js",
    "revision": "b447c0eb72cbf82176e25801d07297ce"
  },
  {
    "url": "assets/js/50.a6df3acf.js",
    "revision": "20b512c9c43c8126c9f9501d0dec9b01"
  },
  {
    "url": "assets/js/51.562138e0.js",
    "revision": "0d41c2296930308c5f287e2cae4a6e6d"
  },
  {
    "url": "assets/js/52.23df05f7.js",
    "revision": "89efe15d3872f014a0949d389cfbcb3c"
  },
  {
    "url": "assets/js/53.f168b055.js",
    "revision": "93d7dbcacd8fcf631fdeb034ca1250cc"
  },
  {
    "url": "assets/js/54.82dcf5e1.js",
    "revision": "381101017774c4868c1d2046546e105e"
  },
  {
    "url": "assets/js/55.66df350d.js",
    "revision": "0f17ed7522d7f204c9061363b4cf26ba"
  },
  {
    "url": "assets/js/56.b7f995ab.js",
    "revision": "630d8b94458128b1431769293d58b880"
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
    "url": "assets/js/66.b23ceaa1.js",
    "revision": "f9562e371400145ccc8265914f2a3eb9"
  },
  {
    "url": "assets/js/67.b13f60e0.js",
    "revision": "4e15c13ab0dac26bcbf2d890a59a32a3"
  },
  {
    "url": "assets/js/68.a584ac83.js",
    "revision": "0f720d8381339681955dd70d52ac96ef"
  },
  {
    "url": "assets/js/69.bbc56b0e.js",
    "revision": "dca4e0b4c4d39a31015aec9a60a97266"
  },
  {
    "url": "assets/js/7.b1f2efd6.js",
    "revision": "580e43f5bde07cda27c6e9af9837f12b"
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
    "url": "assets/js/8.87618958.js",
    "revision": "3b8046ffcddae325368648380e85201f"
  },
  {
    "url": "assets/js/9.60b709bc.js",
    "revision": "ea975a7e51638ac5a35b5cfbd54a11f9"
  },
  {
    "url": "assets/js/app.765b0dbd.js",
    "revision": "354d8bb65193ce3b44545f7eae282089"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "f174d453f63c341d1298b06fe7f2d419"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "c43b8ed2c84019b3b3e1a7f2425e3599"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "c46112f3a58cb093249f859af94e8320"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "bc5a53048c77aab96cd04e58d966a049"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "4075483f4d75b8075477b7e9677c9465"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "a0d6f252b68e0a475a733708bfef3593"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "bf5f0feb71fe753c05f2ec8e62e0abba"
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
    "revision": "043975aac54d7da2b0adfb5676549682"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "4b2803e0d325a53b96ad7e888982b359"
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
    "revision": "e2aced3c0310702f12ddd52cb07cec34"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "d268a1f24bc9d3ffda30eb9c0a59f303"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "dd20251a5d71b1619d95c78b257104c9"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "1ed7e10895fba02d7d22f217363e0aca"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "3e17a98b578161d8606665b18e1a0b18"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "4e1ea1322e0ec6f6fca688d0aa914ec3"
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
    "revision": "39630f458d99be54ec6a6665369771b6"
  },
  {
    "url": "guide/index.html",
    "revision": "86c72b59dca6234cc6a3969a27777df5"
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
    "revision": "aa82e1a1c1fbf1885023653c04ac3d95"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "fe1a5dedcc1d328f92d9e4292815d174"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "026a0f46f6bf8695f7da9d6ff0b6e12a"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "b50c14c248aaccde3a4e1428b49c431d"
  },
  {
    "url": "more/clean/index.html",
    "revision": "3cbfdd2895f71910296d2016b2dd6647"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "2272990fc7a51b6246952a004a8ffe16"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "d1c9cff70493bcd4fb29a228cf1bcd3f"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "98f05fd647948c142f7fec2216879b9e"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "35969a4c207869d8c77886c8d4ac9df3"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "09f9c33a36a1081d6f3ccbc88cf0cbb2"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "87dcab1ef0e63eb89047222eaaea06ff"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "d026dfcd1f353524049ba3ae6e660f02"
  },
  {
    "url": "more/interview/index.html",
    "revision": "2fdd05e07749f2d13415dc4274b2cbdc"
  },
  {
    "url": "os/centos/index.html",
    "revision": "1f397c6a71f3db10c5fdb495d65f8d85"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "13668e733c03fe4cd09937bf53c3c0d6"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "edbc7b9c9805c82bb4d917b9b2ba247e"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "e953d34d4ed8b6138191ee97804a4126"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "0f23cc0b446972ea4ff70c65baf39508"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "fe40b2a515351c564dbd2d7e3f0ae551"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "b8d0e9e7408d37d2a5ecbba1a22ef7b4"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "27996b4dc4dacfc49048af66b7d8d409"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "38608af02c824d4aeeb9a413a2f69612"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "2c4406d78636e20b6826538e932e2300"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "185c80a7e7d93a820afbe6c8126a0429"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "d40ce3b6b73b3d3ef9e1ff64a81fcccf"
  },
  {
    "url": "os/linux/index.html",
    "revision": "d2747d05ba64de173b7cd0c362a23d1c"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "822e259c18aa9eaa8dd6c4247b753120"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "5fdddea01fe7a14187116ce4cedcba0a"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "a405682e8d42e1c1c1062cc74fcd40af"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "ca2f505ce2f2380c223d599f7c9ed9ad"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "2e867992afc1511382ff78785ae75323"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "58adc4641edac444ca9f6aef1ee55d6f"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "3544e98d54dfb9f8c8e657d2fc613153"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "bb282b87888d022d4421f9492c7c32cb"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "f3e302c87d7f3caaa8c3f702a406b817"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "f3c63819ff17a7340cca73a6ccafbd44"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "431b78adab89e99796551aba1d95a246"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "3c67719647f1d6a9ba8d99cbd6d2343c"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "858532f6bdb36a8472360ac4e5d67bc5"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "fa9c764f5b460834db270f89b3de4fc7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e69ff5420c0689a478b90423cb4e7831"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "1d06549855cfff9fec3b066c52d42a5f"
  },
  {
    "url": "tools/github/index.html",
    "revision": "08eb780e9c85af6d8196472efae43018"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "00fd59d3e7991a7e9b67c126acefe767"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "4fab3ef74e1535758f36bfae8e958486"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "44b7daadbd04b996775710bbff6d3ceb"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "1c32098d8048a1436c9a22efa822abf9"
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
