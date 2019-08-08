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
    "revision": "20f94d6b6797ca5ba011882daa233921"
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
    "url": "assets/js/10.d12039c4.js",
    "revision": "99e0b6bf2d3fe0c3e8c6e199d12d5f31"
  },
  {
    "url": "assets/js/11.814ddcab.js",
    "revision": "463cbc548f687d0e09f139e06941ae78"
  },
  {
    "url": "assets/js/12.f0579aed.js",
    "revision": "5b35abcedac893a0055328388171d112"
  },
  {
    "url": "assets/js/13.79ac741b.js",
    "revision": "594672917bb450096dad139f8c62a4a7"
  },
  {
    "url": "assets/js/14.048cfd88.js",
    "revision": "62f4f0fc80e193febbebcaac0c05d40c"
  },
  {
    "url": "assets/js/15.67a51c82.js",
    "revision": "51cb1b5d887fcfcb1ee74cc6676ef434"
  },
  {
    "url": "assets/js/16.a9e35e4e.js",
    "revision": "d5df79277515b7e811960b72899092c5"
  },
  {
    "url": "assets/js/17.bdeb30ba.js",
    "revision": "f1f79d0ba021d36305b37f18da24de90"
  },
  {
    "url": "assets/js/18.3616f130.js",
    "revision": "50f6220f5103ded3cbcf83a121d64ee6"
  },
  {
    "url": "assets/js/19.2654211c.js",
    "revision": "93967fe4d406ed0ca0740986e023b03f"
  },
  {
    "url": "assets/js/20.0b3c3a30.js",
    "revision": "4e9e11f6177423e32d79ea292dca6bd9"
  },
  {
    "url": "assets/js/21.f0e92098.js",
    "revision": "ab02d84185fa73b906b92a2b616c6007"
  },
  {
    "url": "assets/js/22.e46a1d35.js",
    "revision": "877113ef35739ed43fec9cfb5a95894b"
  },
  {
    "url": "assets/js/23.5d3b9d57.js",
    "revision": "590ddb9abcebe1a6bbd710a46b771e38"
  },
  {
    "url": "assets/js/24.c786903f.js",
    "revision": "85c4cc040c0f22397c218ab16c4a3c88"
  },
  {
    "url": "assets/js/25.8172eb93.js",
    "revision": "e8851909a8fa7eaf4fd05f148362b728"
  },
  {
    "url": "assets/js/26.e1288b89.js",
    "revision": "b6c1c162d722afd5824c040be4b4030a"
  },
  {
    "url": "assets/js/27.e354ab6a.js",
    "revision": "0cde4658daa6258000715ca266e7059d"
  },
  {
    "url": "assets/js/28.2e7991d9.js",
    "revision": "3aaa9ab04c53b89f5f37b4108efbc6e8"
  },
  {
    "url": "assets/js/29.9701a457.js",
    "revision": "6f1422b7790f7a1f80db98624c8926f0"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.138ae905.js",
    "revision": "81dd609685b5109f5ef6723dfcb60a1e"
  },
  {
    "url": "assets/js/31.7df25345.js",
    "revision": "7a89ea28c363b1a8b60152ee6986a4eb"
  },
  {
    "url": "assets/js/32.e8656a49.js",
    "revision": "7beb57fa02ffbad0222ecf82aefb3fd5"
  },
  {
    "url": "assets/js/33.bccd6a8d.js",
    "revision": "5f858e308936f838dd063ad0e0faf9bb"
  },
  {
    "url": "assets/js/34.b9e4ba25.js",
    "revision": "878757d5ca0505c7f87775479400d42c"
  },
  {
    "url": "assets/js/35.ecb5eaa9.js",
    "revision": "698645a673219d4b97cf5218a8061918"
  },
  {
    "url": "assets/js/36.86c635d4.js",
    "revision": "52d11576a111e26f9d75e744e84351b8"
  },
  {
    "url": "assets/js/37.6deb0275.js",
    "revision": "d56f733cf945b4a68d3f1f0a3864c0af"
  },
  {
    "url": "assets/js/38.99b26e13.js",
    "revision": "f0468968648dcd3925107d66b3daf9b0"
  },
  {
    "url": "assets/js/39.077ec9d2.js",
    "revision": "4d7883aa01bad1d88b3c9bb7752f9ad0"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.be87e744.js",
    "revision": "9d1d1c079502e0da2e28038583a301a4"
  },
  {
    "url": "assets/js/41.43409253.js",
    "revision": "bce3f07d0463fd987d95ed290d354d5e"
  },
  {
    "url": "assets/js/42.5134ba87.js",
    "revision": "57447b4350926abe66a1c0bd4da398f0"
  },
  {
    "url": "assets/js/43.25f52adf.js",
    "revision": "483c7d3d1c3f070c9eb2967a3d91cba8"
  },
  {
    "url": "assets/js/44.f8b99c42.js",
    "revision": "8640ed37aa9545ffcf60ed395ff9aff2"
  },
  {
    "url": "assets/js/45.a78f8643.js",
    "revision": "61f3e9a207d23d20d0b0337443abc6ab"
  },
  {
    "url": "assets/js/46.5250d7c4.js",
    "revision": "f243a2ecd4695dc0b94eb24d15d9cc49"
  },
  {
    "url": "assets/js/47.f021f9c2.js",
    "revision": "9fc16c9ffbc0e1dd1cbed6b87be5a6f7"
  },
  {
    "url": "assets/js/48.bda10399.js",
    "revision": "5f74c39a948e0faa80391b00e3e7edab"
  },
  {
    "url": "assets/js/49.9c3aa15a.js",
    "revision": "0234eebb39f0509e325741678ba7c46d"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.bbb270bb.js",
    "revision": "80823c21ce6179d10b9ff685dffc5740"
  },
  {
    "url": "assets/js/51.524e4c7a.js",
    "revision": "3af230c57f6c89a9a15deaf62ca54209"
  },
  {
    "url": "assets/js/52.d3f80026.js",
    "revision": "2e72d890ef86b0a60c78843586cdf926"
  },
  {
    "url": "assets/js/53.1e4a7ac3.js",
    "revision": "138e206a6db6e701ebcafe30f3d06260"
  },
  {
    "url": "assets/js/54.3d303c6a.js",
    "revision": "d3ba06de9670d15cfef1549e65fe1561"
  },
  {
    "url": "assets/js/55.d2e7b111.js",
    "revision": "b63f558e52b296ed9b7bf52f1fee1303"
  },
  {
    "url": "assets/js/56.122c514e.js",
    "revision": "901e8d543774a1f343cf007849ca6ed1"
  },
  {
    "url": "assets/js/57.ad9a401a.js",
    "revision": "92af9ac2f5d3ee2de5ca29e4776bbd00"
  },
  {
    "url": "assets/js/58.a585ee3c.js",
    "revision": "a34f75f632f34377280f94043994a699"
  },
  {
    "url": "assets/js/59.7b364d91.js",
    "revision": "24f943bfecc249641e04b1f71fe282b5"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.15013d7b.js",
    "revision": "d6178af7baa0e4eb4eb9034768cadb7d"
  },
  {
    "url": "assets/js/61.b9bfec2e.js",
    "revision": "a1bc0f677011f68cd8da2999539deff6"
  },
  {
    "url": "assets/js/62.9e03618e.js",
    "revision": "f9214617f6c3a6d037ac2dd503af2cf6"
  },
  {
    "url": "assets/js/63.7401abed.js",
    "revision": "5c0a13002bba23399436167cdfa184aa"
  },
  {
    "url": "assets/js/64.48737553.js",
    "revision": "119c67d3817261adf2413c4b09fad96f"
  },
  {
    "url": "assets/js/65.61fb5dc0.js",
    "revision": "16e8692449b2f21e5b01c4d2a47eb830"
  },
  {
    "url": "assets/js/66.9c80218c.js",
    "revision": "56d7d84ac0cea9c0a44fb5acce6df314"
  },
  {
    "url": "assets/js/67.73b54714.js",
    "revision": "7e9c6fa09a686becbb2f04e41cbc99e2"
  },
  {
    "url": "assets/js/68.5591c4ec.js",
    "revision": "216009df99a82b5d7e4c661187b94657"
  },
  {
    "url": "assets/js/69.41b3185c.js",
    "revision": "365f224af5114336014c8786ea2a270f"
  },
  {
    "url": "assets/js/7.75ad9741.js",
    "revision": "5f5d21651d677a960d98f10c4669b289"
  },
  {
    "url": "assets/js/70.42747fc8.js",
    "revision": "4d1cd491dfcdcb64a772440e1bc0a0b1"
  },
  {
    "url": "assets/js/8.14d1b112.js",
    "revision": "09ef4e7322ed3f12be65aba6390a3447"
  },
  {
    "url": "assets/js/9.98226a0c.js",
    "revision": "ed3a37aa4c6dee5b2ed909b7a20db553"
  },
  {
    "url": "assets/js/app.290805d7.js",
    "revision": "ca5b6f3d5f5dfd5d8383f1bd23848e35"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "5b9a0b6f7d348f89b4f38e15a9017c67"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "cc8c4267386688762e71e373f7cbf961"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "3293c66711f523ea422595aa66507557"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "82d7b727af80038f812990e2ab534d52"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "27ad528f0a891f39de11fcf1d568cfcb"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "4dda449d36f8b7d8f5bdb683dca6756d"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "5cd4b6193410f49c5865659fb344efb1"
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
    "revision": "3d3babc38aa2d2fda3cc173a07b1e15b"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "1d1d7afacbf9c645e5235efe94362027"
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
    "revision": "7097591061079f00a2e939f147b05a8b"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "154d2c254fba2810ba44f7b399e31e10"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "b4a9bbd4596ae33b4cb163a3feaafc84"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "4fb51551eec10b27150236ba9aac3a92"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "3150258cc950cc4cf44fc5b40e77d078"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "b827cd24b7244980315d5b9ea0195193"
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
    "revision": "9a58b0e50ec6ad0957dd747191ab3686"
  },
  {
    "url": "guide/index.html",
    "revision": "7067871e9e52a5533cb7104ea27c02e6"
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
    "revision": "9e35b8320e400b730a0e61f8a56be4ca"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "d2359acf4ea7797afa3fb80de8594d10"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "e1292c02e620a7255b4dc15b990edeb9"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "c31431d80590dc4d2cc66f32b069943b"
  },
  {
    "url": "more/clean/index.html",
    "revision": "0f041b2f27306261aa9155acc7f11d57"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "d3359dcf23d203bb3ab2143bd6f88ad8"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "736b4865053c527c3819ec3395922c67"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "5c298405427d486a37bd822851df0b85"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "23c8302ced2808402ad3ce675b463880"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "7c19c8689f54f5ce6ceaf02aefb5e699"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "103e9ae4d3b3ceb90dd6826426ddfa81"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "9b8af91bb8c3091520dcf61fea8ca6e6"
  },
  {
    "url": "more/interview/index.html",
    "revision": "6360574ee43f8e0ecc528c7255b31ad4"
  },
  {
    "url": "os/centos/index.html",
    "revision": "f42de547d3087f66be70b5d60c38f874"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "c0678f6e8e52d50fdfa094b2f5a15738"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "727934eebe82d1de3f710d87cff5ffb7"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "4188eea76f12f487f4be995d9d14a61e"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "b6013981585bd9b346d7d02eeaf76a8e"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "45daae70d7b07cab1e7c9247ae38e2bc"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "b6bf66c63b53201a08bdfba7edba55fb"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "afa574e21de6acecbb0aa0cd2080cc59"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "aa8b1a16e96da76400730e4dda9afa63"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "e009f6b4cefeafdb05212e4b364036b0"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "c5c2595c881ed76cd97bbbc20099ca8b"
  },
  {
    "url": "os/linux/index.html",
    "revision": "21a7ad79ddf643f685416c3e057f424f"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "16ea927701ef2fb83b5a33aef857cc97"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "197539ff5e1f678114c8b82c2add0b75"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "c01e594a66e8956161fd79641437e096"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "a4a010d5e3ed9f8be2bee386a4f04e7e"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "424be49e1b8851a4b0cb0ef978c9d4fe"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "52aaf0881894f987147e3f31111890b7"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "5764c409290a297aa15a5cf63b836104"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "21fddd3bd70cc1cbcfb13e7e2b668831"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "523166990a0daace0622ef2f8f5ab793"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "57221e55148d700c5a5d15422a7090d5"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "10d9c25d4760244eb1373583ad333570"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "34ddf59d56740fd2dc8806a1d5b9ff7b"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "33be21b5b4d08bbf3bbca7eafee58f9d"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "981981e847b96113e88bc9ae388089fc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "155bf11ceef0fc77cdeae6d5600725b8"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "34858daca7c3b7924976fbf3800f7515"
  },
  {
    "url": "tools/github/index.html",
    "revision": "27a091957e52507ab83f0d6ac6519638"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "b87296bace6af17266f7d6997dea51f1"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "0593751ecce93bb629b6e94f367a97e5"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "0b2fa96651a9f9e087a84461a9006bed"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "284c53e42880d4a94ab910cf5a21aa3e"
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
