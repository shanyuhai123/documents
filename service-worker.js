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
    "revision": "f267c96fc036de5fb1ea505942c1bb4e"
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
    "url": "assets/js/10.e1302055.js",
    "revision": "8b2c7f73bbfd06cc25ceeabf807a7c12"
  },
  {
    "url": "assets/js/11.db9b31d4.js",
    "revision": "601f09c09aac529bb623a847f858680b"
  },
  {
    "url": "assets/js/12.00fbd788.js",
    "revision": "1f5ae51ecb6c5dd9e59139ae4a08b28f"
  },
  {
    "url": "assets/js/13.d3089c6d.js",
    "revision": "c8038ad744049dc04fc52ce9b9c4b52b"
  },
  {
    "url": "assets/js/14.e166445c.js",
    "revision": "e2802046fc7e333be82b9db75e2ada7b"
  },
  {
    "url": "assets/js/15.f4c37cb1.js",
    "revision": "95367ec8794100c77ac071fb82cb9251"
  },
  {
    "url": "assets/js/16.dfa0ec1a.js",
    "revision": "c3b1677f5f6c1d7591c64f077c9938f0"
  },
  {
    "url": "assets/js/17.d3620cd1.js",
    "revision": "3fa0d4127a7c4eef41dcb3704a241114"
  },
  {
    "url": "assets/js/18.a7f2c41d.js",
    "revision": "bfc4abfa97028b18b8dc34c6e4bb4395"
  },
  {
    "url": "assets/js/19.1ecd48b8.js",
    "revision": "97c79eaeda8f4954dac5943708ddfa7f"
  },
  {
    "url": "assets/js/20.ca48d2f5.js",
    "revision": "7cc48fd951005cb36688c64996f14d64"
  },
  {
    "url": "assets/js/21.34bdc3d5.js",
    "revision": "3c39efa70a90b0b9705ac6661026db21"
  },
  {
    "url": "assets/js/22.5fb82987.js",
    "revision": "95d16b5869b448a19e5928382ea93364"
  },
  {
    "url": "assets/js/23.db982581.js",
    "revision": "c631a316dbd041236d6ce710e86ad5e7"
  },
  {
    "url": "assets/js/24.6bfd6ae1.js",
    "revision": "2c517f59a9e90749895cc77291c4b039"
  },
  {
    "url": "assets/js/25.1f5290fe.js",
    "revision": "544a669b6fa48030750b9dba3ee567d6"
  },
  {
    "url": "assets/js/26.510ef56d.js",
    "revision": "9e8fa1339107e511269a9df8f3e7e7e6"
  },
  {
    "url": "assets/js/27.bab7dc89.js",
    "revision": "65640be1bfce89cf2cf33fe5a29244c8"
  },
  {
    "url": "assets/js/28.370a6eca.js",
    "revision": "65e4922979209c55ea9b6d24c7c16ea2"
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
    "url": "assets/js/30.5ad0b014.js",
    "revision": "c0e33f0e9da5f776703c5b97ca77bd01"
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
    "url": "assets/js/33.780bf5ea.js",
    "revision": "0b00febebecb569427dae6e83faff91f"
  },
  {
    "url": "assets/js/34.457b94de.js",
    "revision": "2a87c21bd618f88a79f14604971a6b8c"
  },
  {
    "url": "assets/js/35.84ba4d0f.js",
    "revision": "3edb8ff9f023b688e5a8c1d19835a1a1"
  },
  {
    "url": "assets/js/36.45ced02d.js",
    "revision": "e75a76d6695c21ddeb0c43dc6c1b6d40"
  },
  {
    "url": "assets/js/37.87000275.js",
    "revision": "9be39a8dbce5e6baa0867fa579ae8342"
  },
  {
    "url": "assets/js/38.a5a520e1.js",
    "revision": "0032bfe18e855aa1644500b71ccdb2f7"
  },
  {
    "url": "assets/js/39.a5c0e230.js",
    "revision": "9befe7206a95f4c8402aea19124b3a3b"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.7bab2f91.js",
    "revision": "e9d33a4d1381c66c0ec6ec20eca46e38"
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
    "url": "assets/js/43.7973f609.js",
    "revision": "d8e15d3b00e0ea1daf67db6d42d32932"
  },
  {
    "url": "assets/js/44.ac60a214.js",
    "revision": "f149f6862ffe75fedefa0b10fd2ebe03"
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
    "url": "assets/js/47.3a222fbc.js",
    "revision": "69f8dd8e21a7a8a647610c898f5dca46"
  },
  {
    "url": "assets/js/48.71c6db6e.js",
    "revision": "68870ed03982f89f18c24058707aa97a"
  },
  {
    "url": "assets/js/49.71474565.js",
    "revision": "68d616d0c2e6f218cb366b370248068d"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.d8845e49.js",
    "revision": "dc699088f446a0ba3d115d8a0a40b67a"
  },
  {
    "url": "assets/js/51.5107f58e.js",
    "revision": "4039d4302fc61b36863a9a8a52757905"
  },
  {
    "url": "assets/js/52.5cbeb0ce.js",
    "revision": "df7b94ab1b8e2ee3862c031250ff2db2"
  },
  {
    "url": "assets/js/53.cb6b56b8.js",
    "revision": "56b3a5f85aeca27b6c60326a93daef64"
  },
  {
    "url": "assets/js/54.97823cdb.js",
    "revision": "b64da451f6149b948d985d634b8ecb0e"
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
    "url": "assets/js/8.c9a7e8e4.js",
    "revision": "bf5e5c973601ee3e64ece31d4f115ee7"
  },
  {
    "url": "assets/js/9.7125ea88.js",
    "revision": "c7b17f0cb98cdc38c6a0a06fd7abe8a7"
  },
  {
    "url": "assets/js/app.6d1c61f0.js",
    "revision": "fb0fb0d5af9b87b9be031f65130b01d5"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "90334beacf4afbdf52e3371ffed42784"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "ce1c380e08a8273a5f01049056606c06"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "ddd7325415076e1692e51042fc961104"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "fc4cab06bd11688ff6f90e459a225a34"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "28b083bfb36f8e9fc38aa1cdcb97f754"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "f08d9ac6486eab69c6447fb192478068"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "4085108a1083986cd3558336d492c72d"
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
    "revision": "67c48e14d50bf5532aa679d9234d7328"
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
    "revision": "03c8579ed1d1f0f8532d08255263fc91"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "12c7669c370872545066ce999df947ed"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "84bcdf7f1f29ae453267d2ccf7bd27fb"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "3c4604faf664fe0f21438bae411d95b9"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "81105b6d60b3c6d1467db338285409ff"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "857f32106407d6628a7abe81686a212f"
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
    "revision": "f7499820f366335327f71b958668c716"
  },
  {
    "url": "guide/index.html",
    "revision": "627a3d5b73b961645eda1cf5dfc12394"
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
    "revision": "057bb1805c9b76013df219a76d0bdce0"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "d46029ae42a9829d2eea7164afc7cede"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "29e48b17ffe565c07fd54ac699f5654c"
  },
  {
    "url": "more/clean/index.html",
    "revision": "6ca80eeadd7a8bc7400a7a064cc4a7e1"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "ba8528fc53b6d425d33b19921dd96e55"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "9c5ea60187be5af82ce29e0853d2eb1d"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "0ba4ab8a5961ef223a329ac400b5e12e"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "8f5ded07eb5d3b837e59227ac424b2a9"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "d526c71a8cca83ce2ead3ba812c0b66f"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "db3a7f1cb830b43358c8842b5f8f704c"
  },
  {
    "url": "more/interview/index.html",
    "revision": "0fca0e01c88d4d3031d9d15cb23faaed"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "f0cd031984c3981afeea26d7f6b6bc87"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "764d6f0608f1c8a9b5086e86ab03285d"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "190b3a8176d7dd7e7cdcf6dffa35792b"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "d90db660337f3d02a67fc9386906c38d"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "4cd5e770acb8e6fe56ecf8283b1401d5"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "34935962b6ef4dcb20553402390caaf3"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "ff808dc953ca0151755529ed4c46320c"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "1603ad59402ed9572e881cb318c2fc4e"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "603a6bcde0b06af847a6f7c229c07dd3"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "1c3a5e564c178f6230a2dd89c2ec6192"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "66b1e40a77f98d85f349dad0fce6b74a"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "b924b64fb203bfb5fd274b7a15705cb8"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "3dca607a4d65623e52337144312723ba"
  },
  {
    "url": "os/windows/index.html",
    "revision": "0dea24853527c90c391734632b9fffb0"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "d5908ab2533e6f88e189feb4f5a66789"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "584bf7471241142e65e9cefa3819ef26"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "afa2d547e0c10aa5d2e74e86300376b7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fa310b7dd475d9e7bac6bdff16629469"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "eb65048c57218aaf75c4574340a73806"
  },
  {
    "url": "tools/github/index.html",
    "revision": "5399ffc0e61f7469ff28f541b4f09eca"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "494b431edba4afd659a0d86059dbe10e"
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
