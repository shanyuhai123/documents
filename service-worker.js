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
    "revision": "7cf2cea63ab1a838c2528703c397806b"
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
    "url": "assets/js/10.8f2497b2.js",
    "revision": "5ef0ef534f1ce11601dc68d4473a7e85"
  },
  {
    "url": "assets/js/11.0d5cfeb5.js",
    "revision": "99706ba300156de826f9318aaf77fe9d"
  },
  {
    "url": "assets/js/12.6d961c0b.js",
    "revision": "6db3f67dedb15e91049a2addcce221f1"
  },
  {
    "url": "assets/js/13.5c4d8113.js",
    "revision": "bf2fd5189564d607eb4f9403df752d09"
  },
  {
    "url": "assets/js/14.11c123e0.js",
    "revision": "f05b0c66f3eb86eeb376187ad4f5e3b1"
  },
  {
    "url": "assets/js/15.07c42fa2.js",
    "revision": "4ae62d905cfb88be5ebda9c3c2158a0b"
  },
  {
    "url": "assets/js/16.ae7e7870.js",
    "revision": "63b5bbdbfd51123e6b1c458713ba27a6"
  },
  {
    "url": "assets/js/17.e6787f7b.js",
    "revision": "635a63f232ce126737042b17de426f07"
  },
  {
    "url": "assets/js/18.f2f2fb97.js",
    "revision": "1f4fc13006011d1f12e2f5a40d756ede"
  },
  {
    "url": "assets/js/19.39e34587.js",
    "revision": "bd577bcd471a60f5f2200b48efcfe96e"
  },
  {
    "url": "assets/js/20.5caaf844.js",
    "revision": "70b3bee2ff9ade8e8960a293235b373b"
  },
  {
    "url": "assets/js/21.2f85f80a.js",
    "revision": "c8e32a7f604218cf536f2d0bab693274"
  },
  {
    "url": "assets/js/22.1262a915.js",
    "revision": "2517f6c10fd04da5cb6e4d7259de4e71"
  },
  {
    "url": "assets/js/23.9ec663b9.js",
    "revision": "ea960c559f29f35516c6053ac0d0b6d9"
  },
  {
    "url": "assets/js/24.84b8c8cc.js",
    "revision": "fc53321450d89f6da0c605fdcc0bae07"
  },
  {
    "url": "assets/js/25.ec726e1f.js",
    "revision": "9072047bf0016ef0aade65b4f53fff49"
  },
  {
    "url": "assets/js/26.cbcc8e6f.js",
    "revision": "d68593f693b5e70c339f00e838eb3830"
  },
  {
    "url": "assets/js/27.a89a99e4.js",
    "revision": "e90dbe8fbb940ef091fafb422b686087"
  },
  {
    "url": "assets/js/28.670ac128.js",
    "revision": "03d26d01ef2fa0ada1b8d178c85a8828"
  },
  {
    "url": "assets/js/29.8ee040a7.js",
    "revision": "bff81a9a8923d12de602e9eb014ad94f"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.888d3c5e.js",
    "revision": "dafe92db1ab9372c85443732a75c1cf5"
  },
  {
    "url": "assets/js/31.36f4f1ee.js",
    "revision": "6e0528b3f1b9cf869a0faee40aea6711"
  },
  {
    "url": "assets/js/32.6e3eaeb6.js",
    "revision": "74a8e11162379e0df0599658f41a36f2"
  },
  {
    "url": "assets/js/33.d120c46a.js",
    "revision": "417f0810b995721c0a08405b2d1bc746"
  },
  {
    "url": "assets/js/34.d660675f.js",
    "revision": "e3a623f24a531b4a76f741c179654174"
  },
  {
    "url": "assets/js/35.a69094d2.js",
    "revision": "71f686d81a89263b0c26111ffcfce6ff"
  },
  {
    "url": "assets/js/36.f8456aa0.js",
    "revision": "343c5b2eea81145fcaaa653db03b7af5"
  },
  {
    "url": "assets/js/37.7422e039.js",
    "revision": "40ce0ab100f32faf3901babcd8352987"
  },
  {
    "url": "assets/js/38.3275f65e.js",
    "revision": "02b1c967c7ea4d98e531ea24fe488143"
  },
  {
    "url": "assets/js/39.8e5e4d59.js",
    "revision": "e34824739dbe6390753baedf84fae8bd"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.9f6a1d5d.js",
    "revision": "81d598582cc34218abd3ea4200d9672a"
  },
  {
    "url": "assets/js/41.abebb6e6.js",
    "revision": "dbab6c07593a14daf45db247c51b3059"
  },
  {
    "url": "assets/js/42.a8a91b1c.js",
    "revision": "2bee421037a55f2064ebbdf743cb91bc"
  },
  {
    "url": "assets/js/43.c7659569.js",
    "revision": "7422d3ffaf527cd4e2c858d4c7b72ca1"
  },
  {
    "url": "assets/js/44.508fe339.js",
    "revision": "2b6b0389fb0402901dacfdc1fb0b7d3b"
  },
  {
    "url": "assets/js/45.e37d2ead.js",
    "revision": "b9e953d2c652946434d52bd0324eb335"
  },
  {
    "url": "assets/js/46.b71bb8f7.js",
    "revision": "3de3dd5409c874780f006224d9ebce39"
  },
  {
    "url": "assets/js/47.90743b55.js",
    "revision": "4be78c63b2a03bad148b10b77cd8d1cc"
  },
  {
    "url": "assets/js/48.95a6f678.js",
    "revision": "9dba7cbf4377073e591bf3a17ee6e009"
  },
  {
    "url": "assets/js/49.cb2509b3.js",
    "revision": "966b9e26a94c63cd172c8934ff490cd9"
  },
  {
    "url": "assets/js/5.c33cb045.js",
    "revision": "6c4724bffe513ebc6ba5612d54ac7ef8"
  },
  {
    "url": "assets/js/50.bf1ca74c.js",
    "revision": "ae0220688d1c57c697894669183b9bb7"
  },
  {
    "url": "assets/js/51.08d1d2da.js",
    "revision": "90d9a010a8b246ad439b55b2c6d95913"
  },
  {
    "url": "assets/js/52.31191db3.js",
    "revision": "662fba86c4e2d109001642bd660edca1"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.d2016780.js",
    "revision": "f867a4a04fdab72a9c7529c44e992235"
  },
  {
    "url": "assets/js/8.b190ca90.js",
    "revision": "e91535f01e921d10e2e0d9d089c8c18b"
  },
  {
    "url": "assets/js/9.fed9e06c.js",
    "revision": "949de3151906015d2f76dc24ddf8cdf8"
  },
  {
    "url": "assets/js/app.f323e148.js",
    "revision": "bb544d7ccffb7ce2762382f519202ccd"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "73cd40ec4d9c8f761acdda8e190ef5f2"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4bd744480bcb8a40ec5c85af6cc15fa4"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "836896494ab5ea058bf4a6ec70998dd2"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "e4b84b3d894613e07dea18bd0d40af9f"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "a7bd672b355225f58e75a0df64fa6f6d"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "230075148c77c00c6e41c024ee562089"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "2e4fe871286d94a6dca8751dcec78e25"
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
    "revision": "484a3be634e012430a958429e2ee6129"
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
    "revision": "18b680fa6c6dd164116491890c0c7501"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "92c972d5f433c39cb1b624835b9299b6"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "98c0cde509c443ff21feda0b6d441a06"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "c7c2acf360e2c4d74936805571409b4a"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "80ee14f07bcb7fe57208177a4af01486"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "afc1724ee1ddad6725843f734a774a51"
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
    "revision": "1c93eced313c902c46dcdcc8ed53cb57"
  },
  {
    "url": "guide/index.html",
    "revision": "07ad10e9e503fee501fac026b0d6ae13"
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
    "revision": "ea6814e9f9d557dc83748d66ac231c68"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "997f16e5c5792c2bcaffd5830e6ce813"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "32ee6fb923751a1171bf014beb8ea960"
  },
  {
    "url": "more/clean/index.html",
    "revision": "ef2dafc045ea15e0705da487c167086e"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "08f7ed583d29b33e076450b8a763ccaa"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "0fbbb1d7f3b002929c63d462a0fce1dd"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "74ec6b43a7c6857d50c0dcd92a0307dc"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "fcf413c8722b9eba07bbc640d2d8f4e9"
  },
  {
    "url": "more/interview/index.html",
    "revision": "cb91f2451945809fd2c46fb665922597"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "34f5416ef5efd7b036c3d49f0ce93d4d"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "25c95006c4dfae994133450ae6d2e520"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "987f02e16ddc10b571508c44a13e5e6a"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "958849f53997c55d63862094b7b5f6c5"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "00145e76ab577dcace759af1a651f5bf"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "9e24faeefe9e893d711f27eae576e6c1"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "18dc4435b2482f0b36889dce1f307586"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "16c828ab7bdcc72349ac62c27a3ad983"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "a89300b2cc16e73cc571cc0886a40ace"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "b01504f618b57fc3669ac99e3ea7577f"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "c61c28917a2ad73aca35b5b97f8e4d79"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "bcec0c9a25b6ec3b070e09600c543060"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "101f149dc270e1df2d476be03c84f134"
  },
  {
    "url": "os/windows/index.html",
    "revision": "21c0544198fdaa51602240281559aadc"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "22daf7085286a714d2d733ba45332a9c"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "cf410f8ec5e9c641f0591adfc41336f1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "866c9428bfd6e7654bc88c69d0f9ada3"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "5aee5f2062299297645e9726e5821db8"
  },
  {
    "url": "tools/github/index.html",
    "revision": "0314a49263b00b3acd138c9a9c3b80ba"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "4d95a0bd13679af5ff5d47eec5fe444e"
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
