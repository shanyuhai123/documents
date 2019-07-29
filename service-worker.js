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
    "revision": "69e6d25c6b0ca7e47cb005cbea47d0ec"
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
    "url": "assets/js/10.a305f61a.js",
    "revision": "33246c0cec50c1a0e7a16a826c1bce25"
  },
  {
    "url": "assets/js/11.4033f51f.js",
    "revision": "4af8ae3a5156d9a276247676adf4cbea"
  },
  {
    "url": "assets/js/12.0bd80c3b.js",
    "revision": "d0ca89406ce25459e906cc78c485d214"
  },
  {
    "url": "assets/js/13.bd6de2b9.js",
    "revision": "abf8b6c94c405604e4e9fddd7c17495d"
  },
  {
    "url": "assets/js/14.0003fee3.js",
    "revision": "15fc7cc8b2d180f2b70014e45b7e4c86"
  },
  {
    "url": "assets/js/15.e85532b5.js",
    "revision": "553ae07834599e6edecbde457e7b6a6b"
  },
  {
    "url": "assets/js/16.1023c05d.js",
    "revision": "fd385414d1fa6abb5a144b2f5ce66f03"
  },
  {
    "url": "assets/js/17.1ef84c31.js",
    "revision": "4e00b330c8bcd74671126360155e7c02"
  },
  {
    "url": "assets/js/18.d370eb04.js",
    "revision": "ea8bbf4df3715ac5ea69b95c1cb6d8df"
  },
  {
    "url": "assets/js/19.b6501da0.js",
    "revision": "6b1afef347eb24509f839e7597714885"
  },
  {
    "url": "assets/js/20.a7b05bb6.js",
    "revision": "c73d6f645972980482ee897a70a2b76a"
  },
  {
    "url": "assets/js/21.16ade51b.js",
    "revision": "d54c070fcb9d6dbdd7937b81f92d1bf8"
  },
  {
    "url": "assets/js/22.18fcc618.js",
    "revision": "f8d34681d57ffba2f6f280977919bb71"
  },
  {
    "url": "assets/js/23.8c821d05.js",
    "revision": "37c5174e5f1553c56a70c2c79b45c5c1"
  },
  {
    "url": "assets/js/24.e1647a04.js",
    "revision": "b2a418bf06d1350909a1975359a91a10"
  },
  {
    "url": "assets/js/25.48dc19cc.js",
    "revision": "7a3c465f61d7001f486e3a175284c798"
  },
  {
    "url": "assets/js/26.13a03d56.js",
    "revision": "ee1df9886784d1f5005b0f47898e0923"
  },
  {
    "url": "assets/js/27.bab7dc89.js",
    "revision": "65640be1bfce89cf2cf33fe5a29244c8"
  },
  {
    "url": "assets/js/28.a65044c0.js",
    "revision": "7e7d5a56a78cd1d878189fa06098012c"
  },
  {
    "url": "assets/js/29.ae09a480.js",
    "revision": "5af0d7b7833f2680e98e1293894fb229"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.dbeed93e.js",
    "revision": "cbdafdb8aa237e24a8f2b88f20f780cf"
  },
  {
    "url": "assets/js/31.6fe08dee.js",
    "revision": "cb9318ee354c4a09650169cf86dd234e"
  },
  {
    "url": "assets/js/32.e4a3591b.js",
    "revision": "83526fbc8d0207eb68c9a2fbed4499e0"
  },
  {
    "url": "assets/js/33.4d40a5dc.js",
    "revision": "41b7dd784a12f4a6b4c767b16e2616ce"
  },
  {
    "url": "assets/js/34.541a82e6.js",
    "revision": "3c66e4f27df50e06fa9291d683a74bf1"
  },
  {
    "url": "assets/js/35.cd50c09d.js",
    "revision": "9f2f5232b2e4f9784df74f3c9d414810"
  },
  {
    "url": "assets/js/36.bc51b255.js",
    "revision": "e87e012e8abef3416e0bb83f190eb8e8"
  },
  {
    "url": "assets/js/37.e410b7b7.js",
    "revision": "51556e377ec9bb49f8d2ccbf622f9df2"
  },
  {
    "url": "assets/js/38.9ef12c18.js",
    "revision": "145de6c099c5b3cf5ca0f7a6fda52c47"
  },
  {
    "url": "assets/js/39.65c9e617.js",
    "revision": "f9b03199b77697b07e0c3e617aac1c71"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.1e6c9df9.js",
    "revision": "677067ad50c02f2b0e86232a6fad1155"
  },
  {
    "url": "assets/js/41.bedd8464.js",
    "revision": "0c16f35026503caa23e9193efabddedc"
  },
  {
    "url": "assets/js/42.77878e7b.js",
    "revision": "f8f2ea9228dd9e4e27be222a21ca7205"
  },
  {
    "url": "assets/js/43.debce5f2.js",
    "revision": "89d1a4d86babc718e5ad61c906100000"
  },
  {
    "url": "assets/js/44.419aa8bc.js",
    "revision": "96f3101b648793672ff80d13c372df6d"
  },
  {
    "url": "assets/js/45.2bbf3c8e.js",
    "revision": "f6a1c160dca4cfca1f20b07b3c703a02"
  },
  {
    "url": "assets/js/46.f60ec569.js",
    "revision": "e3b62b2512f267812a026dd82afc2ee8"
  },
  {
    "url": "assets/js/47.7e2c3bdb.js",
    "revision": "f9f9e1c9c1928b19db039221868f4d55"
  },
  {
    "url": "assets/js/48.ecad6e72.js",
    "revision": "e0f96220f1fe91c7db1874610d3765ef"
  },
  {
    "url": "assets/js/49.cb20cfad.js",
    "revision": "c8dae9de1c296be78d6031d15a8f8cf2"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.2c317709.js",
    "revision": "f11b5e2bfafc843103d6d78c2d7f7313"
  },
  {
    "url": "assets/js/51.2b16ad0f.js",
    "revision": "76d51ce9ed1540c40db18f57208b1e5b"
  },
  {
    "url": "assets/js/52.175f74c3.js",
    "revision": "42f40de14f558c88f6e119439d701d7d"
  },
  {
    "url": "assets/js/53.1f6b4743.js",
    "revision": "f05873cdf86e96789b38e2bad7105b2f"
  },
  {
    "url": "assets/js/54.074c2c72.js",
    "revision": "548cb5ed0186f8a2350e61dd46ebde6c"
  },
  {
    "url": "assets/js/55.bda0abf7.js",
    "revision": "c602888021ac6e35d0c0e5cf0c56aeaf"
  },
  {
    "url": "assets/js/56.06df5c9c.js",
    "revision": "9ae7528d8e306aaf5734ae56526eed0b"
  },
  {
    "url": "assets/js/57.91ea684b.js",
    "revision": "d111a55461962e1ecc3bab81dd0f7985"
  },
  {
    "url": "assets/js/58.0960f8e2.js",
    "revision": "b1ec1c95b2b5c49e53f799f60930ed4b"
  },
  {
    "url": "assets/js/59.39064b25.js",
    "revision": "528707fb79d26254b824d7995fa739f8"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.004c0467.js",
    "revision": "77977ee065a872f990f79a8645c499cf"
  },
  {
    "url": "assets/js/8.ce4a077b.js",
    "revision": "46f74006a16c85647aa39dc725ef0c4a"
  },
  {
    "url": "assets/js/9.91e6c05e.js",
    "revision": "d29ccfa77838c451c07b2f84d6672edd"
  },
  {
    "url": "assets/js/app.4c000f0d.js",
    "revision": "979e4506cc2851b904231e631859b490"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "1e172c7d1a4de9c03bfd98fe619321be"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "238c4cc13a99cbf1eb1d263559a49fcd"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "b49ad5888499dec4daa7b048391eefe6"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "33b9f4570708a8492abd722674b2c483"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "89b7eac94e82cf81209d200ec2ef5c93"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "bbc4b444f3a35d212be87fe17b2097cc"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "031d3dd47ee089b787ed08eccee88d37"
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
    "revision": "2cf7dbc34a350564acae36dda8898700"
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
    "revision": "4cdb6847632f654c2c7426d7a1e0348e"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "d3fbdeb535940d1ebe3c1e9584f0dd5b"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "60e20604bb9ce6080291e8b17f76f0e1"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "0977f431fa90633162a5b02c775402f7"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "390465521b1bc77eb359a3f813b63ac3"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "23bfa86a48ea1d4ca1ccd73f544370d1"
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
    "revision": "69adee9f3e7e9ef90ba4585e4e4bdf1c"
  },
  {
    "url": "guide/index.html",
    "revision": "67c95da8a29b6747a3507ae56b33a7f9"
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
    "revision": "32a93ffb2e5266d19200467eaaeb75e5"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "d6bfc1d1351db167d35c0f374fe9e267"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "435e45e59bd04e2f1abd2cd35da59445"
  },
  {
    "url": "more/clean/index.html",
    "revision": "ea7e7b06ede7c4740d29aa72ea9f9034"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "2ef04303de1c44ac1b8bbfddf694a13a"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "94657e1b8661da68033eafd2d4a665c5"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "de61a0713e0655171a6e08189112f97d"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "3a0d5ccbb1531f376f84b97131498b70"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "3234bf69f2eaaa41933341f7d086d9b8"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "74e9a28b5daf44ee02b9f064d31ba496"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "686fb51085c3ab17994e831035e94ac9"
  },
  {
    "url": "more/interview/index.html",
    "revision": "e547ae23a0fbf4f18a98a8ee457d4c9b"
  },
  {
    "url": "os/linux/index.html",
    "revision": "f15cbc9fba5654a7634713ed4716dec4"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "5096947c6231567e7e1448d7887c35d8"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "08d7dd6a5b21164cdbd1324d60a45494"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "0d7fdb16e41e509d10a3f7f49dd69641"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "25877e0470670235b3a85925cb1bcba2"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "0f2d9068bf1e5d7182087983bb49f105"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "4907cfc97006f21fe049d9db10ca189d"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "51f28fe20ae05862d8479139eecc8fc2"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "f5a7328154dac02bd7d7654a08d0606f"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "002b067075747669e3637971ccc4c135"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "381fee5d7544c5a635a7466e1c3d02e2"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "9f5ed624d69f666d5cc3e1e9917003dc"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "d99cb582d5d4092fe9857b9a21acca34"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "aa00506cdb35c8ed294e9c171dfa3053"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "9a28d6788874f1a156f931f8adeceb42"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "8ce20abf40deb59010d90e010ddc4049"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "74839bbb7a2de1c135bb91aaf845c91c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1b39600596187bbae84633f2246ab223"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "3df0e097249431ea19e84eafb5f166d4"
  },
  {
    "url": "tools/github/index.html",
    "revision": "f2f5f57273bbc6816531a7c52cfffdbb"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "80e389eae37ea61b49cc30a98193b730"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "4e1108464432ad25d19e5d3eaf76ef13"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "b601ac96b51e699d07576fa34b4a1b06"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "6ef20761cf3934aa265c55c47cee3d99"
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
