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
    "revision": "15ee5c2a54c0b81b24ccb4852cc01121"
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
    "url": "assets/css/0.styles.a9d47db4.css",
    "revision": "1cf788e5055372fe632a1eba244f314e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81638827.js",
    "revision": "1f624f3be3c6381598fa9aa37fd014a9"
  },
  {
    "url": "assets/js/11.24de258b.js",
    "revision": "dc20a849e5b9c7e840eb465dfa740a52"
  },
  {
    "url": "assets/js/12.013daa52.js",
    "revision": "755662f56d56b88711454f75ad813744"
  },
  {
    "url": "assets/js/13.935ef229.js",
    "revision": "04868e1876fd33a86c223d072d4f3bed"
  },
  {
    "url": "assets/js/14.17e4c914.js",
    "revision": "a094d81fa73f469b4dd17d0bff10225b"
  },
  {
    "url": "assets/js/15.2af80f11.js",
    "revision": "bf4e794a5898e9d69e9a62564448a0cf"
  },
  {
    "url": "assets/js/16.e9ca1ff3.js",
    "revision": "d871e6330baa938db16e1c24828c00cb"
  },
  {
    "url": "assets/js/17.5d1652c2.js",
    "revision": "36c34e5171d88e3ef2aabbf7ad69e10b"
  },
  {
    "url": "assets/js/18.4c8c76a5.js",
    "revision": "30dde0221d096141c7300ef41d0bac3e"
  },
  {
    "url": "assets/js/19.ea7b4a35.js",
    "revision": "e75c86740038df75cdcabe086e170dd1"
  },
  {
    "url": "assets/js/20.19614eb8.js",
    "revision": "ec22b8900275331b1b56b8ea78b1caf5"
  },
  {
    "url": "assets/js/21.ff6c6238.js",
    "revision": "bd3ffb3613bec16eee4ce77a3cce3dc7"
  },
  {
    "url": "assets/js/22.70a900da.js",
    "revision": "29fe314376b1e4374433e5eba4cb2dc1"
  },
  {
    "url": "assets/js/23.e28c1658.js",
    "revision": "03ef5fc42bf9cf739ea158ae25dbd0ac"
  },
  {
    "url": "assets/js/24.133c2a97.js",
    "revision": "8a156f3ed51386efa67059e3acd9ba6b"
  },
  {
    "url": "assets/js/25.33e5d4e9.js",
    "revision": "1442274ce83bc62e491848cf5af31cd2"
  },
  {
    "url": "assets/js/26.fe5c93fd.js",
    "revision": "36257b126e183ee951800c04426dade5"
  },
  {
    "url": "assets/js/27.5bddeeab.js",
    "revision": "057e04ec6a9932ff5df3ba3d122f41cd"
  },
  {
    "url": "assets/js/28.7a3bb378.js",
    "revision": "c01fd344ca3cee03267d8c7a3e6e9fa6"
  },
  {
    "url": "assets/js/29.13a18c87.js",
    "revision": "cf795f817299de75b3460d293d7272da"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.88d8aec0.js",
    "revision": "7ed4c47ce92fba375ba1a1d1fcb6414b"
  },
  {
    "url": "assets/js/31.e1c35eae.js",
    "revision": "df0dbe343f5ef9d186d79dc6e8f89dff"
  },
  {
    "url": "assets/js/32.96be9a20.js",
    "revision": "776c008e73f9335615935aeb5fb51080"
  },
  {
    "url": "assets/js/33.4cd2164e.js",
    "revision": "b642cfb7116a9454f2ee3c224f75f0af"
  },
  {
    "url": "assets/js/34.b30c0ec6.js",
    "revision": "c09c3f2c787216961bf70de7c9d3dcad"
  },
  {
    "url": "assets/js/35.fe216556.js",
    "revision": "e1d9afeba8db5fda77a3cecfb530f78b"
  },
  {
    "url": "assets/js/36.296c45d7.js",
    "revision": "1f3780f9dbe0b9be84d88f9f50374ae6"
  },
  {
    "url": "assets/js/37.0c256aa3.js",
    "revision": "88be5451a90881be5c53acbb70b0994e"
  },
  {
    "url": "assets/js/38.55d4dfd3.js",
    "revision": "c53e7e2225c8dfd522fddcf431d8fef0"
  },
  {
    "url": "assets/js/39.d5525ffa.js",
    "revision": "2cf4d688369466e1f03d99e8c874ebd2"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.cf15b124.js",
    "revision": "7ed8415c39e6804c41fa438f8426874a"
  },
  {
    "url": "assets/js/41.7d2de93a.js",
    "revision": "dbcc86cd76f0a8f8375edc3191a5dd88"
  },
  {
    "url": "assets/js/42.4ff550ca.js",
    "revision": "d85f9070fc9c551d3e7f0df1d1c6272e"
  },
  {
    "url": "assets/js/43.f4baf121.js",
    "revision": "4044de18c1fe10643c3d390b1507aff6"
  },
  {
    "url": "assets/js/44.6cc042bf.js",
    "revision": "56b85b4fbd364423d50e7d459b8af623"
  },
  {
    "url": "assets/js/45.1b12e598.js",
    "revision": "e655a8e87840ed6f04183b9b76c1bfbf"
  },
  {
    "url": "assets/js/46.029c396c.js",
    "revision": "4e889fe5264f1eb225b14dcdf9419b69"
  },
  {
    "url": "assets/js/47.20cc82aa.js",
    "revision": "3b0d448b91f0efc4830d9d69543d8eea"
  },
  {
    "url": "assets/js/48.ede30425.js",
    "revision": "dded1780681afb7572e6151043439c5f"
  },
  {
    "url": "assets/js/49.6bdd4e5c.js",
    "revision": "4456be9689148b7a9a9f7c7b2ca5a462"
  },
  {
    "url": "assets/js/5.69c9e47e.js",
    "revision": "f8b4659419746e794fba2183c5c02dd9"
  },
  {
    "url": "assets/js/50.6092035e.js",
    "revision": "4bfe4b172eb6caa32903ae4727134ee5"
  },
  {
    "url": "assets/js/51.5380c82f.js",
    "revision": "f29226a4369eab4f68874fe9de0c7a01"
  },
  {
    "url": "assets/js/52.3726bc8c.js",
    "revision": "e6eff620606913c6ac4c9a1929b40ed7"
  },
  {
    "url": "assets/js/53.580e4388.js",
    "revision": "b2109f33a9ecc2b8e69b1a783b13cfdf"
  },
  {
    "url": "assets/js/54.0725dbdb.js",
    "revision": "aa7f6b9355ef022a10fe0e856b8108b7"
  },
  {
    "url": "assets/js/55.6bfac1d4.js",
    "revision": "8bf4e190bf74947381faa2f4eecbcdd3"
  },
  {
    "url": "assets/js/56.2dfe92e3.js",
    "revision": "57bc108326fb54d6ba6e0e666ecee478"
  },
  {
    "url": "assets/js/57.eb63ad5b.js",
    "revision": "c5c149ee7651808b60769757db8862d3"
  },
  {
    "url": "assets/js/58.a2faf578.js",
    "revision": "8f3c3582dd86c69e13a73aa9c8c66440"
  },
  {
    "url": "assets/js/59.9140715d.js",
    "revision": "f79b7bbb60c48b454293a99907412062"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.13509d20.js",
    "revision": "6efab5450e1a8d3849ddc743f14b18ad"
  },
  {
    "url": "assets/js/61.03eaa9a3.js",
    "revision": "d289ef7d995f2119ea93ce7563da1086"
  },
  {
    "url": "assets/js/62.67944f43.js",
    "revision": "6408236563f6b848bc06be018bb5cdde"
  },
  {
    "url": "assets/js/63.8fc8c914.js",
    "revision": "477126c3de62c9cf06c014cb5259003f"
  },
  {
    "url": "assets/js/64.30acb7c9.js",
    "revision": "a8a39dc5551a5417f91c70125c14c305"
  },
  {
    "url": "assets/js/65.1acda8ba.js",
    "revision": "75e2c9dc9410ec996d8acd7bc54747ea"
  },
  {
    "url": "assets/js/66.95241916.js",
    "revision": "1f4d71ed806a69abd39957f463098619"
  },
  {
    "url": "assets/js/67.f4508e85.js",
    "revision": "491dc460621c470bacae1ba53bc959bd"
  },
  {
    "url": "assets/js/68.e484df86.js",
    "revision": "50bb961c7e238cad6346045ba5105045"
  },
  {
    "url": "assets/js/69.0f87a356.js",
    "revision": "07a808d038b3f83c0d03d1ef5d257888"
  },
  {
    "url": "assets/js/7.18370e64.js",
    "revision": "b1eb8712c7308f09beff88062cfcf64a"
  },
  {
    "url": "assets/js/70.7a635d14.js",
    "revision": "8fb4512d805d8ae184b0a579c7a5267c"
  },
  {
    "url": "assets/js/71.5302f3e1.js",
    "revision": "93e2c2834f940901909fd050882085a9"
  },
  {
    "url": "assets/js/72.339402d0.js",
    "revision": "f20a281f04ef86e995d99f9621bbe014"
  },
  {
    "url": "assets/js/73.21dc9708.js",
    "revision": "1de99c5145f05aee8183b85db65ebd12"
  },
  {
    "url": "assets/js/74.615007b4.js",
    "revision": "0dbedb02591055ea812e7a73bd445adb"
  },
  {
    "url": "assets/js/75.ddf21bdb.js",
    "revision": "b52c1e5bf80241b829df68c25cc52e84"
  },
  {
    "url": "assets/js/76.070ec75e.js",
    "revision": "24f13ad339687fd27926d5e4280ba9dd"
  },
  {
    "url": "assets/js/77.4d8602ce.js",
    "revision": "40067a9da1fd9e2eff2506df88900f61"
  },
  {
    "url": "assets/js/78.7f668918.js",
    "revision": "ec4755fe066f38429a31ccadd571122f"
  },
  {
    "url": "assets/js/79.436a0b70.js",
    "revision": "f1e4490054499e61cec484cd9bae0e7d"
  },
  {
    "url": "assets/js/8.c78f8716.js",
    "revision": "aebcd3f075eb6d3e67c11ffcd1fa1dc5"
  },
  {
    "url": "assets/js/80.aad97dac.js",
    "revision": "48a1a4dab97975e2fdac717fc77487a8"
  },
  {
    "url": "assets/js/81.fde43a98.js",
    "revision": "0bdf9b055462e0cb34d25f0576976c4e"
  },
  {
    "url": "assets/js/82.ee47b393.js",
    "revision": "d33234645e78ad979c2e7fa56acad510"
  },
  {
    "url": "assets/js/9.9d99e812.js",
    "revision": "2552b0e6bffbe50645876002d6b98a4c"
  },
  {
    "url": "assets/js/app.010d58fb.js",
    "revision": "afba1df07e9c016f3b362ae1942d15aa"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "c5cc7a69730f21d351a86fa5bba5ae84"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "f56f47ada0094564e3fdefd6ac7109e4"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "8fe190bf317ec1891d4e4f25955cfca2"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "8964b199ab3ee9a29e63edb0caa2f75d"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "c7fb179bbd1a78f923fc2d51c2226056"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "f7f25c2e1f8620c1fbcf049b55195096"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "13da4b1f4205e042da10cf1907c3e798"
  },
  {
    "url": "computer/index.html",
    "revision": "0848ce7b12eacdb233df7d4d16476d74"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "49eba28f2e62f49e4fa0676fb7be6937"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "79da2160c73fb3cb026e1b74ae9680f6"
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
    "revision": "38ca90cb0a9b3e2e408f54c9ba7cc7c8"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "52feccca9ae63d62009c1010b187ea34"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "5c8fa1244410e25f461b46e974110084"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "f77fced9ed6c5eb8a01cab2026cf2379"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "61f3f3ada28ff1c610fc47a9c11f1675"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "882892b4eb0a03eed34202ce19a5cb97"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "8e0f4c0cfd7c6a10060a2676e88765cb"
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
    "revision": "6f1ec0457e56ac8cff8edf9b55c2f6bf"
  },
  {
    "url": "guide/index.html",
    "revision": "33f5c3b3a7a65f2b194fd3300346356d"
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
    "revision": "df0a7a79e0cf8b1f8c54c79ae934160b"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "228d9bfe44abec86b4bc65ed0af5aee0"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "7e15518bdd3093728d17205830b2e163"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "17754386e5466a1343d6462269d21c01"
  },
  {
    "url": "more/clean/index.html",
    "revision": "8f7f5010d6d7caecf34a79690c142dcf"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "51eb0ed415b20f875c6c4bfe26a62090"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "ab126de302a1ca8d64ea84cbd86cf90b"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "2cb6d537d175edc666adaa067afe2e29"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "4f8b28537f278dcf5f802fae3b1ea573"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "77930ad2c85dc1750d49505c2ef394b7"
  },
  {
    "url": "more/interview/index.html",
    "revision": "d1e1b38833067e80e007a647309ca053"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "5facb10def591dd7eb448cb7b2d131d8"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "d24698ca5fec911d2f80c3801e44a4c8"
  },
  {
    "url": "os/centos/index.html",
    "revision": "abf1f9232d451be02b8dc2817d260371"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "9822075ecd03091ca862fbd1b15d6fee"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "df808a72d7c40ab0e5a97a2592819f5e"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "c35518c960cd4631bc70a2132a49e88d"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "aa34643bbe84b99a13f96908a3c96bfe"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "c53cdb904ff31e048c1cf781cd972a02"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "55204237ee7f0b3e1b5343be5ebdab64"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "16e8213e36def91b2a52acd217a74097"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "b80438b6cc30c65eefe7065602fc0b74"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "5f8e8bf7d176b01b23cdf5bd3af221b5"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "97447f285a3a6d0083cf095bd0ee7c3b"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "408eb361a1ed76279bcbb96b6365d017"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "1f79b831a1104647cb58b3d7e12255c8"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "ca5806d2fe050c8e55623d0bef28062d"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "be4a973eea73e2d06146ac76d7ff6353"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "7e2cba231455546d8b6a90a257ad81ea"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "b88c3b88f4fbae9daa328aad10efbda5"
  },
  {
    "url": "os/linux/index.html",
    "revision": "a07054c43e6220cf02ee8213c7e02e9f"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "ee0d04dc0b2d30e5fc2385bad859f949"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "0bc3d7c827cf10431298a674262f61f1"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "e8ae6ab3987ee82769a98a6e18ed0e33"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "5e995568003570cb01668ddb014bd952"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "81a3b81d958a7e463dbfb9f163edeb12"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "66574eb24e2ab7afcc587896af67f0ca"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "110a23da0c7b99c82ceb3593284d6c11"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "cf02c1fa9e2dd7509a8639d5673814b7"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "7e226864d2dce8b75152f93a133e59b7"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "5191346bb6480dfabf11895e0d3dfb4d"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "f390018a03190cfa33576b149d9e933b"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "32ead7136b7e8ae26095549520f3e017"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "5f757a55b6dda556b46e6099f44768a0"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "7ffbe2fa7ab539ebb076cdbe3dc906f0"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "18c8366bcf37f3113faf7bb508ef0276"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "ebfc3a654db04c50d38895b4c6da1072"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "f54e3df86a93bfcfb89ac9624bc739bc"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "6d2c972cdaab920c15bc8e8ed5b3d97e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "11bbf63497ae4f32d6d412be1efb8f5f"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "79c98d3ccd77fc63a530b20d9bae6842"
  },
  {
    "url": "tools/github/index.html",
    "revision": "497658ce2a8f558441ac898fd98c32ea"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "9a55bff4acb45c5c8555cfeb9b78145d"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "d09caba6ca5bd9d6978adc3c5536093f"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "b381b8c65b9a6d1fc9321af3f51d6589"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "ed18ab4075b0a8472b5ce195384a3bb3"
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
