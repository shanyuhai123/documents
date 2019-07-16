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
    "revision": "e887527badb70ecd208928a826aa3c74"
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
    "url": "assets/js/10.074ecd96.js",
    "revision": "746d2158cce23265586d4bd10bd173aa"
  },
  {
    "url": "assets/js/11.6e078e61.js",
    "revision": "067eada8079b9f058ea86704964b0019"
  },
  {
    "url": "assets/js/12.b8a42daf.js",
    "revision": "cf4d5c03b8b7410771a0b6fa7c4b6ef7"
  },
  {
    "url": "assets/js/13.d96e5bca.js",
    "revision": "5ea96fa9254d24d9fcfcd97160cf13f1"
  },
  {
    "url": "assets/js/14.5967bd5c.js",
    "revision": "f5baf0b0ea44b20f2b56a27536691fe3"
  },
  {
    "url": "assets/js/15.95969346.js",
    "revision": "5d690b052e72323b41300462647b7063"
  },
  {
    "url": "assets/js/16.445c4cfe.js",
    "revision": "57afd0039da93536737ed511a9c9a7bd"
  },
  {
    "url": "assets/js/17.b132399a.js",
    "revision": "61286477567be5792bbcc72203a03152"
  },
  {
    "url": "assets/js/18.20aeac38.js",
    "revision": "c2bcd51706c2ca34a330b34e8e1aff66"
  },
  {
    "url": "assets/js/19.09c5f04e.js",
    "revision": "d2e492c176b02c14a486e5e504495c49"
  },
  {
    "url": "assets/js/20.d4a54d9a.js",
    "revision": "bb71769d5e9c1166a3cb10f6fec94214"
  },
  {
    "url": "assets/js/21.41a9fbe4.js",
    "revision": "908b8334a04030635182402c2144e685"
  },
  {
    "url": "assets/js/22.ec9070c2.js",
    "revision": "9827f4cd5bc6ef9b0b7030ec4c1d3ed3"
  },
  {
    "url": "assets/js/23.017de62c.js",
    "revision": "c6706d97ca9cef5eaa8990ad6e6aca43"
  },
  {
    "url": "assets/js/24.533b363d.js",
    "revision": "4a186e3877388493e12bf10084e71371"
  },
  {
    "url": "assets/js/25.282c6646.js",
    "revision": "be074cd81f933db4d45b01bdfd0765e2"
  },
  {
    "url": "assets/js/26.32eb9b1a.js",
    "revision": "d5faab1da5231d6d509931f70b602007"
  },
  {
    "url": "assets/js/27.9404b4a8.js",
    "revision": "8ca8b4cfacc3cdbd1f727d2d093724e5"
  },
  {
    "url": "assets/js/28.4d2cb599.js",
    "revision": "57109019cd4ce5123444d71a67b906be"
  },
  {
    "url": "assets/js/29.3235521d.js",
    "revision": "76a039436d54ece887a0657dd304a92c"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.7283e14b.js",
    "revision": "a8041cef4d8b07a4be3a61fa45d45b43"
  },
  {
    "url": "assets/js/31.517dfbf2.js",
    "revision": "5d3f9d9e690d36e41f4b721dbd1581b6"
  },
  {
    "url": "assets/js/32.074649ad.js",
    "revision": "62fd5bc7144eb715fd79cef8e9fef5e0"
  },
  {
    "url": "assets/js/33.30ee37e0.js",
    "revision": "195f94ff0e9f99abe4bc9a4ef8be4d72"
  },
  {
    "url": "assets/js/34.1effb3b2.js",
    "revision": "9b99655e02e1f5bfe50d68194e050e49"
  },
  {
    "url": "assets/js/35.dd125fe8.js",
    "revision": "6ddd3d597b2c4a817bae6ccb888cf379"
  },
  {
    "url": "assets/js/36.2978a324.js",
    "revision": "9cbbb3b1cc9a4395288944366202f40a"
  },
  {
    "url": "assets/js/37.38beca23.js",
    "revision": "e2535f3c1b6efa3bc77a38c31b480793"
  },
  {
    "url": "assets/js/38.1569c2ec.js",
    "revision": "dd7e66128a913d650e7904dfe4e4a8b8"
  },
  {
    "url": "assets/js/39.bede6a12.js",
    "revision": "8058f1d0544e5e3adbdca989b6fef899"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.16ec019e.js",
    "revision": "4cb239160786dd7f4450c63c17f604a3"
  },
  {
    "url": "assets/js/41.1ef15134.js",
    "revision": "c4cfee4a9b2068fbe55b8f49aefc1e3f"
  },
  {
    "url": "assets/js/42.d236036a.js",
    "revision": "a6110d5bda4b2d5aef8db71124860f60"
  },
  {
    "url": "assets/js/43.7f201275.js",
    "revision": "f57b1069978d7e3ca88be1cfcd8e29ec"
  },
  {
    "url": "assets/js/44.f9eeeae2.js",
    "revision": "8b3acc239787ab317394b7963e758171"
  },
  {
    "url": "assets/js/45.1ed5808e.js",
    "revision": "df118c4e262839b749f8b29cc9bf57a4"
  },
  {
    "url": "assets/js/46.e89f330d.js",
    "revision": "2d0b9587e83bb73997aee07b3f5c8357"
  },
  {
    "url": "assets/js/47.e3ec6c1b.js",
    "revision": "86df465767d69fd063475308848a3193"
  },
  {
    "url": "assets/js/48.028bad7e.js",
    "revision": "7aed95d15a138d8405a6e49cfaacbd46"
  },
  {
    "url": "assets/js/49.0b2c6787.js",
    "revision": "12ae61e3fa1192a05a0dcb77aa4979f2"
  },
  {
    "url": "assets/js/5.c33cb045.js",
    "revision": "6c4724bffe513ebc6ba5612d54ac7ef8"
  },
  {
    "url": "assets/js/50.a5f41969.js",
    "revision": "062411ec0a444e1912e30d1317a7d2bf"
  },
  {
    "url": "assets/js/51.c807efc2.js",
    "revision": "f9308f413985cb677d9122acc7481aec"
  },
  {
    "url": "assets/js/52.3b6ab428.js",
    "revision": "37c6c68abfc239e2cb668439191e42b1"
  },
  {
    "url": "assets/js/53.51b6fa99.js",
    "revision": "05cb7f632619a8b810fb5240be319428"
  },
  {
    "url": "assets/js/54.b7d20a2c.js",
    "revision": "50bedc24bfd0b49b7097f636509a83a0"
  },
  {
    "url": "assets/js/55.75f4da62.js",
    "revision": "74dddfbf43eff3256cdd0ddf10f8a5c8"
  },
  {
    "url": "assets/js/56.ba244085.js",
    "revision": "2c3e4157090f75ed3674419e03384254"
  },
  {
    "url": "assets/js/57.e2cd78e4.js",
    "revision": "ecc44836105e1e08481c8faed2d488e7"
  },
  {
    "url": "assets/js/58.7cff3dd7.js",
    "revision": "ec581b9a9f7b24dc18d983162609af7d"
  },
  {
    "url": "assets/js/59.69999ed5.js",
    "revision": "5c986725c596efd864acad3d79006694"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/60.97c24c7a.js",
    "revision": "083cadca1ee0c485fd28b9fb785f21d3"
  },
  {
    "url": "assets/js/61.34b5c51f.js",
    "revision": "bd1fbf7c2c7b6e5318f56efc912663ec"
  },
  {
    "url": "assets/js/62.f6f97006.js",
    "revision": "6af71b1b9940418a61688ec4bb1beceb"
  },
  {
    "url": "assets/js/63.43ca150d.js",
    "revision": "cafe0063e51545e5e28badf15c2c8aa0"
  },
  {
    "url": "assets/js/64.31215eba.js",
    "revision": "f0a04421a9765545b79e5001c1f47bd2"
  },
  {
    "url": "assets/js/7.c63dcbfc.js",
    "revision": "ac7b7fdd4a59db6b79568cb049d25c37"
  },
  {
    "url": "assets/js/8.670b7f22.js",
    "revision": "2f25ab3da601966993323b95348aaadf"
  },
  {
    "url": "assets/js/9.f6b633b6.js",
    "revision": "d67033b1e3510bf8fb4a40b1d8873b3d"
  },
  {
    "url": "assets/js/app.4d4f18da.js",
    "revision": "6c3b0a14aaefb8bd1bc2e1fb18b20446"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "a8004040a929fd0a629ceeb0d19a6794"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "1ec7027f64d92e4ea7bcb8609bf78e2e"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "a2de8d253b37d4029dd52b49a4c14c97"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "376a12d0689b0fd6aa990a835cfa8190"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "41cd3815d8026ce17308b32377c3f738"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "c5ac8126461cd534092764ed1b87f22e"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "cd41c9f5a177cc3545f6447468f38314"
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
    "revision": "8a49127d347411cc4b208a6f49ddef48"
  },
  {
    "url": "frontend/javascript/01-let-and-const.html",
    "revision": "ccda3ad0f690fb9acd3d1a02ba278b1b"
  },
  {
    "url": "frontend/javascript/02-deconstruction-assignment-of-variables.html",
    "revision": "7b166926cd563e53f9e575571cba0f09"
  },
  {
    "url": "frontend/javascript/03-string-extension.html",
    "revision": "234384e64f1a622d34fab08da1a36e50"
  },
  {
    "url": "frontend/javascript/04-regular-extension.html",
    "revision": "3231a0b6240b63f14c944c40345411ec"
  },
  {
    "url": "frontend/javascript/05-number-extension.html",
    "revision": "4e75dab71bfc4c81a26715aaa075f74d"
  },
  {
    "url": "frontend/javascript/06-function-extension.html",
    "revision": "4ae4f281a5fd4328907c0ffaf8692766"
  },
  {
    "url": "frontend/javascript/07-array-extension.html",
    "revision": "3cf2830cc137becab793b87482863f35"
  },
  {
    "url": "frontend/javascript/08-object-extension.html",
    "revision": "1b3bc20ed2b9326c28b166df6df7518e"
  },
  {
    "url": "frontend/javascript/09-new-methods-for-objects.html",
    "revision": "23b6969147c4b0ae209feca4cae7f0ab"
  },
  {
    "url": "frontend/javascript/11-set-and-map-data-structure.html",
    "revision": "44a2177e84e590d298ec6334af56802c"
  },
  {
    "url": "frontend/javascript/14-promise-object.html",
    "revision": "b57fe66ff2c8eae6c4549fe67cd8a8c0"
  },
  {
    "url": "frontend/javascript/18-async-function.html",
    "revision": "5b22532804af990182dea5f1430e05a9"
  },
  {
    "url": "frontend/javascript/19-basic-syntax-of-class.html",
    "revision": "c1dd2d6245210bb064fa115ae4c9e4e7"
  },
  {
    "url": "frontend/javascript/20-class-inheritance.html",
    "revision": "4396095bc75a9181f1926a3a7b37f989"
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
    "revision": "04c7e3ed770a61d1e590e59a666f93e3"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "bc142cdbf8393d879c7455674eb49cb4"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "8cf560031ed62ec62e69315eed926741"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "04b1e44a26610b53c89b2a0e89c4683d"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "71e841ebbe1ed592f9ddf57c238e0565"
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
    "revision": "ccd63145785eb1a7d88ac17884e110ab"
  },
  {
    "url": "guide/index.html",
    "revision": "dd0866f908757e505675f807e1594656"
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
    "revision": "fe544f0deac5108bf0ca2c1f024e8e72"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "a1e25d5a437c0387618618e254f23c94"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "c170e959034f75f22e496ee4fd56bd8a"
  },
  {
    "url": "more/clean/index.html",
    "revision": "f970e86464cd693eace5fac5cce70d7c"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "616a23456c11c5f1bca938b330c4fcbe"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "4a6cbb90e137df4f3a88dfd2d9a88e69"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "cf44b25b3c641dd2edb666f128f9deaf"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "fea1dd462b34f2ef7183176b70aabbe1"
  },
  {
    "url": "more/interview/index.html",
    "revision": "3239bf3166205bbf305bfb26d4f5aa1f"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "3177665f8422ee6ed4bac845c5b24ce9"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "ad81886d6881dc6f998eb1246e3735bc"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "8d252542a4872f87ebdacc4af089819e"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "df038678cbbf38f96d5fce6703a0b6f7"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "b7feb78e7ad29399f2cfeb3e05c450da"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/01-add-user.html",
    "revision": "bf246321bff962f4892eb015bc60dcb3"
  },
  {
    "url": "os/ubuntu/02-login-with-rsa-key.html",
    "revision": "b91765f31c93bc5557873e27781a33b7"
  },
  {
    "url": "os/ubuntu/03-upload-file-to-server.html",
    "revision": "00512c3c7e4fbc94b678ae151aa799a2"
  },
  {
    "url": "os/ubuntu/04-clone-project-to-server.html",
    "revision": "64d4909e2062e3d1da9544bd2409825f"
  },
  {
    "url": "os/ubuntu/05-fix-date.html",
    "revision": "64fd27fe1536017f2d7fd9fecb358516"
  },
  {
    "url": "os/ubuntu/06-systemd-introduction.html",
    "revision": "72e64c52abe450ade0d8bc4b119a4405"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "95cacfb248d0343d56c7d84ea9e424ab"
  },
  {
    "url": "os/windows/index.html",
    "revision": "8a4139da3e1e29df2332de66d74576b0"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "933581e3153cf96eb38402e66dd72d15"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "05ece9c466869f92cb0096f3d1572874"
  },
  {
    "url": "tools/git/03-generate-ssh-key.html",
    "revision": "a6e5922cc0762267548fb86e3fd2fcfb"
  },
  {
    "url": "tools/git/04-switch-multiple-github-accounts.html",
    "revision": "3985dd6ca906bdc41360fee17749743e"
  },
  {
    "url": "tools/git/05-download-huge-project-from-github.html",
    "revision": "f1b82f9e701cc5b33d840dbe207bd390"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6a62dc964169379dc7aca81398db6620"
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
