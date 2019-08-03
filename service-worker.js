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
    "revision": "462cb0231afb2aa833ee539b834118d2"
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
    "url": "assets/js/10.9c4ac5c3.js",
    "revision": "b06648fe9cce7f2f1f77b3c435ccb51e"
  },
  {
    "url": "assets/js/11.904c04ef.js",
    "revision": "0e806b7d4f2ddff5a42362c293e689f2"
  },
  {
    "url": "assets/js/12.a4620d64.js",
    "revision": "e623cdb6ee190f402b8b8984221eb5c6"
  },
  {
    "url": "assets/js/13.474ba109.js",
    "revision": "9a4167ecb89bcca64cba18740e01e2e6"
  },
  {
    "url": "assets/js/14.64aac63f.js",
    "revision": "b23404bc63cfabf4c616f03a5f5c4de2"
  },
  {
    "url": "assets/js/15.f57bf767.js",
    "revision": "4ba0b7791d64affb93daeb3b27d2bd0c"
  },
  {
    "url": "assets/js/16.9ad66212.js",
    "revision": "a5318c94c80145f93ac642c3c73ccff5"
  },
  {
    "url": "assets/js/17.30da54bf.js",
    "revision": "f6cc41827dd42267dabd7a4c20cfc052"
  },
  {
    "url": "assets/js/18.6fe64d80.js",
    "revision": "47566ffc44805db73a85c5d3acec6a84"
  },
  {
    "url": "assets/js/19.4e34e7bb.js",
    "revision": "a26efb7b0309261a57e3e69df7d8bbc0"
  },
  {
    "url": "assets/js/20.c9dbb8e9.js",
    "revision": "90f246b4ec3603d7b409b9cc39192328"
  },
  {
    "url": "assets/js/21.d331f27c.js",
    "revision": "dd65cef7691236a4923465f4f1cded4b"
  },
  {
    "url": "assets/js/22.217d8d96.js",
    "revision": "21ebedc30e8d59ac46ca5e6cbf298b93"
  },
  {
    "url": "assets/js/23.321ec674.js",
    "revision": "f1c673485f3a5bdd797fde028b2ac95b"
  },
  {
    "url": "assets/js/24.9b9eacc2.js",
    "revision": "a8ea62e4fcb82eb62bcd53bcbda9ebba"
  },
  {
    "url": "assets/js/25.f8d44beb.js",
    "revision": "c3cfc753c8a059e1d408e9ac5a9f062d"
  },
  {
    "url": "assets/js/26.dad17e96.js",
    "revision": "874158990b5aa8eb3d665abf069ec6c3"
  },
  {
    "url": "assets/js/27.e50255f2.js",
    "revision": "bbec519762d6f1e419f7066e11a2f63d"
  },
  {
    "url": "assets/js/28.f22e634e.js",
    "revision": "4f4328799c5e43c4e3c3c65f67c79e91"
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
    "url": "assets/js/30.14d02ff1.js",
    "revision": "97dd2e12d3a79553117c1a534d114b3f"
  },
  {
    "url": "assets/js/31.b6aa1cba.js",
    "revision": "eaa8d7ba453062ead098056755db7f9d"
  },
  {
    "url": "assets/js/32.c35342c6.js",
    "revision": "e3a0604a0d42e187634f198d5f16d87b"
  },
  {
    "url": "assets/js/33.a9ea6f07.js",
    "revision": "da221aff10230e96523b9f00e095284e"
  },
  {
    "url": "assets/js/34.061263ab.js",
    "revision": "e9b55ab81d7603ea12ebd633aca79fe1"
  },
  {
    "url": "assets/js/35.f7bf8115.js",
    "revision": "6a5fcac42b363f4a7587d7abad915536"
  },
  {
    "url": "assets/js/36.0f1ce9bc.js",
    "revision": "039a0ca44e73f0ecbde6bc0a19a446bd"
  },
  {
    "url": "assets/js/37.2b79b334.js",
    "revision": "ce42cb7dee150219bbdb2a28ff7d7d53"
  },
  {
    "url": "assets/js/38.1ccb9eae.js",
    "revision": "9d253037b1512afc875838c952006096"
  },
  {
    "url": "assets/js/39.2fb5ddcd.js",
    "revision": "64c7119b34736c6ad36b53297b05a52a"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.8f8ac0c9.js",
    "revision": "beaf9838aec4517d8360b5a22c81efee"
  },
  {
    "url": "assets/js/41.aeb8f64e.js",
    "revision": "295b0a6b934cdc4bf1dd0702ee96f9d4"
  },
  {
    "url": "assets/js/42.89f0cbab.js",
    "revision": "9ca56599e71eeae96c6c2d09bf45094d"
  },
  {
    "url": "assets/js/43.d620f6ff.js",
    "revision": "80390bb2376878334da5ca4928369d4a"
  },
  {
    "url": "assets/js/44.05f68369.js",
    "revision": "b840c359f856333ffbd8056912f09b7d"
  },
  {
    "url": "assets/js/45.0c125ba1.js",
    "revision": "0f014be9c4983689dfd24c1fe68acf0a"
  },
  {
    "url": "assets/js/46.6e2f01b8.js",
    "revision": "5ada7f6b11aa962f2c211374b952f426"
  },
  {
    "url": "assets/js/47.3289d6df.js",
    "revision": "2f398541b2b60a5fbb9b9ea35328504c"
  },
  {
    "url": "assets/js/48.f4b010b9.js",
    "revision": "4a301434510423253d811bccdfb535fa"
  },
  {
    "url": "assets/js/49.c25e549d.js",
    "revision": "5a77eb4f8878c4a975cdc2be78acd2e7"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.c5db497c.js",
    "revision": "7c552f4718c7ca7af2fa611bff51a71e"
  },
  {
    "url": "assets/js/51.d5bdc9a9.js",
    "revision": "27c46a9956c2dc0267144f62620588bd"
  },
  {
    "url": "assets/js/52.cfc5e700.js",
    "revision": "717269007adb0244716f6f68448e5f6f"
  },
  {
    "url": "assets/js/53.b0858147.js",
    "revision": "2208d644dde39cc3a241e66e0d5caad4"
  },
  {
    "url": "assets/js/54.96c30bff.js",
    "revision": "c8f3bc91fdcce75a807ed3f0839b8305"
  },
  {
    "url": "assets/js/55.fbdfb19c.js",
    "revision": "75f9dd350210d4ca943d399dcf30eb80"
  },
  {
    "url": "assets/js/56.e3ed4dd2.js",
    "revision": "2784e6fe6000c530264632f1e46dac47"
  },
  {
    "url": "assets/js/57.ded01279.js",
    "revision": "8dc8bda66172fd04ec880122b0d30317"
  },
  {
    "url": "assets/js/58.b2f8bdc0.js",
    "revision": "f847db8ec6b0b53213ed7d539f5e7666"
  },
  {
    "url": "assets/js/59.1bd0ca51.js",
    "revision": "6b3086d25dcb801bf9cfaaf79cae6fd5"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.2b382002.js",
    "revision": "05a96bed5b0e048fb3bb7e7416a239c2"
  },
  {
    "url": "assets/js/61.d4a1471d.js",
    "revision": "a7c414d9c28a2839435deb9e17d0aabf"
  },
  {
    "url": "assets/js/62.68f6935c.js",
    "revision": "ddc2eb949695e26ade00959c364b5ff3"
  },
  {
    "url": "assets/js/7.461c4c37.js",
    "revision": "a43cc0dca04c548f15514dcb2b98954c"
  },
  {
    "url": "assets/js/8.3e210ecc.js",
    "revision": "ef8c42614c1e509eb61b27fe852dac67"
  },
  {
    "url": "assets/js/9.b8905309.js",
    "revision": "3179fed6fc9c02b0188d4888d863b61f"
  },
  {
    "url": "assets/js/app.4195a2e5.js",
    "revision": "6440e0d8a6d0a1140d80da61abe9e95e"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "c428e060c22edf3465d14940f0170764"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "8b790f8549d7fe3f8da438ea9530dd6a"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "769c6291bb36558c9f8e3fe298f1acbd"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "e2ee62e093aaec4e8c92865aa53549ab"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "0ff5a5c2e6d416dc7ff9454ea1b8bcd5"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "5410afc21bc074010cad524c72934a8b"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "334e7aa81c3bf3edb1e71fb49cca0162"
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
    "revision": "a04457325e2ecc4611f47981f98c6762"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "cc0cc68d4f221d5b920ed219c49cbe6c"
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
    "revision": "fdd2f1955b55503f670ce059e64026f9"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "ae06b58ea56eb710c73a5ff321c808a9"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "2512ad650caf75e4e377f253aebc5294"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "300b7ffed40e16524c21f665263c3ded"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "e2158cf6f59da173a291e6d30f0ca289"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "7c63b4063dd81643f4c65d588811bca5"
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
    "revision": "d426fa420e7a4b7b89b75147c86d72c2"
  },
  {
    "url": "guide/index.html",
    "revision": "9104f1a9a1e159d565e880a1163535e9"
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
    "revision": "4d326a5ff6433e6c110e6af106835254"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "35127e3b96b621f21f94bcae4499d2d4"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "6d4aba66a59cc68f53740b24db50fe52"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "35a0d010b374e873d3dcabd64395f0f1"
  },
  {
    "url": "more/clean/index.html",
    "revision": "f7c7388edf5d8bf6391b985f738952a4"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "c9abd99f1da7c1e4bb4f470affdf824d"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "da401131f1f04e348f6cb6a8b1722d5d"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "898e43b7154f4801f7ff850bff0dd75c"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "9238013c54757cea83b122c099136e04"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "c662cd75f9a8929d4ef91b4ec339c0f5"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "272c5f415761e54957d7cb2c4efca3be"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "540d6c3656a4bc601db47b82ab0d7d0f"
  },
  {
    "url": "more/interview/index.html",
    "revision": "498ec8bcf579cfdd7a8acb06b778ad70"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "72796975d83af3121d75e76799068415"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "f497a47053eae7563ed47cdae4bf05b1"
  },
  {
    "url": "os/linux/index.html",
    "revision": "16c4cc5ac5e02bff939905e62f57ce9b"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "53a96daadb82c7cfbe29bcb8595a938c"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "9289cdc62de8d0423467d8c55d59f61f"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "b193612da7a711ccf7457c29a2676032"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "1a8a0a854bc4ac84ba3b18fc28feba08"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "be8f78333e704436f62cc9dfa69b1086"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "fb395980ad93426fcc02b38bbbce04a6"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "5678349c50e15b1f03e3c6d12c538f3f"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "b84716ea2d99174ae6a8106f06412ad3"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "cca41bfab1810eb505667a196fdbbcc4"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "b34bee0a14a087d23c6a5360045f49b0"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "2a2d921e1d38950416ba759c76317290"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "53d6b2161d1271409c777a8f53ed2afa"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "38d97a5bc1fbcaa330d4dbe013f59e74"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "92c2653c269d75561030199be12e83a7"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "b9455f23355a884150a22d54a0d8eca9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d4a157fe36e7b0952f2ec0c503332eec"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "43195daadb4f7777d2f1ad4b19ec88e7"
  },
  {
    "url": "tools/github/index.html",
    "revision": "8db5e2264eeaa49af18acbd6b6c78d57"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "9909e437a70babed38061894b8060cb1"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "97ad58b0c6c28e9b87e0de6e7b1a5f70"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "3e6b77c0a2fdacc98932c5edd1c545cc"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "97d3d2afd3b364a4aced6d86b3406a7b"
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
