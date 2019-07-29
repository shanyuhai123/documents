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
    "revision": "81f1471941c6415aaef549a4dbe7e694"
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
    "url": "assets/js/10.a305f61a.js",
    "revision": "33246c0cec50c1a0e7a16a826c1bce25"
  },
  {
    "url": "assets/js/11.4033f51f.js",
    "revision": "4af8ae3a5156d9a276247676adf4cbea"
  },
  {
    "url": "assets/js/12.0bd80c3b.js",
    "revision": "d0ca89406ce25459e906cc78c485d214"
  },
  {
    "url": "assets/js/13.bd6de2b9.js",
    "revision": "abf8b6c94c405604e4e9fddd7c17495d"
  },
  {
    "url": "assets/js/14.0003fee3.js",
    "revision": "15fc7cc8b2d180f2b70014e45b7e4c86"
  },
  {
    "url": "assets/js/15.e85532b5.js",
    "revision": "553ae07834599e6edecbde457e7b6a6b"
  },
  {
    "url": "assets/js/16.1023c05d.js",
    "revision": "fd385414d1fa6abb5a144b2f5ce66f03"
  },
  {
    "url": "assets/js/17.40c85e5a.js",
    "revision": "03d0848fd8d432f48a5e0a970868133c"
  },
  {
    "url": "assets/js/18.9048ada6.js",
    "revision": "c3f0744a0c7b68a17b4dc4386905f19b"
  },
  {
    "url": "assets/js/19.b6501da0.js",
    "revision": "6b1afef347eb24509f839e7597714885"
  },
  {
    "url": "assets/js/20.a7b05bb6.js",
    "revision": "c73d6f645972980482ee897a70a2b76a"
  },
  {
    "url": "assets/js/21.16ade51b.js",
    "revision": "d54c070fcb9d6dbdd7937b81f92d1bf8"
  },
  {
    "url": "assets/js/22.b7ecbc01.js",
    "revision": "9ffb734524b1a4054bdc337849509282"
  },
  {
    "url": "assets/js/23.fa2cd30b.js",
    "revision": "dfd5e0327d4a1b19c63bf7a7511fc0e4"
  },
  {
    "url": "assets/js/24.273762bf.js",
    "revision": "178e3cd0dfa49460af2e3a815af8477e"
  },
  {
    "url": "assets/js/25.5e610883.js",
    "revision": "fd140eebc926cc279a534e1b7b8c7ae2"
  },
  {
    "url": "assets/js/26.13a03d56.js",
    "revision": "ee1df9886784d1f5005b0f47898e0923"
  },
  {
    "url": "assets/js/27.bab7dc89.js",
    "revision": "65640be1bfce89cf2cf33fe5a29244c8"
  },
  {
    "url": "assets/js/28.1bf424ed.js",
    "revision": "db16235ab28276871851cb10e3b93d0a"
  },
  {
    "url": "assets/js/29.2f894331.js",
    "revision": "f76f3f7498fb7fa12cb071f62fd581ad"
  },
  {
    "url": "assets/js/3.1b5ab947.js",
    "revision": "de7ff5e9ef9618b11bde51d6ee07d52f"
  },
  {
    "url": "assets/js/30.dbeed93e.js",
    "revision": "cbdafdb8aa237e24a8f2b88f20f780cf"
  },
  {
    "url": "assets/js/31.6fe08dee.js",
    "revision": "cb9318ee354c4a09650169cf86dd234e"
  },
  {
    "url": "assets/js/32.e4a3591b.js",
    "revision": "83526fbc8d0207eb68c9a2fbed4499e0"
  },
  {
    "url": "assets/js/33.4d40a5dc.js",
    "revision": "41b7dd784a12f4a6b4c767b16e2616ce"
  },
  {
    "url": "assets/js/34.541a82e6.js",
    "revision": "3c66e4f27df50e06fa9291d683a74bf1"
  },
  {
    "url": "assets/js/35.9aaf227f.js",
    "revision": "d399b19b51dd941bc0bff9e9f8b043e3"
  },
  {
    "url": "assets/js/36.d159e536.js",
    "revision": "c6f3adda62e87bb3f19e970ef280e4d7"
  },
  {
    "url": "assets/js/37.9fa700f0.js",
    "revision": "f117710ce39b68faeaccc3e06142cd3e"
  },
  {
    "url": "assets/js/38.51e4eb91.js",
    "revision": "3c2578533673f4f721db3cd0d144e794"
  },
  {
    "url": "assets/js/39.4ba1b7cc.js",
    "revision": "ddcbddf8054fac6a4d60e9f9bce354f8"
  },
  {
    "url": "assets/js/4.f42ac96d.js",
    "revision": "d48effdc13fe8b308e31e0d83f6afbf4"
  },
  {
    "url": "assets/js/40.60572bc4.js",
    "revision": "01b17aa456c2b2880fa40800c75b355a"
  },
  {
    "url": "assets/js/41.98cb7b52.js",
    "revision": "21d681890b4bf6a49646fb352594a470"
  },
  {
    "url": "assets/js/42.9a449036.js",
    "revision": "acb0935abdd73ffbf3ad5388f3cafdb2"
  },
  {
    "url": "assets/js/43.7a9623c6.js",
    "revision": "34290a1601e2b78df2ffdcebc409ce18"
  },
  {
    "url": "assets/js/44.c0b76003.js",
    "revision": "57e0b417649a5e6f0fd64fcc4d22da7c"
  },
  {
    "url": "assets/js/45.b10fadc2.js",
    "revision": "475705b7cb9229e7af75b891e73a7898"
  },
  {
    "url": "assets/js/46.aad84709.js",
    "revision": "dd1072b02da95daf97fa38e47ac396d2"
  },
  {
    "url": "assets/js/47.700edde0.js",
    "revision": "e229feff979433cc3e431eb4b1261ba0"
  },
  {
    "url": "assets/js/48.2654f8b2.js",
    "revision": "75ff1b2554cef3ec52acf21672f176a0"
  },
  {
    "url": "assets/js/49.cb20cfad.js",
    "revision": "c8dae9de1c296be78d6031d15a8f8cf2"
  },
  {
    "url": "assets/js/5.6947721d.js",
    "revision": "d900276312b97e50c3a09e4615c95e89"
  },
  {
    "url": "assets/js/50.2c317709.js",
    "revision": "f11b5e2bfafc843103d6d78c2d7f7313"
  },
  {
    "url": "assets/js/51.6ca1914a.js",
    "revision": "3d7c122c1654e7b7736221e23ece29a3"
  },
  {
    "url": "assets/js/52.96ddf628.js",
    "revision": "a5077de0cb09966a3c0c3bc13a4d088a"
  },
  {
    "url": "assets/js/53.1f6b4743.js",
    "revision": "f05873cdf86e96789b38e2bad7105b2f"
  },
  {
    "url": "assets/js/54.63117d71.js",
    "revision": "69cc2e1f407cbcbd8bfdb7350b4b84c6"
  },
  {
    "url": "assets/js/55.bda0abf7.js",
    "revision": "c602888021ac6e35d0c0e5cf0c56aeaf"
  },
  {
    "url": "assets/js/56.06df5c9c.js",
    "revision": "9ae7528d8e306aaf5734ae56526eed0b"
  },
  {
    "url": "assets/js/57.91ea684b.js",
    "revision": "d111a55461962e1ecc3bab81dd0f7985"
  },
  {
    "url": "assets/js/58.0960f8e2.js",
    "revision": "b1ec1c95b2b5c49e53f799f60930ed4b"
  },
  {
    "url": "assets/js/59.39064b25.js",
    "revision": "528707fb79d26254b824d7995fa739f8"
  },
  {
    "url": "assets/js/6.6006b8ec.js",
    "revision": "3a195a9d2fffc308acfe8716b7dcab98"
  },
  {
    "url": "assets/js/7.a5ae899b.js",
    "revision": "9e289447f15ecd7516aa3ffd658f8ce7"
  },
  {
    "url": "assets/js/8.437ceffb.js",
    "revision": "0576789e15b31c0e96aa2ebdeb6a7764"
  },
  {
    "url": "assets/js/9.91e6c05e.js",
    "revision": "d29ccfa77838c451c07b2f84d6672edd"
  },
  {
    "url": "assets/js/app.84e45793.js",
    "revision": "01c11d27d19b1c1ed51610cb84f98ee1"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "1a45a3b943386f53b4d9157a407bb2d3"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "cb83370ed83e58a69106cbe8f60b60a2"
  },
  {
    "url": "backend/nginx/01-install-nginx.html",
    "revision": "8710950c1407acd1d23a802b97c5efe3"
  },
  {
    "url": "backend/nginx/02-explain-the-main-configuration-file-of-nginx.html",
    "revision": "b830c7b57a904debf024dbbad430c4bd"
  },
  {
    "url": "backend/nginx/03-nginx-basic-operation.html",
    "revision": "2dd23c816d28ca5f637359a13a786a86"
  },
  {
    "url": "backend/nginx/04-ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "7060a3df30e43dbfa373ad4a888597c0"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "420cad0160166b141af4f97fe9dbc864"
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
    "revision": "e119935d71bfd4b6253dde2a6a5a5bde"
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
    "revision": "7c4369d853443a73d9490a1b31d339a5"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "9ff99a3f39d317cc40dc2e649c81510b"
  },
  {
    "url": "frontend/nodejs/01-install-nodejs.html",
    "revision": "e51a56b6009575d69f5e6148f8bcec0b"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "afb557289345203ebb9e26543b0b69bc"
  },
  {
    "url": "frontend/webpack/01-loader.html",
    "revision": "8d71f70a3a1e6a0f62822ce16a14a177"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "ed502e728a899f6120a8b1a5e587f7a7"
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
    "revision": "de01a009d7b3048e6d98d50aea32ff73"
  },
  {
    "url": "guide/index.html",
    "revision": "7bddb6b0d22a3d37dc58e5a2d0baddca"
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
    "revision": "7417f4e6741fca15b62cee980c085e40"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "568d62812b12e882f2b91fd04844e420"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "138585e1ae7125d47071a24f7114e805"
  },
  {
    "url": "more/clean/index.html",
    "revision": "d7c4ab477c3e0847c1a072674cac2495"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "560b9a7b2821141521ca80ff546f0f38"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "c1b5980fb770d9c77914e271eb12c968"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "e1dbbf06fc5711bf2d052aa6a7c7a507"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "b40e38b75f861bd1ba1ff05dd9e2d0b1"
  },
  {
    "url": "more/interview/01-add-large-numbers.html",
    "revision": "6e4806f63f3688221b28592906e8e9c6"
  },
  {
    "url": "more/interview/02-seo-optimization.html",
    "revision": "146600cda487b3a501f036fb981bc071"
  },
  {
    "url": "more/interview/03-parse-url-parameter.html",
    "revision": "79c6f87cf2e52fb78ff010cd902b4d27"
  },
  {
    "url": "more/interview/index.html",
    "revision": "1c41e633c7661f06031a4507b62c73a8"
  },
  {
    "url": "os/manjaro/01-how-to-install-manjaro-on-virtualbox.html",
    "revision": "08762027ca169048e04e5155cdae5cc2"
  },
  {
    "url": "os/manjaro/02-manjaro-configuration.html",
    "revision": "b7dcb247985b3b694f3bdd3055df4a0b"
  },
  {
    "url": "os/manjaro/03-solve-problems-with-manjaro.html",
    "revision": "6dfe6ef254321c9b374fca066aee1f2d"
  },
  {
    "url": "os/manjaro/04-most-used-softwares.html",
    "revision": "3bcfea6c2d212ffcd046366c87f4e3ae"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "63abd19fbd0769e97fe978bc33cbaddf"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "4daec6bd67acc970165526d19f411418"
  },
  {
    "url": "os/ubuntu/clone-project-to-server.html",
    "revision": "5f7a9a88a36330bfe5d11d0816246a21"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "bae1da9bb4ae4784b3d4597b459af4f2"
  },
  {
    "url": "os/ubuntu/generate-ssh-key.html",
    "revision": "12083175d82b6c7bf155a71920c3fc9e"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "b34ae03e7745ab13951d5a490a86a2fe"
  },
  {
    "url": "os/ubuntu/login-with-rsa-key.html",
    "revision": "e4ab5c49200d14f9e1b91c7cd01e4221"
  },
  {
    "url": "os/ubuntu/systemd-introduction.html",
    "revision": "bb1875d4a9846cdd5bce3843e088730d"
  },
  {
    "url": "os/ubuntu/upload-file-to-server.html",
    "revision": "6c914ae074093453aefe6bc55f40cfb8"
  },
  {
    "url": "os/windows/index.html",
    "revision": "38f1222071d258c7ebc34bb63cecd2af"
  },
  {
    "url": "tools/git/01-git-concept.html",
    "revision": "6f56292979ccc32a2d8ab2e7ef94932b"
  },
  {
    "url": "tools/git/02-daily-git.html",
    "revision": "0166516ec391ca62daa56c6704508e73"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "4579d85c5023d4bc93cd7d2e13c36a00"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2b8700e975987cec6e1adf37df917784"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "a8304f0a246753d7295591548d71a53f"
  },
  {
    "url": "tools/github/index.html",
    "revision": "66dfad928f4a8877b6c1a2a44888572b"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "1d0b8fa1f280f2131f6f66d65c794458"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "29e979edd0dd5ac5ee88c5c2f2c06eff"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "c00441646c17ed577baa926c737689d1"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "37f0619a8db47c064b3a6b67d5f0d264"
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
