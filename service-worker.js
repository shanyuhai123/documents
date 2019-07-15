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
    "revision": "8035331830c9dc3785f9aa769d0c0e9c"
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
    "url": "assets/js/11.90ce24b8.js",
    "revision": "2661d08241d73d9a72cc280708be50c1"
  },
  {
    "url": "assets/js/12.c26d0310.js",
    "revision": "f32e137c8d7c70024ba5f676796e7165"
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
    "url": "assets/js/18.9cdc5f39.js",
    "revision": "4d087865da10f1375a29f7fab9f0d7a1"
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
    "url": "assets/js/30.221540b9.js",
    "revision": "0ef64acc6f9f6074a749e36a2af4b42d"
  },
  {
    "url": "assets/js/31.d7637ac1.js",
    "revision": "0bf608161ac063aaa2d184749def08c8"
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
    "url": "assets/js/35.54dc95f2.js",
    "revision": "0a8118015f8b166c89638678a50a0f74"
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
    "url": "assets/js/41.ba81ff63.js",
    "revision": "362a196ba55dc2c92a299b7f3fd05925"
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
    "url": "assets/js/52.caccd8b4.js",
    "revision": "9ef74e7ee678ca75cef03a8cf02cc131"
  },
  {
    "url": "assets/js/53.85bc2450.js",
    "revision": "8399e6b7fe9bb2efe122d4548c998354"
  },
  {
    "url": "assets/js/54.978674fe.js",
    "revision": "836f642bcf1ea737094d7413c3ce8638"
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
    "url": "assets/js/app.4a5278e7.js",
    "revision": "fcea1138abd817a6222e730a3c41174c"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "BackEnd/koa/index.html",
    "revision": "310705e89ad1e0f4de16dee4c64a54ed"
  },
  {
    "url": "BackEnd/mongodb/index.html",
    "revision": "dd024b87dbdf850b34f873d8fecef35b"
  },
  {
    "url": "BackEnd/nginx/01-install-nginx.html",
    "revision": "a9f7476a1f35deee5edd91720138c5b9"
  },
  {
    "url": "BackEnd/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "b5d47672b3732265a362ee6eaaa58366"
  },
  {
    "url": "BackEnd/nginx/03-nginx-basic-operation.html",
    "revision": "758ecfd14e30218c49c30310d40246b3"
  },
  {
    "url": "BackEnd/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "fba5b7e0221d4132324ccef2716520f1"
  },
  {
    "url": "BackEnd/nginx/index.html",
    "revision": "94f5911a7dac992dae5d6d38da08f4d1"
  },
  {
    "url": "Base/algorithm/index.html",
    "revision": "e78ee219d92c0ed278a8805c02fcc9f5"
  },
  {
    "url": "Base/clean/01-javascript.html",
    "revision": "671c125eeba9e8278dd29bba59dd468c"
  },
  {
    "url": "Base/clean/index.html",
    "revision": "1cac4c98a8e5ab2139ce0eefd1faf6d3"
  },
  {
    "url": "Base/git/01-git-concept.html",
    "revision": "cfe58300da93038b64aeba5f567d36f3"
  },
  {
    "url": "Base/git/02-daily-git.html",
    "revision": "23125e707ea5ddad27c6225df3f50dec"
  },
  {
    "url": "Base/git/03-generate-ssh-key.html",
    "revision": "3e7176acc9e99820039ba461ee4742c7"
  },
  {
    "url": "Base/git/04-switch-multiple-github-accounts.html",
    "revision": "f14cf8bf4555e65b5d91aa3f23de7ba8"
  },
  {
    "url": "Base/git/05-download-huge-project-from-github.html",
    "revision": "55001a6f0752c2531de01a6ef65fdd0e"
  },
  {
    "url": "Base/git/index.html",
    "revision": "83aa5e2ac6413c2255e144cf250bc371"
  },
  {
    "url": "Base/interview/01-add-large-numbers.html",
    "revision": "ad90a543b86a46c99b3349cd2c8ad6a7"
  },
  {
    "url": "Base/interview/02-seo-optimization.html",
    "revision": "37dfedb4ed46cd2926d7ed90716c052d"
  },
  {
    "url": "Base/interview/03-parse-url-parameter.html",
    "revision": "4669c4aea98b4aba87e5274487d62811"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "Base/interview/index.html",
    "revision": "b1f7ed9c0a9c7a27f84f1c9af14e29af"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "FrontEnd/css/index.html",
    "revision": "54a0747537324ecd220296b109943f7b"
  },
  {
    "url": "FrontEnd/javascript/01-let-and-const.html",
    "revision": "766a43790d5a6af0174c6340b42b8c34"
  },
  {
    "url": "FrontEnd/javascript/02-deconstruction-assignment-of-variables.html",
    "revision": "31cc795fdd67c821a27d8be932a583ce"
  },
  {
    "url": "FrontEnd/javascript/03-string-extension.html",
    "revision": "1472ad06f29361ec3b75f6acfb12c240"
  },
  {
    "url": "FrontEnd/javascript/04-regular-extension.html",
    "revision": "a51a40af4a101866c3064d655400da77"
  },
  {
    "url": "FrontEnd/javascript/05-number-extension.html",
    "revision": "4421ab10768b00a3400df766649ef34c"
  },
  {
    "url": "FrontEnd/javascript/06-function-extension.html",
    "revision": "c723c98600e7e01c1859b193b73d2f0d"
  },
  {
    "url": "FrontEnd/javascript/07-array-extension.html",
    "revision": "0f1535565eb134668d5f1c4b1941904c"
  },
  {
    "url": "FrontEnd/javascript/08-object-extension.html",
    "revision": "768dd0918b63f76fd5fd9ab6b5158213"
  },
  {
    "url": "FrontEnd/javascript/09-new-methods-for-objects.html",
    "revision": "d87c56b1538511949e11b4b0302c20a1"
  },
  {
    "url": "FrontEnd/javascript/11-set-and-map-data-structure.html",
    "revision": "37edadbc5fb29d4c81388bab9bded59d"
  },
  {
    "url": "FrontEnd/javascript/14-promise-object.html",
    "revision": "1fae1b468a086a5ec8e68fdca7a3242f"
  },
  {
    "url": "FrontEnd/javascript/18-async-function.html",
    "revision": "60070e983340392022f444c492894668"
  },
  {
    "url": "FrontEnd/javascript/19-basic-syntax-of-class.html",
    "revision": "acf4572b51777059064e351a73aed374"
  },
  {
    "url": "FrontEnd/javascript/20-class-inheritance.html",
    "revision": "085462a14a2457288f332d0134a0a742"
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
    "revision": "e25866d3482f03164003eb2f6a76363f"
  },
  {
    "url": "FrontEnd/nodejs/01-install-nodejs.html",
    "revision": "155f5d7650a6eaaea816ab3e5e559cd2"
  },
  {
    "url": "FrontEnd/nodejs/index.html",
    "revision": "84571c3a8f8822c5a6ed749994df3ec2"
  },
  {
    "url": "FrontEnd/webpack/01-loader.html",
    "revision": "8ef7ef1a6600926d9577ecc898a05eb5"
  },
  {
    "url": "FrontEnd/webpack/index.html",
    "revision": "75dfb1d387b74ca1a2c45374ad069d1b"
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
    "revision": "6d529a34c5a32ff4b4f677d676dbaac8"
  },
  {
    "url": "guide/02-about.html",
    "revision": "e059a5a055b78c8b36d4f314e10b02d9"
  },
  {
    "url": "guide/index.html",
    "revision": "c27a7ce06fa88cbf1c0816792e4bc01e"
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
    "revision": "4e8a3444d00fc8d15b172f06a00b9229"
  },
  {
    "url": "OS/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "a7c097b264ed7f8fcd5cc35d28dfd93b"
  },
  {
    "url": "OS/manjaro/02-manjaro-configuration.html",
    "revision": "199ff6cf16e09015cb8274da681544fc"
  },
  {
    "url": "OS/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "3ca616116932cfd7f4ae6e078ff26706"
  },
  {
    "url": "OS/manjaro/04-most-used-softwares.html",
    "revision": "eae8e962a9e777beac3a9036805be7e9"
  },
  {
    "url": "OS/manjaro/index.html",
    "revision": "e8a10d31e60dc7720a78f2f887e43a13"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "OS/ubuntu/01-add-user.html",
    "revision": "057bd910113bf32c066899713da73c03"
  },
  {
    "url": "OS/ubuntu/02-login-with-rsa-key.html",
    "revision": "97f667207b40114a27651e8cd69a2c14"
  },
  {
    "url": "OS/ubuntu/03-upload-file-to-server.html",
    "revision": "745ccc77480f2fccc812f0dfd3743fe6"
  },
  {
    "url": "OS/ubuntu/04-clone-project-to-server.html",
    "revision": "7562216dae30947e7dcf351a9de05489"
  },
  {
    "url": "OS/ubuntu/05-fix-date.html",
    "revision": "1e1315ebb7c89ffdbcc238f85e9b74cc"
  },
  {
    "url": "OS/ubuntu/06-systemd-introduction.html",
    "revision": "0887881e6a7ff2d39b29d3ce90208fd3"
  },
  {
    "url": "OS/ubuntu/index.html",
    "revision": "2edb057a1098cef2f995d18c0894bcbc"
  },
  {
    "url": "OS/windows/index.html",
    "revision": "b27d3b2afcef2c1e60a50ba319e86aa3"
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
