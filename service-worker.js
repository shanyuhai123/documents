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
    "revision": "26f9412899477b6aa5d5945e52eb79f6"
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
    "url": "assets/js/55.a86d35ed.js",
    "revision": "9a6f8c3deea2835a5058805573d82d9f"
  },
  {
    "url": "assets/js/56.9b3fefda.js",
    "revision": "5d3760a36c08f8b65392e58b1578fb31"
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
    "url": "assets/js/8.353f198a.js",
    "revision": "61fa51b18d58d83cf70218e4b60019e0"
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
    "url": "assets/js/app.85e42c44.js",
    "revision": "562b29b7d319b16c1058550c4768f7c8"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "906b7e9abe1e703dd82d76381348f18b"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "93ebb8081f3a9ad1ab88b34b70ff6421"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "ba54f9da3a262f12217a8efd60a22d36"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "9a186f410f9de2f6890445feaeb8a4e4"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "93f820be0ed3e3a00b4c294a299cd2c0"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "f2c77e6f9b94d19f39e29cfd56343de8"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "63f6117ae5cec2ac1571399230f66d54"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "b831dd1eb7b425d254a5ffa4d146c113"
  },
  {
    "url": "computer/index.html",
    "revision": "c453592dc202547a8ff487b51d70eb41"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "83973558fb7ea864672171ab356ddae9"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "18feec2b4b670dffdc6b807331172f40"
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
    "revision": "70c7768cc853f99ff4b5942269d0f673"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "4f6f414237ff68c1233bf87168866900"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "f4d85d04d7d73c30baf48dad55cc3aa5"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "a212d00344c4976ae8142af2968ef1b7"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "c65d4da9e4ca89c3259a3c766ef42483"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "240a188b60e74a6cb149fbe9e4c5d910"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "753e1c438abc28d69425fc0759fc3771"
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
    "revision": "8abd0fb9fa9b7743e889f94d5015d002"
  },
  {
    "url": "guide/index.html",
    "revision": "cda121a5328a6b3e8fa1df5a8f47c1da"
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
    "revision": "07c0f3f124e068f765be8c455fbb1c64"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "881cd58857a8a353d578fcd6035ecad9"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "1866e983ec4bb8da14530726228e8d42"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "1f229137550a1728034e08c826a3fb0d"
  },
  {
    "url": "more/clean/index.html",
    "revision": "d5389dc1783741280a500a26f9dde71f"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "02185ce549a5a90ea4fcdf873b33d3c7"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "4bec34d18ab04be857292c7a69cb0d91"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "5e4c583483caa757b78cffffd8b4b44d"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "266b8c8ec4da4ba680da7326152b79d6"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "7ab8d8b6ceb57183ca102c629d85cd18"
  },
  {
    "url": "more/interview/index.html",
    "revision": "691b3b35ff5a16707ffbad48af30c399"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "ff336df61bdf8ff614e4f017da632ed2"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "1972c2298a95a53a0dcd5a2686bec281"
  },
  {
    "url": "os/centos/index.html",
    "revision": "94dc564df55defe4f71b2078b26d422c"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "ef76800ca4a828cf450e67a82a6f6c75"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "7742992c734d742ffe9d12f8adaf7737"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "33e72d01d85dda33d23be1ee48d38909"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "d2a34bae1de61735b93d5777c6a3d0fe"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "64e91e483e77b40f93eb9d74b34f550a"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "fd2af59234468733b80cf416fba9f0c5"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "a87cb0ed6ba90886b32fe7357c219852"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "8f459e25f63bc3059a8ea53eeb20ebea"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "6baf6ed72dfbcd22f441e33b65a085bf"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "3bdf04bb5e7f4103fb3ec5663fec519a"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "22ae964ef58cbcc225d44e4800c55966"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "6fda297f0ad6de523308ccce53001e20"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "06d94676fe49f6720f063102dcec637b"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "518a2bd26e731ce071f67896acb8778a"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "c0164237ca9e99a7e7ba2206c2bdbac5"
  },
  {
    "url": "os/linux/index.html",
    "revision": "16aaa220608c05fbe44aab9bab21c5e5"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "876f1e6d3990be41cfabce70d9b9f8dd"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "f163fb59f3042281003a15e48384d89a"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "ba0ccbea11b62133e01a4aec2977d684"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "3695d86e90440617fbc784492fb94712"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "ed2dd5c79305364c0e55c73882640c69"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "9e709fed57fc56a932c082b7cfde1cf0"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "bf82b531718fc27977f2efcb316843ff"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "22f44c2357904ab70a4879893fcedc8b"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "cb96f64ba4138c4e406dff531d499601"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "a63bb2ba6f1e8193a483da00445f4c51"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "1f6e2c1413443b9b3ec178d47ed8fa65"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "106c55ca90b224dc98be586fe9261a09"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "edbda8e0f07b6f6ba49b793368e48149"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "7bda4aeee824fd98ea8c8fdfd50df040"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "87cd6d6bf34e58d2d9cc5cd29d5a83f2"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "ac4ebe937b5a07ce22084582f17fc5d3"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "221bf4cd01b5b3f1b7124a02b3e3ff7a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "58d4085a546609178af16adbacace43e"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "9f5748ec6ed49becd4198aa5c74c3173"
  },
  {
    "url": "tools/github/index.html",
    "revision": "ba8d1c6b3d9f26d9c425178eb776dad5"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "6a4765c58bc7128cf755dd2c1a6b7cf7"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "9cb61a9d732f41eeb44694478da90974"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "cb16bf3e827ab1c642d15e5ef0787a1b"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "490c24f3f20436b5562e82f00ecd53b8"
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
