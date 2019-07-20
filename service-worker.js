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
    "revision": "2d944cef4e610ffde95d0d67b5647b37"
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
    "url": "assets/js/10.493ec6f0.js",
    "revision": "93ab50b54c434e23ea9041ff464ea107"
  },
  {
    "url": "assets/js/11.c1e15055.js",
    "revision": "2823950e2e4b978a9a67c061afb2a10e"
  },
  {
    "url": "assets/js/12.46da32c4.js",
    "revision": "d5695dc6e0bc92a2d9cebeeaac183b2d"
  },
  {
    "url": "assets/js/13.da90bcd4.js",
    "revision": "72b0ea192525b1969da86efd19a068b5"
  },
  {
    "url": "assets/js/14.99957a59.js",
    "revision": "f8d8c86c30b69e408dc4c0dda51a4335"
  },
  {
    "url": "assets/js/15.2a7c84b6.js",
    "revision": "ee33296676a0b38a2721f9065ce350ed"
  },
  {
    "url": "assets/js/16.15b6f4fd.js",
    "revision": "b9d303bd6e4324da7814878bd2ac9f4d"
  },
  {
    "url": "assets/js/17.e8044a49.js",
    "revision": "8a8bd2cb4f3465496c06493ce3d01786"
  },
  {
    "url": "assets/js/18.8c6f10f1.js",
    "revision": "777862d61c41480624bcf45380629e97"
  },
  {
    "url": "assets/js/19.7b850916.js",
    "revision": "65e20772d26ae6694097a2d4abcbe5a6"
  },
  {
    "url": "assets/js/20.6fa898e7.js",
    "revision": "1bc1f8f0a99e941107f68b322f76af40"
  },
  {
    "url": "assets/js/21.87b5d727.js",
    "revision": "21c96a83452122f769f4a12e3ed7951e"
  },
  {
    "url": "assets/js/22.0d5b90cb.js",
    "revision": "93a7b28ec79051cd519957a9ae865e21"
  },
  {
    "url": "assets/js/23.5907fa6a.js",
    "revision": "2aa501b0754028a86a788f17c7a8d630"
  },
  {
    "url": "assets/js/24.a0a10f3f.js",
    "revision": "7a7c8d229233dcdc1c25988e6d95ea8f"
  },
  {
    "url": "assets/js/25.654300e2.js",
    "revision": "21a10c0ac601d523eb00207be67d9dff"
  },
  {
    "url": "assets/js/26.b5f2dddf.js",
    "revision": "3639528a664e68fa242e54c6dd3124c7"
  },
  {
    "url": "assets/js/27.bab7dc89.js",
    "revision": "65640be1bfce89cf2cf33fe5a29244c8"
  },
  {
    "url": "assets/js/28.89360d35.js",
    "revision": "296ca7c75d97b6ec76125cf576474ad1"
  },
  {
    "url": "assets/js/29.ed0905d5.js",
    "revision": "a896929ed49657fd2dd9e90b9f5f1384"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.e260fd3b.js",
    "revision": "227526df721effdbd180f3d2d5327af5"
  },
  {
    "url": "assets/js/31.447e5470.js",
    "revision": "bc32f4f17642ba734bdb51cea7170dd9"
  },
  {
    "url": "assets/js/32.663229ae.js",
    "revision": "d3dda3842efa738440c615b4e8e7abc7"
  },
  {
    "url": "assets/js/33.f3470bda.js",
    "revision": "671dff62e25238b8c11a51c6259dbbe4"
  },
  {
    "url": "assets/js/34.df46d5fb.js",
    "revision": "86c7366450ee8e95085a7258f2512345"
  },
  {
    "url": "assets/js/35.be4b3468.js",
    "revision": "e31dcb2317910b9d96d87c57c8665d69"
  },
  {
    "url": "assets/js/36.317a5f9e.js",
    "revision": "1a922932a6980430bc239e5b00fe91c7"
  },
  {
    "url": "assets/js/37.d703a07b.js",
    "revision": "8e8d290dc9a8cfe231c29fa539f65718"
  },
  {
    "url": "assets/js/38.7eb9cc5d.js",
    "revision": "ff9067e8f5e9e2742b4777aeb706b564"
  },
  {
    "url": "assets/js/39.4fcafded.js",
    "revision": "150b64349ec634d0021b1460e8780439"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.89e0bd52.js",
    "revision": "32b45ee3a83f523ee21ac9cc5fe75099"
  },
  {
    "url": "assets/js/41.cd547958.js",
    "revision": "be006c240e65698e70a26eccba244bd0"
  },
  {
    "url": "assets/js/42.20c16116.js",
    "revision": "e74279341b058dc2e6b3c1fd44e451f9"
  },
  {
    "url": "assets/js/43.3e79d105.js",
    "revision": "f3c9c60133395f09f29e53d35391dc94"
  },
  {
    "url": "assets/js/44.5882b4c6.js",
    "revision": "fee783e07a3544edf3821414454a1f46"
  },
  {
    "url": "assets/js/45.457ac248.js",
    "revision": "8141c70fce00494d0319f5facabaf2f4"
  },
  {
    "url": "assets/js/46.bb7f4622.js",
    "revision": "0ca80b454358c402b0fa8561dbf8b1d0"
  },
  {
    "url": "assets/js/47.d649b519.js",
    "revision": "45101d3e66a437a9fd03b82a6878b7ff"
  },
  {
    "url": "assets/js/48.4ab67be4.js",
    "revision": "1f53236a79e05591c398e4b1d5212366"
  },
  {
    "url": "assets/js/49.cb739761.js",
    "revision": "45fe692de28bbce7b24a772ae2da404f"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.55846eb2.js",
    "revision": "8af4f31688a6992b6fedebf017b7f561"
  },
  {
    "url": "assets/js/51.3305a642.js",
    "revision": "eaa69f1c88cdc2e82eb852ffd47372ad"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.74c11bd3.js",
    "revision": "9e2a1c168e782758524a0831608a3f1b"
  },
  {
    "url": "assets/js/8.1be070af.js",
    "revision": "bc0741586cd1382f12a5b7381bc18922"
  },
  {
    "url": "assets/js/9.8759f8c0.js",
    "revision": "da74a395d3e5b6fc59111a00cca81e36"
  },
  {
    "url": "assets/js/app.373af802.js",
    "revision": "eef9917320e6495aca1d5f6350cc0c64"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "cb61479f436094f1812310bd8bcfacf7"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "8d0fdeb3e07ba9f534706366999feb76"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "a0a34142e9f4fd3999e05a1b2aa10b2f"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "797081f6c1311b0d4da1d91fffaee8a6"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "ac5ba096b95345a30a84766a110dfa82"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "08b70f8ff263d58a69e1701ab850e3f0"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "f49a782cd4f834cee5d01654be5d80f4"
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
    "revision": "a45ea1c61efe2ade9ed8bcb366e9a27c"
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
    "revision": "3898417eebb6d1e6fa1398680fbf5c72"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "321a575fd2faeaed8e8b437e71cb84e7"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "512f5663658a3f76895c4d450914c5ac"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "403c291a32493dd99b9b2261b36f9afa"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "e9be3b481584c0868183c9eb6b9d9fe4"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "616b5eddbebb615e5909318bbe02820f"
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
    "revision": "c0ad99768bc6f81bfc815e11e76d8e0a"
  },
  {
    "url": "guide/index.html",
    "revision": "6b3b9fc44a59060f566fd4213108cfa5"
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
    "revision": "4a1d6c76063437f3e93c4d7cfba46d73"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "75b715249010bd769fdc23cd7beb4e18"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "8690afc22f851f309de1a6730f1a583b"
  },
  {
    "url": "more/clean/index.html",
    "revision": "c0ac928e3fbbdf4aec6346ca52ea57e8"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "a3bf8b0e9029819720a06155dc926063"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "9ddb5740a1c5e460631115817f37efd4"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "43c678336c3755661ea72f5e6e8c264b"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "33194d01122c16c0031b965e4694223c"
  },
  {
    "url": "more/interview/index.html",
    "revision": "fc56bd52a6054d94b75a58c6fdaddb51"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "5798ce172f42d2bb278729d040e12266"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "16a80c3cfd5bc0677c6688af7dad822b"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "308feb82a12b87aedcc9c393cc93e141"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "b9d943afa22b64deb0eaaf4bd16730fc"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "0dc5c383db6bf431cefd39c7b55505c3"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/01-add-user.html",
    "revision": "7d789d70b3f223e1b658241e1c512c23"
  },
  {
    "url": "os/ubuntu/02-login-with-rsa-key.html",
    "revision": "33249e46717938e8cd0b0bedb40bfdb7"
  },
  {
    "url": "os/ubuntu/03-upload-file-to-server.html",
    "revision": "9cf8efaf88c6931d25829e5494720b9d"
  },
  {
    "url": "os/ubuntu/04-clone-project-to-server.html",
    "revision": "77644e61f1a3608e618c61c185dca8c1"
  },
  {
    "url": "os/ubuntu/05-fix-date.html",
    "revision": "88a5c914b5767536a2b654d66b4b881a"
  },
  {
    "url": "os/ubuntu/06-systemd-introduction.html",
    "revision": "68ca0153780a62f5a58a1f354d9ea016"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "032e2a19917b7c3099a98ac6c1cda7d6"
  },
  {
    "url": "os/windows/index.html",
    "revision": "9d8cad9d386d866acaf3829eeb5c821f"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "420d7ab1644ce148858660d9de963c11"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "8afb811ef9fc7459a59b6893804667fa"
  },
  {
    "url": "tools/git/03-generate-ssh-key.html",
    "revision": "1cf97ad12eefedbb5f53ac0cf2d60616"
  },
  {
    "url": "tools/git/04-switch-multiple-github-accounts.html",
    "revision": "5e6153e7c28ceafafc5035f83ab0c96e"
  },
  {
    "url": "tools/git/05-download-huge-project-from-github.html",
    "revision": "9154ca8e56c38b6ac40244035dba16f9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1a41230952230a47b269cc03a1c4e956"
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
