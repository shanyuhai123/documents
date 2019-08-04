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
    "revision": "15b5968381e1b4492374ce3464337137"
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
    "url": "assets/js/26.0119e34c.js",
    "revision": "cee7d320a2f91f879ce69f30f05332bc"
  },
  {
    "url": "assets/js/27.60f6b392.js",
    "revision": "6a3f4d2a18e737ccbade56379bfe0480"
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
    "url": "assets/js/36.6f05fa92.js",
    "revision": "e9f75b3db6cd97fd1ed031311d7f5cb2"
  },
  {
    "url": "assets/js/37.36af9505.js",
    "revision": "f541899655f3fa09f214ce4dfefa4112"
  },
  {
    "url": "assets/js/38.2e3ebcb5.js",
    "revision": "fcedbb8f7caee57aa5655b0dad960515"
  },
  {
    "url": "assets/js/39.ce0aeece.js",
    "revision": "5ca40e7c3d9010c30ea900008e78ad69"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.5db5b76f.js",
    "revision": "fd9c427a1f9b6c96b0bc0967a29e5f68"
  },
  {
    "url": "assets/js/41.fb2c1517.js",
    "revision": "1cce5f34f220e6f44d3f2e1068d49151"
  },
  {
    "url": "assets/js/42.f942402b.js",
    "revision": "3a62f46d58230dc498dfef28cb6f067f"
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
    "url": "assets/js/52.35c08bf7.js",
    "revision": "c59900fb8f0fe37371c9eea99fe67fa7"
  },
  {
    "url": "assets/js/53.d6ac2297.js",
    "revision": "ee9608e359db5b1fb7e8c58c07684aeb"
  },
  {
    "url": "assets/js/54.1f27ae1d.js",
    "revision": "b06fe00a9f5f0a200ca6b4b179be5548"
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
    "url": "assets/js/57.fdad6b15.js",
    "revision": "e42fea0ec8916354e6b9e484f6048b7a"
  },
  {
    "url": "assets/js/58.66216c48.js",
    "revision": "6aab08c5310955c16c53690069f2f693"
  },
  {
    "url": "assets/js/59.20d0e735.js",
    "revision": "4d91dfed35a0dbcdfad83e5dab697225"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.17be80ac.js",
    "revision": "b681821c559eb73fa9f693948dc045ed"
  },
  {
    "url": "assets/js/61.6c698990.js",
    "revision": "a67fb435998d36acf7a524d2b4d1defb"
  },
  {
    "url": "assets/js/62.5e8facca.js",
    "revision": "67e5139d0fe63d836eca25b561645f69"
  },
  {
    "url": "assets/js/63.2eba8a4d.js",
    "revision": "2f303283676c95d122e2d420e7ded321"
  },
  {
    "url": "assets/js/64.81b10351.js",
    "revision": "c1282653bfacf786c580fb24b56f862f"
  },
  {
    "url": "assets/js/7.38423a22.js",
    "revision": "986a33a4b7c8e0a2e5d6c52e9f6dd941"
  },
  {
    "url": "assets/js/8.2fa5d4ce.js",
    "revision": "1eed5e0aac80e53145fb600ef35bf54d"
  },
  {
    "url": "assets/js/9.ba94e4e7.js",
    "revision": "6555bc9c795f8633f30244d5d4d03ea8"
  },
  {
    "url": "assets/js/app.f557d6f5.js",
    "revision": "64800a93d69faff4537a006c2005a700"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "380742bc5b5986e3ea46bd0831f06ede"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "ddd02edca2f862e8b3178e47b1755f53"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "a2d045a083d0dab0d741beb96fe48c1f"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "32c973dd35d83007d89fbe01d1e6e30a"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "c3e895abd4f9f7c85ec0394cda24e3da"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "92105d0a6f24a70e55d223c1d2347b1e"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "9eb4e581ab647e1c7b64fbfbbef338c0"
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
    "revision": "198ae5f43470cfd6436d4a2327a8ecae"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "1e44fcdbe76d4b6c66fcb064bf83f6c5"
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
    "revision": "4a04f786ea06f855cfc0de496e9bd792"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "033d3a5c72ecf7511fbcd591fe6298f3"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "bc44eb6d017b2db256750218c05163da"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "803a7fadab0d1887f4c1e0aadcb264d3"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "c698bcca49c42a84071daaaedf206414"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "81e3af0a12a67cb052864d327096f0a3"
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
    "revision": "1614e306af5e63d90c2fb2b3a5268eee"
  },
  {
    "url": "guide/index.html",
    "revision": "069ba49b434a565bfae518d7612a2291"
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
    "revision": "88d88a11ca3d8eb89d134e41f23e87f7"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "2c3e86267d2818ee466267bb319436c8"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "a571cc7a6ad7d450224c0b381b4de0c9"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "63bd416ae94a01f6956cae3dcdc3ec22"
  },
  {
    "url": "more/clean/index.html",
    "revision": "1c761e8ad64e46009dfa39e61a50edcc"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "8777e2999aeeb3ce702f8d666db6d17a"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "abc151c67fedbe59bdf6db9e14fca03e"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "ee7a188b598c4610da762c3a42aacd99"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "cd42911a8eb687e3577020fd08107afc"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "7ceb11615d181c21c5255f002b87a240"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "d496f5ec161a49a750aaafa8a5488097"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "0c10f829383db0ba2b8c8e7869ea08ab"
  },
  {
    "url": "more/interview/index.html",
    "revision": "0f17e2697568fae846af12bd24fa9f59"
  },
  {
    "url": "os/centos/index.html",
    "revision": "1a206d11a122740945ec67b9e1f39031"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "7556193443335b55dbe53d9a10686ab9"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "f9dac4c71e04a8ee84246a13eed0ced8"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "4c564a6fcf29060c1646236f86ce116c"
  },
  {
    "url": "os/linux/index.html",
    "revision": "1fa49a0ee16a3cd8fc307e61874ffba4"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "48db80374173a5c9fe84e2a959a73991"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "a73fd0e044a30808c1556634c6401cc6"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "2fb617a14b5e865c7e71cd006da18ef5"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "49e67f181d9a59acdbde47214de97705"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "f86865a35feafc202f3f9faabf59b1bd"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "b060da98634efd3a9ac96ae7e7b263c4"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "2252c342ed1dd5952dffcf5a9b195389"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "1424a4ef4b3518dd129b11ae667f968b"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "091bb322bbf83e8f9cc7e0a6aa999089"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "d4a7a8a17898d87c69941990c9b165e4"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "3538847c690193cea814a291f4b827cb"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "7696bdee316785426732ea31bf3b05f7"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "7d7bbcc47bfc9d6876bfa1e129d3a914"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "eb92175e38454cdefcb155186fd280a3"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "ac7acd60e94f267974e50ee063335f8a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a1285f3718d6f1ccb79afd505e283548"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "de125b1ba37595108fed8a6d4f8d93e4"
  },
  {
    "url": "tools/github/index.html",
    "revision": "274260916ec024272dbd8775e47369d2"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "f1ee751369e6fd6fb2822aa382be7b80"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "f54145f06fa1c723503fa85b56a6e7e5"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "1fe2bb78466fc5040f67abb8d672b542"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "19dd31b67f10b240562d4534af58ece5"
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
