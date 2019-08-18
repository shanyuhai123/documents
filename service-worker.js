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
    "revision": "9c97033dff36b869ee45a26c3a2d5471"
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
    "url": "assets/css/0.styles.a9d47db4.css",
    "revision": "1cf788e5055372fe632a1eba244f314e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.839a682a.js",
    "revision": "15ecb3d6d88cc1c1d8c0f5b69b8ae5de"
  },
  {
    "url": "assets/js/11.be75d00f.js",
    "revision": "383c01571898c5be4442f172a61a8443"
  },
  {
    "url": "assets/js/12.adddfcb7.js",
    "revision": "61590c77ffc3dca78e46646496aecf00"
  },
  {
    "url": "assets/js/13.0ac25a2a.js",
    "revision": "1a9e3a67a8157b886f7be47ad512287c"
  },
  {
    "url": "assets/js/14.a3189c35.js",
    "revision": "549b6c5703e2214ac10cad9cdf68da0c"
  },
  {
    "url": "assets/js/15.bd666313.js",
    "revision": "748865ee40569936cf978f5cc762a596"
  },
  {
    "url": "assets/js/16.661eb9a0.js",
    "revision": "b9b0ad3276996ab558bbd209b17811dc"
  },
  {
    "url": "assets/js/17.71949356.js",
    "revision": "8a179bbe3bd6585f5534291be485fdc1"
  },
  {
    "url": "assets/js/18.4311c7aa.js",
    "revision": "337ad49583f3a5e1ebb5e2064a7dd5b5"
  },
  {
    "url": "assets/js/19.fc9c4e33.js",
    "revision": "774bc70ece2810439dd9f0488dd59fda"
  },
  {
    "url": "assets/js/20.05189d59.js",
    "revision": "ca0e7e621b34d9f97fa7b752273b7b38"
  },
  {
    "url": "assets/js/21.e95f0d76.js",
    "revision": "21f971b77a40492e17ee785b1ca320ba"
  },
  {
    "url": "assets/js/22.00b0c37a.js",
    "revision": "368822d1f51a94ec6685ee1300710b8f"
  },
  {
    "url": "assets/js/23.22a32c5a.js",
    "revision": "98adfdcc2f583406eecc7984809efce8"
  },
  {
    "url": "assets/js/24.fd77e2c7.js",
    "revision": "82842cc5a28d59416be0f86fb1e932e6"
  },
  {
    "url": "assets/js/25.da0c66e5.js",
    "revision": "8ee666c028ddde95c1f725ec16c9dc86"
  },
  {
    "url": "assets/js/26.9d373cb8.js",
    "revision": "ee7c0a4247ea78c268ed0b9f66a5cde6"
  },
  {
    "url": "assets/js/27.ed831dbc.js",
    "revision": "7d2512a3725d6a2471d6a886401783a9"
  },
  {
    "url": "assets/js/28.05cabd19.js",
    "revision": "688d822d57a0f1ec30447a4494d0f1ed"
  },
  {
    "url": "assets/js/29.845ae9a2.js",
    "revision": "199b44606eeeb73f8a6a71c81a3670a0"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.1a530025.js",
    "revision": "4504047a58c8351781dd6b8321d8a380"
  },
  {
    "url": "assets/js/31.e1c35eae.js",
    "revision": "df0dbe343f5ef9d186d79dc6e8f89dff"
  },
  {
    "url": "assets/js/32.e18a1944.js",
    "revision": "fc529562472417b4c5f5bda187c33b7b"
  },
  {
    "url": "assets/js/33.09073891.js",
    "revision": "f9b1514070eb6ba3735684e2003578b0"
  },
  {
    "url": "assets/js/34.d9398d44.js",
    "revision": "76816cff61e2e2114600ff5559cbebae"
  },
  {
    "url": "assets/js/35.a786cc95.js",
    "revision": "d4471352e1b23400141955dd89b9e154"
  },
  {
    "url": "assets/js/36.2455aebf.js",
    "revision": "18068c46c4e32dbb237f4fb093881845"
  },
  {
    "url": "assets/js/37.b714e8fc.js",
    "revision": "75b6a4c3d4c135f763333469bbb99101"
  },
  {
    "url": "assets/js/38.5b1845c8.js",
    "revision": "3d49882d3d90db374081714f5de985fb"
  },
  {
    "url": "assets/js/39.698ba99f.js",
    "revision": "cab4f5083cde20eb4c366effa3854df3"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.ad892993.js",
    "revision": "14c52a2c345b89411c3c8509bd6533cd"
  },
  {
    "url": "assets/js/41.0f863a8b.js",
    "revision": "992c0c2ccdf86a585eb13f44e5d1bcc0"
  },
  {
    "url": "assets/js/42.8dbcfe6c.js",
    "revision": "9af01cb192db8f775cbf05cc17199947"
  },
  {
    "url": "assets/js/43.db814995.js",
    "revision": "02872dab492bdbe7791a9f0f1093f6f7"
  },
  {
    "url": "assets/js/44.29fa5c6f.js",
    "revision": "aa7240417410f30a8e649b662e9a08ab"
  },
  {
    "url": "assets/js/45.89513d44.js",
    "revision": "1bb119811e4266f77d6637a3b00674aa"
  },
  {
    "url": "assets/js/46.8bc27ee3.js",
    "revision": "6eb0045bc9b718374e55a926ae290001"
  },
  {
    "url": "assets/js/47.a6792632.js",
    "revision": "32015982b1815314f5401938b9f1f550"
  },
  {
    "url": "assets/js/48.28e6c2d0.js",
    "revision": "bb98e7ac57ed81cc6c86e91787a2216f"
  },
  {
    "url": "assets/js/49.739d142f.js",
    "revision": "e4c911b8e76997bdf807316b589b32b9"
  },
  {
    "url": "assets/js/5.69c9e47e.js",
    "revision": "f8b4659419746e794fba2183c5c02dd9"
  },
  {
    "url": "assets/js/50.615c5060.js",
    "revision": "85d2b6a87921ae8d35d1e01a6bf99a1e"
  },
  {
    "url": "assets/js/51.87731c37.js",
    "revision": "a223f4924547ad0efcfec5de6d6938b9"
  },
  {
    "url": "assets/js/52.6a3f6739.js",
    "revision": "0f8a9ea3294bc9ee910a77cb1940a8f3"
  },
  {
    "url": "assets/js/53.c2a2913f.js",
    "revision": "55175b25c4541ee7176e36851f2a9fc8"
  },
  {
    "url": "assets/js/54.420220d5.js",
    "revision": "0256ed87ab90077e573a424a859271fe"
  },
  {
    "url": "assets/js/55.39ce9080.js",
    "revision": "62b2773cb9bd6554d6bc2aee9c52bf50"
  },
  {
    "url": "assets/js/56.9877d332.js",
    "revision": "aa03ec8fc3b3143e45a5db3c89a8ad8a"
  },
  {
    "url": "assets/js/57.3e42ed37.js",
    "revision": "cea761bfcb698b8a498569af0f668d07"
  },
  {
    "url": "assets/js/58.35609452.js",
    "revision": "52d53eb12995e2cec51e864eb18a3bc3"
  },
  {
    "url": "assets/js/59.f9ab2402.js",
    "revision": "cf408d4df7df9f1ecbcf091d88a1eef2"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.38c25f03.js",
    "revision": "ec555fa4f0586211f19f4395f4e0c1b1"
  },
  {
    "url": "assets/js/61.58efca69.js",
    "revision": "8b20b2db0ed589b3fe54fecf5de5e380"
  },
  {
    "url": "assets/js/62.18d0733c.js",
    "revision": "9b5bcf403506c612798d03eb9fd01fce"
  },
  {
    "url": "assets/js/63.8bc8aa08.js",
    "revision": "78eedb2c87fd91f379348b6855808347"
  },
  {
    "url": "assets/js/64.d3a555fa.js",
    "revision": "096bec09f425673b4c89f2331d3e77cb"
  },
  {
    "url": "assets/js/65.b9ee789a.js",
    "revision": "8c44868229f017ddeb19c0919cb19d09"
  },
  {
    "url": "assets/js/66.3dc16053.js",
    "revision": "04816afe7c9332e0129983e9ca98501c"
  },
  {
    "url": "assets/js/67.e43283d9.js",
    "revision": "6b28555381c5561de1b64c2369a71248"
  },
  {
    "url": "assets/js/68.189e7285.js",
    "revision": "1b423b300937461c098b987477b07058"
  },
  {
    "url": "assets/js/69.ff9b873b.js",
    "revision": "3444cc6f179d3132ec3881e451205a9f"
  },
  {
    "url": "assets/js/7.7d4b787c.js",
    "revision": "d220957b8e41fee10aafe0856592d54b"
  },
  {
    "url": "assets/js/70.7dffff08.js",
    "revision": "6c1cc25808dd451ba6ec47bb1812ffe3"
  },
  {
    "url": "assets/js/71.147df4c3.js",
    "revision": "5254e1c1fa53348b7d5cb8e460e1185c"
  },
  {
    "url": "assets/js/72.65df7285.js",
    "revision": "c66552b9f2231d70eab23b257864d0aa"
  },
  {
    "url": "assets/js/73.1a732ec6.js",
    "revision": "3d1c8d81da34e9f9253a6ada862bba67"
  },
  {
    "url": "assets/js/74.ee43ca26.js",
    "revision": "71a923245eddefa1a0301bfb0f3366b9"
  },
  {
    "url": "assets/js/75.0e08fe35.js",
    "revision": "0a5458667a6d1f2058f20d8ac11ade9c"
  },
  {
    "url": "assets/js/76.088fe698.js",
    "revision": "77e2a95c07d7a2bcb14a58cf977e7695"
  },
  {
    "url": "assets/js/77.94693f67.js",
    "revision": "ca7a752eea1aca78640120f6a534fcdf"
  },
  {
    "url": "assets/js/78.921f8abd.js",
    "revision": "63f4d88c651a2b4616423ad5a30bf5a3"
  },
  {
    "url": "assets/js/8.1d855845.js",
    "revision": "80f3d257e935be86aacf8e6417d8e829"
  },
  {
    "url": "assets/js/9.9d99e812.js",
    "revision": "2552b0e6bffbe50645876002d6b98a4c"
  },
  {
    "url": "assets/js/app.3f49274b.js",
    "revision": "eb6e802ac9c032089ca0e20bc23fcc88"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "79c11715e2ac507624586d76b8a206b6"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "8fdf1f4ee33fea59615edc68b4ef0ec0"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "dcde2ba626e44f73ea90b6f136f367b4"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "5b1361a8a3fe980a63631375a44d2226"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "90326ac8e98d8b16bc3e14cb4d943738"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "5f2e207cbe3fe6291e28977f3e1823b5"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "d7c657d86442f157137a4e62ec32de0f"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "8adb4ec5d83ecefc9ad6514259629613"
  },
  {
    "url": "computer/index.html",
    "revision": "9013d10a913b11052f59f2e6139382c2"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "a0d4c616d4bc8d88d962fb392e6b8878"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "409a6d4a2151d2b513f7dea309926ef6"
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
    "revision": "ed60a070e37b4d589eef6da4d9e10973"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "56fbda6237588f85a7b8ca2be93eb0ee"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "a10cafc9d089a631a593e542fd60b3c9"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "f5f881160776f16d6e9adbc4114c9c3e"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "7c40a54e8ed748d3d66021c3e28d0444"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "4cb57f8ad7fd2ccea77d3401c140dee9"
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
    "revision": "e0ee6e505a06fc323ea401459eb87903"
  },
  {
    "url": "guide/index.html",
    "revision": "4d49e8defbfd418df947eb62bf3d72ad"
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
    "revision": "2da018c83c4fd06a936aa4b72d4af0fe"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "e62ba647326121a210e8ea8d77cf40dd"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "faffacd3236be9410a6729773736e719"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "50da597ad74fc5ad9c7fc9e4baf01ca3"
  },
  {
    "url": "more/clean/index.html",
    "revision": "61d32198fbab067e3e77d2491307c76d"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "406e79ab7095f171908a8adfcafeb566"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "60eb567edf8f3b01710375e68d3a86a2"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "e02647b876c8a3e26601aa498413c560"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "4beb1ea036902e9eeadea0edab23a350"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "fb5d04aa746f0fbcdbc5fabd453f5d52"
  },
  {
    "url": "more/interview/index.html",
    "revision": "bbd32eb4c2e28207216b34415c548032"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "6ae469f63bce5798e275c68fc713d26f"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "c0a43cff5e51d52925f34095430f39b8"
  },
  {
    "url": "os/centos/index.html",
    "revision": "754782131c919b41bd0da180765e3cb5"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "af4c2635042ee40b2eb983d7d95c7e21"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "f9931f2af01dfe9a2baef1c8541f030f"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "7d9fa5ec018af226a7e487fb6ea94122"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "66b2127168887f9bbcc96cda0a533fc4"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "d2531d8d59887b070731d9f12d4d781d"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "975526a242ad5e6b65ce41e7184b2d1a"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "0b8c4c3d798170141f9d9d1b8822e2d2"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "b22ce02ee670ab005ffbb714fd15ed19"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "2bcbaa3d3c2d63ddfcac1e388541734a"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "fc1fc005fac5cdb7e62f707f37298ee3"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "1548ddb358ab3c022107d05fd81d0c5f"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "eb5fca04621e20ad9e92472bc5ed9f55"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "d7d94eb462a754c89ff72c0ec258d359"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "341cc1496f91620cc3c865f0ded1476f"
  },
  {
    "url": "os/linux/index.html",
    "revision": "33d8fa7fe5d8b9b24d848d8f6df36eed"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "5cd1f5a4077e0ffbe3994a72fb7c8f4f"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "1d31dd644870f7a7ca94b7564a47c201"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "e17ab7a0201200982e5725ee8e950d75"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "6ae23dda00952da9df131ee76978b559"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "a24ba0821074f8005363437cf34eb22a"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "ca3a4525c0f9de0acb67d4b7866867a5"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "dbf71bbbfa58368416ecf26621580c8e"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "b9f5167500cf112b6d1961ed3e36f5bb"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "85a5f7546e210a79a3eaae321c757c5e"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "e490db03f721c554b2f2f2bed93b88a7"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "8f6c212c46ca151004363ee52d8f3d8e"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "32ad5f038fef44fd0f293bea6114df99"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "bdf3c7eda94c5c1f37af33c2353240cb"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "1fc6e0b80f62f38eb5e7f0469a436216"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "df346b919d1cf5ab702accdee0f1a639"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "538dd1039cdc248085f9870263490190"
  },
  {
    "url": "tools/git/index.html",
    "revision": "774f2b83a5e4fd78dd0e160284191346"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "49777a68be1598085f892e7ba3e21db7"
  },
  {
    "url": "tools/github/index.html",
    "revision": "4ea1ca1835d0f9a10f84f9e842589259"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "0f81bc000163d1fc0b799222eb776fe4"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "9e49404e9c26e35d980f3cfde8e38b5b"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "7939b753ce43c5ebe4ffbbcad966ca40"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "0a328b392378fcaa549f1062e34aef9f"
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
