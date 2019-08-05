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
    "revision": "911a26c502a6196a2545fbb99b2d1de5"
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
    "url": "assets/js/20.d94e1d4a.js",
    "revision": "f8e480626771c5cb0d65fd582bbc8c26"
  },
  {
    "url": "assets/js/21.6ed6970b.js",
    "revision": "6866992e1b0329801876f6670e1dc78f"
  },
  {
    "url": "assets/js/22.e986d214.js",
    "revision": "ee82f210663e9353731f11e5055e7800"
  },
  {
    "url": "assets/js/23.f8dccbe1.js",
    "revision": "ca147d4138fc39d0e9f945c109cd064d"
  },
  {
    "url": "assets/js/24.e3de64b0.js",
    "revision": "912c927bcc339bf59ff2c29510b77c27"
  },
  {
    "url": "assets/js/25.49ce1e3a.js",
    "revision": "b16ac8c64451ec22600cb172f5dc9c90"
  },
  {
    "url": "assets/js/26.d4ea5fe0.js",
    "revision": "1dfc3bef35eb016df5b73f1494ae67c6"
  },
  {
    "url": "assets/js/27.8799ca60.js",
    "revision": "513434cba08acb08eb04dc566076f5da"
  },
  {
    "url": "assets/js/28.4be2eb2f.js",
    "revision": "4ab8ed9505c476f8fe8d47f9f6657a6a"
  },
  {
    "url": "assets/js/29.895b3bfa.js",
    "revision": "f92da74ee5dc2f644c282c6493e48f87"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.89e2d623.js",
    "revision": "9ef149dbd30be69ee8e7d0c6819b4e8f"
  },
  {
    "url": "assets/js/31.276e2412.js",
    "revision": "7df834f09855784eca7b8b1b8185cfbd"
  },
  {
    "url": "assets/js/32.711f5626.js",
    "revision": "561e53357a8d041dc97f02667da0bf63"
  },
  {
    "url": "assets/js/33.ba77a577.js",
    "revision": "05b55ac1fdc11ef88607c5c6c6c697df"
  },
  {
    "url": "assets/js/34.e6e7ae07.js",
    "revision": "92bb5c36e301b5ee1e7d9cf09cc4feb3"
  },
  {
    "url": "assets/js/35.f230a5e6.js",
    "revision": "4c0dffc70097e6e20cb89573512739ef"
  },
  {
    "url": "assets/js/36.37c4fd1b.js",
    "revision": "e741b65c388807828b024a25115f2a97"
  },
  {
    "url": "assets/js/37.c8300715.js",
    "revision": "021321f90f4cf8eac9446d2b87c8d7ed"
  },
  {
    "url": "assets/js/38.e0f0dae7.js",
    "revision": "968aff171997a81991543dfa2c7a7c14"
  },
  {
    "url": "assets/js/39.9988435c.js",
    "revision": "35e45d4c28cb99a8d98088b392a59756"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.2ef0c389.js",
    "revision": "6e2520475848ddc61bb837e410b5eb42"
  },
  {
    "url": "assets/js/41.d647c093.js",
    "revision": "258afd86f903517b0e6a1e96f9b8cdc2"
  },
  {
    "url": "assets/js/42.ef9ef33a.js",
    "revision": "c1a48fd9c3822087c73882696905271d"
  },
  {
    "url": "assets/js/43.8069eb06.js",
    "revision": "0be5bbe9b1708a2c348773f430ab0326"
  },
  {
    "url": "assets/js/44.0cd5d0ff.js",
    "revision": "f14ec6a1fdbf2683a9484f106083f684"
  },
  {
    "url": "assets/js/45.81285597.js",
    "revision": "69e1c4a4db06c7237dd156e2d7c9742a"
  },
  {
    "url": "assets/js/46.a89fdfc4.js",
    "revision": "8d2fce064e73bfaddae1133cd3cf4efb"
  },
  {
    "url": "assets/js/47.d0f1d629.js",
    "revision": "020ce885b0029b7d0d71118f6b63856d"
  },
  {
    "url": "assets/js/48.94489a85.js",
    "revision": "996fa77f5cab4731e4df69c8d4656837"
  },
  {
    "url": "assets/js/49.23d48853.js",
    "revision": "98f5bf958f4146f96416adb293a04b2f"
  },
  {
    "url": "assets/js/5.f806db74.js",
    "revision": "496e63f703bdec64201012eddf3fe40f"
  },
  {
    "url": "assets/js/50.a5d584e3.js",
    "revision": "3a72ff62110dfd3e95bc17d6af506844"
  },
  {
    "url": "assets/js/51.ff17ef06.js",
    "revision": "304b9c744fef1d1cda3bcb3eb6ee2ca9"
  },
  {
    "url": "assets/js/52.a2c71154.js",
    "revision": "214144c69b9ca47bb843db44320cfa7f"
  },
  {
    "url": "assets/js/53.a041af23.js",
    "revision": "138f60c7ead33c1d61fe3cb5ce96490f"
  },
  {
    "url": "assets/js/54.610a2e6e.js",
    "revision": "d46018bca34cd69a8923b1565983759b"
  },
  {
    "url": "assets/js/55.c0863a45.js",
    "revision": "7f8f9f1a958f1135bf9b1679a8238d72"
  },
  {
    "url": "assets/js/56.71d72204.js",
    "revision": "aba693ea4c00bb3603150e38621ceb8c"
  },
  {
    "url": "assets/js/57.ce06c4d8.js",
    "revision": "c38a3a7ac5b9366451d5deafb5bfa8de"
  },
  {
    "url": "assets/js/58.86018d13.js",
    "revision": "e5caf5b04aecacad1987e3f7d382da63"
  },
  {
    "url": "assets/js/59.7a7b2afd.js",
    "revision": "ce815098f19f0d08ba6ef7ea344e6e51"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.c75cf208.js",
    "revision": "e0b582b008897369180ef367f02b54a2"
  },
  {
    "url": "assets/js/61.d86b3964.js",
    "revision": "cbd4f3718013c7caee2583ad0149a3f4"
  },
  {
    "url": "assets/js/62.9a2ef4bd.js",
    "revision": "1baeffde030b9bf47f54762c9c1af6e5"
  },
  {
    "url": "assets/js/63.22212a2b.js",
    "revision": "2621702d70fc123fb647f599e5e27e21"
  },
  {
    "url": "assets/js/64.f77013ba.js",
    "revision": "2a2d590f397e5b95029fe1a9c2ef31eb"
  },
  {
    "url": "assets/js/65.7901f000.js",
    "revision": "4af58ff4d01fd1cc47ac22f335d14f04"
  },
  {
    "url": "assets/js/7.b1f2efd6.js",
    "revision": "580e43f5bde07cda27c6e9af9837f12b"
  },
  {
    "url": "assets/js/8.87618958.js",
    "revision": "3b8046ffcddae325368648380e85201f"
  },
  {
    "url": "assets/js/9.60b709bc.js",
    "revision": "ea975a7e51638ac5a35b5cfbd54a11f9"
  },
  {
    "url": "assets/js/app.b383837d.js",
    "revision": "9c001ea7db736f2652943f08edad0db6"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "39d62b4dac8220daad24cf3d61ceab46"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "1ed062b0731c07e1599fe2490d787b74"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "3cd5009010e2b658253851c437d395fc"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "5c4d13ec9211b9c0dc06d0899c9f6738"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "693d26a1a0abdd2f9aa53b65dd62c439"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "6f6320ce59659465db19717fbeaf6405"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "8934033f4f2a86fdcf640f61c32ac870"
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
    "revision": "601db5261d0a56b4c09109cb0e3192e9"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "83a885eadf46ef405a5a73ebe226c643"
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
    "revision": "7f778cffef5417b4dd4f62ee5b26ded1"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "b55fcdf306ccb0cbd4ce19e1ffc4ddec"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "9b168dafda1685433866a70e0e81b9e3"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "f2a607c05b101d101154e62781428514"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "48e3078b32c39c4a0286b1e4bc4e1ae0"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "7145039dad0bec4e06c4d54eb8327b3d"
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
    "revision": "abe2ab659e98ac5a91be2c17a5664e50"
  },
  {
    "url": "guide/index.html",
    "revision": "84834e60dd76d5fa9ef68771236cc9a9"
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
    "revision": "408af2191613b83c5092a999c1f2be47"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "4f58565f8e6fd242baa6df528cdb30e1"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "4d1d0bca6b12d62efcf9672b8eeff5cd"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "5248fa2bc8a5192c1bf575fa044aff83"
  },
  {
    "url": "more/clean/index.html",
    "revision": "21dcaea4993b4827940166b2bda54cf8"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "6bf3ba4dfcd4ff99552b309672e1781a"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "278cf8d37e844922567a60643a6fa5d0"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "b5061f7fe6a237f3cdfca47f7c385acd"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "1a3391d8b2f07bdcff6d94f83f2a0a47"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "4e5fdb878a6f1f39de20e138ac52c7c3"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "dff99e0f80da7933232c07fb7ecbd704"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "4e797861dea30a5e095ffbaa69e2a85c"
  },
  {
    "url": "more/interview/index.html",
    "revision": "cce011f70ff4f13995119120f044f867"
  },
  {
    "url": "os/centos/index.html",
    "revision": "8c53a50492342cace15b21479a0e4f21"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "fec890382502ee90b3feeadd66711101"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "1c1c7819e14b18cf11f65cb08b638003"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "6e385fec3a8db20d527982c9a16c2df4"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "4800baec4de0d33d32ac63204a68e2bc"
  },
  {
    "url": "os/linux/index.html",
    "revision": "d998c9bc704da35389c19c63be6e692f"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "ece4e6e751ad98ed53259de5a617f8af"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "2f0dbf81c087c366efd32a711107fe0a"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "2a08a7cdd7ed17342bc1de8f820592a9"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "adbf78922ba71ebafd15009ada24a8b7"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "815ebf3fcbb92d685540bbae65e8b859"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "402d29b4780ecedb13676fadd77db268"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "637afccc39aeb90481ee898b06e8ec5a"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "6aac4e62d94e2cddc5d4c8cc84e49383"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "ba29e4e5665d33629b74b1db88a2732c"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "be41d51809cc0e74aa5f683e9ff11609"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "0857a0ce7cfbc161355cda3f98b589f0"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "c9f6e3c817278c7c5d2ffb4304817dc9"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "f4a66a37783a499a02065500dfbd46d0"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "39fb991d35a17c1090725ee67f367e93"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "bb26a8f12796f27dff36af926288fa36"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0c8e4c9ebaf4185f5ae864ce7f765bfe"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "24c35362989659ffcc6b612d84910d88"
  },
  {
    "url": "tools/github/index.html",
    "revision": "cf98675378a19eec8f086a09e2fc5ddf"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "3e6e22c504fa2cac65821776109d35fd"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "5b279fc3db0f079db11798f99141629a"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "10ee0a5d6a23d0ae39ba313df9b6a7b6"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "b8c33908f239d5e7b3ed4f6a791fd132"
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
