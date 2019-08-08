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
    "revision": "520b2b4529667cd22740fe9efd2fb83b"
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
    "url": "assets/js/10.1131cab4.js",
    "revision": "b609f5e08ef43bcdb001119a3c0a1925"
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
    "url": "assets/js/16.83db8ff9.js",
    "revision": "d3ec07ca3a7a67a65ab2019197ac86a7"
  },
  {
    "url": "assets/js/17.c516e6b4.js",
    "revision": "ce52964be5115cb9a3019bce7140121e"
  },
  {
    "url": "assets/js/18.553689a2.js",
    "revision": "e35ecb52666915c9a05e705ea8822142"
  },
  {
    "url": "assets/js/19.01048250.js",
    "revision": "4366157bb9e1965e894a4a7e3233520c"
  },
  {
    "url": "assets/js/20.c9dbb8e9.js",
    "revision": "90f246b4ec3603d7b409b9cc39192328"
  },
  {
    "url": "assets/js/21.04f0ebcf.js",
    "revision": "17ebcbb4f8738f1acfdf000e1d4b533f"
  },
  {
    "url": "assets/js/22.d19d5220.js",
    "revision": "aecb76994caac921604319706492c8a9"
  },
  {
    "url": "assets/js/23.b6508f57.js",
    "revision": "b2e9263007b0343792fde5a2f6e3fb1f"
  },
  {
    "url": "assets/js/24.eb5a034f.js",
    "revision": "b31100d850b49c0eea64dc20ffb50dbd"
  },
  {
    "url": "assets/js/25.21ebbd0c.js",
    "revision": "bb72c8996074757b0d12690fcce855c2"
  },
  {
    "url": "assets/js/26.16f26aeb.js",
    "revision": "da872ca9d0fb48a24e02aa9f0b2dbf16"
  },
  {
    "url": "assets/js/27.570ade95.js",
    "revision": "b5bcb8414150252f220b5f7414d2307e"
  },
  {
    "url": "assets/js/28.07be8b6b.js",
    "revision": "3960da4bd2720a8501f25fe126bcf049"
  },
  {
    "url": "assets/js/29.2d5fe826.js",
    "revision": "545d1b0744f2fbb21cff014305f8ca77"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.199f499b.js",
    "revision": "b1c1ddb27bf55f1934643ea96ea2edaf"
  },
  {
    "url": "assets/js/31.cae3d37e.js",
    "revision": "0e1f3a7ab453de87ba7e282913c3fdb9"
  },
  {
    "url": "assets/js/32.7394fe8e.js",
    "revision": "54d08730f02cb9d7155c28038f6d8e4c"
  },
  {
    "url": "assets/js/33.25c21968.js",
    "revision": "ddc5a03d1a6000b245803485dd388883"
  },
  {
    "url": "assets/js/34.a6edeead.js",
    "revision": "e26dfe2f66eb7f973a957fa764ed65fb"
  },
  {
    "url": "assets/js/35.51b258e9.js",
    "revision": "3a352bf712124050ec26138fe930f58f"
  },
  {
    "url": "assets/js/36.bda317ca.js",
    "revision": "d341bdf260a2d62f72bda59a0a8486a1"
  },
  {
    "url": "assets/js/37.fce90b10.js",
    "revision": "c1a88ffbccb3e5f21ae3c661350596be"
  },
  {
    "url": "assets/js/38.98dd543b.js",
    "revision": "ef54bc1d168d8ae5e9c2eb02783150a6"
  },
  {
    "url": "assets/js/39.336d0eee.js",
    "revision": "abd60bf0cb23ca1c807c791e5a9d2817"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.03be2be8.js",
    "revision": "590624e25fcbebde91faf80205b7ae5d"
  },
  {
    "url": "assets/js/41.16f0ece9.js",
    "revision": "813960dba7ebf79200b2770bf3e556c6"
  },
  {
    "url": "assets/js/42.b3874b08.js",
    "revision": "088a86c68ee02825bdb5a0406a0be36e"
  },
  {
    "url": "assets/js/43.11dd5820.js",
    "revision": "1b76ffd6ef4a780dab577b83c131acc8"
  },
  {
    "url": "assets/js/44.0fadd149.js",
    "revision": "7186d4efd94ce807ca088d79c6138149"
  },
  {
    "url": "assets/js/45.0c30e28f.js",
    "revision": "13ced29c9a4af41e9abefa5cf300bff3"
  },
  {
    "url": "assets/js/46.e3b54e56.js",
    "revision": "fc50edc10e7d06a4ff9036a90d7c0088"
  },
  {
    "url": "assets/js/47.353294b5.js",
    "revision": "b02dfec8bef573cb801990d1c820fc7d"
  },
  {
    "url": "assets/js/48.9068f04b.js",
    "revision": "382ebc7e6d04e468745da621f33c3205"
  },
  {
    "url": "assets/js/49.ab07bc56.js",
    "revision": "f2e8f3750df24b36c63282020b3f27fc"
  },
  {
    "url": "assets/js/5.e5c77ff8.js",
    "revision": "b447c0eb72cbf82176e25801d07297ce"
  },
  {
    "url": "assets/js/50.a6df3acf.js",
    "revision": "20b512c9c43c8126c9f9501d0dec9b01"
  },
  {
    "url": "assets/js/51.562138e0.js",
    "revision": "0d41c2296930308c5f287e2cae4a6e6d"
  },
  {
    "url": "assets/js/52.e172f9f6.js",
    "revision": "e7b5f75c52df560f89189585950d412d"
  },
  {
    "url": "assets/js/53.f168b055.js",
    "revision": "93d7dbcacd8fcf631fdeb034ca1250cc"
  },
  {
    "url": "assets/js/54.98e3e2a5.js",
    "revision": "6b7be91bdcfc1ed66b72f8fb72fab287"
  },
  {
    "url": "assets/js/55.50beb1d5.js",
    "revision": "7c1f7c3bc564d8822e4be6ba6f84c4b2"
  },
  {
    "url": "assets/js/56.ab12fa0d.js",
    "revision": "bcf83e169c0d76fb1ddb3acae75903a1"
  },
  {
    "url": "assets/js/57.28d073f2.js",
    "revision": "b4efb8b29bc05df4b17ab57f286875df"
  },
  {
    "url": "assets/js/58.50d40b0b.js",
    "revision": "4817c0e729503d793625b6a615bd0057"
  },
  {
    "url": "assets/js/59.deaa9ce5.js",
    "revision": "853d8ca64681bdc32863628aaabd7d82"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.d9898cbe.js",
    "revision": "279192b85262921f706e529aadd83000"
  },
  {
    "url": "assets/js/61.ef49142c.js",
    "revision": "a735e2bfc4a8d07319c9b6add7cbce9f"
  },
  {
    "url": "assets/js/62.865bec66.js",
    "revision": "8aaf8f647f3529e22b4b5fe38d39379b"
  },
  {
    "url": "assets/js/63.3d8647fe.js",
    "revision": "6b73bcfba59e3d8062b6b9da3fc47349"
  },
  {
    "url": "assets/js/64.c2b210aa.js",
    "revision": "d9078e1ba190f1f246f4edfe00a94b52"
  },
  {
    "url": "assets/js/65.0d91f8eb.js",
    "revision": "482178862d3fc29bd273e7a06b44443b"
  },
  {
    "url": "assets/js/66.b23ceaa1.js",
    "revision": "f9562e371400145ccc8265914f2a3eb9"
  },
  {
    "url": "assets/js/67.0650f8fe.js",
    "revision": "e10adff0ded4c482c406964342ac9c77"
  },
  {
    "url": "assets/js/68.a584ac83.js",
    "revision": "0f720d8381339681955dd70d52ac96ef"
  },
  {
    "url": "assets/js/69.973b0c84.js",
    "revision": "58bbda71c46561c5a7511662cac0d1cd"
  },
  {
    "url": "assets/js/7.b1f2efd6.js",
    "revision": "580e43f5bde07cda27c6e9af9837f12b"
  },
  {
    "url": "assets/js/70.e81799a2.js",
    "revision": "af059bd0bf4c0444fc6c500080b58246"
  },
  {
    "url": "assets/js/71.c64896e8.js",
    "revision": "db3ac56fb28dccbb2cb666812cc170a2"
  },
  {
    "url": "assets/js/8.87618958.js",
    "revision": "3b8046ffcddae325368648380e85201f"
  },
  {
    "url": "assets/js/9.eac687c9.js",
    "revision": "801fb2e160635b20b93c7548ae0f71e8"
  },
  {
    "url": "assets/js/app.055e9383.js",
    "revision": "8c1d592e4b425739732dd54c1003d47e"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "c6bc9dea19815cb8a6c6d08fe964753e"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "a3589fb021a8dfe335350b3c651e51cc"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "d283dcc62fb8e9bc26fcb1752244374c"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "90e25b8c7e297aeef48e9484de2c001c"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "ffe8fc761181614f8f0afc4c2bcf7398"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "12ecf572aacc580c71937aa155705b23"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "41c18ca24fb44e11827e06c66dc4fefa"
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
    "revision": "3df92a7dfeb6473a5870f9120f3db3b4"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "c69fd48cf7cbbfaa1cad64882206c637"
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
    "revision": "9ca0d86553d8c17d4561652e76091809"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "14723dda3b239357bfc3747dde0834ba"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "4180bbd1dcd62f6e3d61acad7ee54640"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "3e8e41112eb297e8a108f3c51ed58673"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "c0791e87b9f581ff62daa0ad0d653c3e"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "d5184a7c8f0a913de8d8d65f014ee7a3"
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
    "revision": "8dfa1923ecdbf8ccea2b6b8439531c85"
  },
  {
    "url": "guide/index.html",
    "revision": "505db9e6e42e494129de36d5d062c878"
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
    "revision": "5a5b4506a06237ed845d54f737205dc2"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "e2189857a7bef734479f2889f9d73bdd"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "da635f7fd50d6c00205aa70329d3cfa8"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "073378ec76a6551909a1b1d256a38ae6"
  },
  {
    "url": "more/clean/index.html",
    "revision": "88b3eabd9091893d116e6af13699ea30"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "389eaa991dec74f75ecdc4badb280916"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "538149e1bf9f6199e123f0789cf003eb"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "411864b484cdd8f7cfa3d9932f2bcdc4"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "37a306f9c564001f955bad334a5bda49"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "1c145e8b4f8ecf9ff2c7c9be2834b8fc"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "8b96f625282005f14a47fc3f7ec20f46"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "83c9515690597c9f4874b4b93ac20db8"
  },
  {
    "url": "more/interview/index.html",
    "revision": "2a118f93278d5ff8422062a9e0497d68"
  },
  {
    "url": "os/centos/index.html",
    "revision": "8cc936499f15b3c6f345e6a5347c604a"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "e73b9fc52816f4bcbebc3628578cd94a"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "f43a31884aa69018ef39518c17ae927e"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "851141a88cb5096e39dbf11dc6bfe8d9"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "bafac5860763c960b5c0a228836db82f"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "7b3af1e81545c5a65cd463daa24affa1"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "bb884718b3134b2b415ff223b0324481"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "0832c12ef62183bba5997a17896e9775"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "e2c0b759aa267e24b4670ddc75e25ea1"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "66fe83dd82100a61337cc24384528549"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "95c5ba5766ae1ec48198ce5975e8ba5d"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "6cb5f023230aeb4191e9fe4983679768"
  },
  {
    "url": "os/linux/index.html",
    "revision": "571bf07dd9061098c0e4008a7bc80be0"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "88a5e0a0e6f2395da51ced8b0febbad9"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "e74218f918a8b235c9089480d138f095"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "8735b96f6e44f8ec7598e69909c0611f"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "dadaece454b8746fd5de08cbced4f126"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "bb9cc57a537eb5d131edb4ae08d6ba85"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "a07450fc6e9ca6bc1036eb6b7ca89773"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "7d1a5d068b29ce7b2fcf95df4b0b2063"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "e0bbb969cc07e02360eed91b167b589a"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "fc21d6f0dab71f2a7f83a929cada7407"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "372099115cfc72302713758c11caa8e5"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "1d262f15a2c2b3a6925785e166ab251a"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "91af8caeb682f4053a6e49a2feb7e63a"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "6f383c4e854682e22065ec428033f159"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "b4c253419a271dcc117fab93293d1e6e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "97f99ba5ee00965a7dd661844199d0c9"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "5c3e2863d0efb9bb4db0bb0caf7f408b"
  },
  {
    "url": "tools/github/index.html",
    "revision": "6eaa10d34f408099ec294476aae795a0"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "0e33bb4cb323ff7db67ddaabae7439cb"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "e4da652b3dcbf72fec0144340fcd2f71"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "1b445d70515d5cd2e7fdbb0979f3d080"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "5a1b3c306aff238790c52fc73db4d8fa"
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
