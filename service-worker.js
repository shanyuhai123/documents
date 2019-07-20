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
    "revision": "bcf4196fd2a88ab2a9c7a1d66eedc57c"
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
    "url": "assets/js/10.42df112d.js",
    "revision": "ade7723c657592ea9b9d121e0b4e3d6d"
  },
  {
    "url": "assets/js/11.f8f373d5.js",
    "revision": "b2118eba415f60a878b4969c05ce1aa1"
  },
  {
    "url": "assets/js/12.cdf4c9ec.js",
    "revision": "d6b523adcd6feca8d14295caf9c26703"
  },
  {
    "url": "assets/js/13.9aaeb0e9.js",
    "revision": "64974e026413d31d0eb52a83d86e81d9"
  },
  {
    "url": "assets/js/14.c568e66f.js",
    "revision": "ce1f55447dc13cc61b9b0bd95c8b438e"
  },
  {
    "url": "assets/js/15.2a687198.js",
    "revision": "5a97f1cfb14fa32cbbf05cc3c76229b5"
  },
  {
    "url": "assets/js/16.8f4ffe2d.js",
    "revision": "b0dae5eb0c127a5ac3900b9d15d25a69"
  },
  {
    "url": "assets/js/17.f471de72.js",
    "revision": "e7149343a92f0df999744d29ef108952"
  },
  {
    "url": "assets/js/18.38b178e6.js",
    "revision": "1e28226a0899a5e3d913ad4211a6f82c"
  },
  {
    "url": "assets/js/19.66069ecd.js",
    "revision": "9c66a3625b1f7ecdc8dafd2c24c043d1"
  },
  {
    "url": "assets/js/20.3a5b8e4e.js",
    "revision": "bef71d04de516dca3d5e7bfdd2f465ff"
  },
  {
    "url": "assets/js/21.4cb83883.js",
    "revision": "88d3ac8912a4b21a251c30dab7fc1267"
  },
  {
    "url": "assets/js/22.10b9303e.js",
    "revision": "73bd87fdeb1491b6006d92c9da0b947b"
  },
  {
    "url": "assets/js/23.e883d14f.js",
    "revision": "8e8322a65b115aa356fa9e982ae95298"
  },
  {
    "url": "assets/js/24.06d18fc1.js",
    "revision": "98121a1c44fde305aabf10dff2495fe0"
  },
  {
    "url": "assets/js/25.b3e1bc97.js",
    "revision": "371b22b9a3e66ed3337f99dceeaa634e"
  },
  {
    "url": "assets/js/26.3b49535d.js",
    "revision": "1fca55db7f692b7203ec39b3fd6440ed"
  },
  {
    "url": "assets/js/27.0c4dd817.js",
    "revision": "751f2943cef94e2bb36696c074b6ea68"
  },
  {
    "url": "assets/js/28.c5dc73be.js",
    "revision": "75a557b4f8f14d0b685b6d784d52abc2"
  },
  {
    "url": "assets/js/29.aff852e4.js",
    "revision": "24a70f4e5a53860b7d62d735657ffa83"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.30f2a5e0.js",
    "revision": "d6ae9f2e3ef28af2142beeedc7c2f703"
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
    "url": "assets/js/36.360b318a.js",
    "revision": "af8d5b6a6f27bdf90060b0d693bb4dc6"
  },
  {
    "url": "assets/js/37.593b27c8.js",
    "revision": "e1abbb1d06f3907ad838ae9e30c0ef02"
  },
  {
    "url": "assets/js/38.5e416b1a.js",
    "revision": "e4d4389e345e2e4f165defbf8c4864bf"
  },
  {
    "url": "assets/js/39.9a4b008b.js",
    "revision": "180f227046892b60a180fcedf650ec26"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.2e9a7ce1.js",
    "revision": "3eb3be6e569a8afba8eadbae27e7d56b"
  },
  {
    "url": "assets/js/41.937626d2.js",
    "revision": "cc2da38752caf1174bd22c4db3710e84"
  },
  {
    "url": "assets/js/42.30d7428e.js",
    "revision": "e77828fb0d390e954e50a31e6c91d66d"
  },
  {
    "url": "assets/js/43.a5e3aa2d.js",
    "revision": "e3b0fc642c9fd359060346b122cff20d"
  },
  {
    "url": "assets/js/44.67ad5492.js",
    "revision": "4bcfba248a51a6071efd3b4a39b9e0bb"
  },
  {
    "url": "assets/js/45.3dce58d2.js",
    "revision": "c5564d048c52618ebc4d901e5dee96d6"
  },
  {
    "url": "assets/js/46.80c2685c.js",
    "revision": "315e78c1e925f057879ed8ea3036e9c1"
  },
  {
    "url": "assets/js/47.43a88ed8.js",
    "revision": "b5d1d762cb17cb518100d43dad2fdc01"
  },
  {
    "url": "assets/js/48.46ac5420.js",
    "revision": "c4da0208a25023e382479c6b13654b5e"
  },
  {
    "url": "assets/js/49.9d52f2c0.js",
    "revision": "a910d18dbaa428bf58475b8a10410b35"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.beef6510.js",
    "revision": "2797dffc966db0f8a771c7a1ef14019f"
  },
  {
    "url": "assets/js/51.c6890ab9.js",
    "revision": "8bcad8fce21df2f3ccf2c05db90cbcec"
  },
  {
    "url": "assets/js/52.f7828891.js",
    "revision": "2646abf6d260f08daf771d0b1a8956cd"
  },
  {
    "url": "assets/js/53.b28dcce8.js",
    "revision": "0a484d147f3247061464f5d3876570f6"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.533211ba.js",
    "revision": "1b9304a7c05d9e8cead0cc6ef6526498"
  },
  {
    "url": "assets/js/8.4321b4fe.js",
    "revision": "b9e0627ff56501401c605f227537ba8b"
  },
  {
    "url": "assets/js/9.ed10489c.js",
    "revision": "b622db67ec8b51e3339dde58f6cc1267"
  },
  {
    "url": "assets/js/app.f694e1ef.js",
    "revision": "5f33720cc9fe59fabc12546f7c079fab"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "895d30beb06110ee13dfe94f9d12a9e3"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "ef072197037f28dddc5932a7b2cc1a98"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "8935d2e7db1bea9d88ecd26b1beb3991"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "19a4561caaf9b2ec10e6788f2996b984"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "8e24ad5836af38cd10f04da433a47d80"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "2bcbb243f8534e30584e0e5a3160e100"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "409d45b29b53f0406107b9b794f31e2a"
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
    "revision": "10448ac001a4f68641eb9d8c66f55983"
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
    "revision": "01b4cfec4cf0730715eda77e3e9e8ba9"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "86f8d9366437e5c5dc38b5c8586d197d"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "50d66ec0bb642ce6e0ab8e5453727b63"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "892c267dd6f4f27bdcdd23995073862b"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "20e85943d0f6df89c851bcd0516671bf"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "7e15dcc755886aa9807a7d11b0eafda6"
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
    "revision": "1de67afdfdc3ea775468d5f941f891ec"
  },
  {
    "url": "guide/index.html",
    "revision": "4f21b570391c84e88495bc1ed7bf3cd9"
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
    "revision": "efebdbd522119a47e4819618f336ce9f"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "f35c4ab1e918693134d0520cb42715a0"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "0a01c56ed49f398c180e770a241e0243"
  },
  {
    "url": "more/clean/index.html",
    "revision": "2fe410aded0675fa567955d3485e3968"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "50591085d327fb7285c63c132cd9ac70"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "aa2d6979e6866da642f8ae896ee25d02"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "08181a32461401234da259dc4323844f"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "a467c267929360443702ac59571f655e"
  },
  {
    "url": "more/interview/index.html",
    "revision": "908a33e9d3efb960b825ccd8a9d2b054"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "3e7577b2c477c438302b8c1bfab94d60"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "13ea97ef7e32dcf9811fc56b43889f3b"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "05b2737161e125949b9e5a0e13ac46d9"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "eb5a1d967e1dad5c2b18269494749132"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "29af1e65043aa6a332016b6b7a48b253"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "db50d846bf545017917c9cf513f7d573"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "e1721436cba1a95db8571b7e1527aa90"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "49a15e49f99780b8d9e4f74c28a7324d"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "aa1963b4a7f516807eecc9db4d8997ca"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "04fadc4606a927bad64a0ff75ed932d9"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "d3ccfbfada8605f6fc7b47fe9eeb7c11"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "0b97b4f12e62918a80e3321d38de30ff"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "f7a6559051731eb09f55288e35b8a1a5"
  },
  {
    "url": "os/windows/index.html",
    "revision": "cafe890e5bb2db8dddd9d5cfc607993c"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "c062a25799101ba792bf7392ef902137"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "a2d90558d1e060b55283a69779429f6d"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "b981a4aae64af5847b0ca88c25e62925"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d4612edd71a6b792c7200c7f90050e11"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "7ab493dd8777e81b20ca3312acddd7af"
  },
  {
    "url": "tools/github/index.html",
    "revision": "9cd72c4cb8a7e5f43f79167cbed1933a"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "2d6b2a5e3150e227a4fe903f62f43f06"
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
