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
    "revision": "8ab748598c1567f6fb9433b56da8a4cc"
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
    "url": "assets/js/10.12856ce8.js",
    "revision": "2238c1351cccb31d66de0ae831652eee"
  },
  {
    "url": "assets/js/11.83abc8e9.js",
    "revision": "5ff71fe14412aaa4334efd64ae4f183f"
  },
  {
    "url": "assets/js/12.d99099b2.js",
    "revision": "5200e3b77f972315ce97f9d13258c48f"
  },
  {
    "url": "assets/js/13.4a09af75.js",
    "revision": "78c41528010ba12e21bd8bcb005c3792"
  },
  {
    "url": "assets/js/14.bcc2ba48.js",
    "revision": "f947dd38af37a60ce42dcd77ac879b28"
  },
  {
    "url": "assets/js/15.09819928.js",
    "revision": "3791f4dc823bfaa47e8681594d32eef8"
  },
  {
    "url": "assets/js/16.4f17af3d.js",
    "revision": "2cae2f3bf99291fa46aa2489c0f5b040"
  },
  {
    "url": "assets/js/17.31dbd619.js",
    "revision": "2949813abc00966aec9e64d09a62817e"
  },
  {
    "url": "assets/js/18.7c510cd5.js",
    "revision": "00deea906798cf1191e24d373016f3b5"
  },
  {
    "url": "assets/js/19.35518e9a.js",
    "revision": "5fb8660f87ae2cdc6fc74a674190e2d2"
  },
  {
    "url": "assets/js/20.de47e725.js",
    "revision": "02b11c193e07b1d48979ad86e622b2a2"
  },
  {
    "url": "assets/js/21.d76436d6.js",
    "revision": "8c8350102326ad2088ef4cbf05e6adeb"
  },
  {
    "url": "assets/js/22.76cd618f.js",
    "revision": "2212450e5259bf0949bc35fc12c313d0"
  },
  {
    "url": "assets/js/23.70888ce1.js",
    "revision": "bfec0ca33cb4f63ac5404c273b02a874"
  },
  {
    "url": "assets/js/24.c7ff2afd.js",
    "revision": "4ab01d15f58ad4e3d0e4afe5b666fd56"
  },
  {
    "url": "assets/js/25.ff4645c7.js",
    "revision": "adf2b556baae6cc38156a18951fc9250"
  },
  {
    "url": "assets/js/26.4b65d4b5.js",
    "revision": "70aabdc57c245d1c2294d9547aea278f"
  },
  {
    "url": "assets/js/27.bab7dc89.js",
    "revision": "65640be1bfce89cf2cf33fe5a29244c8"
  },
  {
    "url": "assets/js/28.ef44504a.js",
    "revision": "6c05d42713a3c8f21c6af3919be07a12"
  },
  {
    "url": "assets/js/29.c7ca5297.js",
    "revision": "c65de6f625106001e8010b092188521a"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.85044e31.js",
    "revision": "b4c9f6bbc7db7898b087ba51b79a125f"
  },
  {
    "url": "assets/js/31.8e8d75b4.js",
    "revision": "4d5d629b7cf981613d6390004a767256"
  },
  {
    "url": "assets/js/32.4d4ad1ed.js",
    "revision": "34015e794bb4d7ee9750e4ba4057f438"
  },
  {
    "url": "assets/js/33.000bcf4d.js",
    "revision": "a43934ef74899f5b68c994941deb753e"
  },
  {
    "url": "assets/js/34.736e3c7d.js",
    "revision": "7151baadb5ccbc8943416a362af275bb"
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
    "url": "assets/js/38.63a9f359.js",
    "revision": "e36c9de4d40baf09c1ac4d5b7cc01015"
  },
  {
    "url": "assets/js/39.11517d68.js",
    "revision": "1cdcca49e999e32a82eb0b3786a2c3e6"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.93d4e11f.js",
    "revision": "95b2e20933537b0ffbc5eb5f6883693e"
  },
  {
    "url": "assets/js/41.fbe47944.js",
    "revision": "272a082c37446cadd4d48a458c1e9ade"
  },
  {
    "url": "assets/js/42.5585cd9e.js",
    "revision": "70180aa741d836140aeac3e33c493572"
  },
  {
    "url": "assets/js/43.83b6fdfa.js",
    "revision": "1c1e1464a44d17029555be6e99f501a0"
  },
  {
    "url": "assets/js/44.b8d05b4e.js",
    "revision": "54197c945f9a010af68c21e05dc2a35f"
  },
  {
    "url": "assets/js/45.44301ec5.js",
    "revision": "00a7d5ae9a8f402cdd19f277be78d3a5"
  },
  {
    "url": "assets/js/46.b915d899.js",
    "revision": "61ad148bf8c654a008d63b3352e694ce"
  },
  {
    "url": "assets/js/47.f1cf2819.js",
    "revision": "86ea33cc07c31ba9d28bc7a45cd5d380"
  },
  {
    "url": "assets/js/48.35c494ef.js",
    "revision": "45ecd4f39116d79533b63c939d633a15"
  },
  {
    "url": "assets/js/49.1db26d94.js",
    "revision": "2513283b8ffa6a90e2c8091acbefad42"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.b564dcfe.js",
    "revision": "56420839e4604aaf165180715333e902"
  },
  {
    "url": "assets/js/51.a7d701eb.js",
    "revision": "2d18774d9b64792da13cfbf3ae38aba7"
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
    "url": "assets/js/54.1976a94c.js",
    "revision": "735319c208131d91400c7bd9c30e3a5e"
  },
  {
    "url": "assets/js/55.3e7b5358.js",
    "revision": "ad2bc3d7638416adcb394c5634751b01"
  },
  {
    "url": "assets/js/56.4fab7ca7.js",
    "revision": "93cc4b925cf69573d3d6937221de2996"
  },
  {
    "url": "assets/js/57.a7fbb39b.js",
    "revision": "2d9551084f3eefc1a27572282b9df5cf"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.9010530d.js",
    "revision": "ec4c1b3dabae4ebbe2e057cc477c3c60"
  },
  {
    "url": "assets/js/8.d52cfb1b.js",
    "revision": "b9d2b4034865083f7d94378822de6ad5"
  },
  {
    "url": "assets/js/9.de566543.js",
    "revision": "2e69870f0ed114b7db76eca2da86dcc4"
  },
  {
    "url": "assets/js/app.ae48f026.js",
    "revision": "fceac795073be430c96127b0df446a3e"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "624f82d1997c156c3bba46d0682d93aa"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "8f1e3894a7658047bfb43e5c5b7d93c0"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "72327eb1a8a4aa8e18f51c1536130ca3"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "2e12e27ee2c82fe45d6325aac9d733d5"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "68a82f9ea1bab4b1c201479dcc16be27"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "1fc2937e50aa480e251b2bef0fb9dd99"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "1df22b1cd40149bde4c5dcb0428d9408"
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
    "revision": "a67a71da144e66241c259058bbe33352"
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
    "revision": "d8b6553ed43a6f5d0dc8908f4c746798"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "e47f9be2f33d832c2b68b64e12a36945"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "8f02a56f55395faff9ebcbc1db8f9edf"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "42b7afdb9a2bc87e11e70031801ce634"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "a6b8013676a0d3ed7997a417300abac2"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "71ef717fa1640f27445cea77c056d1c8"
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
    "revision": "5464af245da850f01e87f713daf5a3e1"
  },
  {
    "url": "guide/index.html",
    "revision": "2fb19d3ca1e365104b4d55fc0d69d4f5"
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
    "revision": "2d17e2493cb97857beeea30b190ee637"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "156758d9cec0900922cdae3f7e2daea3"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "3b83ff8f8353c72638997adcf6834ce4"
  },
  {
    "url": "more/clean/index.html",
    "revision": "b46cb123f6f3aa0bcd94ad0bb6f8de4c"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "421b582cd3e39f95ed6c679c4445fa98"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "47bc1cd11a92cb6ea2481005286fa019"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "028cc96a69d7c13e4fb03d6a7689ae4d"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "402e7dd7ea490448d3d1d13e8239da61"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "d400bf34d89d3fe4c5162528cd233cde"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "5136c9807b2dffe8bfdc65a86f6226ed"
  },
  {
    "url": "more/interview/index.html",
    "revision": "e2852eab3b409efd5fb3c972dac18f0b"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "ab59edc9bb718599b70c113939b6105d"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "1eaa8c399567f637dae5364cb220da26"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "9981bbf63659cd1d28981af517bd8d81"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "4da683a01f70d7434265f1d15033432f"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "8fd7c63b589d626ca9d02354ec152ba8"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "803e7e5c2abc96e8e5e6936b77e958b3"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "590303fbba42a75e7a685eef3e67c47e"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "e39e0a0a111530abe449a84daf2dc438"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "35e2d23f6347eacb08cfa494622d2d6e"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "72bd45885bd1508de5a99b9bb9ca09b1"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "601acdc220d159c4d1738dde1458537c"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "c9bcef020a416807524b128a2714cc0b"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "28ed27bc5b043ae9c1480bb49ca2b9e3"
  },
  {
    "url": "os/windows/index.html",
    "revision": "cb4147c05ac1771ba379f7220cfba168"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "e7d7d3fd203ba64833fbf6e015c5a2b5"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "06bdb8205c147e78ed2d0149b5c25748"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "d7a6c92fb1cfe0f7bb2adced10111bbd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bb683872469b41e5b4e8c263292b443c"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "4c1ef7339f945d6397c0fe804392504f"
  },
  {
    "url": "tools/github/index.html",
    "revision": "bc3c926127ebfa21fc6c748d38d3cd17"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "8e6dca9e5ef44ea46920431ec8837e78"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "30cde5219cd7bdb7545be3c08e05d5f7"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "033917ab8df09102c19c8e972a8ec49d"
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
