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
    "revision": "01bc30ec7a83e2c2ae0e20464b4c042f"
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
    "url": "assets/js/25.d393b2d9.js",
    "revision": "2427d2e3656375aeca3987a78b83b32f"
  },
  {
    "url": "assets/js/26.0dba9d5c.js",
    "revision": "0c7734010ac548593195635eaf80229e"
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
    "url": "assets/js/53.ec87c75d.js",
    "revision": "1cc139420bde779fadc35081cb57b3fd"
  },
  {
    "url": "assets/js/54.03518f47.js",
    "revision": "7405c1e66b15c5cf764bca6d15b5be07"
  },
  {
    "url": "assets/js/55.752ad333.js",
    "revision": "9364f8116bdc16b2550342e8e2ed7535"
  },
  {
    "url": "assets/js/56.382b7a36.js",
    "revision": "0c9edd1271fd63b74d7f5718b04a9ad2"
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
    "url": "assets/js/app.76ba1e9b.js",
    "revision": "dc6b1093588d769f39a50df9b8276366"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "a8fda35cc7994d7da6b377e1e2a6a889"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "f88ffcdb4215c9323bf25e521cc38e08"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "bfe6bf46b789886c9b410343c6f8b065"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "25c1d82649308d8cdbe5e45ab4560735"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "4bded4c597d0eaea96ad8fff125c02e0"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "c159ab8844eaa39f5e158d3e3ab55b02"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "e8e7e577030f1d186323cc787a9a6bf3"
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
    "revision": "fccde1bc2d11d8ffe386fc3f1613b802"
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
    "revision": "4d96dc877dd6dfa0fafcb1f137668d92"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "482fd0883ad628f6684141cac70cd3d8"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "5fb1691429d517c9ff063d520a3650c7"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "675f0bf8c6b467be55bae78ad22ac2d9"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "c22f1d74a059b464be00a8de14fcfc78"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "ad53cd55f58afd9de1b92999f330da82"
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
    "revision": "f2b3dbd2c02c9a66af9b28062865be9e"
  },
  {
    "url": "guide/index.html",
    "revision": "6c54c81efb0e867b6d1e325cc6bd6879"
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
    "revision": "c689393beb807675c5e80328bdf36190"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "c8f30c924c0775ad0fccb5dc45faf75f"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "a293b6153758072495d011249868f0bb"
  },
  {
    "url": "more/clean/index.html",
    "revision": "c89e3db38f195f8770fe3de5cdabdca8"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "4a18475a7cc3f2f4ad1b37468f691356"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "dd60f5355128eb0e1c358d1b55558698"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "a10b404572350c01a8468e68ab79f378"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "18929623751c9a53f52d86519e69b974"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "fb4737b89ca0913901faf8b249b825de"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "fa070652d0cb17882b8a26a742c3d4a3"
  },
  {
    "url": "more/interview/index.html",
    "revision": "76a990b72fe5190358f20957019a61e5"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "717f5e2e711e472247e8a4c13919c414"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "4e79d1d0dbc09ec1cb8d1f94cd97d199"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "bdbf9a76951032257bd1badd20f4bab6"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "a7f1c2b7a7ca7d9171b9002cfa5407b1"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "9ad5efadf71f2e644900e634a3d97e1b"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "94e0a7013d312a27529964f7fa2231cb"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "b21b8c9a4a186847e27ff3bcd237a11b"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "8e9ba3d03d13bedb3937597ecc286bf0"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "86dcd8ef4152147a7f8325e5f72e2ec3"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "af560b88fc182c56d588fb2b44f47303"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "6409e1204d1e91121c83cb258d4bc1ed"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "aae98670a5eef776f710ddd05d72a844"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "7fb9a0a96b1a596be80cc0b2475d150b"
  },
  {
    "url": "os/windows/index.html",
    "revision": "f851cae47d5aba4ae897537919b27260"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "071d48be10c808cbc6574f93144cbe76"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "722842501978c686b450d269ac312337"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "f7b25799abb4bbceb24de15736c25073"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4bc7190f84390fdc46955f3f044899b0"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "0686e0fb62ded20ed0deaec790da8998"
  },
  {
    "url": "tools/github/index.html",
    "revision": "0f1214052c4925d7cc885a7cd03c8b2a"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "7f0647676f040afc43dc5061636147bf"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "5c74f23025379f6c9260d63fc96205cb"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "cbcb5a816b1a68b6cb7c4936ade5acbc"
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
