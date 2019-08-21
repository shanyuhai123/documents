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
    "revision": "6196bf29b2112005b87e853e4389343a"
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
    "url": "assets/js/11.1eb7709a.js",
    "revision": "b73b9880de603732c1687deca5d47d79"
  },
  {
    "url": "assets/js/12.3c72be4e.js",
    "revision": "928917f67e5212745a68225d11b972f7"
  },
  {
    "url": "assets/js/13.4512f3f4.js",
    "revision": "dd8f9c2b6daacae877a92522d68bd6ca"
  },
  {
    "url": "assets/js/14.7aad54e9.js",
    "revision": "6a5ea3a44b29f5ec2cf3abfc97b39a79"
  },
  {
    "url": "assets/js/15.d33ba233.js",
    "revision": "03a65fc791af073c1ea8dcd62c889b7a"
  },
  {
    "url": "assets/js/16.fd421be5.js",
    "revision": "f18316a5b227ac18b60abc7ebdb0b343"
  },
  {
    "url": "assets/js/17.9f9469be.js",
    "revision": "2857b7c78d1de4d2fc56a3c2d4286eb6"
  },
  {
    "url": "assets/js/18.fa7a68cc.js",
    "revision": "9b1ac8ed84e32839af23014e992cf414"
  },
  {
    "url": "assets/js/19.1a5b3ef3.js",
    "revision": "92a8f23aa03938f6a4909d85f8d07c63"
  },
  {
    "url": "assets/js/20.82e11085.js",
    "revision": "300ab37e15a1e18d6047e258a5f90348"
  },
  {
    "url": "assets/js/21.cde98c6c.js",
    "revision": "f8053225f01836aeb32cd7a5a2d3faae"
  },
  {
    "url": "assets/js/22.7e48c5c6.js",
    "revision": "050e37ac9c24a1a6cf7f9b116fbac5f6"
  },
  {
    "url": "assets/js/23.54f6089d.js",
    "revision": "e6f696a0834c558fb8b280f0609dead3"
  },
  {
    "url": "assets/js/24.060be046.js",
    "revision": "34b5eb425721426b6fb81fca6c7fa09b"
  },
  {
    "url": "assets/js/25.877b1af6.js",
    "revision": "5655c023e6b710f2ef04d3f5860abd22"
  },
  {
    "url": "assets/js/26.49b38927.js",
    "revision": "ad62b7167d510fca6f2ef57356dc8634"
  },
  {
    "url": "assets/js/27.24cf0640.js",
    "revision": "5f90929bf325b14eafc0154224986095"
  },
  {
    "url": "assets/js/28.5c6cbe78.js",
    "revision": "77c71d5443cfff16d8a7a611081f990d"
  },
  {
    "url": "assets/js/29.2ae016a5.js",
    "revision": "955010333f0ba4fb330d955b9917f0f7"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.e442868b.js",
    "revision": "8d4a6823c8929203a23f83bd1ead10cd"
  },
  {
    "url": "assets/js/31.a3334168.js",
    "revision": "cdf4ee8645c69c435546373df9c09b7b"
  },
  {
    "url": "assets/js/32.6408414c.js",
    "revision": "3041acd422d63e4cc0c0c90c64a37e88"
  },
  {
    "url": "assets/js/33.05d84a2c.js",
    "revision": "d9856a2cde984279d2024b89899fd018"
  },
  {
    "url": "assets/js/34.77e71f3f.js",
    "revision": "12b25c649bf8c8b98aae5ea4f11a9591"
  },
  {
    "url": "assets/js/35.851c0c93.js",
    "revision": "295b5a890f1fefe59d4815bf308785b9"
  },
  {
    "url": "assets/js/36.9d700df6.js",
    "revision": "fdef647e0b86daae12241cf084e70412"
  },
  {
    "url": "assets/js/37.04736727.js",
    "revision": "fd94a0cacaf41f323cfda094b42dfcd3"
  },
  {
    "url": "assets/js/38.5c5a34d7.js",
    "revision": "9d5447bbf924f18babe391d7bf8854b5"
  },
  {
    "url": "assets/js/39.ef157f3a.js",
    "revision": "f8a72535f95e724554a6424a2710f367"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.88946939.js",
    "revision": "80c92db247825f230806f61af1995fad"
  },
  {
    "url": "assets/js/41.aab0b47d.js",
    "revision": "a985386f3739033011b6fb1e421d3fa6"
  },
  {
    "url": "assets/js/42.c26f9ef5.js",
    "revision": "38374b4fbe94d6a5a8cf2455333d4cc8"
  },
  {
    "url": "assets/js/43.0b651457.js",
    "revision": "06fcb1514fb66ce74176dcd9bb8754a7"
  },
  {
    "url": "assets/js/44.6b5dcb9f.js",
    "revision": "176fb61e5c5ff44bdc72cb5737598844"
  },
  {
    "url": "assets/js/45.20e7f298.js",
    "revision": "b05f114f6d962fd0a458c18a8c76c00d"
  },
  {
    "url": "assets/js/46.354db740.js",
    "revision": "58f0e21c1375e629baf0e45fba2ce4c4"
  },
  {
    "url": "assets/js/47.f1819968.js",
    "revision": "e8690d1762732c80fdeeddfc3904b6d7"
  },
  {
    "url": "assets/js/48.7a68e6b3.js",
    "revision": "4815fc44e6390969fcf98b60233e2144"
  },
  {
    "url": "assets/js/49.d7c46b65.js",
    "revision": "9913912eeb3993b266d1684902f39a4d"
  },
  {
    "url": "assets/js/5.353f3fc3.js",
    "revision": "0176a3ab408c9d4b7ec72947bd6b92d3"
  },
  {
    "url": "assets/js/50.57a4ceb2.js",
    "revision": "f922ae3dbd0f10aa7fa945a6e8f01946"
  },
  {
    "url": "assets/js/51.5f92a45a.js",
    "revision": "1419bf7a9efd8861756740ee405724dd"
  },
  {
    "url": "assets/js/52.a0baa224.js",
    "revision": "370a1e567bd31bb3a1e59e1876e805aa"
  },
  {
    "url": "assets/js/53.63ef9937.js",
    "revision": "a1b927bc53c4595b8380781e2f54869a"
  },
  {
    "url": "assets/js/54.156f1f75.js",
    "revision": "16dce4a672fda78960eed7bf648ead9c"
  },
  {
    "url": "assets/js/55.a94e3be4.js",
    "revision": "f6ec23e7ab24a54eb1e3c56160c0f1cd"
  },
  {
    "url": "assets/js/56.6a2b029b.js",
    "revision": "e0f6b6b9ce5d10ca96e2864b671d3aa1"
  },
  {
    "url": "assets/js/57.fd8d707e.js",
    "revision": "b8580466a5ada8e04395cbfaafdfd12a"
  },
  {
    "url": "assets/js/58.69a51f83.js",
    "revision": "4671055d62d7137ec830c5bd320e9668"
  },
  {
    "url": "assets/js/59.c552ade8.js",
    "revision": "9412994adad613910ad5e82621257781"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.d9d29c54.js",
    "revision": "c07780844d3393a9d02128b8fd7942b6"
  },
  {
    "url": "assets/js/61.ab743424.js",
    "revision": "255ea7835746bc2a8f136482e52c29be"
  },
  {
    "url": "assets/js/62.2deffc66.js",
    "revision": "95cb133e7d52b0c608c7dba045af1498"
  },
  {
    "url": "assets/js/63.a3ead57b.js",
    "revision": "a0420ffff15e8e4970fac33e38518006"
  },
  {
    "url": "assets/js/64.111eabbd.js",
    "revision": "bd49b1afa64d22b5fdc74190b5416968"
  },
  {
    "url": "assets/js/65.29fd0fd6.js",
    "revision": "c31a56e57d628c85be7e60c1aab8ee34"
  },
  {
    "url": "assets/js/66.100e2e2a.js",
    "revision": "43a83e38e84b0d6fe91af3c1edb58d75"
  },
  {
    "url": "assets/js/67.3233ee8d.js",
    "revision": "0d5d5f3bb237e5ca80aab1c2d2562f13"
  },
  {
    "url": "assets/js/68.0d75dd0e.js",
    "revision": "319c4ef53a792addfd0413c6e1814b5a"
  },
  {
    "url": "assets/js/69.1a8844eb.js",
    "revision": "2ffa16a6eef936bde8c73777c22f7621"
  },
  {
    "url": "assets/js/7.892a8eb3.js",
    "revision": "5d63c8e02ed8213099383692426daf75"
  },
  {
    "url": "assets/js/70.378c01c7.js",
    "revision": "53829e9938e925be4bba5ebadfcb8fc2"
  },
  {
    "url": "assets/js/71.5c93f53a.js",
    "revision": "a60a92c75e819837b20016f4a221203c"
  },
  {
    "url": "assets/js/72.54fe91af.js",
    "revision": "3d63b5842ef332674a7c8c0a8fcd150b"
  },
  {
    "url": "assets/js/73.f3b9bc7a.js",
    "revision": "f8606f91160100b4262034a7ef4a26b6"
  },
  {
    "url": "assets/js/74.89e336a1.js",
    "revision": "78f68e56f5935ba232e0ffef9015f9f2"
  },
  {
    "url": "assets/js/75.a4a4ac84.js",
    "revision": "171eb584f644739d522baf8f5c2de788"
  },
  {
    "url": "assets/js/76.2bdf9e0f.js",
    "revision": "4771efbfd7c951d22ddf5b3fd9a4cded"
  },
  {
    "url": "assets/js/77.fc5d9b56.js",
    "revision": "7a3f1b88bdf2fafc2c06fe0d8e817d1c"
  },
  {
    "url": "assets/js/78.78664c18.js",
    "revision": "f3f8606026db47e53155e79cb215c31c"
  },
  {
    "url": "assets/js/79.bb2b6ceb.js",
    "revision": "2d09c1437fc0526fdb01f9c0bf454b68"
  },
  {
    "url": "assets/js/8.353f198a.js",
    "revision": "61fa51b18d58d83cf70218e4b60019e0"
  },
  {
    "url": "assets/js/80.583e4707.js",
    "revision": "21a990d536f75ddfcac50cdb62fd66b2"
  },
  {
    "url": "assets/js/81.6f7e38c4.js",
    "revision": "32a7e36eda22b19a5f562613bd5f0385"
  },
  {
    "url": "assets/js/9.c932594e.js",
    "revision": "d3187173396fd049af783cd307f9457c"
  },
  {
    "url": "assets/js/app.bdf4261b.js",
    "revision": "6edf5d7bc0c35def693c148235d170ea"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "f331fd73f3a936ca137ba8021b2e408f"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "6ddc762a12c5391e274f33c500c34f42"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "9f55a0e2fc7b5e69e587f64ddf95ecfb"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "6a86a989624195663e11f5a3059ce726"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "4c8d031a063e848ee5cff4a666c6532b"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "0461721314cdf3ceb05b5d2da5f86adb"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "37d18baf013e1766c98ad460797a7119"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "25ccac1ef901076d865c13df964488b7"
  },
  {
    "url": "computer/index.html",
    "revision": "c7f0d1e9ccf2b474ed530c2f100b2b89"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "4c41660b80a5a5227f3bd808d8ed9fc0"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "2ab40f491b7dad1e7ad1ab828b5ccd6d"
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
    "revision": "2a4440583870ec36dac66e9f795e3546"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "a50462b01f4ce721e702abb40d354e40"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "573f1451e982256ed731fa190e7ef02b"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "4ef9cf04aff958c0e1a4d8b4c310d63d"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "b8cf581fb0611eb36614deeb9abf6c89"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "8840cbf2a2cdab1277b2ad572e7558d6"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "4494a4d3766120a65a01b8885ee8bb86"
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
    "revision": "e0c65a11ec36413e5808cfd0a421c412"
  },
  {
    "url": "guide/index.html",
    "revision": "e74836b3b0d9c25254e396247c27e517"
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
    "revision": "42fcc4fdab6ab866f0c11f1a5f723c0e"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "c75b7064e8a857c7d4c8af3ebfc87876"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "f610467880b44a0c91e999e93eff0302"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "130a75b553d294c386c7d7bd7db2983e"
  },
  {
    "url": "more/clean/index.html",
    "revision": "0ef2112535749c9bc4ec5085c5d8b3b5"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "c68c58eac4d41073b926f6f0f47ca133"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "ddd1dbb4eb8cfdc184535f40dce23e21"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "1bdc66a2188d9f8b7c1a9f00645b563a"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "aa70533ffaeaa29e20bca24a038771a3"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "135aad609c5b765c6eb07cac903bca17"
  },
  {
    "url": "more/interview/index.html",
    "revision": "40ff60c66980f95561639feada56d0ed"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "8bb3004a4b8a0337388157f02353f6ab"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "51b867858eb3b90a954e6ec1dc59bfe4"
  },
  {
    "url": "os/centos/index.html",
    "revision": "0ada7b04fb225be7511b2ce0fccc58e0"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "fb94f1e85cc015df5d592c5a6710a653"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "8d87500fa224b8f974c3bd381ae38a23"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "a4ca5273b65829301758169bdad377c5"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "5152d99173de1a9af4d82abf70ee4087"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "8eb0d9db346fd70e5cba4a51ea6019ae"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "b058a7195098c219bea04c0a362ceb59"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "62b3cabd4f95ed3087a0ba2ed094b0b2"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "c7b4b6ee719401444df416bed042447b"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "db54fdf2a389cb3f8a82b855fcd2da70"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "730bd1961d23aa554e7c01140ed6f299"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "84312e3e92aed5a94fb29687514f2848"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "e5e0816d8f0672584128fee89bb7592c"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "327a8374597f45ed50b00c064f1e7b5d"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "5e6cd2a7b0d2f5807b41ec4476a3a441"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "ee689f69c67df6cb06b138ec0575d43f"
  },
  {
    "url": "os/linux/index.html",
    "revision": "080fe0993248f0a1b5ec38448c502b98"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "43d8cc24aeb9b92e012cd00290690102"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "8bd9c689f496ad2efcbd174702e3e9df"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "fb2d05c48403575e5cbffa43cdfae029"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "0f06ec9f041344f7688e9f0e993436ef"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "f34c11db2d9219cde0aaeeab5784f609"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "b4681fb5ac715af4da798026ca9e4b99"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "9d124c3a2aaa8995f7a7a7deaf7d197d"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "9f8f4d6f8bc2e4d97fd07a597b513ca6"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "135d663fbf43e82167fc39fb31e8a50a"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "e30a01294acd88075207c052affd41ed"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "4a7c78d137651957224616a02550c781"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "b00e6e02687a682b0a702b322241cb43"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "844ae6f95a4881018f6a6b256e2c0d06"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "3202d7b41efad6f682f238955fb235b9"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "723abdd0ff3d3b97abae3505d925f45f"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "b4afdb91603d5ecdc536a0fcbdab3bef"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "e41f9082dd0ee434bd133caa26219312"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2d26566272beac3bfc44f64608e042ae"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "a534169c322ee91e92da0de9b0558478"
  },
  {
    "url": "tools/github/index.html",
    "revision": "b8285510bfa3c9e173b89b2236455023"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "c9e5a7c5a7ba12a31af2ecf917ac22a4"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "19c157b4e43a775ebc137a56e952b28f"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "a35e6ff64b693952efa9b81e5155a4ee"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "25f18ab626bd93d2ffb69e4b53f93a39"
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
