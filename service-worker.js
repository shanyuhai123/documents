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
    "revision": "4530eff445b18e35621c6772bdf976cc"
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
    "url": "assets/js/21.c1a935f2.js",
    "revision": "ab5ce5265387d541391f51af8112d49a"
  },
  {
    "url": "assets/js/22.56b86907.js",
    "revision": "170e3d7a274afbc6786644ebe7bdfbf8"
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
    "url": "assets/js/25.a2b9c4f8.js",
    "revision": "eab1c3aa7033e300c247ffde83087ea0"
  },
  {
    "url": "assets/js/26.8d9eafa9.js",
    "revision": "ea621ec8726134f46cb62d8cc8964d07"
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
    "url": "assets/js/40.29b80bd2.js",
    "revision": "871aaccc9466d8a23452106f77123ca4"
  },
  {
    "url": "assets/js/41.43409253.js",
    "revision": "bce3f07d0463fd987d95ed290d354d5e"
  },
  {
    "url": "assets/js/42.673b5902.js",
    "revision": "d1cc9018677870a42f1eb78aca949509"
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
    "url": "assets/js/49.47463cfa.js",
    "revision": "4946558b730c099be526da0cbcf305f3"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.ddf4b5dd.js",
    "revision": "e6a58cbc1f4b742a8250d3d2f2f5b56d"
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
    "url": "assets/js/54.660cd50b.js",
    "revision": "7dc6efa02d10159ba0a30c3740917ea0"
  },
  {
    "url": "assets/js/55.c345aac2.js",
    "revision": "3e39d07f49bb2fbfef95758cea323991"
  },
  {
    "url": "assets/js/56.911382dd.js",
    "revision": "1af96798993c8e8091b991646192840d"
  },
  {
    "url": "assets/js/57.a7ff10dc.js",
    "revision": "6f8c4b89f3c16629d9d749e6def262ea"
  },
  {
    "url": "assets/js/58.46bb3345.js",
    "revision": "41690618dda44fe5a9391ec7eb55897b"
  },
  {
    "url": "assets/js/59.04823436.js",
    "revision": "a1504c692e44ce15afc01822642dd55b"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.6dcf576d.js",
    "revision": "4d94e681a3f850d1b8748c3af8cd9e9d"
  },
  {
    "url": "assets/js/61.23cab853.js",
    "revision": "051d5c87741bc52ef2657acf5157dd6b"
  },
  {
    "url": "assets/js/62.4dfdf6da.js",
    "revision": "98921cca9889db84205b6e66e43b963f"
  },
  {
    "url": "assets/js/63.ec5f56e7.js",
    "revision": "33e19feda3f082315c77e0eda2004c2b"
  },
  {
    "url": "assets/js/64.5c491600.js",
    "revision": "fefe9b8e19a01e1cdb4d716ae308b3e1"
  },
  {
    "url": "assets/js/65.eca0c993.js",
    "revision": "196a11fb0cc87e2c61b5c8da9d665ff5"
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
    "url": "assets/js/7.38423a22.js",
    "revision": "986a33a4b7c8e0a2e5d6c52e9f6dd941"
  },
  {
    "url": "assets/js/70.42747fc8.js",
    "revision": "4d1cd491dfcdcb64a772440e1bc0a0b1"
  },
  {
    "url": "assets/js/8.1accd2ee.js",
    "revision": "031b6a020e400cb139da9741f8322475"
  },
  {
    "url": "assets/js/9.98226a0c.js",
    "revision": "ed3a37aa4c6dee5b2ed909b7a20db553"
  },
  {
    "url": "assets/js/app.eff3e780.js",
    "revision": "1ddd836f491249e08789f581771c60ae"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "f053e1738145df7f45fa0494b5a858d6"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "63d3a0801cdc6ed7f54869373e44a97c"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "fdc1ab7f719d1d6ff1608eecf1e8d86e"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "15481c947f200d66b14f1f326ea05b90"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "ab4925f051b3f3d2a008f995f8251b46"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "3e7098a8c8b05f4aeaf8bac5b90f18f4"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "ff6d6fd02a206a2d342a8e23cf3ebe39"
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
    "revision": "0be7d80402d863ce863fe2519e02016f"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "8ddc7e9e3c23d2ff4658a92867a006f8"
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
    "revision": "c475192f29758cc32a0056acb5542959"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "80e961ba920238fe16e20b89d42a2838"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "d9d57a7f9d6f0d80ec8fb586922234dd"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "63f427c956444275c293e0026c87456d"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "1d153cd2a68de8c25d7f6ce19721efd5"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "b932411aeb443987a07b0022bf05bbd6"
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
    "revision": "a82af46c2a3c036358b0ba6c238b8979"
  },
  {
    "url": "guide/index.html",
    "revision": "08b33e0727e80f65a0adfbd03e8ccb2b"
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
    "revision": "d20c9ca7f804164b4ae1d4ca4084549d"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "069c11cf795a81b77bb86a3b9d344f27"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "b5f8c3c56bad0ae3893d3e5480344e28"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "b66eba95bc9ed8c4dbfe5976e2b1e63a"
  },
  {
    "url": "more/clean/index.html",
    "revision": "a4e39e650bafd17f2a110acbd95de27a"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "bddf28e503840200a1123b1438540c1a"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "ee5e172a60d7316a607e5b94f0f83f89"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "3b5d31553f650d2265ed6cc6fe3dd3a9"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "15a4f61303a2a015517cb865d8725480"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "31876fec6998b397f5b156ea1a7bc050"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "9ba62b7cd1687855261049099ecce271"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "3f9f4af245a5ff30d26ddd560b940b39"
  },
  {
    "url": "more/interview/index.html",
    "revision": "1a434d89d988b2ffc42995aa3224e73c"
  },
  {
    "url": "os/centos/index.html",
    "revision": "c1453d9f84ebdbd1f479c2364ede2cd4"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "943af3381ecf919740145870c5196c59"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "05c9606124e4c604fa6c1f39dc8e55fc"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "a93790c8630d2b72872110c0135789d9"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "d3db640ea964686e3f298d0a1a07cf7f"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "04211d09ae9fce0b68ed8c078bfff0f8"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "f686632fe39972ca23c6a6c670c9b891"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "0988ce58ed2283a35627936d6213a188"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "3d4d4bc0a422aee4977e0ba26395b3cf"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "c584099e7118fd970cf75da6f06b4ddc"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "47e35fd539a100f5cc1e82ebb7eb92dd"
  },
  {
    "url": "os/linux/index.html",
    "revision": "becbc63cfcf0a9a9bcbd95fb079a6057"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "5af7977bf1c7f575aaf5167c327a4a98"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "214b1d5d03a6c43ad71fdf3add8f15a3"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "a37716c44ca4f639eb0c27a627254384"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "13ba5f239d7023156a85e232480e0cbe"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "2f8e245b8046c530440bfb3c7bc1d4ea"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "3860d55526e124a0d895c982056138ac"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "189188a39ebeb42605d7331abc48a4cb"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "502e3fb239678f6fd865aec2bd279ab3"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "a27da4929a333c8b9c8be436154d86a4"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "7072f1b08ba760dffe3432f8554bb383"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "cb9ae254debe6fe7f4e127f0df6527a3"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "8e9d6da30141634fb1c0ff6fb0e18d7e"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "4b68bc4fff25bd05a8ef5caa61832bf3"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "07df2f2bead73d53b0d9da22a55007bd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7d83c63ca772f98846d9fe8575ac3580"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "516307534ca1747b68ed205048fce487"
  },
  {
    "url": "tools/github/index.html",
    "revision": "933407bb684f2e32c43af18ca0028c4a"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d7f6b323d310ca6b64ae40798a5e2695"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "3f2a95577fe1e0caa7f4995212568aed"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "9c606c59791a33aef42ace07d580b2d3"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "d57ede91f844dd58bf180cad07ebeecb"
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
