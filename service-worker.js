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
    "revision": "f60ed58f2d67ca3fc9eff3f19aa877df"
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
    "url": "assets/js/17.cc55e0fa.js",
    "revision": "b2705971c9fe57fdf59c21f790fd1a98"
  },
  {
    "url": "assets/js/18.596d5d44.js",
    "revision": "a0359e2f56cb8b351d85f178615afbc7"
  },
  {
    "url": "assets/js/19.6b5b4916.js",
    "revision": "c4ea69b6d20d097238c2b2cde987f5f3"
  },
  {
    "url": "assets/js/20.e0cf7551.js",
    "revision": "9b435a32bf956b8996ad284142d6c515"
  },
  {
    "url": "assets/js/21.8584e361.js",
    "revision": "c8bceb4afb061f9f023f412a13528f02"
  },
  {
    "url": "assets/js/22.56b86907.js",
    "revision": "170e3d7a274afbc6786644ebe7bdfbf8"
  },
  {
    "url": "assets/js/23.85b9acb4.js",
    "revision": "ad7abc13cff92854624fca28c56ef325"
  },
  {
    "url": "assets/js/24.562d0557.js",
    "revision": "b297494d3e26987c21633f386fcb40ea"
  },
  {
    "url": "assets/js/25.d5c84dd4.js",
    "revision": "10852ef70ce74fc273c880af00b89e8f"
  },
  {
    "url": "assets/js/26.855b7d9b.js",
    "revision": "f104c1b9388ec45519bc5ac50a042270"
  },
  {
    "url": "assets/js/27.36b975d6.js",
    "revision": "62025a64e7e6c59f3fa10067e21e478e"
  },
  {
    "url": "assets/js/28.6044967d.js",
    "revision": "c04c83f0895cc7dbf250d5e82d41d52e"
  },
  {
    "url": "assets/js/29.c702b2e5.js",
    "revision": "3b712f01c89fe92be1f2c490488a25f8"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.9db994c7.js",
    "revision": "2331e71f0b3e191bb7c0875b3b3200a2"
  },
  {
    "url": "assets/js/31.4fd84f69.js",
    "revision": "79a69a32e0aa84628ed92e5c58bef1c7"
  },
  {
    "url": "assets/js/32.e77a4eee.js",
    "revision": "d7103f67947c10c30b25e4ce038ed029"
  },
  {
    "url": "assets/js/33.ea5c6abe.js",
    "revision": "17be3ed41be1f0c5f9582e2e28e2aba9"
  },
  {
    "url": "assets/js/34.f4a957b8.js",
    "revision": "b65dbcfd63900211a5f083624eefe7c9"
  },
  {
    "url": "assets/js/35.525180e3.js",
    "revision": "3bb0d89461672c1527cda0160272a5de"
  },
  {
    "url": "assets/js/36.0f1ce9bc.js",
    "revision": "039a0ca44e73f0ecbde6bc0a19a446bd"
  },
  {
    "url": "assets/js/37.e4e19d57.js",
    "revision": "65d69d462628570bc092adf42616ae04"
  },
  {
    "url": "assets/js/38.e2c2efd6.js",
    "revision": "f193b37e724b1c34c91a5c8dfebfdc51"
  },
  {
    "url": "assets/js/39.352cb0c9.js",
    "revision": "1687d6c34e25a73fe5a19521dc6abba4"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.ead96407.js",
    "revision": "921558838989e54f171c6ff80a86ecb5"
  },
  {
    "url": "assets/js/41.fee021e8.js",
    "revision": "0f8fa95493eb792dd411efeed2fadbf5"
  },
  {
    "url": "assets/js/42.c2bca5ee.js",
    "revision": "e6abc1a39540e921c3e46ee1046fb26b"
  },
  {
    "url": "assets/js/43.5277b0f6.js",
    "revision": "605b5a779a76e075d55cdd29b187da2d"
  },
  {
    "url": "assets/js/44.52bb939f.js",
    "revision": "7de57ac1705217c679a7377df86e80f9"
  },
  {
    "url": "assets/js/45.3c782e14.js",
    "revision": "9ce6078db3be0102d99e1a3fbb79c382"
  },
  {
    "url": "assets/js/46.891bbd44.js",
    "revision": "f4af3818b07637d5b94889d913458b49"
  },
  {
    "url": "assets/js/47.e10fbfce.js",
    "revision": "ebf38e62f88aca1826f8d21de47e4a3a"
  },
  {
    "url": "assets/js/48.2cde7933.js",
    "revision": "d4f1f33fb66c86c43d1c09a7392e1001"
  },
  {
    "url": "assets/js/49.26970b3b.js",
    "revision": "8e44b0b5298057e45505c20b2bbda961"
  },
  {
    "url": "assets/js/5.881b9557.js",
    "revision": "32a7deb43225deea48b2aaeea87dee2f"
  },
  {
    "url": "assets/js/50.e7f7ac4e.js",
    "revision": "d92be36b132a4b8e02af408bfddb10db"
  },
  {
    "url": "assets/js/51.9f45b91d.js",
    "revision": "d9c246ba36a0e76a037ca1d891a09367"
  },
  {
    "url": "assets/js/52.e6ba2c56.js",
    "revision": "f56f77039da2ae74bf3b0efbe39a2654"
  },
  {
    "url": "assets/js/53.fc9acfb2.js",
    "revision": "d32b326aee97cfda6832389f5f1c7f0a"
  },
  {
    "url": "assets/js/54.e6b6d98d.js",
    "revision": "4de304f0b1c707c09de3c31059224f12"
  },
  {
    "url": "assets/js/55.73c9a95e.js",
    "revision": "0a9f22391283495f50976aeae76153e1"
  },
  {
    "url": "assets/js/56.7e3cdde7.js",
    "revision": "a8205c46d5e3aa88bfe257b59a48bd45"
  },
  {
    "url": "assets/js/57.18464789.js",
    "revision": "9b2a370d2d40244b68ea6a365abd0895"
  },
  {
    "url": "assets/js/58.0411c59a.js",
    "revision": "52b89c63acaa7d332b47b1d45bdd6ed6"
  },
  {
    "url": "assets/js/59.45c81f6f.js",
    "revision": "1c6d93f4dd9e82a09247f1eb66bc8f2f"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.8598f07c.js",
    "revision": "88f890430f2a2b2c000e4c4841c89c0f"
  },
  {
    "url": "assets/js/61.93c4f956.js",
    "revision": "b6f6945f43873d53ba34ed8a481bd829"
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
    "url": "assets/js/app.5804e185.js",
    "revision": "2218ae36cd60665cb9dd0121817563a4"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "565aec693404f86cc8c4982cfbcb2ec4"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "fdaebbe05aab6d08171f485c3adad205"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "5691bc1241b7bbb2798e930d147b70a7"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "37a22727c078fb3c7a072efb496c014d"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "b69f7da41436bc727fcf7f0e673d0058"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "fb19710265a016afecbe1209513a5463"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "546f3e1836035333f7c0cda60fd79310"
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
    "revision": "61a526d0e18c9a4085718a5e7c3d17b9"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "07a2ae85dfb79f024c0da0453ce70c15"
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
    "revision": "74290df2ad81765d1f2322af40d732a5"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "39cd7c9b41f99e3f282a46b85760c810"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "03f8772099c8b6a1903d6a3c9ff66254"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "c8327d7f0bccb8db393eeb9eb955a2ff"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "ab396d2b9ee65803bd723b37f6a5b02d"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "0bbddc5a09a7e441e358c286d50a4a52"
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
    "revision": "62c87575539deeff6f1497b24b4730d3"
  },
  {
    "url": "guide/index.html",
    "revision": "64832e13d5beb7eef295b8077abd65ca"
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
    "revision": "e27a03265e9c8b3eb654afda1dea6aff"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "be34bd3d45a888fce856f0e73d57657d"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "545382c4690a15b75ace0907e17daba6"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "b08edbcd129233baf23789fc28e06a6a"
  },
  {
    "url": "more/clean/index.html",
    "revision": "851cefc6c72db68d851d3878d7de6f10"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "8b0849105ec66956f4e791e607c720bc"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "3c8fc6bc5a679aac7dd8e0477e24cb4e"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "75869803373517c2311c818c17d4decd"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "015b3f45b7aa10b386e793297c3394c9"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "2c9e138c572b307d72ccbfd83868bffb"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "c455fe1594c14fa216448c49ead20839"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "deffd33cefbd03440aa7960417cb9690"
  },
  {
    "url": "more/interview/index.html",
    "revision": "3797bf1bb254fee85e6f81a63e214cb2"
  },
  {
    "url": "os/linux/index.html",
    "revision": "ed53bc3c60283af7483a9517bad2ec8e"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "729a6b75a64537b156cddbe5598f8b9d"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "2a5da5439dc4bbbb0096e094f8424b34"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "e906c6b1280d22666140b1c0de4672d3"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "76369684c128e9e99018ac9cef8c8c0f"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "3bac9af58bcfeb76b6df6232ada28f6e"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "3f5e66ba4ba55699d8ebe7a0286ea416"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "c8bf2c409ec1d609fec5a20fd99c483d"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "20bcd562729e0e5d659c81d447d8d939"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "1cbc8f80a89da484f91ab13b288d69d2"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "51a3d4aae8dc4f92b0ba36131ae8dc79"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "efd481fb72529547e1d6d5a53ca9175b"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "ba08f88b2403e099e22254ebd15e216d"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "33b13b937e8161bc5976ebe5a53400dc"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "ea9ff9cb556017c2ceff5206380800e0"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "55ead3acf383808f097a53ae7e92e709"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "fc6e4d0391c8c86dac5bb93dcdc74180"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8acf184643c3f47e1e88ed1113350504"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "acb81463cc396f5516c2bfc7fc14068c"
  },
  {
    "url": "tools/github/index.html",
    "revision": "0881b8e84c65f0d1e8b622a35a44b534"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "47ce105d8ee29b626b70af59f80e8d97"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "1c9df473f86ebd9ce9e3d5b784da5ca0"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "9f8cab5d68c43ff58d7166696ce43234"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "86089f4e2b73b472e0fff8ddfa33620d"
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
