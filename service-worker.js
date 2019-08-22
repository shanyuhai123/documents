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
    "revision": "703ad4ab2a5d3773be7aba2fa26651af"
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
    "url": "assets/js/51.971ce7e2.js",
    "revision": "8268537d7a7fc6d5858916117545e3f4"
  },
  {
    "url": "assets/js/52.178807e6.js",
    "revision": "bad35518d2815c896436182936f5b1fc"
  },
  {
    "url": "assets/js/53.ee353109.js",
    "revision": "2a66d7f8677d18ed98b51d7e4b71560f"
  },
  {
    "url": "assets/js/54.32ee0b40.js",
    "revision": "825d0649ad746a18c2e8562e10f0d0cc"
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
    "url": "assets/js/59.9e39c93f.js",
    "revision": "deeb497073267484df26a2e2555dfe86"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.fa77d762.js",
    "revision": "ae53f71f7146c0a19cabd758e40f634b"
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
    "url": "assets/js/65.00bbc927.js",
    "revision": "de7dc658a1aeed4d7830414d7f71802a"
  },
  {
    "url": "assets/js/66.100e2e2a.js",
    "revision": "43a83e38e84b0d6fe91af3c1edb58d75"
  },
  {
    "url": "assets/js/67.faec1cd5.js",
    "revision": "0a0713646589c0776324e54a57dbe025"
  },
  {
    "url": "assets/js/68.83294b17.js",
    "revision": "e088f782a6e35e4497aadbd3ea11dfdc"
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
    "url": "assets/js/79.ed767b97.js",
    "revision": "3ca0c55ab66608eb0491d18387c47b60"
  },
  {
    "url": "assets/js/8.0d666c60.js",
    "revision": "614316e120a559a084c534c0b29b75c8"
  },
  {
    "url": "assets/js/80.ca36fc89.js",
    "revision": "f362bafb4bc45a1927646e4760a09e47"
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
    "url": "assets/js/app.ecb34034.js",
    "revision": "b3b01f20d10908c1849c7843c5f0b5db"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "7ac3809efbae9e75141f4e652385f185"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "fc516c120043b55d67a7711a21690687"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "e73bdc5009e97b53687ee8c730270aba"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "25cd19ec1ac96909066f214eefc2a30b"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "8918f4dd61e93414c953fca8fee917b8"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "da490365281870d61c257c9ad63be191"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "9dd2ca2c4690c19291f82e7687c73ee7"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "75a372ddef5a912c0a452df23820bda5"
  },
  {
    "url": "computer/index.html",
    "revision": "2423c8ee87db635c8a29426e825453c0"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "dc5c60a6b7b00eb09162d813dec164e5"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "0beb2a3dfbe41ea228ee5d9569abb8ff"
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
    "revision": "830cf049419939aded12292b47175589"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "ed5e1507b16435bee9f781702cc22c32"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "60b8f74369c864292cdebedb61b478e1"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "668b0e55efcfaf9b2ee4dd735ab3810e"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "3945c79a7b43a979f6cf81b5eea598ee"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "a6bf2e0007ea95924ceb2c93fb79a431"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "44d0cd4ae9e7e67c6973153a6684e758"
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
    "revision": "3dd993d0409e051e9a3516f6e4929832"
  },
  {
    "url": "guide/index.html",
    "revision": "4c143a28ee32c5bfc732d5f3c42e4ec3"
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
    "revision": "889da095ba24a359296bb947eec0dfa0"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "a01097e58fc82bed46e8ee058cd7faf5"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "8e5a27dfe8996fa93673f532c32c671d"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "790136911d2279a1b7dea8acca2ac502"
  },
  {
    "url": "more/clean/index.html",
    "revision": "92bb14848c50b416b392da75dbc73c5f"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "72b0a8e42b26e51e6ab5baa4d1cb0954"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "303648ab7919d0d42f6610fb195cf19a"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "8e384d3030f7cefb5a9aadf57bf65270"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "176721a1d968c73d230cfe6db1305d56"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "0447928ccd08b38123ad86fe90381693"
  },
  {
    "url": "more/interview/index.html",
    "revision": "9fee053da90eb8645a0a7e82647c7bcb"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "17b04e2f5357f893afee1b1367f3333b"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "7b9167df393a86d5dba34d662efae942"
  },
  {
    "url": "os/centos/index.html",
    "revision": "f6be569993d3fbfc212a7723ae32c7f8"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "7fb8a0fea8bb50fda5e326d6f9fddb2b"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "984501c322492b75f051fd571758a7b8"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "f8bc02b77cc766387b265f9961c9ec1b"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "85d4eb334461dbccfb2bfabd557b32d5"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "5e0483686fea64890a7fb51a805eadc1"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "91e1ec4d992e4b6340abcee5404c7c7d"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "57b0885c9614e9d8dbf62c5811bdca50"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "c15532f190864d5809d529e50c7ce365"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "20a73c34d5e1d755e465966c6d60d7e9"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "d43dd295ef712df824b90e8f02486a81"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "cdd27dcc2286e2d7c1d1104f799e1b44"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "b6b3d967efd0515d98eccbfe957e558c"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "393f2513834348fd0b4da1c33c2bf040"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "aa448578459875122ede071c68364063"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "f985eab6e2bfed7ee77151b1fa29aa6a"
  },
  {
    "url": "os/linux/index.html",
    "revision": "197e007d31a0f0a2410b9a2c357ce583"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "96817b0d785aa360b93aac64bb3d26bd"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "23563a795bc4da856916f42932df5a3e"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "6e952d222535be4399a90c3beace71b1"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "bd79288fc27d714c05e3f72e61290cb2"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "f9a7a254de4b60f275a925ee6e19010e"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "ced0f6cf1d173a85df338f86a5f4839a"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "5dcff5f8db69408f989804f15eb678d4"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "3bb661127b8ee4f34184ca9082ab3281"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "65e03945619fdebee0a60301c2a741ec"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "a7b1c05a540bd6bb1f35056e032af99d"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "feb8940fb4100ea360ec1fc00570d623"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "b6e0158f259361712f86cb1b6f02a762"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "23a9194d63b59f1aaffbdeafb9c84d84"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "87ea4fa3c2713673d307869f0067256a"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "07f3ac5c54efcbc0b3b6c05691cfbece"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "5395068474391de984bd8e16e191677b"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "4317880b9403fe9c9a80205304e9eaa5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3bc7c00531244416fb892a4605d3963f"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "61f1be79f7d93ca31df9c0a84fd1371e"
  },
  {
    "url": "tools/github/index.html",
    "revision": "01eb98d07ce644cf7e55923d3f83bfd6"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "92da959020cd7ec5fccd1bcb8c351b4e"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "b42cbbfc66ab3428fd678bb015517719"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "c55a89a3ee5fde1a6204cd149ead98e3"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "fb85b4e2e3edda7552a55c362db18c35"
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
