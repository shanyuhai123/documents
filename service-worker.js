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
    "revision": "9cfadbad3a4882e51a15ebf601b62f21"
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
    "url": "assets/js/33.ca64604a.js",
    "revision": "9052ca2b214779134ad7139efd663de3"
  },
  {
    "url": "assets/js/34.6ce7abf8.js",
    "revision": "c903e18cfb12b438226cdd7d6eb4b59d"
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
    "url": "assets/js/38.ffb4fb93.js",
    "revision": "4ce8d8a974c68dfc4b35763ed2fe837f"
  },
  {
    "url": "assets/js/39.8e050a6e.js",
    "revision": "142938573b943e6d43a2abbc4dd63a4c"
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
    "url": "assets/js/49.64485b27.js",
    "revision": "ad79861282b1251dc3f37c1b8e370dd4"
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
    "url": "assets/js/52.178807e6.js",
    "revision": "bad35518d2815c896436182936f5b1fc"
  },
  {
    "url": "assets/js/53.bcdfab24.js",
    "revision": "78409d145e47e1da079b666cea63938d"
  },
  {
    "url": "assets/js/54.156f1f75.js",
    "revision": "16dce4a672fda78960eed7bf648ead9c"
  },
  {
    "url": "assets/js/55.1a2df183.js",
    "revision": "e05b8af737c7210c878a82109b712899"
  },
  {
    "url": "assets/js/56.d6c474e5.js",
    "revision": "00d4bbd963c8e39e861f954cfaf05bbc"
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
    "url": "assets/js/65.c651a81e.js",
    "revision": "38618172eaf3b9fd13ba4f1543778ce3"
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
    "url": "assets/js/7.744a0258.js",
    "revision": "5932382775dade0308252206dfffa80d"
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
    "url": "assets/js/74.0f60f0ae.js",
    "revision": "558cf3d4b8f8bc4cf35f84b8705b07f1"
  },
  {
    "url": "assets/js/75.b694aabd.js",
    "revision": "d5253d22f9856c44e66c2fd15a77d0f1"
  },
  {
    "url": "assets/js/76.c31ef89f.js",
    "revision": "01ab35ce1841f600cc65b8353a7ffb36"
  },
  {
    "url": "assets/js/77.2e11ef2a.js",
    "revision": "dd1d786e57844c990588384bd673eaea"
  },
  {
    "url": "assets/js/78.6afee332.js",
    "revision": "ca5431584a047472bc1897193e5acac3"
  },
  {
    "url": "assets/js/79.2c6b8907.js",
    "revision": "291888658423c857c94092363346ee05"
  },
  {
    "url": "assets/js/8.0d666c60.js",
    "revision": "614316e120a559a084c534c0b29b75c8"
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
    "url": "assets/js/app.64bf7f94.js",
    "revision": "31678fcbd9fea70fb134c69d5eb34c52"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "70d4a143ffdfd60f911b119bf5d9743f"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "2a72a84f78218218b4e04074e90c6824"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "7d26e816abe3da13de52ff6435485842"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "408249bdc12df6ccc7f42c95a00f7ced"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "6342fbeda105a956b8be80f9b9d77fae"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "b6294bf88c5582ddd053dd90bc724c96"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "aecb631cc3fe8d23b7b78ee3e85b9c33"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "6ee99778de27c840978cdbdb97c22a56"
  },
  {
    "url": "computer/index.html",
    "revision": "3f1b54145eec8523de305b956d99b171"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "d1199960e2fecfdf5259534575e8895c"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "5ba1ec7345deb5d4d99c49b359ff87f0"
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
    "revision": "19d1213f04be1f5b3773147d13484f89"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "60e1e7aad12a628c99935d9ca39e230c"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "26c406ec95c6e82c602d1403bbfb4a71"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "2b3dbc1f2a794d2ca603a825da1756a8"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "98d1876c8a45b3bb8b186fda06bec759"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "5651c87045ac8969629aa86f7239dd89"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "ffa4fe7aa5002781eaf6fc095e9383e1"
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
    "revision": "106039fd7218279c1bd683026833e0b9"
  },
  {
    "url": "guide/index.html",
    "revision": "eae78755724285c1f708c66eb40a05c1"
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
    "revision": "7dc23b54cc5e4b4a7ab052d21b02ab82"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "9b485a01a4ba28ba1c517846f3166bdb"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "219f25bc13d84de5cdef28aa7baae41e"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "fbb27b71bc8b137fd651b2c6d8c0f43f"
  },
  {
    "url": "more/clean/index.html",
    "revision": "6f5652606b438092e384a7a4cffb8bfe"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "e02ac8e35894c3b4ea527ec816c309c1"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "fcd2618c079f438711116bdc32826a84"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "a6e8c077a5ef1dadb443090304cd28b5"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "20f8f4362f7565b2e04cb629be172c4c"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "74a27b6fb03e8a874f192a8117cab107"
  },
  {
    "url": "more/interview/index.html",
    "revision": "a86a7f2a48ccaf36f244aea2e7b28e99"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "6627bfcae4d790e95816d615a4bace65"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "b09741da5f3feaf5c243e1f2ba6f924d"
  },
  {
    "url": "os/centos/index.html",
    "revision": "810dd6af6b1663ccebe7c3057a4bebc7"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "4d7804b36d5738e0acbdc7fde81e0ab5"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "1d4517e1d067a4e2fa5702170c11552e"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "03e5ed883f042cbcd9498f67f3af8def"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "d4021eeffd4afd8219e07ac4c69e01aa"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "9fb08cd071609c7e2304c746dc55eaa3"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "ced03b0766b709a94755cdb93c51d265"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "35b2ea70fa46801996207da47de5be15"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "43a5af4dff448f418cbe293adb96c371"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "b5cfe7e7224305a9c431ad569df46418"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "374f214b9c529d98426c25b78c089a54"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "1c69fb07a9b2463b74a0bd114766d138"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "7d2406d7a8ae918d31cf88c2e91ab556"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "ba0b002356e2bec622dbcd3bca4ab84c"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "6bb7e3d1ce5c77f50d9e2cf260dd97a1"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "74ea84e1a36baa32ec0122f117bda5be"
  },
  {
    "url": "os/linux/index.html",
    "revision": "91e653a6baea3d5f2de73cbf879a95e8"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "40e82517ad259b8f169465b0a306ee3e"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "b1c338141b275ba788849f6ccf545e69"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "0de59589c2d200d30b31bcc857c90e51"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "e139d871f2650426a57e410ea4332584"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "99f8fc2fa7f7abbf3ce3b69eed7931c2"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "1baa8cb5e9805e107d3cc755c55eaada"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "42a7e949752dd9e8bd5694a593f727fb"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "590f1df22a82f0a983996a7401421341"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "280427956c509a641300e581b34429e7"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "4e2ccf9710b0c35b74c5d3d9c70c863a"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "03065be0b6dd544264dbb79ee141ea2f"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "3daa6751342812da41116c925c28e05c"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "605519ba5a0e90f1ea54a325c9db8aaf"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "d164569b2c9493ef74699a96de8556c0"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "51d5f3414fc0e181ac91a4ab11e6534b"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "a54b0b44ed5c859b5404a6eb71409908"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "c42d9db005babc29dd6702b785432b22"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d15b8fd5039b49412535c0d6f69a1338"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "45e4b8cb654715ba462d2bafb42d0c3b"
  },
  {
    "url": "tools/github/index.html",
    "revision": "a298ddb423833a773d2989c7f86e6bc4"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "5cc893fa6db6adc048183b132afe869e"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "1058864fcceb02906862421179cc9536"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "c406c0cda50c9f63e5bfc98b3e5b9426"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "102f149ef58766efa748f137441f641c"
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
