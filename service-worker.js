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
    "revision": "811f6511a5cecab648c181b14344294a"
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
    "url": "assets/js/10.94276e19.js",
    "revision": "ed0d6865cf1c4c4b62f4e38e766621b3"
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
    "url": "assets/js/16.3efde85a.js",
    "revision": "e939846b52ad7266862a47fe42ef9e7f"
  },
  {
    "url": "assets/js/17.0f7384a9.js",
    "revision": "8a2065091c0330e5f7dc81aa1ed16bba"
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
    "url": "assets/js/31.2b9196d1.js",
    "revision": "0c7c3ed3b1bdd8aa916982f72759ff08"
  },
  {
    "url": "assets/js/32.68622eb4.js",
    "revision": "8e66b9fb0cef38c24f4feb29987e831d"
  },
  {
    "url": "assets/js/33.1cdb82a1.js",
    "revision": "f4fc5181ed3adf0377b110ece3d83f6a"
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
    "url": "assets/js/39.89edab1d.js",
    "revision": "8753fe770d73b48fba09edf4b0ab0769"
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
    "url": "assets/js/52.2b4b8828.js",
    "revision": "b2e6c4e8d17096013d0a8e80a632b1d8"
  },
  {
    "url": "assets/js/53.d86738c9.js",
    "revision": "13936ffe450e29d6affbdcdcb9096c03"
  },
  {
    "url": "assets/js/54.34f421e8.js",
    "revision": "2f34f4b9244a7118238071fde2916052"
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
    "url": "assets/js/57.73e8ed48.js",
    "revision": "28114bfbfbf2cf07e515b0527f0202d5"
  },
  {
    "url": "assets/js/58.f010f108.js",
    "revision": "02b42a0499435555e6e95c5ef47a0d7b"
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
    "url": "assets/js/7.75ad9741.js",
    "revision": "5f5d21651d677a960d98f10c4669b289"
  },
  {
    "url": "assets/js/8.14d1b112.js",
    "revision": "09ef4e7322ed3f12be65aba6390a3447"
  },
  {
    "url": "assets/js/9.6c9cb5f0.js",
    "revision": "903d44769cd5de6575a9a8dbf8f8c701"
  },
  {
    "url": "assets/js/app.552d1266.js",
    "revision": "ed5ac14039dd06be43707887a2597537"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "2d31a919ce69cdb74be11052587caf91"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4554e60b39403531c1885bdc8a87a82d"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "122abc2a95d6a70c690640fcea2ea76e"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "2551554f192c5281bdd581120ec01519"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "6c173818266f4724b6fe5a120015f0d0"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "bcaae56ba0e8e246cb39fd08b2c6dca8"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "836b8de46f4bb2ad1d0d31282a7faf2f"
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
    "revision": "b0167f3ba6a2aa178d4ac72975607b4d"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "ac06cdecb5871aed7dcc16916bbc91cf"
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
    "revision": "9c323281901f27b14c192b90cc7b08d2"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "65aa640a50c8205b86a5eb853d76fb72"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "2ea071854bce9fe09e0dc705f24700cb"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "0b9287b93d71c6252afda2385deba42c"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "c47cf2800582dbf44c44f4a4c4d99951"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "a5801586d4c9cac96affc9b14d9965c4"
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
    "revision": "d3a8b17a395bdbb7e8a09b1e79aab88a"
  },
  {
    "url": "guide/index.html",
    "revision": "c97a7f4bdfb3ce41c507d5a5de23716b"
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
    "revision": "12237d1b5d7251643a9d1a18c86ac910"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "0a5cd518d66b0769895728d5c6a963db"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "2e6d848f371c71da8e09fb71432a3d41"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "7e91d7208eb6de26f91b740ca5c7b2db"
  },
  {
    "url": "more/clean/index.html",
    "revision": "d0c7d24cfef4978d8dcb5bf5f53adb05"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "f471939c4cf859821da995098f5a6629"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "c656e0fd449c00a6680ed6fc6e9a6726"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "55db5639ff3273311c8c517eba5acb99"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "c0e16f3d084383c91da5598697d9b4eb"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "8d50d01495c50b66928e067e3dbd71b4"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "23ddcc7d818cd111eb43df55b676a5f9"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "db1c5effaedfb3910c62a1c5ba91108b"
  },
  {
    "url": "more/interview/index.html",
    "revision": "01f62f5ea99bdee8052ebdbc417f697e"
  },
  {
    "url": "os/centos/index.html",
    "revision": "3522334f9e74b043ea83ce2edc56f178"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "f040646c9e5e4f43860d3ff7d5aab49e"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "38b8a55c8bd53aea93669e083a6a2a2c"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "cd974cfd058ac0929d7fda5dd396bf0b"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "4aef76e3e5cca2b5a574653b5a09b491"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "d32818c0ce7796fe051d23b4375f4ded"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "0f4fc909b9bb7ba033516027f03c065d"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "db7249e615bef637a4253fc0ace74507"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "15bbfd61a3d992078ab7a48e04abe9b4"
  },
  {
    "url": "os/linux/index.html",
    "revision": "ee5df6b0c2cd4214e8d9f937a348c446"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "f10ec84d928c9f1c546f9a9920102dae"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "2f84b9c529f91b11940cbbac495aedbc"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "b91abedca53a8a818faf101d08b51239"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "0f836fe6edabb2b193b20d30c0fe7597"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "6df2c6714160598618db3834a9d3f666"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "e82c637a28c349baa0f13eba715119f8"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "0e40f3b02d329162b68d527d509ae966"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "ed0f824e041edc8cbe1707753ded97b7"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "aa9936a6fbbd6daadf3b12ef641fa595"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "e801ce6ecc710fe9d317b77332523aea"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "fc328582c7332353f215a892ec520dc4"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "ebe2583e78c4b50907c99a4e963db3ce"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "ff7c7a891ba1ae328874b4884b3d1f4d"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "934d98f21248aac21697f3485bc44d40"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5292e3106e5b8a1c8210a5bd1de4b1c8"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "5b4b61eff01532a9834d0939cb07b733"
  },
  {
    "url": "tools/github/index.html",
    "revision": "d9f950a5a4d014b9de41b85d1fbcffcd"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "39171113c87d02a2fed4b7c38c2b7f0b"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "d609c7774956d2797080d6d4d615cb8c"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "911665556ad73f269c4d83cd3c47ec61"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "c105f7015775b362359829ee9aa0a15f"
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
