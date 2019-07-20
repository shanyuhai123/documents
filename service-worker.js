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
    "revision": "826ce8c32e5d13e97bf5ba1a72fe3f7d"
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
    "url": "assets/js/10.e0433b04.js",
    "revision": "add3e8b4ed7ba4371e7e6b5567824f52"
  },
  {
    "url": "assets/js/11.79ae7517.js",
    "revision": "43e6cb59ab527dffeb18334aca8eeab6"
  },
  {
    "url": "assets/js/12.d201aa30.js",
    "revision": "b39357e0290c12a8d950a49e8add73ae"
  },
  {
    "url": "assets/js/13.767cedec.js",
    "revision": "a235027c31b1b730da32b4ab3ab27e4b"
  },
  {
    "url": "assets/js/14.59e6d727.js",
    "revision": "3e3740c07834ed74277a1f8a8933fff1"
  },
  {
    "url": "assets/js/15.7185b2a3.js",
    "revision": "49af8cff9d261a4905e190ee427380c5"
  },
  {
    "url": "assets/js/16.64a3bade.js",
    "revision": "c6bfa754da2a2d8bc212445336f0a5b7"
  },
  {
    "url": "assets/js/17.07d24149.js",
    "revision": "980ad70a152791a38fb9e358338a12e5"
  },
  {
    "url": "assets/js/18.c41854cc.js",
    "revision": "5bcb3465a6b06e0df7b924f00c98b38e"
  },
  {
    "url": "assets/js/19.cdc22638.js",
    "revision": "3db93ed9bbad91184a4e1409b8d594b1"
  },
  {
    "url": "assets/js/20.b8babc1e.js",
    "revision": "1f2592adc096a16896b3a378619f6bf6"
  },
  {
    "url": "assets/js/21.b038263d.js",
    "revision": "373c0aa3ed5577a3edc482dca694a766"
  },
  {
    "url": "assets/js/22.55fc1cd3.js",
    "revision": "405669f5b7b52b032f6911eb00355199"
  },
  {
    "url": "assets/js/23.116b5625.js",
    "revision": "642344ef24824bcc2363efa49cd2fd9c"
  },
  {
    "url": "assets/js/24.4247c027.js",
    "revision": "83e4e381d54d1822883b049b877085ce"
  },
  {
    "url": "assets/js/25.157f7e04.js",
    "revision": "5319b81df483bc4a6ac781bba046f813"
  },
  {
    "url": "assets/js/26.6806c7fa.js",
    "revision": "37e041b93345a4569a9313340a5c9058"
  },
  {
    "url": "assets/js/27.f34a4ff7.js",
    "revision": "28bf8d2f0de31352311a39a5ce9f702c"
  },
  {
    "url": "assets/js/28.1c9a2034.js",
    "revision": "46e418cc0bd33a082c28b5cac1fd7538"
  },
  {
    "url": "assets/js/29.c8a14aa3.js",
    "revision": "ba68ab546400493c41c594df3831edef"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.52d0d4ce.js",
    "revision": "e6ada0d6ab303e82466ad19059978c3a"
  },
  {
    "url": "assets/js/31.7d89977d.js",
    "revision": "491327a22d39bd2dbecc8f5dd95ba8a9"
  },
  {
    "url": "assets/js/32.9709afcd.js",
    "revision": "734661d78fa58eba8d48b832ef9d3539"
  },
  {
    "url": "assets/js/33.8edcb202.js",
    "revision": "4d3e8648323840a32279866fc9adfffe"
  },
  {
    "url": "assets/js/34.dc299971.js",
    "revision": "b9e57bcc3b1181977d01a75ee5d42da3"
  },
  {
    "url": "assets/js/35.34a7e807.js",
    "revision": "25f6f5886e2f227dfef83181211eb39d"
  },
  {
    "url": "assets/js/36.fd759b22.js",
    "revision": "2dbd1c7fbcc1577d1a6ea810945e9d98"
  },
  {
    "url": "assets/js/37.c7d1993e.js",
    "revision": "dedd68d69e2c420fa0fdf663fed72b48"
  },
  {
    "url": "assets/js/38.a380db34.js",
    "revision": "ccd6c37d4bfadf232e710db1744ca99b"
  },
  {
    "url": "assets/js/39.3f20c6b0.js",
    "revision": "55ad05575f653d6345b99c162d7b0bd0"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.1b144bf5.js",
    "revision": "7309ce99d7fb8836abac27edcf4df529"
  },
  {
    "url": "assets/js/41.c424eb5e.js",
    "revision": "163fe46ffaec170e83503fb114ab93c4"
  },
  {
    "url": "assets/js/42.90d5c393.js",
    "revision": "19a4356c78de98f5c196f907cd3e6197"
  },
  {
    "url": "assets/js/43.6030c2f0.js",
    "revision": "4ac9e84efef92c6befc98524cad05964"
  },
  {
    "url": "assets/js/44.7faa836c.js",
    "revision": "4a7e6ffb4a8876fbf6766cbaba1a7608"
  },
  {
    "url": "assets/js/45.0cc5ce61.js",
    "revision": "f3052b92d8fcca0558b87edd937d27fa"
  },
  {
    "url": "assets/js/46.007aa4c5.js",
    "revision": "b61ce9792c4ab9ec476de38bfc6a182d"
  },
  {
    "url": "assets/js/47.0b8fa25b.js",
    "revision": "51909238213d3f256d60fb1a0967fb5e"
  },
  {
    "url": "assets/js/48.1db4a852.js",
    "revision": "4e9998a0d598c7be54564ca20dfb3119"
  },
  {
    "url": "assets/js/49.8f853525.js",
    "revision": "af46d1b9424e233bf42244f3badad35e"
  },
  {
    "url": "assets/js/5.c33cb045.js",
    "revision": "6c4724bffe513ebc6ba5612d54ac7ef8"
  },
  {
    "url": "assets/js/50.ae73a1fc.js",
    "revision": "72c414dc08d3a9e222dd40f821284fdf"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.d337a67f.js",
    "revision": "b65f2bd088a3da94471168b57839a78d"
  },
  {
    "url": "assets/js/8.dfe9bf34.js",
    "revision": "0cc9ca32bba45f9651dcb0ba201ba7df"
  },
  {
    "url": "assets/js/9.be7d1eef.js",
    "revision": "82afade41dbf486862c5a3cb249ff701"
  },
  {
    "url": "assets/js/app.69c81d31.js",
    "revision": "937c4d8b95a5f137131e9076d6ba29ed"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "e48d90a802920c153c29e5f0272f54ed"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "fc966cd332c1d0ef818b7f41cf70bee3"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "b02c5e501a5fc30e1cff155980faee25"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "b2ee22c1449094cd5e5589563979c04d"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "35f5e822320f2d5d2b9ae0d52d410454"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "efe3032a375e21a0df54bc8d0b37429b"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "4a479068b5a0f9415ec1bfdd7f1fe7db"
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
    "revision": "c5196108ee1e8f2d41ead2f348c54564"
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
    "revision": "6b5d00f5b08f4e528d66748d23cf24b7"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "1dd0b7079c0141a647f9fb686ca869a3"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "95c8299805855e0ae6e22fa85d7770fe"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "3421292c6b8f2d04a29d595740e26698"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "708b03c23143072e21122a896c8b5dc2"
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
    "revision": "8dcfbef08df970f3509dcfb95a77c2f2"
  },
  {
    "url": "guide/index.html",
    "revision": "a2c827864dc42243c79f67ce97534d8f"
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
    "revision": "9f72b5c3b6d2e5990e70015767270c0f"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "aa68d5a0a07bfdebf8e70bdf865d5ccd"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "0752ebe7c41dac706f93e2830efb4a2b"
  },
  {
    "url": "more/clean/index.html",
    "revision": "45f157e6bf7ac49ab417e65ce7839416"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "21394edb2292dd40b9b510d038395f99"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "f74df4794d8a7d01e9fcdae55db2ee67"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "dd07ae80e05db453294802b2988de551"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "eb6458bf9e4b6b4b06e2cc04a9e792a8"
  },
  {
    "url": "more/interview/index.html",
    "revision": "339c4c542c053b4020252b1ef7b70590"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "ed26fef8cb1072c73355dbb556c24f77"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "832bf7e09647372c71b8b94a4bee3ffa"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "ffecb12a23cf6b1769be993a2a15a992"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "0e67311e05360f76ea22d8d648121ff3"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "fce0c3489d059a22b6d134fcfc5a9d40"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/01-add-user.html",
    "revision": "b95c22734d0134110fffc32369d7b01c"
  },
  {
    "url": "os/ubuntu/02-login-with-rsa-key.html",
    "revision": "e05dcba75c8fcba618cdbd6715d66556"
  },
  {
    "url": "os/ubuntu/03-upload-file-to-server.html",
    "revision": "dfcf72af876e000e26926e00129fc466"
  },
  {
    "url": "os/ubuntu/04-clone-project-to-server.html",
    "revision": "63bd346e90625c80ac57eeb693dde412"
  },
  {
    "url": "os/ubuntu/05-fix-date.html",
    "revision": "87cfd0bf1e47deefef8f18793f810ea0"
  },
  {
    "url": "os/ubuntu/06-systemd-introduction.html",
    "revision": "2b22ad205c6414cd98689724c25ff951"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "f67318e088046853b057674dfeb1b9ad"
  },
  {
    "url": "os/windows/index.html",
    "revision": "1bfb15377582d0a2b725d1ecb6633d7b"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "121c592036d90cb5d1fd590c5326f271"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "8d3a6899c2692f8bcb3ddca1d8929cd6"
  },
  {
    "url": "tools/git/03-generate-ssh-key.html",
    "revision": "7319612d7a9bc89799b1a28a872ad344"
  },
  {
    "url": "tools/git/04-switch-multiple-github-accounts.html",
    "revision": "11bfff4a2d489e36eca124f07c06b15c"
  },
  {
    "url": "tools/git/05-download-huge-project-from-github.html",
    "revision": "23b14186e0b820a7e3007e7fd10f3314"
  },
  {
    "url": "tools/git/index.html",
    "revision": "df75e035ec8f77a88fa5aadae6dfc18e"
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
