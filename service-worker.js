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
    "revision": "2fa7c629cebc63d146ff75f1a6e378d7"
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
    "url": "assets/js/19.43d16779.js",
    "revision": "7be69e4cdfb5448856d11ebf6181d315"
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
    "url": "assets/js/25.778cc391.js",
    "revision": "324b10e8e537ae5160c14aea3b1dceff"
  },
  {
    "url": "assets/js/26.aee8947b.js",
    "revision": "f5f251a75bb19884c945e660b8305b9f"
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
    "url": "assets/js/41.68f73927.js",
    "revision": "b9f9e1ea52d5efa98dc335e97ee22d02"
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
    "url": "assets/js/52.178807e6.js",
    "revision": "bad35518d2815c896436182936f5b1fc"
  },
  {
    "url": "assets/js/53.9c98adec.js",
    "revision": "278611e12b23a9cc8998f6ed8e85acf0"
  },
  {
    "url": "assets/js/54.bc3df3f2.js",
    "revision": "36c23f60ce09d7a9023001d932e03b07"
  },
  {
    "url": "assets/js/55.5af849a8.js",
    "revision": "b1a5bbc233676f483289dc9260250bde"
  },
  {
    "url": "assets/js/56.e97c7c3d.js",
    "revision": "93fc2661a7ac5036175bd12b570db1ee"
  },
  {
    "url": "assets/js/57.fd8d707e.js",
    "revision": "b8580466a5ada8e04395cbfaafdfd12a"
  },
  {
    "url": "assets/js/58.6f0af200.js",
    "revision": "7f1c294c4ac66ee4c7a62162d09d92ce"
  },
  {
    "url": "assets/js/59.9231a35b.js",
    "revision": "4fec43f35435099108eec1163d11f7bb"
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
    "url": "assets/js/65.d484be19.js",
    "revision": "a864930c1b844ff19fc5f9b8c6fdca46"
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
    "url": "assets/js/app.d53dc2fa.js",
    "revision": "53af868c9bad00ae8f6a1ffb4c429385"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "25210a32fcc0e61814fae3d17f36a477"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "e584e92a9bb8da1c13e7652939706a5c"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "c3df69222ae34314425f12fff375c65e"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "04bf5ad33607c6764af6dea85783ed31"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "7cbd32a45678bef067a41dd0e3689fe1"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "390e9fd956efc5bd2da6f1b7616031db"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "a6121ea4b03c8f0d55a8c9e5fa88efa1"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "1e3f35453a1fb5f852bdc0589392a20a"
  },
  {
    "url": "computer/index.html",
    "revision": "bd8ab199c39b060bf64650796ecd5201"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "7846c744683cdbc0421a2c5dad701e6e"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "8ebeeb44a02c434d4a433247a1f76940"
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
    "revision": "e51998ac177e44909ab2a5d44c82d69e"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "710c580a7afa70617d75340adc44fe50"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "34bad46c8f8e1222df1f84f31428cee1"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "f064a350671f37039049e94725cc7796"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "96f9222295f4aa090e4e7e2c43cb08a6"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "51ac95b119493377b4bf36c512ed854f"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "5441dc87f0cf67f9df57f96cd15ee63d"
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
    "revision": "69be043f62084ecb967f47d73f7d7a33"
  },
  {
    "url": "guide/index.html",
    "revision": "9ef0f4584b203d29000f99b1efd4e495"
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
    "revision": "e97ff4f857b08b4b9513d02b7fbe8b31"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "b0e35cfb52a8236ed77df757c7784902"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "03acca808906209359fe1db2e969a876"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "25aa67961def7a95be5481e5efee55ea"
  },
  {
    "url": "more/clean/index.html",
    "revision": "b89bd0c033afe023676bc6cc1c65e476"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "f1018c5f2fd75116e5e15a3daeaffdd3"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "204b6b414565dbe219ee39ff2b0e5e6a"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "16fd34d9dfca7f769b6b6543724b9b9e"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "5d4687092b9cf11e0cfb8de07c1a3dd2"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "4e2a4cd91345970230192527e2736213"
  },
  {
    "url": "more/interview/index.html",
    "revision": "9f91c5b3c34104d558410d3cb04ac4b1"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "3fc42553024a4fe982af85780b180909"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "5187b3e817b549555f2d4b20e6924d21"
  },
  {
    "url": "os/centos/index.html",
    "revision": "4402cdd6b2779709ef43e1cd59146dad"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "6e293cda38a40fe2f4280baf92f9b127"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "68e29c6276333236d64c2b3606a36ea2"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "ca5a8bfff63b58ee5d25b1ffff818ce5"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "9a8fbfa21157c25d338edd08bf9de4b9"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "391334f03ac0345ed47c0bbe820bbc97"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "88551c442465facf24a6c29976c88405"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "77536b119cc00b02555d91c3ebee0e88"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "644e9dd0dfe840ecf51f4fed7c9dea0f"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "29f115c80e27001b85136e89e68066ff"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "d844ed97df53a067f3d8e1449c457889"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "3642a4cb1bd6308089e33cf8ea244d44"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "df967687ff44d1bb17dd03e4bbf83410"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "e622a5d252ef3943715bb0e30f34efd1"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "2b53106d4901177d4ec117a2fd7d17ff"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "84592024c7499324fb7a56f38e76e8a0"
  },
  {
    "url": "os/linux/index.html",
    "revision": "525156f38ab47ddb7bfcb6fab3df5bb6"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "fef79e722205e718368a4c957b9af033"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "d73066ba40adc769935698ae816d8a52"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "4ca2f02827f495cf79b4a039f7af0908"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "38b496d8b4457fa296c47eca6ced0ed2"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "8051b7cd1e335023b61471ecf92025f6"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "ae7db674f962628d11f5438edfe7ec68"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "f124eaf8672c565c6435449d3de5e1ec"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "937cb11fe517b9f67190758ea04984eb"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "3096df0810797d2a8d499241c3acbb19"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "bebf65d7b86eed634e93dd994ba0c5af"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "d8b86fa66c830fcc7883c12ff45f4239"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "e81e5a16df7b2647a29d9a18f9556b8b"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "400508f41d566e59abb1a8e86d6c1f41"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "68361e27c6a168ac7f4121f9de67f001"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "2a1cfc84e7629db693aba26e37447cd6"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "1ded9a8e3e917c31f3f3bad7aafd369f"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "a3512f0c05e27ccc70357a0ca2b9257a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6a0b7940455cb0c1c78b381c7e47b75e"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "2f91697d16d90eead055a6c9fe5bc3e8"
  },
  {
    "url": "tools/github/index.html",
    "revision": "36626a9eb6ba6c7ad35a437368d11106"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "7c1d8aba64d3f3f3cf7703b177fb0b98"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "5ca6b854d0f3e232b3b26bf13360107e"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "5156714ff1e31df3e7d43758cd2ad3d6"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "75593d46e72f7953f2e2687aad796a77"
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
