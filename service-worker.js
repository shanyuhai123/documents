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
    "revision": "40e0644854e276d15a97aa06de5f68a9"
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
    "url": "assets/js/18.e2f9fdf8.js",
    "revision": "a1b2e7d260a0538606f1658eccb14c1d"
  },
  {
    "url": "assets/js/19.d1e09ccd.js",
    "revision": "f079bb1f699bbbb6d29568ca5f2eedef"
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
    "url": "assets/js/31.47322feb.js",
    "revision": "95143d8a3e29d265e0145e16bde7298b"
  },
  {
    "url": "assets/js/32.241104ba.js",
    "revision": "1d0bd6053281a5944f54393b61a83655"
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
    "url": "assets/js/35.f230a5e6.js",
    "revision": "4c0dffc70097e6e20cb89573512739ef"
  },
  {
    "url": "assets/js/36.cccde023.js",
    "revision": "1887bb6e07ba0807b99f8a66b09335e1"
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
    "url": "assets/js/39.54ca8416.js",
    "revision": "f43a04281522285a1051056cdecf67d5"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.b7a90557.js",
    "revision": "3f7f497973fc5959f94a2987051209b8"
  },
  {
    "url": "assets/js/41.89042874.js",
    "revision": "e90bc69853eb07485a1542baa176c85e"
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
    "url": "assets/js/52.dc92c259.js",
    "revision": "02e85e1e7b4014c5ec6b6a60bb64f1e9"
  },
  {
    "url": "assets/js/53.a9900db3.js",
    "revision": "6e3e7b327312f6d6a45ad6cca1c25044"
  },
  {
    "url": "assets/js/54.83a1a2d1.js",
    "revision": "c71298365738eeea77068e2579a0faf9"
  },
  {
    "url": "assets/js/55.89d36627.js",
    "revision": "17fe00ba4cf6917cada940bbb1c3e829"
  },
  {
    "url": "assets/js/56.319a58bc.js",
    "revision": "027fb3844964991df78f50bb7a40860b"
  },
  {
    "url": "assets/js/57.c85ac73f.js",
    "revision": "e16b66e08570c5ccf46ee45ab6ea8850"
  },
  {
    "url": "assets/js/58.f7215afd.js",
    "revision": "740771f1c12cb4481b016bc17d657b04"
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
    "url": "assets/js/app.22e456db.js",
    "revision": "525cd06768956096db77f3c2f9a650a1"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "fb1cfe574018a9de31a7bc6c0165d72f"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "ebe2548bfaa118a308b8e34badf1e0f4"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "8e32b22078b9eb243ca39212311a2931"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "e8ad0185f26e629a524de4020dde1a94"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "0c4ca76b33d9e39a8bea61d04f2c07b3"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "bf9e752527c712489d33d72a74bd66cb"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "3e1b1f17bc7ff1eeb06f1809cd86d304"
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
    "revision": "8a39be56290afde8225c7800dc353f30"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "cb23322c7f820d0c942101e87a27d675"
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
    "revision": "f811b561ff0c3d3aa6c22041b712373d"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "285de3ef86e131bb54adcaa18adcacb1"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "3fbb55d99745a496e46ebd4ae4b181bc"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "4905bcade0bc6aae1ff21ab96fb4d493"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "4d8e103737fc0a3daafa125d08f4617e"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "87af32b4edad5c5574f0befc4a60a835"
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
    "revision": "085574d2555862e9284be2d3e9711018"
  },
  {
    "url": "guide/index.html",
    "revision": "028c1a83af78f32affd1f7881d1bb749"
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
    "revision": "0935ced2ea8da81ea7426289e63940cc"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "7807b84513c4a595d8cc762ce593467f"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "7b5b4405038a0a399d8d9b6a9984bfc8"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "ee4e7ed55a610cec554d66b106044b4e"
  },
  {
    "url": "more/clean/index.html",
    "revision": "df0fef92a3eff41392122af776a65466"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "bce9d0ac7957a244e2bb3352e3867c63"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "cb5d280ec8dbaca187fb187f0a502910"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "8f08c9a970a1d8de7e6716b92549bb4b"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "d6c8996d289e3c8ad7807288b85b7721"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "ff57f98295b92bf92f454ae498dede9e"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "74a78e51d377cb2129687aa300d6bfbd"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "e01775c17782348ba064551eb73a3d0e"
  },
  {
    "url": "more/interview/index.html",
    "revision": "9d02ee4cd14783d50a1d0fc43878c4ef"
  },
  {
    "url": "os/centos/index.html",
    "revision": "b66bacc3c8ade70acb680d6a5ebd7b04"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "e1f4d572f42f94dcd681f841fa866222"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "687eced536220a5cf1a63088346853bc"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "eac9c6d56f3a213cde46dcaf5b390a4f"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "c6d1afaed8d447624e356f1de90405fc"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "3934350079a9a3748cdb77fb8d4a32f4"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "d213590af3cb1b9da02e7bc8bf22fe77"
  },
  {
    "url": "os/linux/index.html",
    "revision": "ddda1eb5892f8a5c82415ed10069dbac"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "be7478b8b1923f7bd0f8d7e6f14ee8f2"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "c6c882b20bcd9147b431540fc189e201"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "9bfb22a867cbbbfe1eb74010bde76748"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "da0c1890ebca86ac06af1ef739d88c13"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "f1d45a5b3e6d03407e7e7f7796b7b217"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "9be47211d183e22391c5db94df8e9091"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "cef54ace809b48da0a81c44477714100"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "28e109f731d253084053a55ad89ed86d"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "48f99d2d0f41f11a96ff06c851cb14ea"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "4686c8a9037430a6d5ed78119f678668"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "59574fde0e1a3c497bcbd2ae0a06f2bc"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "c1b8522f434f2f3bb72c21ff356d907e"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "fcd3920c7a8e45e82061f7b2f04554bd"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "e49e918c07d76d478b2442f0330364ec"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "f9767f1b19f36477381a9a04e1bff163"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e7b6e5034ebc622460dba84756fb513b"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "ab4577c3bd75bc7321afd50468cb1ed3"
  },
  {
    "url": "tools/github/index.html",
    "revision": "8c525d203635ec423041382752de1163"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d8002051d68e0d56753a8730bc3ade98"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "22d3239642e047fd5a880f3dafd6f81c"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "8ae10650f41620729fcc4a19c987a9e8"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "1d2f9579bf17e0bf1a0a20354ec1b42e"
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
