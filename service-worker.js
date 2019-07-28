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
    "revision": "10eae5cddeebed6281b3c7af0caae7e3"
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
    "url": "assets/js/16.a2ae9788.js",
    "revision": "8c6112ef705d9e8f59dbf0ecbe464a85"
  },
  {
    "url": "assets/js/17.755bdcce.js",
    "revision": "5a9513312dfaa162326aab21907a23cd"
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
    "url": "assets/js/21.67a58981.js",
    "revision": "f933072f1b2064e01268890c1fe1dcf0"
  },
  {
    "url": "assets/js/22.2379bb22.js",
    "revision": "a3f9279470f6dcb337a4372da6c6872d"
  },
  {
    "url": "assets/js/23.0e8a0b9e.js",
    "revision": "56cce7cc4100a462b39784316922c0d7"
  },
  {
    "url": "assets/js/24.283d055e.js",
    "revision": "eca88da83ed073c00bdd3f7632d00869"
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
    "url": "assets/js/32.adc82719.js",
    "revision": "c78572413d9a47d4bcad6ad99ff16ec2"
  },
  {
    "url": "assets/js/33.450322c4.js",
    "revision": "c68ceedc22e797877607167e194eb39f"
  },
  {
    "url": "assets/js/34.98bd5a41.js",
    "revision": "bdbb44b16b42f3791bcfe6ee776807ae"
  },
  {
    "url": "assets/js/35.39cb7b25.js",
    "revision": "dc6ef1a60f2b1d8956a0fab73c3caacf"
  },
  {
    "url": "assets/js/36.0f0426db.js",
    "revision": "d38d813ad3b56ee25283a8e6c441c60e"
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
    "url": "assets/js/40.6724d874.js",
    "revision": "66b4e4f7ea100696335fb056016cbbd6"
  },
  {
    "url": "assets/js/41.c33bfdd1.js",
    "revision": "41f95c7719089ad2ceee7ef04328c63d"
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
    "url": "assets/js/53.18a8b8a3.js",
    "revision": "caecb473e89ac1fa464717e7dcd4d207"
  },
  {
    "url": "assets/js/54.aa657439.js",
    "revision": "a95f9b2704dfb1dadda31a5706cd789b"
  },
  {
    "url": "assets/js/55.78fa757b.js",
    "revision": "a7685c2b65fd7c76d5314f95db9864df"
  },
  {
    "url": "assets/js/56.fd64c67c.js",
    "revision": "5773476d5fca991b499df0a90e7200b3"
  },
  {
    "url": "assets/js/57.32e73aff.js",
    "revision": "3fbc3eab3d5d756fe106507a167c0394"
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
    "url": "assets/js/app.ced33d39.js",
    "revision": "1e4936b6ac8a38c653ff2b7252e20669"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "8b1f54666815f3da27877abed1c66aa6"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4fefcaaaf0d87e37c243de6645d21bbb"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "2c43a5b40083f70f4a385969419aef21"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "cae0313925ce661f1c8c0fb71361fde9"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "53bda1cfdded0d05d120de55a1980eff"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "6934decf5edf67343aada2eda0f061c6"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "2a492e4e320c5a134f36ecc9ba0cbea2"
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
    "revision": "edbfbbf2711d01b7c3e2f7604029dc9c"
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
    "revision": "f0fb164f6e76f38d61209903b535d606"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "0b58a2d6e7425a2dda23243cf4816bd1"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "19e633615b3863cef43a270882e1c937"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "944280015f03e5e16ba2a38fd3dc0a52"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "0e71d88373aded7d9d8c46e85f90f6df"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "41a6b1af5cc6bfcf24129487e96c67bc"
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
    "revision": "e17b1acc1e19fdd278eaf8525044991f"
  },
  {
    "url": "guide/index.html",
    "revision": "916942962f83ba43d2742db5fe3a29df"
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
    "revision": "bb4d172ab6c261cd7689c336e8ba2a72"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "56e519b4233ebbb3c52bb48050abaa98"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "49210e3741d7bc217fd15fc8b403ebfb"
  },
  {
    "url": "more/clean/index.html",
    "revision": "bb2804cdbb8da1cd38373225ca00d6d4"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "fa142d0b27fb724ffd3e43f0e4d23d40"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "455ac4130911f2ac23ef9fe6d7ff8483"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "2ae4c497932596c9345c538a283c1977"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "e7eb9562ab8bc78de62bebc5e8c1308e"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "a0c76a90901b3ed1379778fdbec2033f"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "6bffe200427aaf1b4da68413b1e14038"
  },
  {
    "url": "more/interview/index.html",
    "revision": "d5c599c66bf4413daa6a39355ae11452"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "42467ae697fe8f4f502b956719cd63a6"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "7b366021f7f1fb29e7fd59d693787304"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "b2d8dd7203364bb87c37e4911d1425bb"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "217a7389232e9bf5ae41144613b22163"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "2e79951cae3c5758dc060e4ed0e5952e"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "19419348568ce8655f66a189a8c2025e"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "8b5a11cfd233b8abd3b8181250497080"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "7d4eb8d1e62bb76ff008b9915b484794"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "9488a98afe23bc8d404125855516b03f"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "8afa443978f04a7d6cde409039b1e1ae"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "6f51e90d8768692fe9394f406b544e67"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "35dbd4f60620df5bbc6279519cf8e02c"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "42373a77630b2aceeab869e391658c93"
  },
  {
    "url": "os/windows/index.html",
    "revision": "17d28061f446ed264b60109626d75f16"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "bc5fd40d1566fc62ecff045ae1d342ca"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "30c10786e72827f49d36c8448d6bb283"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "4eb1599f9ccea8426e548c63c044af4c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0c102bab92adab12c4ab53e6aed3c719"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "b8c5a90baf964183c144b5078723a2d0"
  },
  {
    "url": "tools/github/index.html",
    "revision": "785d64ccfe8ef3ca3070dc5ea5896f90"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d438193fd0899cdb499d8276e98b9273"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "ffebd4f97a8fda1ba4a62e355437e250"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "bce744f73d12b0ecf7e9d51aaa2511c0"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "3a85de8062563b7a6d7dd5b323094b23"
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
