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
    "revision": "dcd183fa0da6a8ba4cc5fe80de4f462f"
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
    "url": "assets/js/10.440f1cc6.js",
    "revision": "eaad01e2886b86a5ac1161012d27cbf5"
  },
  {
    "url": "assets/js/11.01fd4a36.js",
    "revision": "abe36ad43e7374d4ba0a6cff4cf8f787"
  },
  {
    "url": "assets/js/12.17fc6827.js",
    "revision": "ed38c223ca53c63bebdb4312cd736b39"
  },
  {
    "url": "assets/js/13.2aabbfc3.js",
    "revision": "391a4649bf654c6785714b5412e6ca92"
  },
  {
    "url": "assets/js/14.34a28094.js",
    "revision": "1c3370b3e53844db209846075baa7c95"
  },
  {
    "url": "assets/js/15.43d895e9.js",
    "revision": "eea5f9c8bc709975a61be9c255996f26"
  },
  {
    "url": "assets/js/16.19746d91.js",
    "revision": "20cc8e4a7e46326fb26f7467b147794e"
  },
  {
    "url": "assets/js/17.cc55e0fa.js",
    "revision": "b2705971c9fe57fdf59c21f790fd1a98"
  },
  {
    "url": "assets/js/18.596d5d44.js",
    "revision": "a0359e2f56cb8b351d85f178615afbc7"
  },
  {
    "url": "assets/js/19.6b5b4916.js",
    "revision": "c4ea69b6d20d097238c2b2cde987f5f3"
  },
  {
    "url": "assets/js/20.e0cf7551.js",
    "revision": "9b435a32bf956b8996ad284142d6c515"
  },
  {
    "url": "assets/js/21.8584e361.js",
    "revision": "c8bceb4afb061f9f023f412a13528f02"
  },
  {
    "url": "assets/js/22.56b86907.js",
    "revision": "170e3d7a274afbc6786644ebe7bdfbf8"
  },
  {
    "url": "assets/js/23.85b9acb4.js",
    "revision": "ad7abc13cff92854624fca28c56ef325"
  },
  {
    "url": "assets/js/24.562d0557.js",
    "revision": "b297494d3e26987c21633f386fcb40ea"
  },
  {
    "url": "assets/js/25.d5c84dd4.js",
    "revision": "10852ef70ce74fc273c880af00b89e8f"
  },
  {
    "url": "assets/js/26.855b7d9b.js",
    "revision": "f104c1b9388ec45519bc5ac50a042270"
  },
  {
    "url": "assets/js/27.36b975d6.js",
    "revision": "62025a64e7e6c59f3fa10067e21e478e"
  },
  {
    "url": "assets/js/28.6044967d.js",
    "revision": "c04c83f0895cc7dbf250d5e82d41d52e"
  },
  {
    "url": "assets/js/29.c702b2e5.js",
    "revision": "3b712f01c89fe92be1f2c490488a25f8"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.9db994c7.js",
    "revision": "2331e71f0b3e191bb7c0875b3b3200a2"
  },
  {
    "url": "assets/js/31.4fd84f69.js",
    "revision": "79a69a32e0aa84628ed92e5c58bef1c7"
  },
  {
    "url": "assets/js/32.37405df1.js",
    "revision": "7dc5f42ec06b62b4083c372ba32bc66c"
  },
  {
    "url": "assets/js/33.4c28361b.js",
    "revision": "88edbb6a9e71b1825e4e264136cbe037"
  },
  {
    "url": "assets/js/34.f4a957b8.js",
    "revision": "b65dbcfd63900211a5f083624eefe7c9"
  },
  {
    "url": "assets/js/35.525180e3.js",
    "revision": "3bb0d89461672c1527cda0160272a5de"
  },
  {
    "url": "assets/js/36.0f1ce9bc.js",
    "revision": "039a0ca44e73f0ecbde6bc0a19a446bd"
  },
  {
    "url": "assets/js/37.59ccaeea.js",
    "revision": "edb42570e4e6e3630458a66b560fd90b"
  },
  {
    "url": "assets/js/38.55312654.js",
    "revision": "1562b7b05f02077ceb0ab767ceab1630"
  },
  {
    "url": "assets/js/39.f9547e49.js",
    "revision": "0db3d2ab52a136c898ae47cf2ecf0122"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.d4aaf541.js",
    "revision": "b17e18885bf7ec4d85915103a9b87b5d"
  },
  {
    "url": "assets/js/41.87eb42a6.js",
    "revision": "4a44dea9f0cae5a04cdc646c00ab90b1"
  },
  {
    "url": "assets/js/42.069b346b.js",
    "revision": "2fa0db8ccfb909349c0bc05106f7664e"
  },
  {
    "url": "assets/js/43.8f06fb42.js",
    "revision": "fbee13060749be426450bffce6e922f6"
  },
  {
    "url": "assets/js/44.31467766.js",
    "revision": "055e55fcae28743595c7bddafb3b84d8"
  },
  {
    "url": "assets/js/45.05442c9c.js",
    "revision": "17ad55f11bffb1fd8984dc71c849f6bf"
  },
  {
    "url": "assets/js/46.891bbd44.js",
    "revision": "f4af3818b07637d5b94889d913458b49"
  },
  {
    "url": "assets/js/47.e10fbfce.js",
    "revision": "ebf38e62f88aca1826f8d21de47e4a3a"
  },
  {
    "url": "assets/js/48.2cde7933.js",
    "revision": "d4f1f33fb66c86c43d1c09a7392e1001"
  },
  {
    "url": "assets/js/49.26970b3b.js",
    "revision": "8e44b0b5298057e45505c20b2bbda961"
  },
  {
    "url": "assets/js/5.881b9557.js",
    "revision": "32a7deb43225deea48b2aaeea87dee2f"
  },
  {
    "url": "assets/js/50.e7f7ac4e.js",
    "revision": "d92be36b132a4b8e02af408bfddb10db"
  },
  {
    "url": "assets/js/51.9f45b91d.js",
    "revision": "d9c246ba36a0e76a037ca1d891a09367"
  },
  {
    "url": "assets/js/52.e6ba2c56.js",
    "revision": "f56f77039da2ae74bf3b0efbe39a2654"
  },
  {
    "url": "assets/js/53.fc9acfb2.js",
    "revision": "d32b326aee97cfda6832389f5f1c7f0a"
  },
  {
    "url": "assets/js/54.e6b6d98d.js",
    "revision": "4de304f0b1c707c09de3c31059224f12"
  },
  {
    "url": "assets/js/55.73c9a95e.js",
    "revision": "0a9f22391283495f50976aeae76153e1"
  },
  {
    "url": "assets/js/56.7e3cdde7.js",
    "revision": "a8205c46d5e3aa88bfe257b59a48bd45"
  },
  {
    "url": "assets/js/57.18464789.js",
    "revision": "9b2a370d2d40244b68ea6a365abd0895"
  },
  {
    "url": "assets/js/58.0411c59a.js",
    "revision": "52b89c63acaa7d332b47b1d45bdd6ed6"
  },
  {
    "url": "assets/js/59.1bbaef9a.js",
    "revision": "a3c2a360ed3486670b447ae7cfadc0ea"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.020b1ece.js",
    "revision": "bb5a15ca3a04d0043d32c39708ff52b4"
  },
  {
    "url": "assets/js/61.93c4f956.js",
    "revision": "b6f6945f43873d53ba34ed8a481bd829"
  },
  {
    "url": "assets/js/7.b1f2efd6.js",
    "revision": "580e43f5bde07cda27c6e9af9837f12b"
  },
  {
    "url": "assets/js/8.87618958.js",
    "revision": "3b8046ffcddae325368648380e85201f"
  },
  {
    "url": "assets/js/9.60b709bc.js",
    "revision": "ea975a7e51638ac5a35b5cfbd54a11f9"
  },
  {
    "url": "assets/js/app.e277ec74.js",
    "revision": "8832fe7906d8d5ccc89650d45ee0b13e"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "27872ae26dcdd544bc5a2c4bcc0dc67e"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "27a62d76c00b7f62e344c94e2aba9052"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "e32302ed64c6781e5a5b7c3b41b864b8"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "5295bdf7ac15c82abe1bde69e933ff25"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "5296acbfba99dd02dc577267143612ed"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "9914d8a62543c6cb0406d4acb2bbedaa"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "27504b35cc50da5734c7e674d84c9708"
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
    "revision": "a8b7a03747b8011916ffbbe2c7d6de8b"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "c5af1fb4db5860f9c6a37a70bed81468"
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
    "revision": "cadd95bd068006493645a6464514e93e"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "9f94dc529104917e809b48b85277bd5f"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "4f7b9a73685b0f18d64cb3763c129961"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "6a35413cb2f7296b42270b1cb4282038"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "5b4cc00b2120d9546a59036d14ec0fc7"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "f4446d1d0dfc51884b37aea6224d06f5"
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
    "revision": "63302e5352f8fb13526c58ab3f5c0e88"
  },
  {
    "url": "guide/index.html",
    "revision": "acd1873c19529b0a8bed84d76edbf41c"
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
    "revision": "9c1721fee8a1426e083427ca06cb28ac"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "2865277e55902dde9ba96ce0f611a437"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "2572eeab31c9ce98e4bc9ff30f970cfb"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "6a4a25a74e7d90a7e80b1861c22b6280"
  },
  {
    "url": "more/clean/index.html",
    "revision": "3c3d0569f2c58a6b15ea9f6db83f6137"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "0b641c85ec5b365b88f4f54b76892687"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "b4f0d3d0f7b197773410a76ea113a487"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "9cbfa7b51857ddb3af370a4d64786b60"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "ac8c1d9dbd1446d68654a17ba2452afc"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "25b4843f96a7d5b7dd89975191179796"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "f02b314ed4ea50944a4e2118a510414e"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "579a3db610ae35122fb42c1357e82a1e"
  },
  {
    "url": "more/interview/index.html",
    "revision": "4f08243753fdb550c23b694ddef6a7e7"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "1c0c7491f5cc7f1a2b0f6c9d6f0d330b"
  },
  {
    "url": "os/linux/index.html",
    "revision": "d1167d64737ac8bd314ef0cadca7bc10"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "9a0d90a3099040f06f304861a508025a"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "f82c93f19997d82779dc7c4f5814a3b0"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "3dcc2532cf457dc7f8872fe9d8e3b757"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "09e95f9dd9f03079d2d89536c12f7698"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "f6d964cc99a127c7d43f28fd0734952d"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "cff536e1419a67762123544360ef3190"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "204055e189ab5f19b588f787a82454bd"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "409bdca7b0c58868339df443f658ab94"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "8c6a00780df92c9351f6bd791f066f05"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "34a4524bd7a4a6fa1cc24a5dd422dbd7"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "c33cf9afe1356ec5f5e1c717c8c9598e"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "d941a92f5ed45bf32ca1e3885a73d3b5"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "b7231452b794f3392a78e29459d249ea"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "d46ebfb1a0c70143434ac239754a5205"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "75fd50cb528fface00ed6db47c55bcdf"
  },
  {
    "url": "tools/git/index.html",
    "revision": "810df9c6945033038c9bc1cd3072329e"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "b4ae0ccf5f81554868ae8aee0d587478"
  },
  {
    "url": "tools/github/index.html",
    "revision": "6be5250a110d4320b07ea60d1f6a13ee"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "4bcdbecd9241577179ebaaed448382f2"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "ae562af1b46b7fa82e084efe37a3e459"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "b7486cb53b79400ab0861892b8f8da9a"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "bf53ffbab3e7bdf986e92846c5ab13d3"
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
