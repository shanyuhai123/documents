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
    "revision": "2062d8115f787fc0c8fd24adb473b47a"
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
    "url": "assets/js/10.60bf0d48.js",
    "revision": "637453c419954dc4657c48a9b5a947b7"
  },
  {
    "url": "assets/js/11.db9b31d4.js",
    "revision": "601f09c09aac529bb623a847f858680b"
  },
  {
    "url": "assets/js/12.e81016cd.js",
    "revision": "e55e11ee4d64a6caf3ff0f0e290d543d"
  },
  {
    "url": "assets/js/13.a06e0d8e.js",
    "revision": "412a2653dbbe38d5ca00e33e0db1ff9d"
  },
  {
    "url": "assets/js/14.b3419dcd.js",
    "revision": "ffc801ba5cb1827f00f8aae0b3b87b40"
  },
  {
    "url": "assets/js/15.e627576f.js",
    "revision": "52b237886d25852c07401e2ceca6e329"
  },
  {
    "url": "assets/js/16.65f815d0.js",
    "revision": "96f0f430acb56d90710debab87da2aad"
  },
  {
    "url": "assets/js/17.ee8f7e4a.js",
    "revision": "6d676bf94e60d077bed74673fd5af8d5"
  },
  {
    "url": "assets/js/18.59406c91.js",
    "revision": "1ac38fc757e41445e0e3ea18ad3bffdd"
  },
  {
    "url": "assets/js/19.a1616b2b.js",
    "revision": "2a805449c30eb0dd5ce2eb961ee5615b"
  },
  {
    "url": "assets/js/20.db79fc78.js",
    "revision": "35fdea94801fc01ef2d44b4080d411d2"
  },
  {
    "url": "assets/js/21.4ab02126.js",
    "revision": "daf33fb17af3dafc3681e382d57f367d"
  },
  {
    "url": "assets/js/22.e468eb2a.js",
    "revision": "80bb07b5715695c8c25470218a7f5e0d"
  },
  {
    "url": "assets/js/23.62e53553.js",
    "revision": "a7fd23fa0d3d8c4d12d779b2573102bc"
  },
  {
    "url": "assets/js/24.dace6d29.js",
    "revision": "61795bfefd40ab2a842f235977524d1e"
  },
  {
    "url": "assets/js/25.1f5290fe.js",
    "revision": "544a669b6fa48030750b9dba3ee567d6"
  },
  {
    "url": "assets/js/26.858d4cf0.js",
    "revision": "f88050db0ff00bdcffe9b9b1f602824c"
  },
  {
    "url": "assets/js/27.bab7dc89.js",
    "revision": "65640be1bfce89cf2cf33fe5a29244c8"
  },
  {
    "url": "assets/js/28.0390853c.js",
    "revision": "9215f28f3562c552282cd0018cd8c14e"
  },
  {
    "url": "assets/js/29.3fd2d724.js",
    "revision": "3b37579a290e7e340b1def8ad77a2685"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.21a85c25.js",
    "revision": "eafd5918acf26e34ba0b29f2b6f7249c"
  },
  {
    "url": "assets/js/31.dec6f2a9.js",
    "revision": "07b1c16509c56880882d69bbc5b3f36a"
  },
  {
    "url": "assets/js/32.eb5f71c2.js",
    "revision": "09dc5a9fe4b71f9c10e6ba5e9eb64f37"
  },
  {
    "url": "assets/js/33.a0048244.js",
    "revision": "2276ff782d133d9cb86535f5af0a023e"
  },
  {
    "url": "assets/js/34.3e555b67.js",
    "revision": "4b3ff82c3959831048504078fc2581e9"
  },
  {
    "url": "assets/js/35.fb523d70.js",
    "revision": "d4f1bd600ca5085da1e72539c8c69ff6"
  },
  {
    "url": "assets/js/36.a929c9b6.js",
    "revision": "2aed0f0bdecc63c41875178c46bf5bbd"
  },
  {
    "url": "assets/js/37.aff187f3.js",
    "revision": "b532adc191201782c642ef659f4c7e1a"
  },
  {
    "url": "assets/js/38.229bb9b4.js",
    "revision": "b7b9017daf4d16cecda45f05293487c7"
  },
  {
    "url": "assets/js/39.cba9acfb.js",
    "revision": "a9d1a7c9cfe973682c5e46d1eb2d2876"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.1a62bbf0.js",
    "revision": "251683c4012d1eb84a14e41f87e0c38c"
  },
  {
    "url": "assets/js/41.0e8a83f7.js",
    "revision": "c155b98442cef27df521e6c1fa7048b7"
  },
  {
    "url": "assets/js/42.adb968e7.js",
    "revision": "ca16fdef2cfd603c6c833af8c6429ddf"
  },
  {
    "url": "assets/js/43.67f365d9.js",
    "revision": "acc9e09ef64a688f2cd3db22411b5845"
  },
  {
    "url": "assets/js/44.16a7b448.js",
    "revision": "a809a64292115d1a425cfc6ddc2a411c"
  },
  {
    "url": "assets/js/45.44301ec5.js",
    "revision": "00a7d5ae9a8f402cdd19f277be78d3a5"
  },
  {
    "url": "assets/js/46.75fde350.js",
    "revision": "177d7a8afecdbea91f59652fbfbbc4ef"
  },
  {
    "url": "assets/js/47.28ca2d94.js",
    "revision": "87c32f917a3b87d2c66e91a0a339961a"
  },
  {
    "url": "assets/js/48.71c6db6e.js",
    "revision": "68870ed03982f89f18c24058707aa97a"
  },
  {
    "url": "assets/js/49.e691a4b3.js",
    "revision": "2613814fcf78b34d044b51e23ef71a75"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.eba6227d.js",
    "revision": "db18294f02726da05ddbaef0383462c6"
  },
  {
    "url": "assets/js/51.4190fcd8.js",
    "revision": "80875d773936c4920aff608f58156424"
  },
  {
    "url": "assets/js/52.fc8b85c1.js",
    "revision": "f284cdc094d008c9961ff4e29b4d170f"
  },
  {
    "url": "assets/js/53.90fa768d.js",
    "revision": "7a13d99c41bc56d88a44c2634e9b2f6a"
  },
  {
    "url": "assets/js/54.017e2942.js",
    "revision": "e950ca08cd160dd5538967b06bcee9c8"
  },
  {
    "url": "assets/js/55.3d15e27a.js",
    "revision": "934f6fa59db21fd79c39cf0ecdadb279"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.1c2ddaab.js",
    "revision": "810ccc2bd85489c0285abd1266e9391d"
  },
  {
    "url": "assets/js/8.05d08930.js",
    "revision": "c694e9074c412394f977ea6ff89fe916"
  },
  {
    "url": "assets/js/9.a8fcccd0.js",
    "revision": "03a8b3bf169646cb8f00bf3d2f9ba498"
  },
  {
    "url": "assets/js/app.60dd63f9.js",
    "revision": "5dcc21c8a95a469342f09cd7079a77a3"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "5880721ef91598a6967a148000fc5b11"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "ae4488ce28476ba171b524b7fcac64bc"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "2da209a0513b6d573a37fa96e1363718"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "6f829f8a413758bf8a477840801d8bf9"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "8d4ddf0d066cb4db56df09396894f977"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "210971a0e1a9ba8f0c862b7253eaf244"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "f047c5438f6cc492d642f3f2fbabf40d"
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
    "revision": "a3bef88d8d71e343a0874ea5f35953dc"
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
    "revision": "0e3bb11cfa82440b576270006d3cbf18"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "96fa790b602c9b7fad9b861bcc943a00"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "d5df13eb61a288b13be882aa0d0202e6"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "6e47a545fc624760fd00fdb279c58c7a"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "900df1d01d67a52f639e119418366efd"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "d9ec4f2049d4498208f0b82017e0c927"
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
    "revision": "4156394eef1347e22146e736d6b3fa44"
  },
  {
    "url": "guide/index.html",
    "revision": "d27d416877fea191494216679460a046"
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
    "revision": "be210743193237043fd47d10a657c941"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "f5e667f83b8f017eca7b5e96494aa54b"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "40277ebdada7d66bb60ef055e54622b3"
  },
  {
    "url": "more/clean/index.html",
    "revision": "c28ad1988b7e7f4e4c4edb51901b049b"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "e179b83ba344cfc45d34c1562754309f"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "d6dcce5fbb9cac283cd3f719d5e41cce"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "04ad1920153124e44cf9a1ac07644d53"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "68154b4e4630542d5b0b3e048a47bb6c"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "f560af5ae631c1495f827c021c3b2815"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "4ff5a6f09296e353828d76e247dfafd8"
  },
  {
    "url": "more/interview/index.html",
    "revision": "810653b251006bdcf4b22a9ef94774e9"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "752bb11a905572089e85b094780a6e14"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "a35ee7337fde9b922ea4ebd90f574141"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "7b563a62ece3ce0df766ef467d8d1910"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "ee76402fc1b813da8a937c51d0e8813e"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "7e7d11c8bfe18b9ac30a91132f14bb92"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "e82cf629ffe84be5b2360cc5089c0820"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "d809fe4d5a4388f619600030ff0e9fa6"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "2a0811318db515285fa57941eb9379c0"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "5cfbad92e4479abef9d0ab3c9ee09535"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "0320e6620a3a5ba82b9407e354eb130b"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "517cd9ba76d96e489e418b299807febb"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "b0d3a1150d00086e8304cfad64f174cd"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "a99408389a778b7dce978b51da2438a3"
  },
  {
    "url": "os/windows/index.html",
    "revision": "fe9599d1e0bcc5173f0ecf8f9f844312"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "f02bc63ecc71b090ec5571ffd5b9af44"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "eb538136e226c933cc35ddac1cec839c"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "00b4e67b05fd3d9a331cc325b4e3ff33"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fe7eb448995ba8c05162ee62aad090b9"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "b919164aa330afa1966c25babed08265"
  },
  {
    "url": "tools/github/index.html",
    "revision": "e92001203d9e0a14f5a474df401e8ba7"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "c291041d7071b09917327be007416f5f"
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
