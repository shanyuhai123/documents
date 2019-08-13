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
    "revision": "28de2e44e608f65016916045e839cb30"
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
    "url": "assets/js/10.18df7d3e.js",
    "revision": "d72750f736b62140d8578e288908ba79"
  },
  {
    "url": "assets/js/11.cb67d04d.js",
    "revision": "23062927fa2a91ac8518f29fbc27baae"
  },
  {
    "url": "assets/js/12.46e131c6.js",
    "revision": "514c87959958d693913251ed6e334e6c"
  },
  {
    "url": "assets/js/13.180599fc.js",
    "revision": "310314115bb9d6636cb055fffb2f91ca"
  },
  {
    "url": "assets/js/14.0db42add.js",
    "revision": "b87ba142a5e268b215d47346bddd79eb"
  },
  {
    "url": "assets/js/15.2634cc54.js",
    "revision": "9168b7e3ef4cc31e17f94f03c14c08b3"
  },
  {
    "url": "assets/js/16.f68de43e.js",
    "revision": "54c2934cf42ee928c092e57eb5933e7b"
  },
  {
    "url": "assets/js/17.59675705.js",
    "revision": "afbed141562a68066e4fb6a200921f34"
  },
  {
    "url": "assets/js/18.fe9fefb5.js",
    "revision": "2ec53f3b566cf65902515ef8b85b76e8"
  },
  {
    "url": "assets/js/19.ad40ec1e.js",
    "revision": "5ec6e4624bb5f9d1b12f668671d55d4c"
  },
  {
    "url": "assets/js/20.0bdaa910.js",
    "revision": "f81971a1b7b5c719f287f802f112aea5"
  },
  {
    "url": "assets/js/21.1799dd05.js",
    "revision": "8717cd8ef33ca0a80367dfb3c45c4a67"
  },
  {
    "url": "assets/js/22.643e5805.js",
    "revision": "3da32cfc23ea748066fbd40f429b9fa0"
  },
  {
    "url": "assets/js/23.e918aead.js",
    "revision": "9df0f54a24eb46424db4b4e3b262c7b8"
  },
  {
    "url": "assets/js/24.19e86892.js",
    "revision": "112d23e565860ec82db4bd7c68cf7bd6"
  },
  {
    "url": "assets/js/25.ce6e27ba.js",
    "revision": "cf23d406d41d135f75b31dba803fb9c8"
  },
  {
    "url": "assets/js/26.d4ea5fe0.js",
    "revision": "1dfc3bef35eb016df5b73f1494ae67c6"
  },
  {
    "url": "assets/js/27.10f1c92e.js",
    "revision": "2f51d642e2cc0037e51459732f2978d3"
  },
  {
    "url": "assets/js/28.4be2eb2f.js",
    "revision": "4ab8ed9505c476f8fe8d47f9f6657a6a"
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
    "url": "assets/js/30.85475515.js",
    "revision": "a47069249a687f1b54b2e881563c1b8e"
  },
  {
    "url": "assets/js/31.4fd84f69.js",
    "revision": "79a69a32e0aa84628ed92e5c58bef1c7"
  },
  {
    "url": "assets/js/32.499bec79.js",
    "revision": "a9f27e3e87a01bccb001b119fa8292d7"
  },
  {
    "url": "assets/js/33.77bb4790.js",
    "revision": "2abbd41ec9657d85ee6aae0cefb3d8ee"
  },
  {
    "url": "assets/js/34.4b96c7e0.js",
    "revision": "135507ce185f995306742df984ad55c3"
  },
  {
    "url": "assets/js/35.b5e91bf9.js",
    "revision": "357b01308d729b0dc67614ee3ca20411"
  },
  {
    "url": "assets/js/36.7625e93b.js",
    "revision": "87e5e31b956c5ce9b9bcd8ac4392e1bd"
  },
  {
    "url": "assets/js/37.d1197f37.js",
    "revision": "1cf2b4c3304defffc483e3bc5782991d"
  },
  {
    "url": "assets/js/38.5352d305.js",
    "revision": "b4fa7360c0381d69ac3ff6a07869b343"
  },
  {
    "url": "assets/js/39.1774b224.js",
    "revision": "e8afc00472f6a6dc39f12b15ca9ace0a"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.36ee4de6.js",
    "revision": "6b2b80c7177b2cbc60adc27ce99a63ad"
  },
  {
    "url": "assets/js/41.6aef9ee1.js",
    "revision": "e9574b0ea84026e9e2255a52f9b3ebe8"
  },
  {
    "url": "assets/js/42.0f86c562.js",
    "revision": "a1bb100f7b2cac569979b9a6ce71f25e"
  },
  {
    "url": "assets/js/43.fbf37e87.js",
    "revision": "738673059ada4fa66b501ddfe1b3d2c9"
  },
  {
    "url": "assets/js/44.6ccffa82.js",
    "revision": "ee387d349762085539d708f8b4678d9d"
  },
  {
    "url": "assets/js/45.f2f2bcf9.js",
    "revision": "34ea7ab3044cc3ff27e330e703376910"
  },
  {
    "url": "assets/js/46.b2447692.js",
    "revision": "b15b87f44c3e389a65e955feb3bde939"
  },
  {
    "url": "assets/js/47.ad05a6bf.js",
    "revision": "4c9236d158a5b5718f66971821455275"
  },
  {
    "url": "assets/js/48.b9653ad5.js",
    "revision": "e1c7b533cc6bb1b76f725d8ae7c43c74"
  },
  {
    "url": "assets/js/49.9c5d83aa.js",
    "revision": "7909a9148ff036214d4d261f51967931"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.f5049720.js",
    "revision": "847f5258f9be025d9e72c45d71653876"
  },
  {
    "url": "assets/js/51.b2cd9f73.js",
    "revision": "5377d336261b818be63e2548651beae3"
  },
  {
    "url": "assets/js/52.f043bb66.js",
    "revision": "b40075fc3c0e387a7dc4e710eb4cb6c6"
  },
  {
    "url": "assets/js/53.eb5b0909.js",
    "revision": "eea2ff725097ba489200740d8e6b50d0"
  },
  {
    "url": "assets/js/54.22743165.js",
    "revision": "74e68d1d770d3906d47810dc7e813a28"
  },
  {
    "url": "assets/js/55.ce369db3.js",
    "revision": "6becca090f33ece42a74a44489d74a43"
  },
  {
    "url": "assets/js/56.23ba2621.js",
    "revision": "83f85fed3a157fe2844bb969535648c4"
  },
  {
    "url": "assets/js/57.04f70fe6.js",
    "revision": "358c7d067152e154ee11561b6be0de15"
  },
  {
    "url": "assets/js/58.cb3391a9.js",
    "revision": "893424689aa3fdf48b013ca2be7e4006"
  },
  {
    "url": "assets/js/59.d96bdc22.js",
    "revision": "c29ea5b6c1a92fbb39b48150c225fa4a"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.11d43a82.js",
    "revision": "8e860c03d624c5f51bf37d8ab161e995"
  },
  {
    "url": "assets/js/61.9adc2158.js",
    "revision": "0e13369b9ec22d78b9527542aefd1b48"
  },
  {
    "url": "assets/js/62.365d84af.js",
    "revision": "a0e68323524860aadce044c3fc975476"
  },
  {
    "url": "assets/js/63.85b572bf.js",
    "revision": "2ad6099a60f65e827210c1c38ac4ba99"
  },
  {
    "url": "assets/js/64.9b0a4e24.js",
    "revision": "ef96616aac478660834c993e90c8a375"
  },
  {
    "url": "assets/js/65.6c2e9714.js",
    "revision": "882e918bda7af6b5075f220e62e1e7f9"
  },
  {
    "url": "assets/js/66.148367e0.js",
    "revision": "043725688bc4c141210f2b255d7d96d1"
  },
  {
    "url": "assets/js/67.5074f8b3.js",
    "revision": "6b20e89506042c8ba60baeaf630451da"
  },
  {
    "url": "assets/js/68.b0a550a4.js",
    "revision": "da001a5beaff6a7bc25952b8817a36d3"
  },
  {
    "url": "assets/js/69.7fa11e4a.js",
    "revision": "43f0a32e34bbc37644464ca1df0c4bd2"
  },
  {
    "url": "assets/js/7.75ad9741.js",
    "revision": "5f5d21651d677a960d98f10c4669b289"
  },
  {
    "url": "assets/js/70.19a18145.js",
    "revision": "8837bfaa5a301196902baa58d65a36bd"
  },
  {
    "url": "assets/js/71.ad44e143.js",
    "revision": "e04ba0e141993dc30c409c3f772f8e73"
  },
  {
    "url": "assets/js/72.512bbc09.js",
    "revision": "514178e44bccaa47b5ab7daa4aa1efd3"
  },
  {
    "url": "assets/js/73.c12114a3.js",
    "revision": "684cd9122011146fe5af545e6da0528f"
  },
  {
    "url": "assets/js/74.9ed35811.js",
    "revision": "18553d93b2c23632ecb9ce9c65fcbaf0"
  },
  {
    "url": "assets/js/8.2fa5d4ce.js",
    "revision": "1eed5e0aac80e53145fb600ef35bf54d"
  },
  {
    "url": "assets/js/9.98226a0c.js",
    "revision": "ed3a37aa4c6dee5b2ed909b7a20db553"
  },
  {
    "url": "assets/js/app.a7d220db.js",
    "revision": "609f9f8c1ee8caf78a1984be54437918"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "cb85f8c53ad73cf0ac613c3cf603b788"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "51a9adfd5cab2da8290c24af2277c8bc"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "2ca79ae7e95984601725123402e0aa23"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "af07943cb6dd7f99555f164e8e6b24e2"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "1cb66289b47be1db0c43b8de9626b0be"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "0be2ea3dcfb5c296d2cd19a42d75ab0a"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "7768ebf474c15a56bbfa4c693ef510fb"
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
    "revision": "d4fa6ad93d8ccd30eebd1c346e3d7729"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "d57b6ce44402f60f46b20c54f931547e"
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
    "revision": "1064bb83b4710ab9d4fc5656b38d3438"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "6caaa2235213d6ca89e17c96e20b5d03"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "c89197a333720a7bdd2b2cd986fdaa2f"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "85621119d72c4b0390a741ab6d9132de"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "661a44b109b2fa66699b6925f98177b5"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "77f7303369f1573f0bd7ff995c4ad880"
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
    "revision": "fe020430da3f486a34a7eda643c486dd"
  },
  {
    "url": "guide/index.html",
    "revision": "211f875460f8729704a2ceebae6d8bab"
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
    "revision": "936ba07df4694078255ad4df15f5a196"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "4e0a3642dffeb85afe61b87eb4915cd0"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "9dc957e776e3f01ce08f67d63b0c4893"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "14d26f6d9af81f96bf38e0df1a071876"
  },
  {
    "url": "more/clean/index.html",
    "revision": "84d8917471be248861ea18c795bff267"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "1c516140a13deef7f5aae54389bad892"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "74224102fb6b029dc1afb7330059ce75"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "81449ca61488f9c9e18efc87c343c6cd"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "a176c4077528261e2298db1fb0189bb7"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "e9a5f90c40f33bef8f2cde583d1c794b"
  },
  {
    "url": "more/interview/index.html",
    "revision": "cbf987baab00eae27608ecd017d7177d"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "0bc06e7eb45c8cf27254a75acd43901e"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "5bca989a7334a9fe3a933a8741352ee3"
  },
  {
    "url": "os/centos/index.html",
    "revision": "23bdeeebc70d0e3f30fb3dd415797c80"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "3efc4d115c0fac8a7dcabc1d4bee3250"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "258afdf85663df8a722877abfac90b34"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "2ef5f86e111a66e5d5532f2406488087"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "c5de774f0464b297de419560bbb511d9"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "3509c6e72a47ab46c154335762d4df6b"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "563f486db3e15ab966bbdae9db7d4bfb"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "3785d17361e5cab5ecf6876d88244744"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "f2b2465881b55bfab765019ae0206f21"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "3390d41bb1b96210e60d2bb3ba3ec4ab"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "1bc7c0b437fa1cfd040164505629fa53"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "8a7540dd8078dbc18193fd26f30c9d96"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "fd1297edd5e2bdaca5f1876d8873b704"
  },
  {
    "url": "os/linux/index.html",
    "revision": "d4a7bab38cd9236787957c61a6862522"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "da4914dbdc815c8934e8afd953ac5749"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "76a7e76e9b9690802853c2af023f08b0"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "b0e25b1fb18c602cc7d7e8000b3ca3a5"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "3b4cd58639772eea9ed9c8376be3ef3b"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "ebcfe09eb2bb1f23b2740c9cf601f12e"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "ab50ac63d77900b5db822a01e6db84cf"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "c96b930d46dc00d9a457cc47c2da5ac2"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "cc9242768cbd4dd7c6d1ee85cf7ab85d"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "c897e7e6f9689a3df06cb4a620e43aac"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "f9c397eab15168a3132e6c83fdf6bec6"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "eff2e5300205f42c8adffaf65db613de"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "0d2b505aa7e0d37c21ee85914e1574bf"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "30b0d4033d1ae923b54ca8a18f1c1ce3"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "081ad7f857569489a9692a683e5a9aee"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "540caf71b0e77ef6037f0aaad37041cb"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "2c3f594d7716c01b60003eedbf5b0fb4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "79a42f2e66a667a2ac2632494b268b90"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "4c8eb32d259754ca28a1cd2b2393a60f"
  },
  {
    "url": "tools/github/index.html",
    "revision": "887942cabd67fdfa670e9167a6fa014d"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "df0ae1fa65462d95608e33778d8be813"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "2f95b5cb39a2c77b6b2a795c11f2460e"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "01d62ff4fabb474b6128339cbd00c822"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "6b6aa8c54204c2190445dc405a6d9087"
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
