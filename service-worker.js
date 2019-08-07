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
    "revision": "6ad760e73b0ab45ef145d38eab9a8d19"
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
    "url": "assets/js/10.c48e9eb7.js",
    "revision": "1d8afa98bd51dc11e5cd8e817b416c09"
  },
  {
    "url": "assets/js/11.8f67e059.js",
    "revision": "9cdf2d56895efc9d0b25eaed4125fb70"
  },
  {
    "url": "assets/js/12.5641d269.js",
    "revision": "b5d76876e19c11d95a14cd4427d1f5af"
  },
  {
    "url": "assets/js/13.46bcb0c2.js",
    "revision": "ef68b6ec8220a60996d2253124edf3fc"
  },
  {
    "url": "assets/js/14.4e3edac8.js",
    "revision": "66c6640989eeeceace74cef98ab1d5b6"
  },
  {
    "url": "assets/js/15.7be96a95.js",
    "revision": "b035f7c1e95e801efda8f3f358ef562a"
  },
  {
    "url": "assets/js/16.1e646840.js",
    "revision": "2a172684e1765c33a7bc3c841f5762fa"
  },
  {
    "url": "assets/js/17.1c72bf38.js",
    "revision": "e907f72cdf4067bf8cf2b0ca2a4bf3b4"
  },
  {
    "url": "assets/js/18.a46b4017.js",
    "revision": "4c2cf6e9895a378fe9ac2c6bc12638f3"
  },
  {
    "url": "assets/js/19.769b412b.js",
    "revision": "0fe1be9b68c16fbe5cef0e9933a7011b"
  },
  {
    "url": "assets/js/20.97f752ba.js",
    "revision": "9fc48fd64be34fddf54dd240bb2e6be4"
  },
  {
    "url": "assets/js/21.88f7eb63.js",
    "revision": "6f9b1203ed1b21c4fc50c0dcc7e4177d"
  },
  {
    "url": "assets/js/22.01bdc0aa.js",
    "revision": "f12c98980c722e3a6868ff14f739ec97"
  },
  {
    "url": "assets/js/23.2ad4df28.js",
    "revision": "7a7cb14b50f69b95a1f2e9a22fc780b4"
  },
  {
    "url": "assets/js/24.161d0d82.js",
    "revision": "2fe54ffa63fd0d3d6e651755beded897"
  },
  {
    "url": "assets/js/25.890c28b5.js",
    "revision": "490f537823a0abe8a9677cbb9fbeb480"
  },
  {
    "url": "assets/js/26.cf0a4295.js",
    "revision": "d68db41d8c7584384f54cdee9f6850ac"
  },
  {
    "url": "assets/js/27.8e887c33.js",
    "revision": "06339ca8c95d76021f8a237e1e2eead5"
  },
  {
    "url": "assets/js/28.8b11f988.js",
    "revision": "8f8a23a7d045992df2f6605472949d7e"
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
    "url": "assets/js/30.b22aa502.js",
    "revision": "3711ef8b3fa3e51e69d50bbad1b5460a"
  },
  {
    "url": "assets/js/31.00209aa8.js",
    "revision": "dcd2a7ee280c60d799beac2586018be3"
  },
  {
    "url": "assets/js/32.ddff44a7.js",
    "revision": "c2368343e2c76d9ef5da8b477a846472"
  },
  {
    "url": "assets/js/33.f8cf69a8.js",
    "revision": "343871e6b9cde49db8fac94e2e41442a"
  },
  {
    "url": "assets/js/34.21891b6d.js",
    "revision": "9f186fed49f1b67470b70514661299ea"
  },
  {
    "url": "assets/js/35.d82b3727.js",
    "revision": "a67516adbaf2fd3a4736dd1f1d7cee0d"
  },
  {
    "url": "assets/js/36.a5e62c83.js",
    "revision": "19b7ca2cc7bb639d084616be32e845de"
  },
  {
    "url": "assets/js/37.8a6421ef.js",
    "revision": "dd3cbb41d678a77a760b5365417acd9b"
  },
  {
    "url": "assets/js/38.47e595d5.js",
    "revision": "1a6cbd81c6920394028ebd015193866e"
  },
  {
    "url": "assets/js/39.61e0225a.js",
    "revision": "53676c5f95c0c7fbd2e5383c8aa05403"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.5675d745.js",
    "revision": "dee22fbb46ffa16c8c20762262ff4dec"
  },
  {
    "url": "assets/js/41.3887f115.js",
    "revision": "af7187b00efa00165445b95d4df70a53"
  },
  {
    "url": "assets/js/42.45465353.js",
    "revision": "999c31110907c779d1d800e79face676"
  },
  {
    "url": "assets/js/43.ca214d24.js",
    "revision": "5300b5b776242c411fedee5481459067"
  },
  {
    "url": "assets/js/44.3bbccc30.js",
    "revision": "70aaae2a5d3059201820953411a473ec"
  },
  {
    "url": "assets/js/45.ef02d1e2.js",
    "revision": "6d80e7da38cfe4697aff2fd31ec87510"
  },
  {
    "url": "assets/js/46.469483a8.js",
    "revision": "e75922250ce38fb71edc741f76cbad4d"
  },
  {
    "url": "assets/js/47.0793d52f.js",
    "revision": "19d920a4dba7c1774e42262552c28d22"
  },
  {
    "url": "assets/js/48.c0305677.js",
    "revision": "b9250d4502cfcaa66c4f056bafc866f9"
  },
  {
    "url": "assets/js/49.f15f153e.js",
    "revision": "a9533eb2b522f98b404a767aba3e389d"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.0162327f.js",
    "revision": "6fc1bce71343713f956a056f2b3ed85f"
  },
  {
    "url": "assets/js/51.af3b9aa8.js",
    "revision": "e11d852e05e7e6d36a2725f5820c426b"
  },
  {
    "url": "assets/js/52.9c1e8842.js",
    "revision": "dae1629a5e3b4958ca7bbe74b20fd5ee"
  },
  {
    "url": "assets/js/53.d86738c9.js",
    "revision": "13936ffe450e29d6affbdcdcb9096c03"
  },
  {
    "url": "assets/js/54.ac853432.js",
    "revision": "cad673f89ba417d2193c88dca195bbd2"
  },
  {
    "url": "assets/js/55.9c231e7d.js",
    "revision": "10caebd0b5dd2b76be37493ae035da83"
  },
  {
    "url": "assets/js/56.d1536dbb.js",
    "revision": "06d972c2bddc2a737df5c7d2c603f9d9"
  },
  {
    "url": "assets/js/57.f18d2761.js",
    "revision": "6a1f52be819f6d41c4b8697de7c4b5a8"
  },
  {
    "url": "assets/js/58.b98d2e4b.js",
    "revision": "391585d556e49d5b1926258dc18c6bff"
  },
  {
    "url": "assets/js/59.c71fdfea.js",
    "revision": "36a86077b6873fb3b80e605c815aa17d"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.09aa295b.js",
    "revision": "fa74e65895882c733bd87f5c06f6c1e5"
  },
  {
    "url": "assets/js/61.04fe01d8.js",
    "revision": "74a5f5d165c1f84e01c83cedf18ab369"
  },
  {
    "url": "assets/js/62.a8ad02ee.js",
    "revision": "b50d26e27d4b95f5715a4b87eb04a64d"
  },
  {
    "url": "assets/js/63.61006d17.js",
    "revision": "2be7f4536284e26df93acc78d999cc1b"
  },
  {
    "url": "assets/js/64.adb296e5.js",
    "revision": "54f3cd5b3dd115fd56df3433bc13cc86"
  },
  {
    "url": "assets/js/65.6dc27053.js",
    "revision": "b81c7445c1b0bbb466322f4f9ca1e8dc"
  },
  {
    "url": "assets/js/66.45d2b052.js",
    "revision": "7d17b2b34f05e4025c6514941ea1cd9a"
  },
  {
    "url": "assets/js/67.7f69862d.js",
    "revision": "90126a35db0dc13d71eb1039de7a991d"
  },
  {
    "url": "assets/js/68.7f22cc53.js",
    "revision": "2e947faaa699f2610fcfd2c905e52cce"
  },
  {
    "url": "assets/js/7.38423a22.js",
    "revision": "986a33a4b7c8e0a2e5d6c52e9f6dd941"
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
    "url": "assets/js/app.45f02459.js",
    "revision": "6a78f16f6d3b855a463f090bf51e042d"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "2fe35359b5d13845897c7d65d068110f"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "7a5b7889519f4db7258490d962fe67e7"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "55f131a852c51ad082746d8eca412a69"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "2f9336f25738f3673caf5ac89ac63211"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "df540dbe34393d24e20d48a9e524b107"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "ffb6953fda59b7b4299f7e7ceca11497"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "637a1a7087de378ba15c859e5af23dac"
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
    "revision": "26d7d9784612a1417c76b97d15d8fec6"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "5954d539f3f14289b02b4dce2c16333b"
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
    "revision": "f956492491bc3057addcf247a56b8bd0"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "67d59486db09dab196c8311b0a4b6aa0"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "80c1e318dc56a5890f7cc7a97da5d23c"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "723ae5c2cf5b89d0d575a2f7b3748d1d"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "4af63a6222d973fb88ed72225fbd3802"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "c8b930db71ef6022bd057703d2e0e0be"
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
    "revision": "47dc537d75a84ed7d9a02a04a9a58a9c"
  },
  {
    "url": "guide/index.html",
    "revision": "d4238c0e52cd18715580c6e36e98223e"
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
    "revision": "6332533408f2c67d40913ca0526c3938"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "9d2d9aec96c39ba25b945c165adf3805"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "2b66584ce3a407a859cefaf0e8a3add7"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "279f0f8c2ed3030bcae10070c7142c98"
  },
  {
    "url": "more/clean/index.html",
    "revision": "b9086b94ce636962031e9bfa09650982"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "fcfd5bc5ae9f8099672b3d5facc2221c"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "aa9c6a219aaf6983fc6b2f1a7efa3226"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "c4cb6575d9f2e1a1f617130cef20c698"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "8cb1042b84fcb231258ef7c553a8caf5"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "30633fd647992677fb61be66ad915c32"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "9fe6c9aa7b790aae45ea879c5aba6390"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "2dbe490478af2a9ba5d12a3589a23973"
  },
  {
    "url": "more/interview/index.html",
    "revision": "75361bb70da74169412cb9dbd92415f7"
  },
  {
    "url": "os/centos/index.html",
    "revision": "e89f16648bdcfc43fde44a1e77a5ae1a"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "672ccade13a8ea52d7d268057f2ca90a"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "3c208e4e529f524124d1b563d09a05ab"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "f3d4f678b12837e1cc32cff416c91af7"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "8327227b3a4d941155a70855508bc8b2"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "e9313c9e3e3ce82bddeca366264bd318"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "332ef00e709de7433f70548470957046"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "1ae83601138cbf50fc40806e50586219"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "9f10b1995063d2a82a26b6e45e980a2d"
  },
  {
    "url": "os/linux/index.html",
    "revision": "6b14b10c95a89144dd3e8eb2dbbe3f41"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "154927a4feadfb7c2be49ce4b7a952d3"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "ea31845521410cfe3901d6f19e64f423"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "336b1f4b30979dd0622bf5a3f637b734"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "408598832386db867188f974d5d7d20d"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "fa870dc0b2ccd2f7c28a811e15e44064"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "b1ce09f963449b485086e912168c3692"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "dfe976fb94b7db5df6c434ae63b69632"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "311832a47b2379f446bcd340a10bca3e"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "343650fc99856edbe5762c4716b7ed9a"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "aeed3b3f8f6d5d40cb7adc09e29e964e"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "c530f7c77df5ae6486fa2f09b8dfd48d"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "c04bbe09770308b225e0b8a5e2b5a1b4"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "fac18550ae73629725f1e819eca5774d"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "dc8ec1b524464e0a1105459eb06d6e72"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9b9341d1b842205dd16f4e19264c6a81"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "27591a4febd35d7b86068fbf0d2a5f69"
  },
  {
    "url": "tools/github/index.html",
    "revision": "68fa5119ef641b4f907bd0de91bce32b"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "efe1fa0455c0941d7699232228807d17"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "21a132a0bde573099f72f9334883fbc5"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "25ec6447fa7152bdd6cae11ea4cf346b"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "743d5916eb489d37e5678720ba2fb65a"
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
