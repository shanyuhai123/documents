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
    "revision": "6155f03f51bf507d88974f90f8e1e559"
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
    "url": "assets/js/10.fc6b6e71.js",
    "revision": "c6b6595b67f30994d8d6c48e3c59035b"
  },
  {
    "url": "assets/js/11.413a06a3.js",
    "revision": "0939dd3cd5e8b0bcde3ea656f275c41b"
  },
  {
    "url": "assets/js/12.a304f1c3.js",
    "revision": "0d2818e6662835b33c59a4c96b3235ba"
  },
  {
    "url": "assets/js/13.177d4d3e.js",
    "revision": "b8b349fec86edbc14088ea5e20269728"
  },
  {
    "url": "assets/js/14.d395c519.js",
    "revision": "938ca6eacca28ce228e40e25df25605f"
  },
  {
    "url": "assets/js/15.fbe3acd0.js",
    "revision": "0cfaba57de1d6693c71d4129adde98dc"
  },
  {
    "url": "assets/js/16.2c1a631f.js",
    "revision": "c49664d7317ed9b58ad3d93cfdf6a410"
  },
  {
    "url": "assets/js/17.ee6ac9d1.js",
    "revision": "46dcd0662e406f31a36b9da34d8aee46"
  },
  {
    "url": "assets/js/18.33283c2c.js",
    "revision": "6d0f076fd3932591593791cd5753421c"
  },
  {
    "url": "assets/js/19.e6fcce21.js",
    "revision": "b78b059d774d9f1427233e88234c1482"
  },
  {
    "url": "assets/js/20.17fda8dc.js",
    "revision": "f5f95551c71dbf08e1e1d2ec19c2e337"
  },
  {
    "url": "assets/js/21.e1899ba3.js",
    "revision": "7c1a975a8af4e54af2938a12f27021c7"
  },
  {
    "url": "assets/js/22.0ffd4b59.js",
    "revision": "22c43606b628324d7993d6e75702c1bb"
  },
  {
    "url": "assets/js/23.6abc180c.js",
    "revision": "6a3db2e7b1662bddc2c889067e9c205f"
  },
  {
    "url": "assets/js/24.c3b160f2.js",
    "revision": "9446495161e0cf77f6b79a520cf7559f"
  },
  {
    "url": "assets/js/25.3b7fcbc4.js",
    "revision": "fe442aa5db324081e811e6bad57bc524"
  },
  {
    "url": "assets/js/26.95dd866c.js",
    "revision": "75cd67bee4ff6b1f9c2c87edd01c0c24"
  },
  {
    "url": "assets/js/27.3a3bccf7.js",
    "revision": "2d22162f7cdff982e0ddc5f970d7e696"
  },
  {
    "url": "assets/js/28.feb7642d.js",
    "revision": "09d016849ca006e9a6a5657e8669ac35"
  },
  {
    "url": "assets/js/29.cfa5f65f.js",
    "revision": "59ee70b6ff4696af89757f0d3860cdac"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.8945fba7.js",
    "revision": "d55689df71d3a8fbb95083fbbaef310b"
  },
  {
    "url": "assets/js/31.a029fbc6.js",
    "revision": "4195bb4c9ec03b73e169d0d24ee5109e"
  },
  {
    "url": "assets/js/32.6c2d99a8.js",
    "revision": "4cd1e246cb121ff2d2479a06b31e93aa"
  },
  {
    "url": "assets/js/33.d7ccc033.js",
    "revision": "d32c70ed4d9fa6e7475558ebe46749de"
  },
  {
    "url": "assets/js/34.3bbc4cab.js",
    "revision": "0e648fa9dad4f761b09cb805a61926a3"
  },
  {
    "url": "assets/js/35.b63ea2fe.js",
    "revision": "c62edfd6d1d91641ba5d671fdac2fa31"
  },
  {
    "url": "assets/js/36.25c15a80.js",
    "revision": "537c5b0ad95d81f8e325d76f9a62d583"
  },
  {
    "url": "assets/js/37.1434be65.js",
    "revision": "2c37184e1a8757db0c0adc5bf001bcf5"
  },
  {
    "url": "assets/js/38.6649bb73.js",
    "revision": "363011596bb31c72d81b6d8346f4d953"
  },
  {
    "url": "assets/js/39.d28847d2.js",
    "revision": "198881c8dace8611358131663d4b769f"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.e25ab012.js",
    "revision": "873836dca7e5c5c1058356b5902492bd"
  },
  {
    "url": "assets/js/41.93876b71.js",
    "revision": "48baa3e6d230bb981f5ecbc6802e3e90"
  },
  {
    "url": "assets/js/42.948e0120.js",
    "revision": "ffd9a39fb23d6476fb81f7e1edc56069"
  },
  {
    "url": "assets/js/43.010febe9.js",
    "revision": "a95c12d9d952adf6f5c1f9a46a050a2e"
  },
  {
    "url": "assets/js/44.3e740773.js",
    "revision": "09dfff163f6e9b6ec1ee7fadc1f6802b"
  },
  {
    "url": "assets/js/45.002a39cb.js",
    "revision": "028945156707d93806eb288e96a56891"
  },
  {
    "url": "assets/js/46.70889ccc.js",
    "revision": "35d2cb9432a34b2e1478319df4613755"
  },
  {
    "url": "assets/js/47.ac04f5e5.js",
    "revision": "fd7547e0cafb8aaaaa6d7a82e07d92b1"
  },
  {
    "url": "assets/js/48.737c9406.js",
    "revision": "eb17535394957e99aeca56d6d0cab643"
  },
  {
    "url": "assets/js/49.46d68740.js",
    "revision": "3eadf6debf40eeec03f17cc3022295d6"
  },
  {
    "url": "assets/js/5.c33cb045.js",
    "revision": "6c4724bffe513ebc6ba5612d54ac7ef8"
  },
  {
    "url": "assets/js/50.f0083f1a.js",
    "revision": "d3d11fa0d895e8ae26306db757b5476b"
  },
  {
    "url": "assets/js/51.804790ed.js",
    "revision": "a1e839f2e49a57115ee899fc2d61d551"
  },
  {
    "url": "assets/js/52.a9c5a104.js",
    "revision": "dbe63f10fdcc8c109ba02c13ed03d6f2"
  },
  {
    "url": "assets/js/53.7ad7fead.js",
    "revision": "3869b9a05dfae628fd38f4239f9a5c2e"
  },
  {
    "url": "assets/js/54.abd09077.js",
    "revision": "b4674f68a4d07e09b89ebd191db3d079"
  },
  {
    "url": "assets/js/55.1e0d1266.js",
    "revision": "3b372e2810327098064a7684b33bb1be"
  },
  {
    "url": "assets/js/56.cd9ee039.js",
    "revision": "0d44132a810e8103f440c5d502b20cd0"
  },
  {
    "url": "assets/js/57.2a33ef42.js",
    "revision": "13e60ccac0892b8467ed60f4c8b69705"
  },
  {
    "url": "assets/js/58.b137c4d5.js",
    "revision": "e0e5bf656b3ef0b00c1c590d929568bb"
  },
  {
    "url": "assets/js/59.afa6c839.js",
    "revision": "a820bf77292deb5c0ee9ab60c8a8a607"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/60.b4e87032.js",
    "revision": "4d419fc13a7f05293f83cc66589b4064"
  },
  {
    "url": "assets/js/61.16bbf24b.js",
    "revision": "652c1879f253289b2724c73d942661f6"
  },
  {
    "url": "assets/js/62.ecac7786.js",
    "revision": "7f3a61a3592d54eee2a09e1b883018ec"
  },
  {
    "url": "assets/js/63.984355ac.js",
    "revision": "b9a730190ed93e55503e241c94921467"
  },
  {
    "url": "assets/js/64.31215eba.js",
    "revision": "f0a04421a9765545b79e5001c1f47bd2"
  },
  {
    "url": "assets/js/7.ce879563.js",
    "revision": "85dbdc1c186c07851daa68a70e3f1324"
  },
  {
    "url": "assets/js/8.637a254a.js",
    "revision": "6640cbe0c7ba64bd5ddaef72dab05693"
  },
  {
    "url": "assets/js/9.1322ac75.js",
    "revision": "132e04aa778972472332cd4ab36fe9a4"
  },
  {
    "url": "assets/js/app.0b72a7de.js",
    "revision": "4c18de3794dd40bcdac1083d4e694562"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "BackEnd/koa/index.html",
    "revision": "fd63baa0eb8ba24c97a544c429b6e72f"
  },
  {
    "url": "BackEnd/mongodb/index.html",
    "revision": "a4bdffdc03d2c0f053c1b9564a92ec5c"
  },
  {
    "url": "BackEnd/nginx/01-install-nginx.html",
    "revision": "9cea62cd82ba6df1860d5afef65b3d90"
  },
  {
    "url": "BackEnd/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "6d2046ddc543c8b0cae0da65cbf1522a"
  },
  {
    "url": "BackEnd/nginx/03-nginx-basic-operation.html",
    "revision": "8df7a29353e7e93b7c443da9ef3f82a6"
  },
  {
    "url": "BackEnd/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "a602772839a0f31ff5de902393fbf993"
  },
  {
    "url": "BackEnd/nginx/index.html",
    "revision": "ae4434e4a80ca4e9adce766c38f4a5da"
  },
  {
    "url": "Base/algorithm/index.html",
    "revision": "3c9c47b7da9c20798ec0c53b4ac2279e"
  },
  {
    "url": "Base/clean/01-javascript.html",
    "revision": "430b129d1d9f4c5a1faa481773e19476"
  },
  {
    "url": "Base/clean/index.html",
    "revision": "6daca9d97ad1cd34264a47f361347b0d"
  },
  {
    "url": "Base/git/01-git-concept.html",
    "revision": "da3ca9272366ac0c170703cd8e166bf6"
  },
  {
    "url": "Base/git/02-daily-git.html",
    "revision": "feedba3110157a0a7b038a80c073cd22"
  },
  {
    "url": "Base/git/03-generate-ssh-key.html",
    "revision": "2145d4935177137c5314c675b7587925"
  },
  {
    "url": "Base/git/04-switch-multiple-github-accounts.html",
    "revision": "b958c4f80cb70849ca96fa02349b08d5"
  },
  {
    "url": "Base/git/05-download-huge-project-from-github.html",
    "revision": "ef5d9a914b0bc74a1526f415f8e47934"
  },
  {
    "url": "Base/git/index.html",
    "revision": "cd4bb3afbe04409d02d21fb8a833904c"
  },
  {
    "url": "Base/interview/01-add-large-numbers.html",
    "revision": "2448d87ba1888533ecdc7cc3c0ab4a75"
  },
  {
    "url": "Base/interview/02-seo-optimization.html",
    "revision": "ed09258ec6adf6a09ebf7f16b0c71486"
  },
  {
    "url": "Base/interview/03-parse-url-parameter.html",
    "revision": "9df296ce4be7fb57a3e18c149810b290"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "Base/interview/index.html",
    "revision": "7b5b8dfbb0dfb49e735827125914d9e7"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "FrontEnd/css/index.html",
    "revision": "d9f80b43236127f5b5dac7b74bea7d30"
  },
  {
    "url": "FrontEnd/javascript/01-let-and-const.html",
    "revision": "1f3e1d22f9bf66a36ad082c197c67040"
  },
  {
    "url": "FrontEnd/javascript/02-deconstruction-assignment-of-variables.html",
    "revision": "eaf24b14bdaa80e6722ab4ce887ecd2a"
  },
  {
    "url": "FrontEnd/javascript/03-string-extension.html",
    "revision": "7ce7597ef1569899a80384024f26705f"
  },
  {
    "url": "FrontEnd/javascript/04-regular-extension.html",
    "revision": "39ff1d83c9dae2adbaf6ee4e8d701f7b"
  },
  {
    "url": "FrontEnd/javascript/05-number-extension.html",
    "revision": "37369e8d1ec64c6234bfa2c82c7aca69"
  },
  {
    "url": "FrontEnd/javascript/06-function-extension.html",
    "revision": "d02571d516bc2b817161e50d2a8b1f02"
  },
  {
    "url": "FrontEnd/javascript/07-array-extension.html",
    "revision": "fa30a58cda742de7da232b2a021d9352"
  },
  {
    "url": "FrontEnd/javascript/08-object-extension.html",
    "revision": "41d0f106fd00ededfda17cc263ea5445"
  },
  {
    "url": "FrontEnd/javascript/09-new-methods-for-objects.html",
    "revision": "de170f297a81d6fc4217f2eeee0166b1"
  },
  {
    "url": "FrontEnd/javascript/11-set-and-map-data-structure.html",
    "revision": "65954ecd5f074ada588d64497da6bfe4"
  },
  {
    "url": "FrontEnd/javascript/14-promise-object.html",
    "revision": "feff783a703837de8609ab9e8570c764"
  },
  {
    "url": "FrontEnd/javascript/18-async-function.html",
    "revision": "610826cb1503cfeefb704a9975e078e5"
  },
  {
    "url": "FrontEnd/javascript/19-basic-syntax-of-class.html",
    "revision": "05354257c0ae92e50d98ad2aa4b67478"
  },
  {
    "url": "FrontEnd/javascript/20-class-inheritance.html",
    "revision": "eb9e56c6e4cf98182fcebdae3fc6874e"
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
    "url": "FrontEnd/javascript/index.html",
    "revision": "c9e6b8b01428f11577ed3455223f441d"
  },
  {
    "url": "FrontEnd/nodejs/01-install-nodejs.html",
    "revision": "c55b70ea374e16a6f379ac833bad7b82"
  },
  {
    "url": "FrontEnd/nodejs/index.html",
    "revision": "6d4a678960d0a9d1f8464ae690554845"
  },
  {
    "url": "FrontEnd/webpack/01-loader.html",
    "revision": "f1332e630b8a2acec24a7e9707985877"
  },
  {
    "url": "FrontEnd/webpack/index.html",
    "revision": "58d6aa54336ceba9b9d4bd1f0aef147c"
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
    "url": "guide/01-style-guide.html",
    "revision": "0cbb53569ab1b21321fc9aeb975e61d8"
  },
  {
    "url": "guide/02-about.html",
    "revision": "02877a12b9f907b71fea46af4f1c8eeb"
  },
  {
    "url": "guide/index.html",
    "revision": "7c9f0f677013b8da9a5b9805b5704fbf"
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
    "revision": "3213d1da3a3eb3381100d2f635a10528"
  },
  {
    "url": "OS/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "37ba408963fb6e1ec5dfd4f15821e9b3"
  },
  {
    "url": "OS/manjaro/02-manjaro-configuration.html",
    "revision": "982f6c4c71e5091950c9e784f4d70cd5"
  },
  {
    "url": "OS/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "c9366b3d3a63aa5e650bd977b8883415"
  },
  {
    "url": "OS/manjaro/04-most-used-softwares.html",
    "revision": "e9688a5d33288e16fa5f0793fa07a001"
  },
  {
    "url": "OS/manjaro/index.html",
    "revision": "e8c56598a927f22f3eb8aed7e323db78"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "OS/ubuntu/01-add-user.html",
    "revision": "9a2a1616440e52df4aacf734ced5ac25"
  },
  {
    "url": "OS/ubuntu/02-login-with-rsa-key.html",
    "revision": "90bb6cb3c61e2afbf27e63d0e9ec0239"
  },
  {
    "url": "OS/ubuntu/03-upload-file-to-server.html",
    "revision": "a6126cc2ffebf9f693f375197954851d"
  },
  {
    "url": "OS/ubuntu/04-clone-project-to-server.html",
    "revision": "a6ac9ceaaf1af56cd2864b2841f501d0"
  },
  {
    "url": "OS/ubuntu/05-fix-date.html",
    "revision": "acdacc5cf7c45d9c20bc80025cdab3b2"
  },
  {
    "url": "OS/ubuntu/06-systemd-introduction.html",
    "revision": "606e2cc10250d6473c08a31f331c224f"
  },
  {
    "url": "OS/ubuntu/index.html",
    "revision": "d2ab4cb1f3f43d71c7551498f6085e15"
  },
  {
    "url": "OS/windows/index.html",
    "revision": "8f886ef7c0b43770c5cabdcc723b9ada"
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
