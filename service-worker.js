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
    "revision": "b01e4888213035e3b55b86922f202edb"
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
    "url": "assets/js/10.2efeaa26.js",
    "revision": "08db5e55565f914b9970e828a764f43f"
  },
  {
    "url": "assets/js/11.a80483eb.js",
    "revision": "3532a17da6feb6639f16b312691138aa"
  },
  {
    "url": "assets/js/12.ebf71e82.js",
    "revision": "a85c544c6c0e6d93d4e5f62ed0f5972d"
  },
  {
    "url": "assets/js/13.75b55611.js",
    "revision": "e013a3d149c5ae6ed08bdfc9d7d56645"
  },
  {
    "url": "assets/js/14.5e508e29.js",
    "revision": "394c3758203319625775d2575cecac5b"
  },
  {
    "url": "assets/js/15.ac756664.js",
    "revision": "8c2dc73c2d470b945d6cfa61fab5bed0"
  },
  {
    "url": "assets/js/16.54dd79d8.js",
    "revision": "fa6901801f2b86a503ff66116bac86c5"
  },
  {
    "url": "assets/js/17.c38e8fc8.js",
    "revision": "3050925679abcaceb6cc07cc0a4f3eca"
  },
  {
    "url": "assets/js/18.dfafa4b1.js",
    "revision": "d76ff2a1bd55748a0e9f8951f6b13dc9"
  },
  {
    "url": "assets/js/19.2a98e5c8.js",
    "revision": "a79943681b7ecb44c6108417b17419b8"
  },
  {
    "url": "assets/js/20.a5b68d18.js",
    "revision": "f74d0dc38506ecf308a7df6f4155aee1"
  },
  {
    "url": "assets/js/21.24aa91a7.js",
    "revision": "9c2f23e3ad7ee4cdc75df548771c5af0"
  },
  {
    "url": "assets/js/22.5e29e0b8.js",
    "revision": "f3e85bd15760d83a77929aa024e96262"
  },
  {
    "url": "assets/js/23.48c082fb.js",
    "revision": "3b7ced9cdafe618a04d468ac2c60f83b"
  },
  {
    "url": "assets/js/24.975cea8e.js",
    "revision": "ebc1294a54ea514fe05fa1193d471b73"
  },
  {
    "url": "assets/js/25.3fd0f52a.js",
    "revision": "cc8c03a879f352aba6d710e82e739b60"
  },
  {
    "url": "assets/js/26.6ebada33.js",
    "revision": "04140bd0251ed34a88b8508f32ffd423"
  },
  {
    "url": "assets/js/27.307ed5bc.js",
    "revision": "9848f4eb8dc06947ad68147922052ee8"
  },
  {
    "url": "assets/js/28.796cf2f1.js",
    "revision": "7c74dc18071a08b5e545d8b2362ac521"
  },
  {
    "url": "assets/js/29.1802b906.js",
    "revision": "8cd185eb2a340c077a84b5f223823759"
  },
  {
    "url": "assets/js/3.d6106ede.js",
    "revision": "0b6e7248b98c807a2d1cd674c95867db"
  },
  {
    "url": "assets/js/30.8c3c485c.js",
    "revision": "b33208940ab43f1269222cbcf402083c"
  },
  {
    "url": "assets/js/31.a7752563.js",
    "revision": "c7a1a53d38042edcff827dabc7f55d0e"
  },
  {
    "url": "assets/js/32.e84a1667.js",
    "revision": "40a7a5670bee5715118f1498fe51691d"
  },
  {
    "url": "assets/js/33.bf5548dd.js",
    "revision": "6b6758022aa754d165daaf6c314097a3"
  },
  {
    "url": "assets/js/34.65dcbc9e.js",
    "revision": "3b98addd2c3252d87d50b0d6ac23cc26"
  },
  {
    "url": "assets/js/35.e8675475.js",
    "revision": "5110569f7715af92ebc1b1a7a2fe9e93"
  },
  {
    "url": "assets/js/36.a7bf26ac.js",
    "revision": "8e3222fab7e3c886ca18a31b31ebb3a4"
  },
  {
    "url": "assets/js/37.c32f831d.js",
    "revision": "54a87aafa943cf0f37123c69850871c1"
  },
  {
    "url": "assets/js/38.725fd96d.js",
    "revision": "cbc138af4b1308b8ab840cf699ce4509"
  },
  {
    "url": "assets/js/39.80efb6d6.js",
    "revision": "fa66a649eb312e4aa5ed05e069983193"
  },
  {
    "url": "assets/js/4.19c62bf2.js",
    "revision": "a4628998580d7eaa341387f076f1945d"
  },
  {
    "url": "assets/js/40.ba1e1986.js",
    "revision": "466a3c2f4a0f0bb62e1cde8ef2d23db9"
  },
  {
    "url": "assets/js/41.48f52c06.js",
    "revision": "f27ad24d6f715dbc1c1f5d68914a76a8"
  },
  {
    "url": "assets/js/42.ebd2eb26.js",
    "revision": "948de197606b8660b902e00789dd75c1"
  },
  {
    "url": "assets/js/43.a55c8a60.js",
    "revision": "697fb7bf579f43146c264ebb9f59ba07"
  },
  {
    "url": "assets/js/44.83081b11.js",
    "revision": "3212f869e6e9422a0c47db3990cca924"
  },
  {
    "url": "assets/js/45.ae2c27d7.js",
    "revision": "f56692d26fb0a271bc0398411d627f26"
  },
  {
    "url": "assets/js/46.a5d55721.js",
    "revision": "bd0620d041f414828cac1c3a335af151"
  },
  {
    "url": "assets/js/47.d3ef392a.js",
    "revision": "c9aeec5c2eaa70cdb8997b418f5b6124"
  },
  {
    "url": "assets/js/48.c4403a6a.js",
    "revision": "1cc97311a34d68555acf505ec74c3f5f"
  },
  {
    "url": "assets/js/49.a383c0f4.js",
    "revision": "f1c71d3a109e893631765aa2c359084f"
  },
  {
    "url": "assets/js/5.533e73ac.js",
    "revision": "d84aebce1da2cd76bdc29bc99dda10cf"
  },
  {
    "url": "assets/js/50.64bc33d1.js",
    "revision": "43a98fc6408ebb8492e9c4eac81cd541"
  },
  {
    "url": "assets/js/51.0b722b24.js",
    "revision": "587ac4ef8a4c6e890fbe61769cb81af0"
  },
  {
    "url": "assets/js/52.389050b3.js",
    "revision": "44f357ed29c954b28002128f941d3d85"
  },
  {
    "url": "assets/js/53.9c341b60.js",
    "revision": "998444ea393c2b4ab54089b7ea82b143"
  },
  {
    "url": "assets/js/54.1372be11.js",
    "revision": "2e1800521dc4574ea39beb9e1caae8fe"
  },
  {
    "url": "assets/js/55.7c266afb.js",
    "revision": "88821ec93581f086125e1a698eba8911"
  },
  {
    "url": "assets/js/56.99ef9927.js",
    "revision": "7ae4948452dc891d23a65cf596487cfe"
  },
  {
    "url": "assets/js/57.7be9d447.js",
    "revision": "07a3c6bc5537854277d7e866bc7bfea4"
  },
  {
    "url": "assets/js/58.cbbb8b90.js",
    "revision": "bbf603d4dd0f028e6a7a1ca3366252e5"
  },
  {
    "url": "assets/js/59.51cbaa0e.js",
    "revision": "ed24c9518ad30bbce646a2fab3a3d66e"
  },
  {
    "url": "assets/js/6.c1a01272.js",
    "revision": "f14b16797833db62a5d1f572e771d774"
  },
  {
    "url": "assets/js/60.ee088334.js",
    "revision": "2396348ea502ba7e4bdeeba093fbb057"
  },
  {
    "url": "assets/js/61.5eb3181b.js",
    "revision": "31da1bf9c3d31701ee6390d140aad988"
  },
  {
    "url": "assets/js/62.1354fda8.js",
    "revision": "242fe413d64cadc9136cff94affa13d0"
  },
  {
    "url": "assets/js/63.393ae823.js",
    "revision": "d69858930f07ba6946fe2a593aaa2232"
  },
  {
    "url": "assets/js/64.d64b1528.js",
    "revision": "a74474329e5f195d03072dd05eeb2afb"
  },
  {
    "url": "assets/js/65.182c36fb.js",
    "revision": "0eb1c2692efe33f4cb53d22d26a175a2"
  },
  {
    "url": "assets/js/66.bd67cb30.js",
    "revision": "d6c7fbaf3f2a72c8de18fa7c732b29cf"
  },
  {
    "url": "assets/js/67.521c7c9a.js",
    "revision": "2c469802aaa6e37e55101fb84cf24021"
  },
  {
    "url": "assets/js/68.223eebf5.js",
    "revision": "a94c92cc881732780f7d5635b9695c72"
  },
  {
    "url": "assets/js/69.0efd7a65.js",
    "revision": "77dc27f268d96a4fcec1d830bb7aa86d"
  },
  {
    "url": "assets/js/7.9e08b12f.js",
    "revision": "7526aeb936e0339135e5dfca8b26953f"
  },
  {
    "url": "assets/js/70.a2e36f04.js",
    "revision": "ffd3e17edc94a86275bc7a6233853b96"
  },
  {
    "url": "assets/js/71.efd355e8.js",
    "revision": "7ce4538985c062f557077728ec3d5ca2"
  },
  {
    "url": "assets/js/8.c522a461.js",
    "revision": "eaee775942f6f22aa348c79173d25841"
  },
  {
    "url": "assets/js/9.a394737f.js",
    "revision": "f3efc1e13209ad37f678a12bcee5075b"
  },
  {
    "url": "assets/js/app.a7aeaba1.js",
    "revision": "5ab9996dc5054fe96ba704946afefaee"
  },
  {
    "url": "assets/js/vendors~docsearch.1dfc1833.js",
    "revision": "e8b7cde7e0fe30d7e6afd3a0ee3f72f8"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "d6e945d5d7e4fff79e6ef3faf5fc9d07"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "ccaaebd684140f38de62abb58f002903"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "c3f4f33f232905c43e9dcc72cc5e5a2c"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "077902759bd4d933c7e7881c34caa453"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "3a781413e08c6de660980a3a3b16fc41"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "1c6355ed020e8bcaa3d0138a1a151ad1"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "7029b588eaaaa2fa9613029ddeeee950"
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
    "revision": "61442e03ee12ecb2244aa0c573bee046"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "35dc4ed1e34cc39b7b8c7f90064ff5bc"
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
    "revision": "218107671df8c3efdd694784cbfdee80"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "ef507e3ad4edfe7ee7f137c8baadc2ac"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "63b7bd982d101bf7a678ffa81b9be708"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "21cc55713e72628d7e227dbf4922270e"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "fa2d18296a63ccfaf104f37cc557564b"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "89120c20edfcf6211703b7cffa065025"
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
    "revision": "4fcc3c2bce06b7f25939a5efa7f23dc8"
  },
  {
    "url": "guide/index.html",
    "revision": "9e1577c93a6de2b14bf9d266e66aed65"
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
    "revision": "e7873c113bd249c72240e3738d99651d"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "3704a6391354847245e3e8e903638269"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "9474e14dfbb0c3e956569f61d2aae1c1"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "f528871dafed637b5f09d09e77e1e21b"
  },
  {
    "url": "more/clean/index.html",
    "revision": "26d4d8d5255d22ca0f5079d9716c7cba"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "c0e6e5819450917275152977de2b0459"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "e7658acd5268cd8244841ad9eea8e841"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "11fb5a6bf4d5895a1469a2f3c66022bf"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "53cd8b10f31074e99038bf70b61ed45a"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "42a6a99df9edd037e6608bcffccb90d6"
  },
  {
    "url": "more/interview/index.html",
    "revision": "c36467d5b5dceeb217f1843109a79e44"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "157c5ff2fdfebdbdddc648000e4c23a7"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "18649f26929a53453db2e371dc911069"
  },
  {
    "url": "os/centos/index.html",
    "revision": "a2ea43a1b086790947f3cf8957b98e4a"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "1face8058882ea3f97c77e69a220eb8d"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "869fb53c3559bd2414fa5a5c31af362e"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "904f9cef9d5dc305eae22eaa25ddf396"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "980a4b56adc519a6cd56f8314a024a9c"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "015163109c0b791f0b54601133effa7c"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "8c07daaf0eba587e7e33c69a40fd6d32"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "1b04ee4366a402b3d99b37244cc2a1c2"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "a4509a00584443626a426a139934c2b4"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "a686a7b567505db0f90eb1a1d9e231d8"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "cf0b07b718775bdfd3fc5f0838867421"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "a623ffd483f8845604249ccd93d8030d"
  },
  {
    "url": "os/linux/index.html",
    "revision": "4ac1f9ee61548ff0a58518d4e8795e62"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "e6ab8fb2284095a517c022c266d7c1c1"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "63fcb54de9e531a0d5541faec6a44e5d"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "a2fade563ef69534c801e9c3b28350d7"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "818707079b323fd771fd192016c11030"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "60bf865d053c7cbf247d4e64ea5c93f9"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "5e712e12e4fa15f0c1a0147bb48eae80"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "0f44b0875349a2d82dd2a957633fb573"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "61d74ead7c8702123908b648925a4d96"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "c5771fa9220774c6a44036f71582cbc7"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "5fd55e5383edb58bd6f4ffc6f39631bf"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "9ef6acfbea3988ad386476a77c406d87"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "c736d42dad47178de6a0e853c7225dff"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "bde2a1c889a63239a4776d5d88d5c174"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "8aa44e4b44e444acf7318cfe0b8311ac"
  },
  {
    "url": "tools/git/index.html",
    "revision": "36966d825beb67e724e506dded63ba7a"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "2706b1b0348f2e181818a07a63dd991f"
  },
  {
    "url": "tools/github/index.html",
    "revision": "ede6e1e124575362d5709c917b029439"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d8e32f5e65d6586b9acf5c76dd1118cf"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "6c67130b49229da924e1811af82cd596"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "8081319f09fe9295a4ebaef230d11d74"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "d48ca68f3b76f8540b1d7afaa0fcb9b5"
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
