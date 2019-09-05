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
    "revision": "b824cbcd68bce448e3e9ba3afbd1b99e"
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
    "url": "assets/js/10.ccc2e890.js",
    "revision": "73d0df870dd7a4a6c3ce8a7f9f844e93"
  },
  {
    "url": "assets/js/11.54fe583c.js",
    "revision": "df70dd11f7e31df50ae44786943a597e"
  },
  {
    "url": "assets/js/12.8f2b740d.js",
    "revision": "1258c651f0267a1991e76bb7addc2cf7"
  },
  {
    "url": "assets/js/13.c1e1bfca.js",
    "revision": "abff98a8f77d7dfdfc012dfc6416b918"
  },
  {
    "url": "assets/js/14.8242756f.js",
    "revision": "5cf8e1bb2f205e2e166c093ee82c03d1"
  },
  {
    "url": "assets/js/15.81e25a72.js",
    "revision": "a6962d3892a9853e0a082af771346e11"
  },
  {
    "url": "assets/js/16.07558fc6.js",
    "revision": "29b23a250b943341723bda83281e03e4"
  },
  {
    "url": "assets/js/17.7c08cfae.js",
    "revision": "cf14ab54ab196806756b8a261757cb41"
  },
  {
    "url": "assets/js/18.517b2e9a.js",
    "revision": "f9d81da731b45f3c675abad499803bd9"
  },
  {
    "url": "assets/js/19.7ed0026f.js",
    "revision": "44cacec5cb8976e26a276488d303a6f1"
  },
  {
    "url": "assets/js/20.10c3a941.js",
    "revision": "5ced017ad54e8521ca8747790d3cc064"
  },
  {
    "url": "assets/js/21.6c058872.js",
    "revision": "6e038c862299384f7e40da664f692cdb"
  },
  {
    "url": "assets/js/22.8383a1e0.js",
    "revision": "c688d27e495cc13a2bd5c153c84f8c94"
  },
  {
    "url": "assets/js/23.6cae6057.js",
    "revision": "95dd85aa1ac1a5521cbd4dddbcb74a90"
  },
  {
    "url": "assets/js/24.f7245046.js",
    "revision": "0367c03bb1533b527640bf88494fca4f"
  },
  {
    "url": "assets/js/25.a42ef332.js",
    "revision": "67369c88279d816e07520e5493c97d9d"
  },
  {
    "url": "assets/js/26.c778ae8a.js",
    "revision": "46fd20640b802d799215f5e5e51f1ed1"
  },
  {
    "url": "assets/js/27.92b45275.js",
    "revision": "ea485d23c7a11a8bb45d9279f76a251b"
  },
  {
    "url": "assets/js/28.ada8c03f.js",
    "revision": "530cf009948f1dfa47cc21ddb4fbad8c"
  },
  {
    "url": "assets/js/29.f39cb397.js",
    "revision": "f439157935304e89ef3494ddd5df5f58"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.7e835a52.js",
    "revision": "9904fce0c6a46369a5f6617578faf599"
  },
  {
    "url": "assets/js/31.414a24de.js",
    "revision": "a40112c7923f3e71cf406cdcb65ba3e1"
  },
  {
    "url": "assets/js/32.21a3a29e.js",
    "revision": "a921c3c48878b8a5ce62efd4d09f85c1"
  },
  {
    "url": "assets/js/33.c539bb36.js",
    "revision": "2aa9864254ff417cce8a2aab4e6337b7"
  },
  {
    "url": "assets/js/34.c559b775.js",
    "revision": "1b3a608cd2a46dbca695c31f57fc9c4d"
  },
  {
    "url": "assets/js/35.27b4a436.js",
    "revision": "b185abe3afc8b550059d6de3ebbd72a0"
  },
  {
    "url": "assets/js/36.98128165.js",
    "revision": "e32fbc9682ce85856dbc7924615ed142"
  },
  {
    "url": "assets/js/37.8314413a.js",
    "revision": "d0fa3b0e96b59304a440e769766bfd79"
  },
  {
    "url": "assets/js/38.3854655d.js",
    "revision": "e8158e0f4e88f50f6162bd28bad7fe59"
  },
  {
    "url": "assets/js/39.dcb0fbdd.js",
    "revision": "69c1ef9086ea3374ff9a980af8370ead"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.c6066102.js",
    "revision": "4789d52931ea2f9e6144b5f0caab87d3"
  },
  {
    "url": "assets/js/41.0c455d27.js",
    "revision": "80f79b7f4ce425b6e90e584d7931be81"
  },
  {
    "url": "assets/js/42.c82d0832.js",
    "revision": "b2b727aa18626b26f03f8d4b8fcdd5da"
  },
  {
    "url": "assets/js/43.df977458.js",
    "revision": "74e0326ec26df628b83e71dfd5f0438e"
  },
  {
    "url": "assets/js/44.c7cfb80d.js",
    "revision": "708663593e72c83d67e48035cd22b49a"
  },
  {
    "url": "assets/js/45.dd7ab71c.js",
    "revision": "5ffba1aed5339a0e808a7e709b554b0a"
  },
  {
    "url": "assets/js/46.d228eb36.js",
    "revision": "f1fb4f55a264fe31e61d12976ee8005a"
  },
  {
    "url": "assets/js/47.09266e7b.js",
    "revision": "8427edf49646f50f84472fe5e21d5698"
  },
  {
    "url": "assets/js/48.4481377d.js",
    "revision": "19d8a2940ca598a2f70674645dacee24"
  },
  {
    "url": "assets/js/49.255ce7e9.js",
    "revision": "44001f0a1c50466b3cba9c6ab85f28de"
  },
  {
    "url": "assets/js/5.72529aa8.js",
    "revision": "1d6ca5c2c809a4a428decc49203e4cfd"
  },
  {
    "url": "assets/js/50.b4a5ad65.js",
    "revision": "2a9d44e36ed781c4688240a6dda56e0f"
  },
  {
    "url": "assets/js/51.db9c49ae.js",
    "revision": "da7c6dc2eb11c813a2bc05c205aa749f"
  },
  {
    "url": "assets/js/52.1314ee69.js",
    "revision": "74cfefa3d77f20f334ac89d1d88d9da7"
  },
  {
    "url": "assets/js/53.316fec2a.js",
    "revision": "24a2801f5cd63875231a62e7a33bb8a1"
  },
  {
    "url": "assets/js/54.81caf42c.js",
    "revision": "155b919c8ce371448ce389fe355c8d4c"
  },
  {
    "url": "assets/js/55.7b31ab95.js",
    "revision": "b2af6933ef2d62554f6b00a21d1a8088"
  },
  {
    "url": "assets/js/56.bfc36b60.js",
    "revision": "28ec8cce11568ff7c1e6cdc37367cf10"
  },
  {
    "url": "assets/js/57.c84bf167.js",
    "revision": "3f9b7d55d6539d667c4a3137f558ed62"
  },
  {
    "url": "assets/js/58.ca7d0cdf.js",
    "revision": "24087621e9b2886210743c130d8f7b00"
  },
  {
    "url": "assets/js/59.3175765b.js",
    "revision": "d2d86280136964a10eb3f978d82b40a2"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.a6a5cb66.js",
    "revision": "8955271745bca6db449e83565dfe2f9f"
  },
  {
    "url": "assets/js/61.262bd8bb.js",
    "revision": "91ba08063dfb32986d5c0eac2fc57bf9"
  },
  {
    "url": "assets/js/62.41bed43a.js",
    "revision": "6661b5a647f7fb64b1cf6d797748015d"
  },
  {
    "url": "assets/js/63.5acc4533.js",
    "revision": "594cbc6e7890e68eeafccbc247291f08"
  },
  {
    "url": "assets/js/64.112ab68d.js",
    "revision": "2aa8c04fee7622f4b9e55124841a1c42"
  },
  {
    "url": "assets/js/65.0b8f5c18.js",
    "revision": "a2442d7e02da8df121be1dbee8e5011f"
  },
  {
    "url": "assets/js/66.58d740bc.js",
    "revision": "bfe0bc56eaae223b5f99d33427872642"
  },
  {
    "url": "assets/js/67.6d162d55.js",
    "revision": "e2f3d429895683c10ece2ac81fb507ff"
  },
  {
    "url": "assets/js/68.af555abd.js",
    "revision": "af73cee8bf3f8918782304b8afe9af9c"
  },
  {
    "url": "assets/js/69.6b405168.js",
    "revision": "e4a2ae582308900f2e62cfa653e0acd6"
  },
  {
    "url": "assets/js/7.78b91e0d.js",
    "revision": "554d0045845d4f41be959005c3ec572b"
  },
  {
    "url": "assets/js/70.c2cf9692.js",
    "revision": "852f769fb2cd21301ede65bef5c60269"
  },
  {
    "url": "assets/js/71.1921d3f4.js",
    "revision": "042ec70187b76baca37d509db4810394"
  },
  {
    "url": "assets/js/72.6d43cf85.js",
    "revision": "ae43509c6a95ca5f83e54883e47c447a"
  },
  {
    "url": "assets/js/73.4dbe7a80.js",
    "revision": "631273402b6371dae375251b1995065b"
  },
  {
    "url": "assets/js/74.36bd6588.js",
    "revision": "c23753765c9b05f0c6eea0d39e1caad9"
  },
  {
    "url": "assets/js/75.a1961f44.js",
    "revision": "24c7dd7edf94d1162916d45aa7414db2"
  },
  {
    "url": "assets/js/76.1ea64a1d.js",
    "revision": "9ce682993cd67d8fabdc5087ce6d3e52"
  },
  {
    "url": "assets/js/77.37361258.js",
    "revision": "bda5810bc2d8113d7bbbff49a4601b3a"
  },
  {
    "url": "assets/js/78.d09761f7.js",
    "revision": "648e8d85ad277441ceecca2c4f648aa7"
  },
  {
    "url": "assets/js/79.c7fd82a6.js",
    "revision": "33df2495fc4e7cd5b1a938b727a55157"
  },
  {
    "url": "assets/js/8.353f198a.js",
    "revision": "61fa51b18d58d83cf70218e4b60019e0"
  },
  {
    "url": "assets/js/80.dd85502e.js",
    "revision": "75902a6bffd03c714ace68ea4c4bb8bb"
  },
  {
    "url": "assets/js/81.c311439c.js",
    "revision": "9b2c603d51fc17377eee918ee0fde2df"
  },
  {
    "url": "assets/js/82.202558ce.js",
    "revision": "49166444bd8e43fea704301b06f41a62"
  },
  {
    "url": "assets/js/83.c8cbc886.js",
    "revision": "b8436709e8ae0fb443e45322c572351e"
  },
  {
    "url": "assets/js/84.2abb70b4.js",
    "revision": "8e839e0d8fb50581bf373641019296b5"
  },
  {
    "url": "assets/js/85.7702c5c2.js",
    "revision": "025450230ede9321ae56995649b0345e"
  },
  {
    "url": "assets/js/86.aead6a47.js",
    "revision": "25c653c8e7939e1d27dece0606043280"
  },
  {
    "url": "assets/js/87.19d3cc01.js",
    "revision": "7b82e8e1c27f2129cbeda0c99c6a37da"
  },
  {
    "url": "assets/js/88.9328c0d2.js",
    "revision": "402338b21555a6c4e41eb0f378357b03"
  },
  {
    "url": "assets/js/89.5762a2f7.js",
    "revision": "1a35989bf7d1c1dfe52c8c8362e43486"
  },
  {
    "url": "assets/js/9.941046b1.js",
    "revision": "d472aef4b236108cc16a126c80470a2c"
  },
  {
    "url": "assets/js/90.b3c0acea.js",
    "revision": "344561c88157bf16f60fcad18ebaa517"
  },
  {
    "url": "assets/js/91.f08d9a16.js",
    "revision": "26f2319f779658dd61dfe84a3c0f6776"
  },
  {
    "url": "assets/js/92.b3b72474.js",
    "revision": "18e73555835ccafb052406aee0670b2e"
  },
  {
    "url": "assets/js/93.0ca64c95.js",
    "revision": "ca0618c6485e2c4c6781bd4beee74b98"
  },
  {
    "url": "assets/js/app.31c1040b.js",
    "revision": "e893591725825ae3f5164b5c18abcae8"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "e83cc826b1517d4b187fe208f487c0cc"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "871017a0d82ab7413f54384261608dbe"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "c61298cac5b73044adf1a8c72b2bbb1c"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "8d0e2ee225993cc76b148cb74980e4ca"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "3325c64df8a40bd6d9d621be1fe5a5f5"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "c1a6fbdaef632ebdb81bb70fa2e3bccb"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "61844a02696e970cd297448cc733b8cb"
  },
  {
    "url": "computer/index.html",
    "revision": "38a99ed8b090ee52df05aeda6b295b7b"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "2efc9ed65e772c91a1ca345f6c744a33"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "68e762685794b366c0d5e25779c0d3b7"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "83717157ff145be7e505b275e74f0916"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "fbf2d4584919e611e6e2ec2a30dd50c7"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "8111cf11b7103b6e3c084b103c66a0c0"
  },
  {
    "url": "frontend/javascript/function-methods.html",
    "revision": "cbfe3425214aff788a073b8139bdda6a"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "5c2b10e23b19a2413aadf4a75c0c2335"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-freeze.html",
    "revision": "e66cf6f9f5bad7ec8582dd3a24a006b7"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-property.html",
    "revision": "17f50066da6f29feaa355812fe8d0858"
  },
  {
    "url": "frontend/javascript/object-constructor-methods.html",
    "revision": "c317db54c6471ce9e88bb898df57b3c9"
  },
  {
    "url": "frontend/javascript/object-instance-methods.html",
    "revision": "b37fc70ef7524db6b5314a0689a33d82"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "201ed7f617549bd8d8c93eb44d46ee2d"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "4af0c91b09c1af721b480434432a7d53"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "4d384d17fa4127e58812383c06c0de0a"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "5477f5748e9bb6b4b69bcb9735b3993d"
  },
  {
    "url": "git/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "git/github-add-ssh-key.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "guide/about-me.html",
    "revision": "cb03082a93db65f292aeebbcb32c0a6f"
  },
  {
    "url": "guide/index.html",
    "revision": "686ee5a8da474bbe89dc07ded5078cd7"
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
    "revision": "aab1dd94dba92362dc10fb5bca7f30a3"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "8189db41748986921edd30e422fd0fbb"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "f6455e347e8fe3ee8814a7b8deacaf68"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "943c2e7007da6543387e321b3e0b7657"
  },
  {
    "url": "more/clean/index.html",
    "revision": "e5451c2a81d77a04a27360cf9f99e97d"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "448a55f3d7476b556d1a42b0afe91fb1"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "b827c324a8427cbcdb1e5da4e89c9989"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "fc921759cacb027169b0d98316e61a73"
  },
  {
    "url": "more/hodgepodge/maybe-optimization-is-needed.html",
    "revision": "cd3608cbf272f0aa590464ccb9e15937"
  },
  {
    "url": "more/hodgepodge/mpv-keyboards.html",
    "revision": "e4b2cba352ee78473299db28dbeacfbd"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "1280e629e094c75cbf8655f664c5964d"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "455cf52a7220630396ed85a6405062b1"
  },
  {
    "url": "more/interview/index.html",
    "revision": "518fbe68e7d623d84c880a76a0df69be"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "75f7d5793d38fda1aff9bbb40aa77375"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "a53a8e249e747f8c33f5c86ca9f8c77c"
  },
  {
    "url": "os/centos/index.html",
    "revision": "ab5b3b8e28d5ed8c7773a2a70cc09cff"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "de2e3db978f062e97a13221106d45bdb"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "06f0acd3ad7e046b3fb43787f38998d2"
  },
  {
    "url": "os/centos/modify-the-network-named-eth.html",
    "revision": "7699018f80787086f6f1b86d8e1e5d57"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "7492f5af96ff8b9c3c1aad51674cb2d7"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "5779a0b3ba3eadf3dc8a281d1ea2da18"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "c845fbe92516860286d594515c367e5b"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "e59a9fb4f9096a87e9a1f5187becbd11"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "2daa97c178db1b6bd114d4d20069b867"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "d8153e5da1e9562d51ff7c0988df9c39"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "d3a17cb6394ee0207e63fd57f9e20951"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "9b759d8fbc32618983343b90e954d602"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "5d70b67b5b9711ba01fe66637ff98407"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "826e0777f3a373eec5e28209ea193fa5"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "daf7e9b081a9df7684c5ca696ba646a8"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "20aa8cef2a8a2108c28924f6af2b5b45"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "17f54e0c537a051dc95c2b4ef96a0b73"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "2518a091abdd41829b6f98e63f9ac877"
  },
  {
    "url": "os/linux/index.html",
    "revision": "120753bd1d9517c6e826186b5f3d59a8"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "c00b0381ac2b5daf27efbcd0477a6985"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "cc624e1febd04aa74bbe90abf5e07053"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "6da0bf509c985362489aa2ecf90bda00"
  },
  {
    "url": "os/linux/rsync.html",
    "revision": "4e471e38822614452e094bae508c40c3"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "d0e447e66a61fdb26fe7814f6d2d6c50"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "5b2e3596cf7b123d261042872d005990"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "f0a69fb475e0151df4d72f2482c588b1"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "57e6e2e5aa200e0caa9865e61d6dd332"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "2a778fcbde094fc486ab84095d3a0042"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "74a4316b0b8be7b5b904a701cf795a59"
  },
  {
    "url": "os/manjaro/screen-flashing-when-recording.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "403a9c4b81cb275039b901c6a37e08a3"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "dac4f7776f1912ccc08099713dfe19a5"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "3014fd6dab8465bac7e2a84ca049f97c"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "8c6c499a7353bb4bae2df07d9b6c310a"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "df28376a2cdfa8273eda395959a0ac61"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "caa58907387798a7917646a71d1684f8"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "105529110aac19481e37eee26ff23f9c"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "55e85e96e88800c83db88ca515fb9659"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "24f23f8ee8823e48d47e9796cf2778d9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cb9761b0b6ec71c7524c38bcfe3ed70f"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "ccc0ff61f89ee80a10d465d214b96316"
  },
  {
    "url": "tools/github/index.html",
    "revision": "d4e44c67566ca3b4bc16c2e65e2467d1"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d75ed3cd1c52a95d080da91bc4e6c2ee"
  },
  {
    "url": "tools/vscode/errors.html",
    "revision": "f5f739ccb17c1dadeae08712f0641916"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "7f76b7e5da2a2253856264bc29a29517"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "1101e2c69ce0f3bc407ba2fbfecee5ec"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "28b21e3d0313c8dcd5508c1323c2d41f"
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
