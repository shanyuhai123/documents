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
    "revision": "1f5f1cb66225a622808a1a65409dc5bf"
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
    "url": "assets/js/29.ebfc4f45.js",
    "revision": "7c9e31b3c9fe044d54830e121e34b223"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.d48f9207.js",
    "revision": "92b7dbd1c5d45689347a69f86a194818"
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
    "url": "assets/js/51.5107f58e.js",
    "revision": "4039d4302fc61b36863a9a8a52757905"
  },
  {
    "url": "assets/js/52.d2a47617.js",
    "revision": "8ee5a02964d5c7e6483a8704f071cc79"
  },
  {
    "url": "assets/js/53.cb6b56b8.js",
    "revision": "56b3a5f85aeca27b6c60326a93daef64"
  },
  {
    "url": "assets/js/54.f35f1799.js",
    "revision": "c58da78200c02dbef6da4423b88f89a5"
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
    "url": "assets/js/7.4cd9379e.js",
    "revision": "31c08ebaebdd7d1b26ba56712a1a88bf"
  },
  {
    "url": "assets/js/8.869df4a0.js",
    "revision": "576d4efcd8c517d79266d43582a82882"
  },
  {
    "url": "assets/js/9.a8fcccd0.js",
    "revision": "03a8b3bf169646cb8f00bf3d2f9ba498"
  },
  {
    "url": "assets/js/app.daed5f10.js",
    "revision": "267a6095d8b225e02349cf453b403648"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "b508d62c21bff9420f3ac7ba7e8c8036"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "f2bf7e7b76105eb77756a0aedef770a0"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "fac895b10cdee50329ab05d1048a77fa"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "7bfff6d10eb4c92a2929a7e63725a173"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "a13962496e72d8b07459967e80da8137"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "be3242afd24856ff61a0765094f1cf1e"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "e8ff3ff381e90e4389fa501f38d528be"
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
    "revision": "d15dc0d8297b13ac6d0967cfd7bafc2a"
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
    "revision": "5b5bf6fa716bce8ac1fa369f32dcd6fc"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "57ab0dda202d67b234ae6e46f2936599"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "d24178e6d57a1f5e46aecd1061f1c992"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "5a6bf1ff4eabb994aaafb822bdf2423d"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "1de474be8ff0c7aebfec5edf3b89a590"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "7219ce38096d953af8d80d1924ffda63"
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
    "revision": "d427b8df55a244697b7057ec6a0c3bc8"
  },
  {
    "url": "guide/index.html",
    "revision": "249aa70937872597bde05507bef4723a"
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
    "revision": "7b305c3b6f0fd280b18d582445350951"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "8135ff08ebde84eddfd52dff7d222f15"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "4821e268e2cbc07d5b9ccdca345a986a"
  },
  {
    "url": "more/clean/index.html",
    "revision": "d382be5d042763763d7f212f3ba6a063"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "52584aee55e2284707270e82374fcb9f"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "6a2cb86cb39656b441eb117b11749358"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "fa0b82adc726c7e93ca243f62280c341"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "f255b98a59959c3802795449d35d9fb3"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "e7538cc9c27b62f146f224c85a041ee3"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "d69828a88240470ab75b976a01e46e07"
  },
  {
    "url": "more/interview/index.html",
    "revision": "89ba0f30a39e7f178c6fd6d3c6015207"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "c0cf4095e2cf099dab85e295ae1e86d6"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "467dfa9b3611e25a880dfb4b9acb7ddb"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "ee0fa19ecde870686312947d97c3c269"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "9d40609177db66f11d127c160207911a"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "7a5a2d9abd488c3b73266ad334fa8c67"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "7bd202d4ec7e8eb3b58382b663eb1482"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "ef68c8cf141ffeeccdabaeb9fa089c3e"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "94db39049bcd27e31f1e1572aa41ff05"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "9afe2215ae29ff771f39689ff108078e"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "6a4c430836c04b261f74ec0ecf9a253c"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "188528616fcdd5fd999a75c9c51af525"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "85b519f8a1fa3c116a0465ac5a285c25"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "760ba894b17e36f2eff4a2795bb6ceb5"
  },
  {
    "url": "os/windows/index.html",
    "revision": "9046e80e2635da215ba527764f555434"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "f02a1c6661cc162e2add1bb25b82380d"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "78be225f302800c10c776e789b69e293"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "51bc6e452f67b682f11df02a6a4b3b7c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b79e50a2f5ccc326c7d55cdf98868fe8"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "983f7de6da31c1339ecf7d8edca87bb3"
  },
  {
    "url": "tools/github/index.html",
    "revision": "6c7f8ff181b1b5d5896a09266ed45645"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "6e7bc8d18b6ae8092796137166f88c3b"
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
