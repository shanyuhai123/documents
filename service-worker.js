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
    "revision": "e59037d525a6d54b929789b3e543cb2a"
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
    "url": "assets/js/10.5e5a5fdb.js",
    "revision": "bf698c61286ad28987829ccffdea61eb"
  },
  {
    "url": "assets/js/11.fee84839.js",
    "revision": "8eabced022e8883e0923c7beefd3093b"
  },
  {
    "url": "assets/js/12.e603a5c5.js",
    "revision": "5328e2ccf7fad71d3387db829df72359"
  },
  {
    "url": "assets/js/13.2af8fb0d.js",
    "revision": "58c424073c38263d781a42fdd5155ae8"
  },
  {
    "url": "assets/js/14.10799f7f.js",
    "revision": "bcc1cd8a7942ab274e140ba7ce9854aa"
  },
  {
    "url": "assets/js/15.c4e706cf.js",
    "revision": "edf50881e231136610eb9528030aa345"
  },
  {
    "url": "assets/js/16.7e36f523.js",
    "revision": "2c09d9111ac411c8cb470e1532060dff"
  },
  {
    "url": "assets/js/17.654b9912.js",
    "revision": "813770164b4b45697f6d8c13fe7600b5"
  },
  {
    "url": "assets/js/18.7f8d9b8d.js",
    "revision": "9a3a20e529f45344a2de73382aedf8fa"
  },
  {
    "url": "assets/js/19.7ed0026f.js",
    "revision": "44cacec5cb8976e26a276488d303a6f1"
  },
  {
    "url": "assets/js/20.10c3a941.js",
    "revision": "5ced017ad54e8521ca8747790d3cc064"
  },
  {
    "url": "assets/js/21.11a89811.js",
    "revision": "58d59754ee5cef071bb98c1929562c56"
  },
  {
    "url": "assets/js/22.8383a1e0.js",
    "revision": "c688d27e495cc13a2bd5c153c84f8c94"
  },
  {
    "url": "assets/js/23.6cae6057.js",
    "revision": "95dd85aa1ac1a5521cbd4dddbcb74a90"
  },
  {
    "url": "assets/js/24.f7245046.js",
    "revision": "0367c03bb1533b527640bf88494fca4f"
  },
  {
    "url": "assets/js/25.a42ef332.js",
    "revision": "67369c88279d816e07520e5493c97d9d"
  },
  {
    "url": "assets/js/26.c778ae8a.js",
    "revision": "46fd20640b802d799215f5e5e51f1ed1"
  },
  {
    "url": "assets/js/27.92b45275.js",
    "revision": "ea485d23c7a11a8bb45d9279f76a251b"
  },
  {
    "url": "assets/js/28.ada8c03f.js",
    "revision": "530cf009948f1dfa47cc21ddb4fbad8c"
  },
  {
    "url": "assets/js/29.f39cb397.js",
    "revision": "f439157935304e89ef3494ddd5df5f58"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.7e835a52.js",
    "revision": "9904fce0c6a46369a5f6617578faf599"
  },
  {
    "url": "assets/js/31.414a24de.js",
    "revision": "a40112c7923f3e71cf406cdcb65ba3e1"
  },
  {
    "url": "assets/js/32.963d28f1.js",
    "revision": "d71a46ffe67b36c52e031dad025c8f85"
  },
  {
    "url": "assets/js/33.c310a9e0.js",
    "revision": "2f358953d67e33aa9858f62c38d07880"
  },
  {
    "url": "assets/js/34.c559b775.js",
    "revision": "1b3a608cd2a46dbca695c31f57fc9c4d"
  },
  {
    "url": "assets/js/35.27b4a436.js",
    "revision": "b185abe3afc8b550059d6de3ebbd72a0"
  },
  {
    "url": "assets/js/36.98128165.js",
    "revision": "e32fbc9682ce85856dbc7924615ed142"
  },
  {
    "url": "assets/js/37.6a5b090c.js",
    "revision": "79ecac7bf7657253b1ca13ca6c4c7f73"
  },
  {
    "url": "assets/js/38.3854655d.js",
    "revision": "e8158e0f4e88f50f6162bd28bad7fe59"
  },
  {
    "url": "assets/js/39.dcb0fbdd.js",
    "revision": "69c1ef9086ea3374ff9a980af8370ead"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.c6066102.js",
    "revision": "4789d52931ea2f9e6144b5f0caab87d3"
  },
  {
    "url": "assets/js/41.9942644a.js",
    "revision": "45c30911483742d06b928c1038a2e7ae"
  },
  {
    "url": "assets/js/42.a5043792.js",
    "revision": "4ae80d5acba08f422b52e1a72b2a98b7"
  },
  {
    "url": "assets/js/43.adacc5f3.js",
    "revision": "006d86380e23da44a07ad4fcb59ba20e"
  },
  {
    "url": "assets/js/44.65f11e92.js",
    "revision": "0ce28a37b20a430107050197fe59fcf9"
  },
  {
    "url": "assets/js/45.c920b318.js",
    "revision": "f8e981342446fb4493e58f86cc7b6409"
  },
  {
    "url": "assets/js/46.b49ef396.js",
    "revision": "d0c9247641d2f602364211867ddbb802"
  },
  {
    "url": "assets/js/47.976f61ea.js",
    "revision": "a1577697a3c8587f0ee215bfe169de55"
  },
  {
    "url": "assets/js/48.d9ab0e9d.js",
    "revision": "fccc72cc063658953e88bf4b2cf9f138"
  },
  {
    "url": "assets/js/49.93e8b401.js",
    "revision": "0393eb8a9a82baae1a4e4e73f7f49c65"
  },
  {
    "url": "assets/js/5.acc1f669.js",
    "revision": "1814e866ec1ead214c2dc033f96a13f5"
  },
  {
    "url": "assets/js/50.4af308fb.js",
    "revision": "7eab619aff04ca78c71c26840089439c"
  },
  {
    "url": "assets/js/51.24b9732f.js",
    "revision": "ee87ea585fa64bfe6466002f8c0f082b"
  },
  {
    "url": "assets/js/52.1314ee69.js",
    "revision": "74cfefa3d77f20f334ac89d1d88d9da7"
  },
  {
    "url": "assets/js/53.316fec2a.js",
    "revision": "24a2801f5cd63875231a62e7a33bb8a1"
  },
  {
    "url": "assets/js/54.8c79d73e.js",
    "revision": "7402c5322acb3ed7bd2b884e873211af"
  },
  {
    "url": "assets/js/55.7b31ab95.js",
    "revision": "b2af6933ef2d62554f6b00a21d1a8088"
  },
  {
    "url": "assets/js/56.38a0dd74.js",
    "revision": "fc48421a0d430b32d6d51693c8b120ce"
  },
  {
    "url": "assets/js/57.93b26219.js",
    "revision": "b9d23e2be6df249cfcc6c7814dc0f000"
  },
  {
    "url": "assets/js/58.5fd6910f.js",
    "revision": "a13417c0cf70af5e80dff51eba222b8f"
  },
  {
    "url": "assets/js/59.419eb08f.js",
    "revision": "f61acb9b15450ac3ae99831c3d8d58fe"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.fee0775a.js",
    "revision": "799bbe7df91a6a8ecdac602505078793"
  },
  {
    "url": "assets/js/61.0189a73f.js",
    "revision": "1718699274b1673d5fbe69ecfe935942"
  },
  {
    "url": "assets/js/62.5a001bb6.js",
    "revision": "0b51422d762b8948ad03545c669a5318"
  },
  {
    "url": "assets/js/63.365e8865.js",
    "revision": "e6f0824b91f3a43df8d1cc5e7a9a379b"
  },
  {
    "url": "assets/js/64.7c6ba19d.js",
    "revision": "4d046e2f2b0ba4308fd92be965a25413"
  },
  {
    "url": "assets/js/65.613bdf16.js",
    "revision": "4eb3df80329601f8d3c1c1d1e5177e1e"
  },
  {
    "url": "assets/js/66.8dda1685.js",
    "revision": "33656a78670a23b5891b37e2dc65d60d"
  },
  {
    "url": "assets/js/67.c5be154a.js",
    "revision": "2c12263ea7064ab38e557de86be51374"
  },
  {
    "url": "assets/js/68.afe9a1fe.js",
    "revision": "94a3cad9504d1ab4ad0de5deebf4f951"
  },
  {
    "url": "assets/js/69.5ce21859.js",
    "revision": "e3e40ccc80e623d23a4842affd92ca99"
  },
  {
    "url": "assets/js/7.78b91e0d.js",
    "revision": "554d0045845d4f41be959005c3ec572b"
  },
  {
    "url": "assets/js/70.acf97006.js",
    "revision": "7906ee1d627e42a734e0273af30d6943"
  },
  {
    "url": "assets/js/71.b0d99a09.js",
    "revision": "80db235316c8576bba03f1a5a1c6667c"
  },
  {
    "url": "assets/js/72.c6a469da.js",
    "revision": "e846ce07393f3c2fa4b6b97e0bade95a"
  },
  {
    "url": "assets/js/73.baa02553.js",
    "revision": "280083d66e7a5e5be0277b82164f30c5"
  },
  {
    "url": "assets/js/74.a91e3110.js",
    "revision": "fef2a2067fbfe5bd91f73707c412d3ee"
  },
  {
    "url": "assets/js/75.4eb57241.js",
    "revision": "f9b4a062553c5fdbd36a815f5a147008"
  },
  {
    "url": "assets/js/76.08cbf7a3.js",
    "revision": "77a9bc2e4d2d04c0cf9bfdc689cfa424"
  },
  {
    "url": "assets/js/77.c0959291.js",
    "revision": "30a94502896c653bd49c9fd9dddefeac"
  },
  {
    "url": "assets/js/78.eeb6fb45.js",
    "revision": "0c3eceb89ed6aebf9b96e39f1550f601"
  },
  {
    "url": "assets/js/79.3050686f.js",
    "revision": "b511d39474834ce3d868c039d8dddea2"
  },
  {
    "url": "assets/js/8.c78f8716.js",
    "revision": "aebcd3f075eb6d3e67c11ffcd1fa1dc5"
  },
  {
    "url": "assets/js/80.80231863.js",
    "revision": "cb9011bf840f8752b42ee12ce4703719"
  },
  {
    "url": "assets/js/81.c8ee7dc9.js",
    "revision": "f06413b56ed765a38d547f2787b8586a"
  },
  {
    "url": "assets/js/82.055d3aa2.js",
    "revision": "48733fe87d6194ab6a5b71cb61cb70a3"
  },
  {
    "url": "assets/js/83.b594574d.js",
    "revision": "8e33f76f35e7988a2f1fbaaeaae0aecb"
  },
  {
    "url": "assets/js/84.026c3053.js",
    "revision": "66e774e1114c5e8acb62bb220f3a756d"
  },
  {
    "url": "assets/js/85.a2dd7de4.js",
    "revision": "9487d1654f505c31bf12b0bb26a39e60"
  },
  {
    "url": "assets/js/86.5d8ea2ee.js",
    "revision": "d7649a20d80ed5b07a58de4753901320"
  },
  {
    "url": "assets/js/87.48bde059.js",
    "revision": "cf584251bb3782a23ad0e71a5b8bca67"
  },
  {
    "url": "assets/js/88.4fc9dda3.js",
    "revision": "6b78ba844898303987345750cc663a76"
  },
  {
    "url": "assets/js/89.dca85373.js",
    "revision": "bce767a6bbc5389d75f9c5892f769f98"
  },
  {
    "url": "assets/js/9.b4a73007.js",
    "revision": "978cb99cb2ab0babdc1ee73119f74095"
  },
  {
    "url": "assets/js/90.d656226d.js",
    "revision": "05aa04c374977b6f3d88564877b08a9e"
  },
  {
    "url": "assets/js/91.f091c0ef.js",
    "revision": "603e4b3ea22187a58702f2b04415c371"
  },
  {
    "url": "assets/js/app.4bcd147d.js",
    "revision": "089ac75253f70d73a4805f0a87870919"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "f450ead84ca7345aff94ccebdeb94843"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "0b7615b9170dce22b355c91758b03d3d"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "9a2ff41e3a938dd7e7dd59c508b2839c"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "c9a6ae9f63ad6949c964e7281851c596"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "15dcb413c81dd4a50c3a121910c690cb"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "d5cb7c8744ca1947af79458d0874bbdf"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "267b04c1cdb57c0bfed088aab2008087"
  },
  {
    "url": "computer/index.html",
    "revision": "bad6677ac363bdde2b96b89869a4c9e0"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "cdab0f3cbd10d1702dcc723cddcd24c9"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "842b95566f63979c35c730818f0bfdf6"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "691d3c372fe952339915dea92cc8d00e"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "2cfa7b892ae79014041bebd8470b72e0"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "e832b0d7555834e2bde6ade211fe633e"
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
    "url": "frontend/javascript/function-methods.html",
    "revision": "9039649002982ebf9fee91d3ddd51529"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "5885d2b37564d10906cc2ed0011e5889"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-freeze.html",
    "revision": "29149e3182a88b1308bbd45a9620aba1"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-property.html",
    "revision": "bc9d405bf67f589ebf1ae5eaea8cc31d"
  },
  {
    "url": "frontend/javascript/object-constructor-methods.html",
    "revision": "8596c052c7ce6b078683209c90b77b4d"
  },
  {
    "url": "frontend/javascript/object-instance-methods.html",
    "revision": "8794b3d630b7cfd4f84597ed98932a72"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "c857650cf9ba88a5a75a4c2121c50659"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "c2484589c33511ca4f7edb8a1e19567d"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "52b58da28ff4905aee8adabffdc8164c"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "53e27ab2c4426053103806a67392c954"
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
    "revision": "6cecee18ae82a939513be68825fb6a44"
  },
  {
    "url": "guide/index.html",
    "revision": "8ac57c79a4c78140ed201cf0f4dfdc3a"
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
    "revision": "96bcc488be11b627f6d43feb0f676b79"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "1fec1a79066b9e79134e370a0509f70a"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "366c51c32ab2f616e4ea23cf655d0654"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "344b508466f6daaad0eab900e9bc46e5"
  },
  {
    "url": "more/clean/index.html",
    "revision": "dae2fc7d459dac3fe27bdaf961a3bf27"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "269d324c1e0b34acdbdfefc347fef9c8"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "7957bd8e0f045213cac4f9b74b7e7428"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "719bfaab949143bba0bb96274eb80b9e"
  },
  {
    "url": "more/hodgepodge/maybe-optimization-is-needed.html",
    "revision": "eff31fd912fd953145bf076a8d99e742"
  },
  {
    "url": "more/hodgepodge/mpv-keyboards.html",
    "revision": "7bd701186d84a5d643525acb9dab66ee"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "585ca6c95262cf7025d2e9fa6722def5"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "b910d3b11c9738e1e7f4130a94287923"
  },
  {
    "url": "more/interview/index.html",
    "revision": "004abf0fd33fc351d67ef4ab28f0f236"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "634d3d16bf34da80c9877fd03c3b01a0"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "5724f13424001b909fc6019adac5de6a"
  },
  {
    "url": "os/centos/index.html",
    "revision": "22c05f3d54cdcfa1da8632706cf20e12"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "8a8555535ead605c47d7354fa7a65cfb"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "64f4f632ace5341fbb5bdf5eaf2a7198"
  },
  {
    "url": "os/centos/modify-the-network-named-eth.html",
    "revision": "9280ec4cb25054a0aee261743e5c0736"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "2134667d1b4f7cc00b1cb98927df1da7"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "fbcd4befff6a7d8e2ff15ea4df6fed02"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "8695e03f40e87705bd62ff49d4684c92"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "1faeaedbfe1aa4e34f713feaa816c2a3"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "6091fb0151a798d10b00f8a9854e642a"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "a97266d5f83a8e60127a8d734823a22e"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "eb9a4d353788675ab5659b9dfc957fdf"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "ea924481cdc667a1603ebab41a06f4c5"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "eab6a53894f24bce38ffc79857f4dd38"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "a854da1391536cf6c31415ae76970e29"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "53dffdf132803270262ed1812699feea"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "53b0f6609a3447b2ea1b346d632208fa"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "80ce5964b221c74bd6b5113dfa9385b6"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "3d2aedbd65eef20370737601a3f4f49c"
  },
  {
    "url": "os/linux/index.html",
    "revision": "d3926dd89a6431dcb643d8b2dd64be83"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "c28f047d8141dcf1925a3ed9e84fc908"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "9aee71dfc4c4eb07fdb013c430bbd694"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "57929b260e7f632e1c2b9c475d030d42"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "fa183ae736a0586cdc41134e5063c102"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "386826d88f37d2523046ccb34b928aa2"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "6b01fc8d49be653f4bc880e0899ab6cd"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "064797bd1b3b89b54455a4a585228876"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "73085fa803b57fea89bc7662ccf68413"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "a96f6de18f72c33dd19d247ea05a720a"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "14d3dd149c942db6665d11660cef4eb6"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "8f5ec6c50c15d031fbb10402892f0bb3"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "649c601efdd1f91758129b25241afc11"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "a04e9f14bad03f937a699a8d858ceb93"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "26a104a654035fab46e297d9786c5c6e"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "01966354d9ea5509cc8f66837cc3716f"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "50beb1835ce366d7ce2e08e4d3037e3a"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "86f4a45874d1bb7d5fa1c5929b598308"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "6ae2b9b94d3a09d51141b26a9c7ef143"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b22879faabcc4972ec421bdb2fe1297b"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "68d3b9ee7146b14898274de0f088905d"
  },
  {
    "url": "tools/github/index.html",
    "revision": "13301559813b67fe8e0fd3c2920f0429"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "f83583f1e5943e5da50af24b28a8e4b9"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "023ceeccfcf308d73b947bdf6e4a72b4"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "ebcc334765ab4f911ce942cbd79d89d4"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "b8f36666ad24e99d5451630772bd73c8"
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
