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
    "revision": "e9df39e8beb7d2e2ca60cd430c65a4a4"
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
    "url": "assets/js/10.ccc2e890.js",
    "revision": "73d0df870dd7a4a6c3ce8a7f9f844e93"
  },
  {
    "url": "assets/js/11.e42768d7.js",
    "revision": "962a5fd0bebeea59dbf5989895e1bf2d"
  },
  {
    "url": "assets/js/12.8f2b740d.js",
    "revision": "1258c651f0267a1991e76bb7addc2cf7"
  },
  {
    "url": "assets/js/13.c1e1bfca.js",
    "revision": "abff98a8f77d7dfdfc012dfc6416b918"
  },
  {
    "url": "assets/js/14.8242756f.js",
    "revision": "5cf8e1bb2f205e2e166c093ee82c03d1"
  },
  {
    "url": "assets/js/15.81e25a72.js",
    "revision": "a6962d3892a9853e0a082af771346e11"
  },
  {
    "url": "assets/js/16.07558fc6.js",
    "revision": "29b23a250b943341723bda83281e03e4"
  },
  {
    "url": "assets/js/17.7c08cfae.js",
    "revision": "cf14ab54ab196806756b8a261757cb41"
  },
  {
    "url": "assets/js/18.517b2e9a.js",
    "revision": "f9d81da731b45f3c675abad499803bd9"
  },
  {
    "url": "assets/js/19.6106449f.js",
    "revision": "30530d1ff59fcf0c811cfc597b356d78"
  },
  {
    "url": "assets/js/20.c1a1be40.js",
    "revision": "d134c7418192c495ff21bcca7e5d3d47"
  },
  {
    "url": "assets/js/21.6c058872.js",
    "revision": "6e038c862299384f7e40da664f692cdb"
  },
  {
    "url": "assets/js/22.43cb4a61.js",
    "revision": "652ab0b407b067bfcce2403c4cf2792d"
  },
  {
    "url": "assets/js/23.b23afc22.js",
    "revision": "2daa7b0841d5074c5ac0ee9a8257d26d"
  },
  {
    "url": "assets/js/24.dbf06921.js",
    "revision": "3b2aaabfe95429bd96c1da80304d812e"
  },
  {
    "url": "assets/js/25.aad722f3.js",
    "revision": "af1873beb1e8f5fc5a45905406219b8b"
  },
  {
    "url": "assets/js/26.053c67e2.js",
    "revision": "96fe75b6fee289b6ccbaa7669543a253"
  },
  {
    "url": "assets/js/27.b4871b68.js",
    "revision": "c817e180cf3b494e931ebde6ad8f2837"
  },
  {
    "url": "assets/js/28.b7279edb.js",
    "revision": "e40532d7b1dbab579f720e093b9eff73"
  },
  {
    "url": "assets/js/29.9fb4fc70.js",
    "revision": "37c846302221e1dad877f569b7a637f0"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.1dc53229.js",
    "revision": "1a5c47fcc2ff07977a08a7169fb17371"
  },
  {
    "url": "assets/js/31.d3a2a6f0.js",
    "revision": "bd07cecdb834372d1c3db05c426666c3"
  },
  {
    "url": "assets/js/32.aebda4f0.js",
    "revision": "6023ae40d115fc272cd3be363e6f19bb"
  },
  {
    "url": "assets/js/33.35430273.js",
    "revision": "6c974d09b39aa237958a2eeced57ee2d"
  },
  {
    "url": "assets/js/34.80afc226.js",
    "revision": "b79766a62359716dddb6be41ad7489b3"
  },
  {
    "url": "assets/js/35.ecc29afe.js",
    "revision": "8fe3a2ee134e3ffa41d4bb0a30e6d66f"
  },
  {
    "url": "assets/js/36.e1ee84f7.js",
    "revision": "ed0886ac52a4a3c6036eac7e7b58609d"
  },
  {
    "url": "assets/js/37.84caec26.js",
    "revision": "b3a0567c33d5b685d291eaac7c322631"
  },
  {
    "url": "assets/js/38.8053355c.js",
    "revision": "0e6a98b7f088bd6248d8c853c12be791"
  },
  {
    "url": "assets/js/39.5796a7bd.js",
    "revision": "70f4dd7264e773e96545e33170d94007"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.dde065e8.js",
    "revision": "9d5e749ea55eb23c3cf71b9386dec32a"
  },
  {
    "url": "assets/js/41.68101fa7.js",
    "revision": "1d2726a12016651fb49acaa91e38499f"
  },
  {
    "url": "assets/js/42.d6d47f92.js",
    "revision": "d0bc1be4edee8f633c4a884266f8fd47"
  },
  {
    "url": "assets/js/43.bb5c32b4.js",
    "revision": "fa44673f1abffec7ff084d9995d85beb"
  },
  {
    "url": "assets/js/44.450c2cac.js",
    "revision": "8d4b22e19e53c615523312bc0bf87333"
  },
  {
    "url": "assets/js/45.8cfc3c91.js",
    "revision": "2bf4f1864db1a2cc41234e20befbbe3e"
  },
  {
    "url": "assets/js/46.892adf1f.js",
    "revision": "b38d43221d3dc049517238fa6ade90cf"
  },
  {
    "url": "assets/js/47.d199e927.js",
    "revision": "f24af08741ef1e6a1ff13494ec6095c0"
  },
  {
    "url": "assets/js/48.268784f7.js",
    "revision": "447338def19d94b227a984e0a5e8aba0"
  },
  {
    "url": "assets/js/49.960eba00.js",
    "revision": "0cb8340dd1e960aadebdbde6dbc732dd"
  },
  {
    "url": "assets/js/5.19abe13d.js",
    "revision": "219c2e3fafe152a44327ffe0d9eb0948"
  },
  {
    "url": "assets/js/50.3d5c26fd.js",
    "revision": "22fd6c1f0be374e836a32906c35db4a0"
  },
  {
    "url": "assets/js/51.d34f63d0.js",
    "revision": "02003b2a4aba14c455c42e54aeb7ac75"
  },
  {
    "url": "assets/js/52.9354b8e5.js",
    "revision": "0a13b9be7fefc49d8de0e316a04eed14"
  },
  {
    "url": "assets/js/53.4b0429d2.js",
    "revision": "507e45ad4bb06e85afd0393284436703"
  },
  {
    "url": "assets/js/54.ba07eaf1.js",
    "revision": "99975ec193ea7b477d5a89297986eb95"
  },
  {
    "url": "assets/js/55.59782acd.js",
    "revision": "0f7951e336a67c1559dfd7639cd91617"
  },
  {
    "url": "assets/js/56.91c73808.js",
    "revision": "26e617626e0a0d547c5292d3b8ab3d68"
  },
  {
    "url": "assets/js/57.585e4d87.js",
    "revision": "e3422edad8be5a0051bc5d64b85522b8"
  },
  {
    "url": "assets/js/58.f0405608.js",
    "revision": "762319264e897b1bf22d1f9c098f354d"
  },
  {
    "url": "assets/js/59.31ffb2ed.js",
    "revision": "fc0b9f1c1fdfb21ce55fbb7e34b39993"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.a4afd4bc.js",
    "revision": "3acf8a817462723ae443f75e5538af41"
  },
  {
    "url": "assets/js/61.bfb0b37e.js",
    "revision": "506856ef5225f8e346e7a9ffe261bff2"
  },
  {
    "url": "assets/js/62.e9cf6063.js",
    "revision": "ddf02775a38f81d02c4b33d00aa06523"
  },
  {
    "url": "assets/js/63.c32e5efd.js",
    "revision": "2f10696814077f251666175ccbca5584"
  },
  {
    "url": "assets/js/64.fa82d00a.js",
    "revision": "231104ab2edde0e3ee8b54d86a6f187d"
  },
  {
    "url": "assets/js/65.5aecb37c.js",
    "revision": "adfb2a2fb297607cd30db686d5a219c9"
  },
  {
    "url": "assets/js/66.11997095.js",
    "revision": "3b54cd81c613614a7c42d8170617dec5"
  },
  {
    "url": "assets/js/67.d28e66c4.js",
    "revision": "0c4156282cfb5aa055e22357aabeb0a7"
  },
  {
    "url": "assets/js/68.2b7ce3d2.js",
    "revision": "81021f99386e51a8a9339129ed4963bc"
  },
  {
    "url": "assets/js/69.93d7bdee.js",
    "revision": "2d059c5bc2e5c17aa4c50ec3e4b78ed4"
  },
  {
    "url": "assets/js/7.912a2bcd.js",
    "revision": "d38d41e5f4fc8fb5e04aa1a839c19da6"
  },
  {
    "url": "assets/js/70.4cc6191f.js",
    "revision": "b8a5475f281bca5d4c1ec8b758296047"
  },
  {
    "url": "assets/js/71.0f7e1c1f.js",
    "revision": "6865b9e737471d94504aaa30eab453e6"
  },
  {
    "url": "assets/js/72.690d2f1c.js",
    "revision": "86fe6b1d67aafbf825c10cb8974c49ab"
  },
  {
    "url": "assets/js/73.ac46d955.js",
    "revision": "8f435a0167b0d83324e02e174740a5bf"
  },
  {
    "url": "assets/js/74.23be174c.js",
    "revision": "eec3150640e9174b60ed65bbf09bd2d2"
  },
  {
    "url": "assets/js/75.63b0e7d3.js",
    "revision": "757944e2bf5cb2d95d71ba76ee81c157"
  },
  {
    "url": "assets/js/76.19108033.js",
    "revision": "4675673c7a9f555eebe8c9af27cf3907"
  },
  {
    "url": "assets/js/77.192e1e6c.js",
    "revision": "01761c62a042d4963f5acfe9d2416279"
  },
  {
    "url": "assets/js/78.c071209c.js",
    "revision": "dfefae659e1ff929c819969b6cdbf15a"
  },
  {
    "url": "assets/js/79.adccd51f.js",
    "revision": "d5175601d8a86cfa173c3847a5d5ed06"
  },
  {
    "url": "assets/js/8.353f198a.js",
    "revision": "61fa51b18d58d83cf70218e4b60019e0"
  },
  {
    "url": "assets/js/80.f2eb83a3.js",
    "revision": "b5eb9b4798cad00955ccb672c3ab0f0f"
  },
  {
    "url": "assets/js/81.b14e79f6.js",
    "revision": "ef2d92f9c591e66253fdb0854e54119e"
  },
  {
    "url": "assets/js/82.3a6ae09e.js",
    "revision": "6bc89698f4b00d331fa306dba46d25e6"
  },
  {
    "url": "assets/js/83.a307fb36.js",
    "revision": "05a4d9f1e246c089db350e86d3cf901c"
  },
  {
    "url": "assets/js/84.6ae299e5.js",
    "revision": "809df5b3d6a75c233d4525d951af4889"
  },
  {
    "url": "assets/js/85.e7e32e9b.js",
    "revision": "6ed16f504769b187159fbdd0f26af46c"
  },
  {
    "url": "assets/js/86.b1dd39ef.js",
    "revision": "c86c982f57e36ba151f83a41040d5332"
  },
  {
    "url": "assets/js/87.2bbff188.js",
    "revision": "492eb17f0138204ab49c9b39d5c6df2c"
  },
  {
    "url": "assets/js/9.94465ccb.js",
    "revision": "3d2b1443beec40c7ae06d6001581906b"
  },
  {
    "url": "assets/js/app.de448099.js",
    "revision": "54fc6a868b92afccfada7d4656d0dee2"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "375313ad6c523113006bedaaf32ed125"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "722f6c9cc03b191fa299b717063d663d"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "c6cadc10be9220c23f042058d3e84c33"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "753432df45f64af4b6b2dda46fade1db"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "24a04eea76b245a19ad468be2529aaad"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "cc99500a9131b5b440251f0cedf841aa"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "30ddb8b61f40e4119c879e6630545219"
  },
  {
    "url": "computer/index.html",
    "revision": "67797d2b42b3ee8fc6bfe8639dbaef58"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "f4c93ea936f9d9c8e90eb8a2c7f8c672"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "82b53ec36cefe8b9b8d4d8161052255c"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "4ea6601a61881385066bb7f67590a5fd"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "bc49ff6b3079019bea156f95f9bc4331"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "9cb3aef06bdffb3da3b7b5cd10715a32"
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
    "revision": "301f85c43278949ebeb03b2ec4a5e1e1"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "1d1d65ac8751d5003f0d9c4496d5f059"
  },
  {
    "url": "frontend/javascript/object-constructor-methods.html",
    "revision": "c9b5f3717338a386ec34f81076900e0f"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "946d2d2577a8fc6ff9166c62ad797678"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "bc08ea17a1aa66465ff560887485ace2"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "e2eb2c72938a41576e2698f6de9725fc"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "5e6d105d9337e73e0e01aecd3cc40580"
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
    "revision": "64c826b3f195b73d6395a31d1270e5b8"
  },
  {
    "url": "guide/index.html",
    "revision": "0771303caa749340324aa53eadc994ab"
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
    "revision": "9f8757d1ed8e66be430dff2243addfb0"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "788db1ca9c4eb311a32d63f6785189f4"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "2c068f07207a039fd07a66ae9527746f"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "91cebfcf1be43362c6825d7ce51fe6bf"
  },
  {
    "url": "more/clean/index.html",
    "revision": "24a799f7f1fb09bf4e7369e7b2370a9c"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "ec0451413691f34cbb2a4aa88e1ae60e"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "c071d4e0a0b69363ec4f2a848058a973"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "7f687452ca2a4b6b5f9028ad8172685f"
  },
  {
    "url": "more/hodgepodge/mpv-keyboards.html",
    "revision": "805f9ddd677fd7182bb9cd641a97dafe"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "d6cde603c49ad604273dd96b852f7663"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "f57a40086b6f193e40a94c036282a3b8"
  },
  {
    "url": "more/interview/index.html",
    "revision": "8c4a7ecaad49b944a52af9dd8a1bc9e1"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "58b69a5b09a56e5e6127f199ec4d2c1b"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "c2487930e3ef068290fe3ff07009e8ac"
  },
  {
    "url": "os/centos/index.html",
    "revision": "85461e2a1fa935a4f5a6f30f8ae48de8"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "6113f757d2e5661c12e2d9ac401eca85"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "715f257a37eb57480b2346234d9bc631"
  },
  {
    "url": "os/centos/modify-the-network-named-eth.html",
    "revision": "e61818c77064e2f0772b8ce647d7c288"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "ad1e4ed568f4db596f550c936c73524a"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "f5b0b0da1712613da823988a86d665cd"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "ce19796f1b20d9cb1e08ba3e9e33289d"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "c572abbe00f73f9fdd1271a08ad78ef0"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "22788f7add11784a7b3ca40384cd295e"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "ecc6101a17e8c0a00656ccf1da42803e"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "4376188766d2a355f1aaee281e3e85d0"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "888da0acfa1eace93dddca310f7f2cfe"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "e2d08d78be9e0f3eea36a1e40d67ed44"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "d61c03ad45c38ae136e715f7b0cfb4f7"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "ef7ad8b03a320d37c3b1516debda7864"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "648fb1a05f1e89329b280aa5f99f8125"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "05c5327e706afe6ef84e5013da688af3"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "a1a399dcbba7cc8edef2e31e10c3abec"
  },
  {
    "url": "os/linux/index.html",
    "revision": "7d613e0a082b3f333ec8a52708ace6fa"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "57e95bb58a9b500fdebc6c62a5340b38"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "25947eedd0124e1cb3a518575227fad0"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "e27581564e73010cddcd8000d4d67383"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "44308144499e2bf6ce6cfe32c1beaa92"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "a9935f9d7631c4614716d74aa966fc8f"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "0a125dda9f295edf557cd416cc01f094"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "9b34b26771cafa3b2b3927c8ed865a11"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "9de24a9c17a0af94a84245210eb96855"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "93dc6d98377b46838092824c6be3c39d"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "579aa6d3931c034825e490ff2c3c0817"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "28cb5c5771a6863b8b141b72cd1cd667"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "07c2552d0bdc2e75f4b3d4385959f0d6"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "511ddfebe85589b7966e3d4dd08b12d5"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "9274f0807e94ffa580c5eb397c8155c0"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "0b15af6d8e21c565980c87a5e2429a8a"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "a57cc1bc21f426d1d922ac431e301b75"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "37ec07b052feab24da1c1155c9f75d20"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "9024f0c301d9043adef791236feeffb7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4c40fb390fab740da454cd1c7834d4fe"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "23ec32b5266d71306d4989c3013337ed"
  },
  {
    "url": "tools/github/index.html",
    "revision": "791c6dd9689990c68791cfd02950b6a5"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "fb124989062fb256a1c2d0c3b8f0b592"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "cde49afbd483eed0708888e585c0f5e5"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "9b62668874467c9d6db7bca460934967"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "97d0e933c65c709c6599b7378d809823"
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
