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
    "revision": "faa6f0749c8c17a2cd684f5f5d4062b4"
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
    "url": "assets/js/25.391fc2f3.js",
    "revision": "09fab95ef2c645adbaaeb0288a4ae7ee"
  },
  {
    "url": "assets/js/26.f3216342.js",
    "revision": "74c18791f997f9f177d0adfbf5f12cb9"
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
    "url": "assets/js/49.d31243c4.js",
    "revision": "b6b843aaf2d2c331c9120cd7cb32d3ee"
  },
  {
    "url": "assets/js/5.f806db74.js",
    "revision": "496e63f703bdec64201012eddf3fe40f"
  },
  {
    "url": "assets/js/50.c7b13a9e.js",
    "revision": "b5b9034981a6cdde9883bf3a6be0ab86"
  },
  {
    "url": "assets/js/51.ff17ef06.js",
    "revision": "304b9c744fef1d1cda3bcb3eb6ee2ca9"
  },
  {
    "url": "assets/js/52.dfd365ed.js",
    "revision": "bdc15ef3aab476fcbd16ddf35a5991d1"
  },
  {
    "url": "assets/js/53.4c47fc39.js",
    "revision": "f7e3e7c5e9baefe6d65a29962172766a"
  },
  {
    "url": "assets/js/54.ba366cb1.js",
    "revision": "66360d9e5ff5546f990e7a83292aff4f"
  },
  {
    "url": "assets/js/55.c0863a45.js",
    "revision": "7f8f9f1a958f1135bf9b1679a8238d72"
  },
  {
    "url": "assets/js/56.3d1d980f.js",
    "revision": "88390bb64b37c27e5528f10ae8781d75"
  },
  {
    "url": "assets/js/57.cfa842cb.js",
    "revision": "ef2b3942fc92579ee89bed5474821aa1"
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
    "url": "assets/js/app.5ad3c60e.js",
    "revision": "168ded0cb50ee4146a00c14024b9a7ab"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "e0a152b09fe787f139be45fa133e289b"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4323e63687962f614f8b077eef187baa"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "68d9fa267e2a96aa849e7b8b43ac2003"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "505cdfa4769f09a5a460de08997f2786"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "97d5c8ea2e5a04497bf68571af11a908"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "90d0b038878789dc619370d7210a23f8"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "1aec6962739e9cbf94e0f0cdbb060de0"
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
    "revision": "64b67ddb516debcaab485b8bf895a0d8"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "6ce2cf52365702d9d603d78e57a5d574"
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
    "revision": "a94fe21758259998522d3b0256f92d50"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "956b98692f58ed1cf2cface6026c0ff8"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "b9e9118e13f2aaf56bce00f55a31b0f8"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "2f3c40026cc9b24c56b120b94404072c"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "f089141d34e74324dddd96a8d1e0aad7"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "13a0aa7f114a2aa7a6b5234f648940d3"
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
    "revision": "99bea0c0a07ea4f27bd3c9beb354b520"
  },
  {
    "url": "guide/index.html",
    "revision": "354dd5c3e6823450e78311dff62eda4e"
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
    "revision": "ca096ceb7d449858d6175810af01d76c"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "6d50a2c4b22e6f7cb9e7de3592cfbab4"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "ef367a106f88bd0dc6b00a8e58ed61ea"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "67be943d2be284cc7eb8ed82c78c4cd7"
  },
  {
    "url": "more/clean/index.html",
    "revision": "10615b6d4282287e2c3efa9789636ae6"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "716270136ec3d374bbd46eed6fdecd44"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "6ac39b9be485593f9d13b9c81689ea6e"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "5e851693a42277f61c513573ca09c83f"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "8f611b9e11fd6748fb87626c1f17e827"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "76b748411b50af7a582d872b21bfeed0"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "6b9b7535b7a863356671e61cbee2a945"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "24c6b7f2e11b0744109788e9d0e686fe"
  },
  {
    "url": "more/interview/index.html",
    "revision": "2a84fc488d84d7435351bff109ddad47"
  },
  {
    "url": "os/centos/index.html",
    "revision": "16161e22ff99475666e7da7216da90bf"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "6e7f83cde1f4ba5ab3a5e5fbc1a8d878"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "50396af05efc10b6f3fc6dfa57cc0307"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "ba5569b6958345d608989c1f690e030c"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "f393a41c714c819d9e63cd405ef5829a"
  },
  {
    "url": "os/linux/index.html",
    "revision": "44cd7f25a8d9cd1a63bf99f79de1cbcb"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "94728d6099ca316bc0dd61b0fc0c0e52"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "6f387a0bdb6dece34ebc0cd9fd4cba67"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "871892fac566cbb8d5a0369d748a9651"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "b767b8d4065f71c29efe485d30ced935"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "51ce97e05535dfebba2cdf996390fb0f"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "071bd634e9615328f0e37004d0c7c78e"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "bd4ccff4e615e3b79bfaa8887c486998"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "09585bf3719c678f45aa3b9d19042c28"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "6aca16d430abfdaf7ada6d8ff13b4de8"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "84f760ff8511685e0bb1cd6832e02221"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "65beb2c47d717c81145766c6406536eb"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "79bea979df2c909fba6fee051018b602"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "1d8f1c0d62d5c2e0f2b66c4cdb80d421"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "b94cf7c8ecee48549cc24358600022ad"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "843fda9f294f01c9858c5bd41b9fd112"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bbb56a15a9b42ac2d8b375f416c15174"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "e921b583c34ddd971b52e2eff490a949"
  },
  {
    "url": "tools/github/index.html",
    "revision": "0a3bd7c1a291002f5098d418e2b222ba"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "f7499392fc24283187b25eac3d433298"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "3a4802e37c05c6d408fed4b80ca9517c"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "df09893617b2e3fb1b8db1f6c0d36620"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "41d748da55a9f1f3e0f9d26cbfe41e34"
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
