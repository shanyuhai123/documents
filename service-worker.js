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
    "revision": "510844fbbecf6a6c800ca56716ceb617"
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
    "url": "assets/js/10.51e1ba70.js",
    "revision": "053c11c80ac17a54e5a4d33e582f3127"
  },
  {
    "url": "assets/js/11.57d36c8e.js",
    "revision": "7259f5bd8ed722e45d87c518d5465c7e"
  },
  {
    "url": "assets/js/12.8e47d19c.js",
    "revision": "b6be76d0edc7fa9bfc46969b56f87716"
  },
  {
    "url": "assets/js/13.6603b0c8.js",
    "revision": "b6b4d3e770939b8ad174a4fd740fa583"
  },
  {
    "url": "assets/js/14.e05ea3bf.js",
    "revision": "1af4b472ac28233b3891b93cab338aa0"
  },
  {
    "url": "assets/js/15.94397d87.js",
    "revision": "71455a75daf29b802f5aab747b2dd005"
  },
  {
    "url": "assets/js/16.2f6a7edd.js",
    "revision": "54cbebc1a4564653d206e331894aa97c"
  },
  {
    "url": "assets/js/17.1978584a.js",
    "revision": "9b1774addb769d60520ddb51c6de4efc"
  },
  {
    "url": "assets/js/18.f25ba1da.js",
    "revision": "59c10088100ee45addd3c6dadb5a1c90"
  },
  {
    "url": "assets/js/19.5a3732db.js",
    "revision": "4cd8171316494c05829847d7ac53f9e1"
  },
  {
    "url": "assets/js/20.0c71b01b.js",
    "revision": "2e7e6a63bf3469fd61662b8b5f986495"
  },
  {
    "url": "assets/js/21.8ba682b4.js",
    "revision": "ea98b2bacfd953b5a8f8400dae49cefd"
  },
  {
    "url": "assets/js/22.e0b60792.js",
    "revision": "26139ffee747154ffe6304cd7a63c18d"
  },
  {
    "url": "assets/js/23.3bed2211.js",
    "revision": "60d55f399b7630b3337c0df759f3324e"
  },
  {
    "url": "assets/js/24.35c97ea8.js",
    "revision": "7e99844787367269a89789201d0d16ec"
  },
  {
    "url": "assets/js/25.2e72b861.js",
    "revision": "bbcd8dbd7d1e26f144d51d385a746aee"
  },
  {
    "url": "assets/js/26.a10b0691.js",
    "revision": "ceab5bd55781c5048d1ba10980736180"
  },
  {
    "url": "assets/js/27.f219687f.js",
    "revision": "958a836a0a226203240a51b1958801fc"
  },
  {
    "url": "assets/js/28.4b469175.js",
    "revision": "b2d30607ea009d3843748182446c4316"
  },
  {
    "url": "assets/js/29.5a4b07ef.js",
    "revision": "c21076391a0c74d32f80b6bacb536858"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.c7ba9292.js",
    "revision": "690d2980d4f2a4d01d7c2668dbe21240"
  },
  {
    "url": "assets/js/31.87464271.js",
    "revision": "b37776a8f5598f55d2911c920add5793"
  },
  {
    "url": "assets/js/32.f945b4cc.js",
    "revision": "d21cbaa125d9e4679cdc68aaf4beff14"
  },
  {
    "url": "assets/js/33.dfcb1332.js",
    "revision": "556efae757d3d38701d82d14a84cb038"
  },
  {
    "url": "assets/js/34.98bd5a41.js",
    "revision": "bdbb44b16b42f3791bcfe6ee776807ae"
  },
  {
    "url": "assets/js/35.406c6f56.js",
    "revision": "21978dab40390dfe984222f6bed21b1a"
  },
  {
    "url": "assets/js/36.b53f5348.js",
    "revision": "193290855829ecfed0924659bde8a463"
  },
  {
    "url": "assets/js/37.47264d34.js",
    "revision": "1b3849547bf601fb8f08adbb0af5b255"
  },
  {
    "url": "assets/js/38.25283435.js",
    "revision": "2cd1c1dbe96c741823e0ed81489be2d1"
  },
  {
    "url": "assets/js/39.2eb127d2.js",
    "revision": "427cac23b08b5904b588a3abec2cfd35"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.1fa9839b.js",
    "revision": "deaea378be78bb8af514c12e07ebf927"
  },
  {
    "url": "assets/js/41.be83c9ef.js",
    "revision": "e5ff6556f7959c81a28f730c60b0443f"
  },
  {
    "url": "assets/js/42.7be96aef.js",
    "revision": "56f709802c9710d428f2e4b89c1f7c8d"
  },
  {
    "url": "assets/js/43.291f934c.js",
    "revision": "63b9fe2d093a40a77a8ee7826beb3cdd"
  },
  {
    "url": "assets/js/44.9925a61c.js",
    "revision": "46ad4bf8e214c0fbd26433399bb8f4ca"
  },
  {
    "url": "assets/js/45.77588363.js",
    "revision": "278b58d15784a9d00aa9f354890d0980"
  },
  {
    "url": "assets/js/46.cc36ad55.js",
    "revision": "349e40153ed5007f8ad732ca17b3c447"
  },
  {
    "url": "assets/js/47.ff92ced9.js",
    "revision": "c4aac667bf9cf328fed33c35070806dc"
  },
  {
    "url": "assets/js/48.519e0a4f.js",
    "revision": "28157ef00f125b1802dc711e9bff9c79"
  },
  {
    "url": "assets/js/49.4b9d53c1.js",
    "revision": "cf2beb317ef560cc73d06eb1d2fcbeae"
  },
  {
    "url": "assets/js/5.c33cb045.js",
    "revision": "6c4724bffe513ebc6ba5612d54ac7ef8"
  },
  {
    "url": "assets/js/50.6b27db96.js",
    "revision": "b5f44835c0dd69436075d123fa1aef47"
  },
  {
    "url": "assets/js/51.595391ea.js",
    "revision": "b286e82452a925da58a85a9c1f6a9e46"
  },
  {
    "url": "assets/js/52.cc03d2f9.js",
    "revision": "486d1a5b6bf0207e4467994a279658ae"
  },
  {
    "url": "assets/js/53.30f27a4b.js",
    "revision": "1619cad4299665e3e319ccdce3f9d419"
  },
  {
    "url": "assets/js/54.5e48dd52.js",
    "revision": "12603a96ddfc8be402529c1858ab1ec3"
  },
  {
    "url": "assets/js/55.da27f3aa.js",
    "revision": "1a40afaa40a121bf8f9bef806fb2b992"
  },
  {
    "url": "assets/js/56.29d6c397.js",
    "revision": "ea05d9add001c024db270a120015ad06"
  },
  {
    "url": "assets/js/57.fdc6daef.js",
    "revision": "69d946705d9c1210b0595f262e9a1442"
  },
  {
    "url": "assets/js/58.45ea9904.js",
    "revision": "e5f37bfcabd7aaea0e3f2387ef8ac845"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.88aca968.js",
    "revision": "d290dcff09ddae1f46f3768ac1d1d306"
  },
  {
    "url": "assets/js/8.7f304c97.js",
    "revision": "8cbbf21c68e903e68de62d46dc8c10fa"
  },
  {
    "url": "assets/js/9.486577f7.js",
    "revision": "d573dc291b249d7251dd36e9772bb7c6"
  },
  {
    "url": "assets/js/app.507c1de8.js",
    "revision": "3acdf3b6451bf9ceaae6191cd89558f4"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "aacf10051a921df56a0c592099b5c650"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "0d0a762476aca5d9d4be3892223206f0"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "1384e50a31b519d75324c8e6e4b571a6"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "7866d7f1067fbb2145714263ef3abda2"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "137fc926c86a79422a78fe910140afc8"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "85be57f764071509a5423c4b4141e982"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "2242b1cc791b8ff7ed692c3c82407d98"
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
    "revision": "6cd542fb8e28c26b625869471ef68d00"
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
    "revision": "aafd891f6d6b923bdc63e54c9eac1e29"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "23ea6fad7303bace2a39625d171b3620"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "95757cca27b9780023261c29164fd271"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "4794fcd8c99b7f428392f01ea703fdab"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "9b244afe737d3141a752c2e195c9cad6"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "694fc36f701acdd2d9d2657c02815398"
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
    "revision": "ea1b4d94240b9567d53915fdb9a83985"
  },
  {
    "url": "guide/index.html",
    "revision": "c2d1c821ea159f14fb0d005556cedf58"
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
    "revision": "04602bbc850778d8e2967b2fcd44ae8a"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "53c2c8b5caefefd89162d4cc65c090c4"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "5f878f4ea34273f3015871667a681aed"
  },
  {
    "url": "more/clean/index.html",
    "revision": "9898e22185635bd0a536c0632e5957d0"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "d944fe844ed67bf66dfe27b3aec4818b"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "5d145e3afd9b2bc0588e3550d9ec9ad5"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "370dd7d01d821f3454a1ea411d0d212b"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "a5e153b2a1ce8d32fd03fde972d1376f"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "6fe16bdea9ee1ad47290d2df6eaa310d"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "68d7f4da6e60554eba934d51c5d5f6d0"
  },
  {
    "url": "more/interview/index.html",
    "revision": "784ed2b01ebea249a31479b06bb59e09"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "b5c1bdb19be6cd8431ceb94b17ac17fb"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "ae1479da68f4e83d782fdced3653dede"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "6ea8f8e2c10e2c356193905696df0a33"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "595833e833a0a32f63d2afde8a8f7755"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "c45695b65aa7b934985551752709b756"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "f4f8e820bb1320f74d85f8add9322a76"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "39476ce8fe59430abbb8f15225aa535e"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "9f0d844f959f8040ffbe89111ae42904"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "794388fe3a97192b1e9540996c5ed874"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "86b90b57d2404cb8104cda25d80065e9"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "4e9216614453fff6cfb70c8e2644c21e"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "a283da24351a0551940158b20c3326d3"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "76e88ddcce69c6ed8cb36c490107e372"
  },
  {
    "url": "os/windows/index.html",
    "revision": "03dd6978a1d4fa1985c8732161c9307f"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "7dd9edae77995e74bffff029422a222c"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "c04afd062dc1134c9fa08d88356d7175"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "800b28f556ebd4b60e9657b322a2825e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6a0243cb139513b2d231bf24503228e6"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "da72fc68c48aadb99fe04e77a0d4cce4"
  },
  {
    "url": "tools/github/index.html",
    "revision": "90951ea9dcd50fd8f642df209abbffcb"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "4cfd8a6eacfb84360214c0c5b75541ec"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "569d25d3146070244694dfd297d37690"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "3a96190d84059fc7de70cd84352b20cf"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "96337f25464b42e7db3bd0e552023964"
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
