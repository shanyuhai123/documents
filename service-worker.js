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
    "revision": "62447c38ece38a1bf939cd94fcb72d7f"
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
    "url": "assets/js/10.aad94fb2.js",
    "revision": "cc5ef2391d4c43bfdda33c73550a675e"
  },
  {
    "url": "assets/js/11.17cb3ce4.js",
    "revision": "ed54542e7f4c3fa8356dd54926ab12fc"
  },
  {
    "url": "assets/js/12.19c5f754.js",
    "revision": "c1dde048bc363c8bf3318b26600753b7"
  },
  {
    "url": "assets/js/13.e77aef01.js",
    "revision": "78d6c25d8f0dc4c054683c1fabaf3491"
  },
  {
    "url": "assets/js/14.9b5f4fd0.js",
    "revision": "e39e9b5f43661fa7804c4d8c36c056a6"
  },
  {
    "url": "assets/js/15.343bf8d7.js",
    "revision": "89db89c80deb13282ee4b4dee4069ffb"
  },
  {
    "url": "assets/js/16.1d1b877c.js",
    "revision": "4969ad470cbc22d76db896b4a200b0a6"
  },
  {
    "url": "assets/js/17.6f48cd96.js",
    "revision": "99ff5ea8c3a4f002ebde78954d9c5bd5"
  },
  {
    "url": "assets/js/18.83ae5078.js",
    "revision": "eb4ec68d6381b11253ae10034c6b3a8d"
  },
  {
    "url": "assets/js/19.9049300d.js",
    "revision": "d36069337278f0dc906829bb06a9f666"
  },
  {
    "url": "assets/js/20.713cb23d.js",
    "revision": "f15afaff3adb6b0847f9322fb14ddf5a"
  },
  {
    "url": "assets/js/21.45d31454.js",
    "revision": "0eefd8bb5fab286bf056fb836d41ce12"
  },
  {
    "url": "assets/js/22.ed9a804f.js",
    "revision": "6c77a72d79a902af8ebb09a3d0cbeade"
  },
  {
    "url": "assets/js/23.b3fd691c.js",
    "revision": "83e66dd723457ce38cba7bf083c67dcb"
  },
  {
    "url": "assets/js/24.e4067ad7.js",
    "revision": "937d314e79e80929316370c1618119d7"
  },
  {
    "url": "assets/js/25.0761c14c.js",
    "revision": "03a02f5de33ef5f0c8f2cdff20417d51"
  },
  {
    "url": "assets/js/26.a872d118.js",
    "revision": "168be25c4af0fb7d7c90883eb0de13b2"
  },
  {
    "url": "assets/js/27.e65e7c3e.js",
    "revision": "1bd979015310865d54f6836f3554fc6c"
  },
  {
    "url": "assets/js/28.dc4d8e8e.js",
    "revision": "b1101a6e79c78da3b2791eb2de4e6e97"
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
    "url": "assets/js/30.a3d0b7bb.js",
    "revision": "eebb684f3c8b1165b57a2484faa6aa78"
  },
  {
    "url": "assets/js/31.c57df017.js",
    "revision": "3ee0420ffe254c91d8f67542e2b116b0"
  },
  {
    "url": "assets/js/32.0a751dfe.js",
    "revision": "e57f322e1b1c8fed24bdf0d8fa76bf04"
  },
  {
    "url": "assets/js/33.87791b09.js",
    "revision": "b68d9ddba4f6c25eda931e27a581c36f"
  },
  {
    "url": "assets/js/34.743387a9.js",
    "revision": "49225ccfa696f86a1ca4cc88b5a90c61"
  },
  {
    "url": "assets/js/35.fa6cfa3e.js",
    "revision": "2b2360d71f6916b9a36244ec0ed0e6bf"
  },
  {
    "url": "assets/js/36.3d48c250.js",
    "revision": "e94293a14e812acb5ba219c7e7ab3fe0"
  },
  {
    "url": "assets/js/37.d059bb1a.js",
    "revision": "b8060a8f03a36963f89ec7250e849704"
  },
  {
    "url": "assets/js/38.e27be235.js",
    "revision": "5e398911a1c64183d1d88134ed2d55a3"
  },
  {
    "url": "assets/js/39.de00f26a.js",
    "revision": "7290f4a29b0208ff6e60abafdd20815b"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.8e14546f.js",
    "revision": "5315b08e49f7b96953a2a02b05d76a0b"
  },
  {
    "url": "assets/js/41.23ea7f17.js",
    "revision": "5f2834c29cdd219545ee0a9885d9e87b"
  },
  {
    "url": "assets/js/42.e3a5fc1e.js",
    "revision": "de1c97437a894418031af001c1bd6051"
  },
  {
    "url": "assets/js/43.27a9c6c2.js",
    "revision": "1beb54ca4c7d2a369782e6d503fbcfec"
  },
  {
    "url": "assets/js/44.da20c937.js",
    "revision": "fdab76e7416c1d9e289a6179971c04cb"
  },
  {
    "url": "assets/js/45.3c5d25dc.js",
    "revision": "046bb1f1ee68f758531510ae18396895"
  },
  {
    "url": "assets/js/46.8af5363d.js",
    "revision": "6c6c3b825f9df671be25d5525cda1d50"
  },
  {
    "url": "assets/js/47.694a84fe.js",
    "revision": "f1e1f6ed9f7df2b97bf0f4300ac0ef8d"
  },
  {
    "url": "assets/js/48.df161664.js",
    "revision": "81871376d8fa5e89557d5c4e5364e896"
  },
  {
    "url": "assets/js/49.b70f73bc.js",
    "revision": "2ec9daf2d3aceceebfd4dc567051b8ab"
  },
  {
    "url": "assets/js/5.dd7cec00.js",
    "revision": "72113faffac23e5e6a77b6205748b3f3"
  },
  {
    "url": "assets/js/50.b3293d0b.js",
    "revision": "e96fee59348efb8d7cf8568b3d1196d1"
  },
  {
    "url": "assets/js/51.dd09251b.js",
    "revision": "c1d3052c14ac8d0d5abda4a1b6d02f7d"
  },
  {
    "url": "assets/js/52.c14270e8.js",
    "revision": "ea7709d44e3d048f587b50fd812de302"
  },
  {
    "url": "assets/js/53.da3f722e.js",
    "revision": "c8917253b0a9922fb97d0bcf59a748eb"
  },
  {
    "url": "assets/js/54.9092ee51.js",
    "revision": "071973277fced9e7698c462851faf79d"
  },
  {
    "url": "assets/js/55.55eb7aaf.js",
    "revision": "7a37c84911bdb9918406c44eb38c2b21"
  },
  {
    "url": "assets/js/56.284af842.js",
    "revision": "fe969b9024e244a9d35be4deff755a8b"
  },
  {
    "url": "assets/js/57.5fbe1376.js",
    "revision": "c084a2348be0abaea3870672e8221b1d"
  },
  {
    "url": "assets/js/58.866740a3.js",
    "revision": "6cb03f56ff864b745ac61d76ea68730e"
  },
  {
    "url": "assets/js/59.be57e406.js",
    "revision": "d870c5fa924cad123783b0f7b1b2a4c6"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.c8e83523.js",
    "revision": "03aaa529fe29e7b23f893c513c1b383b"
  },
  {
    "url": "assets/js/61.34f656e5.js",
    "revision": "9414652a0ad5ce6cbc9e4cf9415141b2"
  },
  {
    "url": "assets/js/62.e41c121c.js",
    "revision": "ade8b8d26c30a925e3e51221f980ea89"
  },
  {
    "url": "assets/js/63.3cc94346.js",
    "revision": "3ac8fc7911b365afc118ee183750263d"
  },
  {
    "url": "assets/js/64.81b10351.js",
    "revision": "c1282653bfacf786c580fb24b56f862f"
  },
  {
    "url": "assets/js/7.cb2cdf94.js",
    "revision": "550b3d89bdadaaf6a795902c1b6db041"
  },
  {
    "url": "assets/js/8.14d1b112.js",
    "revision": "09ef4e7322ed3f12be65aba6390a3447"
  },
  {
    "url": "assets/js/9.ba94e4e7.js",
    "revision": "6555bc9c795f8633f30244d5d4d03ea8"
  },
  {
    "url": "assets/js/app.7e3ccc0c.js",
    "revision": "a7170bb5b5edfb0efd3054ebe73cd6f5"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "7fbb4593c8794fcd58bb2e2c554146a0"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "f6f590fecf42f68580a3989af33e1820"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "18ada4b139a548a92265c7c8a94bcb6c"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "da18de1c6304065f5d4c8647b8039451"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "c65efdd4449bcf02091a785043969a99"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "3583295eb661f3023791770e6af93b8c"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "467bb8f615aaa3156cd4f78c2a2e1a53"
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
    "revision": "ac67d467f45ebf9a4a720cac526a1e33"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "8ab9ea7631e0dc6b783451d4293d8b3e"
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
    "revision": "09b65389c862a7311b138c35af3fc6e7"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "4badff7bf188394febee890d7c729df2"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "2957dac1a5154cac4a6e2335f12efeed"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "e9658465eee22a6c335b93cb5e621702"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "3da6e13c6a627bf5e9542bd924b64d67"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "2f7ba986458c100b33190f22b66e0fff"
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
    "revision": "d6b0e5e406262422d1f8232242dffb29"
  },
  {
    "url": "guide/index.html",
    "revision": "c6a5df090c4cfcd30b9d971fd214654c"
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
    "revision": "07b6b1bb09051e10cf7b166f0f5bf0b3"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "4080155ff0022f4fb3b3b634f849a47d"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "31ab959bcb2269991668652ccfcc41a6"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "4f1702700c3f2253e579a96b7f35ce6f"
  },
  {
    "url": "more/clean/index.html",
    "revision": "dda792d6e2b10a3a09e7023f8474463a"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "eda304cdc91061bf70f3c7214ba0b00d"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "9c789c4eec34cc5ed7c8b389b683281e"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "a3096ebaa6c05a97538c955e4da528ff"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "ada4089da858d8e6a326474a5aeba8a7"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "3373295be4e5fb32fb68b6824d7114ff"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "186b6aa4385d63e02d8625595681d222"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "13fe1094a68481e7b4a5c62b579532a5"
  },
  {
    "url": "more/interview/index.html",
    "revision": "0a9d7524559ffdcd74fe9703b79e4558"
  },
  {
    "url": "os/centos/index.html",
    "revision": "7da4fb210469ae0b82b6cc263c51d277"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "01281bc00dc6c1238a7f6c790f274eff"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "235fcf9b7b3ca3822c19a5d6bc62ba5d"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "fae9a7eafa72fd5d6f34e3f36fbb80b6"
  },
  {
    "url": "os/linux/index.html",
    "revision": "2202fb351dd8622f20a086820c8be9bb"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "3905f7fb31d2dbd6d78758043d864c24"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "346524544d2558dcaeb20bfc051920be"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "7766db1a3f9024800f03fe5d339d0837"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "6d668a8f5e2ff826b5ebac855ce07dfd"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "3b8e2e619c4600c929efbca39a3df964"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "2fbe6c1dbe2cc13b72289ba54decb096"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "3ae035401109a96e5020970d19d6cdb4"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "9d0a54fe3847dcb29fd6b88277c4ec1e"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "379a0d7dc9718247783585116a12730d"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "2b3eceb165fdc1c4ad6d431cb81cda73"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "58afa2e4e8edba334cbe8fb501740e61"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "dd7ce493fc55b238b344b3aeec9cc9f1"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "78c07cf8b3bf443802807793b6e26392"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "166a6ba6ed570d535cdc042821c0a572"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "7aa8c3f8bab7f4babebca67332ecaced"
  },
  {
    "url": "tools/git/index.html",
    "revision": "129bcca43e35cb580977a2e3a8708da1"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "793ad3ed650bab49f93a42102bfda7e4"
  },
  {
    "url": "tools/github/index.html",
    "revision": "050bfaad36a8e3f61566e5ef920c29d2"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "8ed192e1a17e20bf0a7a8d3bcdba99e5"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "fd2e09fd1e4ff645017ac64dfbb8310c"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "4656810b9ce0b209f84441119c53ea4e"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "4a30ceaa74f4a84fbc9ad239f4f57031"
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
