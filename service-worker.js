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
    "revision": "b32cf2365dc0c760910ada41185143b3"
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
    "url": "assets/js/74.cbdb843c.js",
    "revision": "f938d505a452bd8e21785fb578f251e1"
  },
  {
    "url": "assets/js/75.a4a4ac84.js",
    "revision": "171eb584f644739d522baf8f5c2de788"
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
    "url": "assets/js/app.90f2fd12.js",
    "revision": "153bb098d14002c8e64e5426151c33af"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "08eed252f6320641159b620bdcd1173c"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "2edbf290c673c63707ca9b2de8816ea3"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "a8bf2ef61533141a4c478619db424b53"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "29d185e43666ee5f17ee5b71d0bf3a1e"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "b93531852b951a241ac517effeb17596"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "7b84f150ed5d2bfae9f5a39d444a42dc"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "4d5ddea7af1546fbc6388689069e3374"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "3d91fe536ef28a96d617ff3fce392300"
  },
  {
    "url": "computer/index.html",
    "revision": "666364b9fe681d38553bbc9b6f0cc448"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "6f17454e54b5a9c49e0f4b17bf8bff83"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "2c1f966ec440f680a8be1002ea3c003a"
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
    "revision": "41dfaf25790b874fb25be951a41d9c50"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "1c151b1dac99edfcae1dc02ea0dffd29"
  },
  {
    "url": "frontend/javascript/object-methods.html",
    "revision": "89f5f5af8249e354e55b8e55d64b1e99"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "595d23019ba3adbf1707f919be95c49a"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "638a66cca40599ecbe636ef658bc3f86"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "bbf9be064f7c1cbda8c10a496418bce2"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "48d1a1ececf91e540d897445f2bf1080"
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
    "revision": "3aebd333f2df7f71c927e9ce280339aa"
  },
  {
    "url": "guide/index.html",
    "revision": "b7e78b21d445faf3233e8d7577057c41"
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
    "revision": "fdc8f22d3a51b7149712c28e558c8a8c"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "12c7e16c4a24411b652467af6767cb89"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "7c72358d38af602ef1d30870101e1f38"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "a9bf76c6a588a9c4cb2341923894ed59"
  },
  {
    "url": "more/clean/index.html",
    "revision": "48cab68e295af197d4e125d439d52fe9"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "3869bc3570d86d678bea6870441d073c"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "3be5ac1b0e98460a8323c21c140c3ea9"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "29d665c4ffa6d3f414d6b18d8082dbb2"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "9a9010988a404b958fbc34ec3701b8ca"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "213bf76a4b7f54b76b9ff421c4990c90"
  },
  {
    "url": "more/interview/index.html",
    "revision": "b110d00932cc798faf4c7f80652b38a4"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "b40cc1815708e3f8323b046fbc543da6"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "485f1b8c7a1efd14eed9e31a2a6e3635"
  },
  {
    "url": "os/centos/index.html",
    "revision": "a2a120b2a3bf525c3175b45fc71f7b35"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "280590b2e70e69d2da20f00d246d3fdb"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "3557a43d9fe08cf46b594d88c4a806e9"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "4e23d0228f5b2a2cef5aedca89f46ee5"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "2a8135f890910487a732a38efd260129"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "dfda992b5d18ac1b622aa0f876c3dfd4"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "3dda45a61614577f6f645fb419c66592"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "7bceb1df7e3696e67d376ef30c5030af"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "9fac7b5566c39a247f01ac0391c08640"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "5460a766af3fd36b7c199c9b7c074d99"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "88f8e162f6f9c6a0b3e7b8f03ba55dd2"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "a27ebee09e59252410c4aa6f403b641d"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "dddb8aee4dfb8dada07d0cc667adc221"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "3a1ce63d03871c2a99c1f5ea0eac8926"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "ada32511a416b46dbdd5da9e00d9fbb9"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "70baefd7f853a43a19cc9451a782ea23"
  },
  {
    "url": "os/linux/index.html",
    "revision": "b0c1cf16dd8f92dd100e337af1d4946c"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "9ec4f4ee9214bbdc4b90efcfb8155553"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "0acc7a29c7093882c9ece2a88a1d1e5b"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "bf36f70c2446eaafd4e0f9fa4d7d0232"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "e66dcc860c79362e9d8e045c416ca0ca"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "54aa678004be89a87a6d3d74458bebd2"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "833e5a397078754eb9130d38a28a14cd"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "988fcd5a79b2be449192d47522ccb330"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "b25afb0d2acb038d9a926c2a502c5211"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "a4da589fd206ed6fcbfb8a73f05436ce"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "2a78958dfa0edbce9a44ab08b63804d7"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "01fa9e4efd3ac915bfccbb5e0df10790"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "2e51b2876b49c5e7c162e5f12e6fea5d"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "2b689b0c4f6ed99f111c988050c1f12c"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "59e71aa9ebe62952687fca6c1b2b85a4"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "fd47ade58ab70add18c4287d6a36b8a2"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "57cfe9f87121e8915c38f98b6f18bef6"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "c73423684ea2c84eff775b1d5e83a422"
  },
  {
    "url": "tools/git/index.html",
    "revision": "29b958b1d1fdbeed4b8e751ee57b938e"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "6bc93c6ecb41581c44067a129a0ca390"
  },
  {
    "url": "tools/github/index.html",
    "revision": "3bd4b5d699890c83ce50ea73ff9229ff"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "bc6a37ec6e2cead7f2be773e1ba3a285"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "0c50e12772860dc6c9bcfb559b778c6b"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "49006af472e057d08c357e0fdd51943e"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "aad90c5a85c22f61a422a5f1f5b89b7d"
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
