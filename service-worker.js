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
    "revision": "4dded753be0a83dcb30c7ea1309d15a0"
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
    "url": "assets/js/14.34a28094.js",
    "revision": "1c3370b3e53844db209846075baa7c95"
  },
  {
    "url": "assets/js/15.43d895e9.js",
    "revision": "eea5f9c8bc709975a61be9c255996f26"
  },
  {
    "url": "assets/js/16.19746d91.js",
    "revision": "20cc8e4a7e46326fb26f7467b147794e"
  },
  {
    "url": "assets/js/17.2a3b029d.js",
    "revision": "f6dc24311b3666ab968f9939a846de5e"
  },
  {
    "url": "assets/js/18.553689a2.js",
    "revision": "e35ecb52666915c9a05e705ea8822142"
  },
  {
    "url": "assets/js/19.01048250.js",
    "revision": "4366157bb9e1965e894a4a7e3233520c"
  },
  {
    "url": "assets/js/20.c9dbb8e9.js",
    "revision": "90f246b4ec3603d7b409b9cc39192328"
  },
  {
    "url": "assets/js/21.70db754d.js",
    "revision": "f825c3fc00afa051e25098231ee2943d"
  },
  {
    "url": "assets/js/22.de783b27.js",
    "revision": "755ae337d3edac4d186c82dee28a6e6e"
  },
  {
    "url": "assets/js/23.a1d783f9.js",
    "revision": "f1a5b0ad0c839d93b8f2afd02d76eba2"
  },
  {
    "url": "assets/js/24.f2ec98b5.js",
    "revision": "4911f7fcafaa28cfe1396b8ce8e23035"
  },
  {
    "url": "assets/js/25.c5d75d26.js",
    "revision": "9e0ae91bf3b1dc747aafc69c34d61e73"
  },
  {
    "url": "assets/js/26.64dc3fb6.js",
    "revision": "0b2b37fe84699f03a67f6a82c77e0162"
  },
  {
    "url": "assets/js/27.fbfa1b1c.js",
    "revision": "8e5f1b5b90bd5c287322d568d5bf981a"
  },
  {
    "url": "assets/js/28.f7ea0764.js",
    "revision": "63f5e9333e99b9d4d9d8000baccdd136"
  },
  {
    "url": "assets/js/29.c57afede.js",
    "revision": "58a75d6e1ed03095cdfcd189843bac06"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.b2a4a5b9.js",
    "revision": "8be45cc966233da4a094d5358b6116c6"
  },
  {
    "url": "assets/js/31.4f5fb3f1.js",
    "revision": "0ffb2dbbaac9ecd3a6118c5cba32fd77"
  },
  {
    "url": "assets/js/32.e7c2fbc1.js",
    "revision": "e20fbcc3346c5b82ab93b19df714fd31"
  },
  {
    "url": "assets/js/33.238ec5f1.js",
    "revision": "63cbcf0cac01b345addc52fdca62e5c4"
  },
  {
    "url": "assets/js/34.12569d39.js",
    "revision": "9d806ec9d9558dc66cb22df8a4d7a8e8"
  },
  {
    "url": "assets/js/35.61db13bb.js",
    "revision": "5c73382e8123ff7aa52c68f3a99873a5"
  },
  {
    "url": "assets/js/36.ae06fae9.js",
    "revision": "0844b5eab14c1572bde8222e35ea3cfb"
  },
  {
    "url": "assets/js/37.0c27361d.js",
    "revision": "b32695c6536fad70426b8da7e365e9cb"
  },
  {
    "url": "assets/js/38.52c82128.js",
    "revision": "0d1296323d6f2f574d4cc6d1bb6b471e"
  },
  {
    "url": "assets/js/39.88f505e1.js",
    "revision": "3fde9547f2e3b753e9c85b7e4624796b"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.83853f05.js",
    "revision": "8715b1213f04418fd1f1c069c0448068"
  },
  {
    "url": "assets/js/41.78421c36.js",
    "revision": "bdbe7681fbe28380f5a48bb5382a620f"
  },
  {
    "url": "assets/js/42.989f25b4.js",
    "revision": "e7722665ce60d6748eed5a84bb3a46e2"
  },
  {
    "url": "assets/js/43.5e7aa966.js",
    "revision": "60e24941d40170ea51a5f732321fca1a"
  },
  {
    "url": "assets/js/44.e5c58194.js",
    "revision": "ab4adb43ff8f2b07ef665120f9e1f3b0"
  },
  {
    "url": "assets/js/45.7968ca37.js",
    "revision": "01569f4dbf6318ebb5ab766d0cfded0f"
  },
  {
    "url": "assets/js/46.eea97e28.js",
    "revision": "4f1bf21ab6b04bef7d04c2697b07f5c5"
  },
  {
    "url": "assets/js/47.6bdd84e0.js",
    "revision": "b20058fdb35e7d577b1c7424ea8ca3e0"
  },
  {
    "url": "assets/js/48.7fb73154.js",
    "revision": "4752617f8833f692f4a633bbf83259d8"
  },
  {
    "url": "assets/js/49.e4b67620.js",
    "revision": "722a7328039acad4b40e625066561364"
  },
  {
    "url": "assets/js/5.21ab5e55.js",
    "revision": "b21a1b37995ed32e3d843f2aa58ff081"
  },
  {
    "url": "assets/js/50.94accb0c.js",
    "revision": "950c6ff95a3626207aa039f7bd809f84"
  },
  {
    "url": "assets/js/51.438c5a6d.js",
    "revision": "11d4d83527eba81c1f69d5f8de642688"
  },
  {
    "url": "assets/js/52.efd23167.js",
    "revision": "ffa82ee3a1b569fcef00c2e0d6bb7a5f"
  },
  {
    "url": "assets/js/53.50a3a02e.js",
    "revision": "01b140e6c333e47079e0b92867b78906"
  },
  {
    "url": "assets/js/54.e9765b59.js",
    "revision": "dc1570985917ace6cfd9df437f7c4729"
  },
  {
    "url": "assets/js/55.10811188.js",
    "revision": "c538d7bb8d2e0a544e3438fb614577bf"
  },
  {
    "url": "assets/js/56.319a58bc.js",
    "revision": "027fb3844964991df78f50bb7a40860b"
  },
  {
    "url": "assets/js/57.a8c6b7a2.js",
    "revision": "9f2095e4d0731a740c66706da300d63d"
  },
  {
    "url": "assets/js/58.13a0eac0.js",
    "revision": "df3573fce9793cb3a3d9c95912585b64"
  },
  {
    "url": "assets/js/59.139c1ed0.js",
    "revision": "9adab62224ca6d485252cb3b118a7ece"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.0fdcfe57.js",
    "revision": "223e0c1dc76cab65b4a58967f86edae7"
  },
  {
    "url": "assets/js/61.012e9e0d.js",
    "revision": "ba3aedd9befd49766fea71232324136e"
  },
  {
    "url": "assets/js/62.c3a4d530.js",
    "revision": "5f0a3b75d6b01b74f6a5e83c2e6b4094"
  },
  {
    "url": "assets/js/63.413b1df4.js",
    "revision": "6b6d86462f09433811ba3b447d5ad83f"
  },
  {
    "url": "assets/js/64.66009f2b.js",
    "revision": "e2234f545f9db98cae07abaaaf00aa14"
  },
  {
    "url": "assets/js/65.ed875b0b.js",
    "revision": "4a796a2d94c653493894d1eda6c9cb9c"
  },
  {
    "url": "assets/js/66.54294ae8.js",
    "revision": "b6803ff18d52e70a595c2cab34d972c0"
  },
  {
    "url": "assets/js/67.3f8757ab.js",
    "revision": "5d77a0a2f5cfe72fa2ca80427bb49866"
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
    "url": "assets/js/app.161df033.js",
    "revision": "545aa76758f9708065f1f17d1b9044f2"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "ffebaca9e0f093736f9b44fb74dffa57"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "bf715654a40197945783015743c6750f"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "979342cba4462db9e4c8ccf1b1b92ca1"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "01aaf1e5488f311567a3b296f2b5f5e1"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "5d6f1453492e9dfea4096bb7e511f018"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "3971c91cb53365fb540275d4736d3f21"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "ba3b336fd6adaf1d4fd65d1ce6b962c3"
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
    "revision": "5edb39ba2dc8834f3eb2dd0a0dcffcf4"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "fa912c89aae7e4544b8cf806873a0011"
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
    "revision": "ac36ebc280a501ff97fb2c1627c810a3"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "d68a77f255b6e9c70de23dbc95a25e43"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "c1b283a44bdf7062b4cdc29a4a5b14e2"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "dc95b050c20cf52e03766bd37ed1862a"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "fcfcae43150bf1c75fad73cec348c056"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "e61177dc091f89fbd286e491204af341"
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
    "revision": "277bb9fa53fbe7a8c079c7833701a6e7"
  },
  {
    "url": "guide/index.html",
    "revision": "9939040e4793ff51921cba48ae62b227"
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
    "revision": "bdcda73e758989585cb2b6f9d3cc7610"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "b9f499866b16013c2a9e466910f5fb20"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "40e98f57e92775233656f7147d20e3a5"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "6cac754c8e50343fc404b411452a1bca"
  },
  {
    "url": "more/clean/index.html",
    "revision": "c85e58668708917501baed82df46b1a1"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "3d1d6f9f831231c39215a65a4158d13d"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "e7df07314969ee6c471570b1cfccaaa2"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "b7d60cebb92a4261b55f5a87df5ef277"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "f1af7525fb38de42ef8bdd2674cda190"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "2d7046ebcd54dfa506f3ed8e84f0e24a"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "7bafb18dd691d4e19c888da060be5391"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "1a23dadc53a9c6428319c9ef7b018d9d"
  },
  {
    "url": "more/interview/index.html",
    "revision": "c68a3911196d6e84fd9332591da0b497"
  },
  {
    "url": "os/centos/index.html",
    "revision": "e01ad31962385ab611d942eaa88444bd"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "e63952e0284e66d5497f6c221de0a0a6"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "65f96b779585790e1d288cdc9ffd60d9"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "e643e9b6b1ab15e2230c0e91cccae845"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "cb03f2f3caca4e8b12951fd407649be5"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "ad31d7d70627515cb4294c34af4f4010"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "179b1fd6cf90a3ee647fdb2e4e8faf86"
  },
  {
    "url": "os/linux/index.html",
    "revision": "fd200063597c4c1b9255c6044285bdbf"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "c1ce9819b2ce8f887fa989c810ebbece"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "1813b533ffbd8b7f8b84451a276944df"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "027dab8840c0ade678f678f9af0503eb"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "0c35e3206eaab76b7787606f005fc534"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "bdf03614629617ea176dc0ea0bbe147e"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "c7ca80c1083f92b8fdb6ee5e2d26734e"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "260b15c69bc2ea5c3dc4235e756066ec"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "34638fd822fa38d58f1e15fde37a47cc"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "b5063dbcd68c467612237c435e6047a2"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "ee75c5b7e984da0a8912659140aa1885"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "8d8ffa39e13fd55495b17aa252661ef1"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "ccdba25eeb15e57694fd031654bfb111"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "5eba0a345da7e192a391d71e7b6aa64c"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "c29971a7e4619a7861e144abb3540681"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "8103f259505321ddb602700c274ac9cb"
  },
  {
    "url": "tools/git/index.html",
    "revision": "011ad8999e64a871051548d78c3634b9"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "d44e503cdd279b18a2e4a1df679153ee"
  },
  {
    "url": "tools/github/index.html",
    "revision": "7dbed50ecebd755138f2a779e669d358"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "f3c4d0db1f3150ae5988e106699b27d7"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "b3ed6ae26fdb58d6d8e432f06b79d6ce"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "31f5b20b7a66455d7ec53acf6c111294"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "8d04c5930f238f5b4f9414258c1b3ece"
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
