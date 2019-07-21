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
    "revision": "eb71f90b8d384cc49e203620c5ba226e"
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
    "url": "assets/js/18.c6ec67b1.js",
    "revision": "c40992c2454a80bf838237cb68fd7cf9"
  },
  {
    "url": "assets/js/19.40ffe17f.js",
    "revision": "e713ff0dfa54fa3770f06100cd40ba34"
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
    "url": "assets/js/31.ff6eb9d5.js",
    "revision": "d9268a42ece9801390ff6e45d8c71ac9"
  },
  {
    "url": "assets/js/32.8d51d3bc.js",
    "revision": "3370bf1ebc1367b378661d877246727d"
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
    "url": "assets/js/48.9dbaa1b9.js",
    "revision": "3f6fd6d5ed49d8d8f0e33317db546fe0"
  },
  {
    "url": "assets/js/49.2f9d9d63.js",
    "revision": "9eff3fa2d58ee5a99cba05b208b2acff"
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
    "url": "assets/js/52.ea77dc73.js",
    "revision": "93690dae48641fb717e529199e5f56c7"
  },
  {
    "url": "assets/js/53.90fa768d.js",
    "revision": "7a13d99c41bc56d88a44c2634e9b2f6a"
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
    "url": "assets/js/app.9d9696a3.js",
    "revision": "5d6df096852a8e76d18b17a1f48de01e"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "76494fb3c3a4ae599bd3cbe9f1a7acf7"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "420a9f3c181ad32ca6b6bdf92aef56b3"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "ab0dea488266afcaf71d19df4ea64708"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "f3490b81e895a66d178c59e090d1e795"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "66e2633ae579aabd617a46b9302e99bd"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "2ca0ff7447d098e025ef4cc4cc003c6d"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "d0d8d0cb7997f515f161a717cd87f548"
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
    "revision": "c3e8a813997fc46b04071a56941adf5a"
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
    "revision": "b00d03fb92c9346918c37198f32453f0"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "4f4dc2bd7df1d2a3ac45e8529813ab13"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "fc8807df093485b86d4573746f1a2fee"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "8e29eebd458def5216b0bad35dd2653a"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "eb1eb2834434eb69df7cd72dbc40af6c"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "cedbb5c29039957aaef6b5c374666033"
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
    "revision": "6d7991b43027914a42877845ff26a4f0"
  },
  {
    "url": "guide/index.html",
    "revision": "54670986d905f8c35504dbd00221f511"
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
    "revision": "d4caab90fbe3aa0ba960ad08c8b1eba7"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "7059c405701a0cffa41d744459ff14f0"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "63d5971e23a2be9da895b2786fd4c828"
  },
  {
    "url": "more/clean/index.html",
    "revision": "b1f4ef7bb954473bafac59968da2033c"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "5ad1dfcb20ee43fd1bf34cc8c8eddc8c"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "27da2ac63eac46dbec8b6fd693b3bd1c"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "dce36a44c2cfebb429c27198dd51b4c2"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "f0aaee328cdcaad10644eb393f446612"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "1a52429d08b9bf7e3fa505d1996b23e1"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "77b72d5c3c738ff5b9127b5f6a67edcc"
  },
  {
    "url": "more/interview/index.html",
    "revision": "b703b3f86d7829387483266c6bf2fe90"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "f912f430d39c86a82b34d3f4361296b7"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "fbf6758344a3884a2ac8447fe81833b7"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "5058f3e6681b240a01836cf231ce832f"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "bcb0a2090c7ae902b02b311879fbeb29"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "c45b48cb4dbb87b10663c0e9a1031b72"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "478f90c459a3fda4bb392be639056606"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "d36258de423434965961737e0dc55d0a"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "dff6ccecab309e393cbaf57c89d50d83"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "449e23579d55769514f9f2eb8b5d1916"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "5e3757404750d064aefabf317c53cb17"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "0093ddf91da31e5f620482494c6c869d"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "8ab981dc56f30b7537ce0df81e77865d"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "ae4bb78faeba169875abaea9f042cf94"
  },
  {
    "url": "os/windows/index.html",
    "revision": "34d0bf2e0d7e95969000a06ed85bfc92"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "7bdede2cca93fede434f5e28cfc511f7"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "0a902da800b1b84d011721b6180d91d4"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "912fd84a2c56a9b7e6bbb8b9423429e0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1184d0b27540be4821d32461295cf8d4"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "8c51ca1937664dd22a206264f10a0e9d"
  },
  {
    "url": "tools/github/index.html",
    "revision": "ec4558d3d3f0c77b1e2c9ff1f2c877d2"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "3ecb35c82ea78d5104ba0dff1dc113c7"
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
