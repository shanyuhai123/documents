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
    "revision": "9bebcf89ec669f4170dad8a78b51f723"
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
    "url": "assets/js/14.ebcbb5b3.js",
    "revision": "015738e0ad9f1c5248002f5f8ba97a67"
  },
  {
    "url": "assets/js/15.7be96a95.js",
    "revision": "b035f7c1e95e801efda8f3f358ef562a"
  },
  {
    "url": "assets/js/16.19746d91.js",
    "revision": "20cc8e4a7e46326fb26f7467b147794e"
  },
  {
    "url": "assets/js/17.decccb8d.js",
    "revision": "75ab7d2001b5b334f4a24c680a433a67"
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
    "url": "assets/js/37.e4e19d57.js",
    "revision": "65d69d462628570bc092adf42616ae04"
  },
  {
    "url": "assets/js/38.e2c2efd6.js",
    "revision": "f193b37e724b1c34c91a5c8dfebfdc51"
  },
  {
    "url": "assets/js/39.352cb0c9.js",
    "revision": "1687d6c34e25a73fe5a19521dc6abba4"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.ead96407.js",
    "revision": "921558838989e54f171c6ff80a86ecb5"
  },
  {
    "url": "assets/js/41.fee021e8.js",
    "revision": "0f8fa95493eb792dd411efeed2fadbf5"
  },
  {
    "url": "assets/js/42.7e0ee1ce.js",
    "revision": "84386673a28e5d62fe09eeb019838b8d"
  },
  {
    "url": "assets/js/43.2615fe7f.js",
    "revision": "fbee13060749be426450bffce6e922f6"
  },
  {
    "url": "assets/js/44.52bb939f.js",
    "revision": "7de57ac1705217c679a7377df86e80f9"
  },
  {
    "url": "assets/js/45.3c782e14.js",
    "revision": "9ce6078db3be0102d99e1a3fbb79c382"
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
    "url": "assets/js/51.9f45b91d.js",
    "revision": "d9c246ba36a0e76a037ca1d891a09367"
  },
  {
    "url": "assets/js/52.ed723588.js",
    "revision": "427b5ddae7c5af50eaf89df4c26908b7"
  },
  {
    "url": "assets/js/53.8cc45e3b.js",
    "revision": "eddc3995b6bb18560b2871afa9e8bd36"
  },
  {
    "url": "assets/js/54.f2d02c71.js",
    "revision": "62c34af1bb835a285e9c442f39f1f934"
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
    "url": "assets/js/app.4e7a19a5.js",
    "revision": "5700c1b464ddb4a2e5e199e1595ae9ca"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "34e341eaf84eb0770c2bcfbf5b3c64ff"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4cb2097703d1df330c40cd7cc8eb39e1"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "17f377a08d873e5771916f9ca6d7ca60"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "3cf90897c1ebc1a17f55dc4df1793ded"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "63a31ff9a562ae8eccc75a0940b0309a"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "5b0c3f00d6228bc7a32dac34b4495a14"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "b879a62ba585658ac68c8a36530755cf"
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
    "revision": "a448b6560abe6e45a74deb2c5133b3b4"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "207498334ac7c2d27f0198e3738a607a"
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
    "revision": "8a7c384ee0e3dfb98b3d4f4a492d7005"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "43e6f12283eaed40892fd0d836870890"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "72d77c63096de6a418b3da130d560361"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "83820630168ecb72f970adfc83fa21cf"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "23f8248163529516a0f82e366b7e5f22"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "d9d08b5937cfd35c4b33e98982e260a2"
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
    "revision": "a4e14db97056fbee127e8468feb0f4d0"
  },
  {
    "url": "guide/index.html",
    "revision": "416aba969ea12b1a826caa59014cf865"
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
    "revision": "578df0d4e2976a831591d90747c05b78"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "e04639f7ba8fd68d809b730552c32e50"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "d8fd2e3dd42a31bbf7f141367c9215bc"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "4b65c85a583fb69771848d0c21804313"
  },
  {
    "url": "more/clean/index.html",
    "revision": "88c5b99147aef312059bb3b8a80ff8c3"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "50c8660f22943e6ebba1a2ec01dc0cb0"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "729da8bd2a7cd140dffbcd461a043a2b"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "eca444bd63f7a6a3c569ba44bd43fd71"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "1fae73fae97f0f9b3d24227a109d27cf"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "a1d2bf3bb522814be4f5dc15ddbe3dea"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "3c226b0f00e73cddbe50cf494cc40f82"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "1517b94385012e0defecca7d2808b1dd"
  },
  {
    "url": "more/interview/index.html",
    "revision": "d77d2909b31e6af2a45cb9cddbd9f489"
  },
  {
    "url": "os/linux/index.html",
    "revision": "76d4691938c9ce44b39a1f4a83aa4a3a"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "361d5367b3dd1a92682abc1a57cbfbc5"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "d743491e8b44311449d4b033f2da4540"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "70fcc96aacb1ede5c01e91c23f769399"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "2903e4264037e32ae7bfee4dee8e5e33"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "461a3d1fe6c0d55ac6a4eccd5eb21b66"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "54c011f4ff6fccd623e03f5e18040bf7"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "a221bcc1c62f26537225de5485087f83"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "6f1ba42ffe333c5f423e1aac203a6fb6"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "0cb583da72248e8838c5fbca8da17a44"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "790bb332ef266936cd0c5c5819d18e57"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "0416a01c883fe845a9d9e92a6ee48d31"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "5dbe1753bfd01deddd47045d19283c75"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "3eda65ca72b86c3ca3518854127e263b"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "a40f012bd36ac01386833010adf1513c"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "50b0a0ac6e5549df031f2053f30137c2"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "8dddffd0796e2a4f5632b01e82e0e81f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c64beaf9de1a699fdd1c3ff1a925f17d"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "696ad7b09478dd0e5844b47d97a03b0b"
  },
  {
    "url": "tools/github/index.html",
    "revision": "79481e903c513e2a0b49938b15f2c1bc"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "06672462d6d7dfbb3617df055ffee832"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "a5629d5c794dbd4a5fb7e0a38517e82e"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "ebd5f66ba5f50d70d09afebc73f17169"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "0aa8b16e63ee6a0d643025c0701ad54e"
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
