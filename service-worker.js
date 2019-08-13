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
    "revision": "1757b1a571310fb734b84e742e1aef2d"
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
    "url": "assets/js/10.7516bcc0.js",
    "revision": "38e56f819021a64a2982f43acc98f3e9"
  },
  {
    "url": "assets/js/11.33ccceae.js",
    "revision": "abe36ad43e7374d4ba0a6cff4cf8f787"
  },
  {
    "url": "assets/js/12.cfee6856.js",
    "revision": "a82eff9052bfec9c6c08dec7a53677a6"
  },
  {
    "url": "assets/js/13.be7d5ad8.js",
    "revision": "ab7f0216121ac8562ab1484e3b2539f8"
  },
  {
    "url": "assets/js/14.78eb97f6.js",
    "revision": "7469b7fc138be22e71c1219145cf24aa"
  },
  {
    "url": "assets/js/15.43d895e9.js",
    "revision": "eea5f9c8bc709975a61be9c255996f26"
  },
  {
    "url": "assets/js/16.83db8ff9.js",
    "revision": "d3ec07ca3a7a67a65ab2019197ac86a7"
  },
  {
    "url": "assets/js/17.8bca4a47.js",
    "revision": "375c9422b1b8e205e19586b8dc4a284f"
  },
  {
    "url": "assets/js/18.6d3df28c.js",
    "revision": "5802c2b4376d8ad964e0336c55b9ded0"
  },
  {
    "url": "assets/js/19.ad40ec1e.js",
    "revision": "5ec6e4624bb5f9d1b12f668671d55d4c"
  },
  {
    "url": "assets/js/20.be080891.js",
    "revision": "ba927414630486eaaa23953fd8c32b77"
  },
  {
    "url": "assets/js/21.e66df586.js",
    "revision": "09347fdc97009d47417667bbba47f0ba"
  },
  {
    "url": "assets/js/22.79fae3d2.js",
    "revision": "384253f104d1766d888ce488192bd6b6"
  },
  {
    "url": "assets/js/23.f88caadd.js",
    "revision": "97bcd9ed59b6771b920f0179a67b133c"
  },
  {
    "url": "assets/js/24.4b5099d8.js",
    "revision": "1786e48d13a8e23c9e589795c451014b"
  },
  {
    "url": "assets/js/25.0d9ff679.js",
    "revision": "0c33db1b6ca91b6db308c324e2d1d96a"
  },
  {
    "url": "assets/js/26.06afded2.js",
    "revision": "c50b5f9c3e916c71582d3ba094c26e9e"
  },
  {
    "url": "assets/js/27.369109ee.js",
    "revision": "4629be305952da4cd7892864b79df99a"
  },
  {
    "url": "assets/js/28.1f349606.js",
    "revision": "449ee5d87b8d7a86e3607fda1aa03105"
  },
  {
    "url": "assets/js/29.2b9dd0b8.js",
    "revision": "7367b38f4115b1e5c55e0a8d5d172b58"
  },
  {
    "url": "assets/js/3.443fd828.js",
    "revision": "afec375a25688131ad0fd3f4ebfd1fa6"
  },
  {
    "url": "assets/js/30.17d7c579.js",
    "revision": "bbfe94dae1dcfb81c0cae7146c67769d"
  },
  {
    "url": "assets/js/31.c30b6fa8.js",
    "revision": "038cf367b777e3d61d0db0fce84b65db"
  },
  {
    "url": "assets/js/32.1dc483ae.js",
    "revision": "6d1d6bea14c6b13ffc29d5e42d5c7c95"
  },
  {
    "url": "assets/js/33.26c42623.js",
    "revision": "fab30248150deef59fd49b6ea18dbcfb"
  },
  {
    "url": "assets/js/34.372bdcc0.js",
    "revision": "7899d07b0077655d7e2325396daf3fe0"
  },
  {
    "url": "assets/js/35.5b508c2a.js",
    "revision": "4a96e55cf01b61530125501193d1092d"
  },
  {
    "url": "assets/js/36.42e64040.js",
    "revision": "1cfc777e9c062a3db8ae2c7bf63ab763"
  },
  {
    "url": "assets/js/37.567394c5.js",
    "revision": "07dd52304e2ae23130aa00b4ab38f9f0"
  },
  {
    "url": "assets/js/38.f2d7d898.js",
    "revision": "464f0de3c86ce736dcc4af4276a7e594"
  },
  {
    "url": "assets/js/39.02639473.js",
    "revision": "23cb11e58d9a52e191cd15d0605ed7c8"
  },
  {
    "url": "assets/js/4.224f1d17.js",
    "revision": "52f959b164b92f35f0a85ef157a2ffcc"
  },
  {
    "url": "assets/js/40.860d4e07.js",
    "revision": "9d5d25054594d6f04ff3ba1e60156c35"
  },
  {
    "url": "assets/js/41.523ed2da.js",
    "revision": "6bc4320d8838d667e8ada3b4d120cb76"
  },
  {
    "url": "assets/js/42.b60166a7.js",
    "revision": "0aa4d1f6508ad7c55aa0cfc2ee2cbb60"
  },
  {
    "url": "assets/js/43.3397ca7b.js",
    "revision": "dedb3a41a687d44232067329061dc2ca"
  },
  {
    "url": "assets/js/44.bc9faf80.js",
    "revision": "995db6e4ea5a5e230861cc366a5f63d5"
  },
  {
    "url": "assets/js/45.4974fcf6.js",
    "revision": "8128ea2d488d375ce6df92d37ea28ec9"
  },
  {
    "url": "assets/js/46.e0b90327.js",
    "revision": "9dc633a9d83544a343847f87c409e91b"
  },
  {
    "url": "assets/js/47.26c3ed64.js",
    "revision": "60dfbd646996b546f15552b4020c03cd"
  },
  {
    "url": "assets/js/48.7fa1385e.js",
    "revision": "82c8ae5e599cd675152758791db78be9"
  },
  {
    "url": "assets/js/49.1993f709.js",
    "revision": "b000825d5e8c1d24dfdc0d6f1ba34210"
  },
  {
    "url": "assets/js/5.bcf32c87.js",
    "revision": "4fda4a617cb5bccdc4df492d47baf754"
  },
  {
    "url": "assets/js/50.449c01b7.js",
    "revision": "f20f41421da17eeab45186c467e8fa3a"
  },
  {
    "url": "assets/js/51.8448f9d0.js",
    "revision": "6a05ec8a4ec6ab3df9f59453400c2691"
  },
  {
    "url": "assets/js/52.b00a014f.js",
    "revision": "6a0a103ff5b9ca4283698f22d4908b67"
  },
  {
    "url": "assets/js/53.6f87dec7.js",
    "revision": "beeb9ace36d65e888fc64c5e21fa5ecb"
  },
  {
    "url": "assets/js/54.5cb2bb2e.js",
    "revision": "7e351a61e38f5e64072886d3f9532aad"
  },
  {
    "url": "assets/js/55.45033e25.js",
    "revision": "714333a066689fed37bd7014c4dff527"
  },
  {
    "url": "assets/js/56.51eebb15.js",
    "revision": "c83a657a28ff90e3e037033af5d67a5c"
  },
  {
    "url": "assets/js/57.fa00f3c8.js",
    "revision": "9cfd158af2ebeea261ceaa19e9edfebd"
  },
  {
    "url": "assets/js/58.ae154f9b.js",
    "revision": "c5ad012d0e9468feacea42ae376ace78"
  },
  {
    "url": "assets/js/59.b17b9b32.js",
    "revision": "27dfb57ca996343f48a21a2c61d5b8a4"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.4e36b361.js",
    "revision": "0518d7fe0e8d011dbc319cafacfb4c77"
  },
  {
    "url": "assets/js/61.3b3ec8ef.js",
    "revision": "034a3a5dbd348defefa6f345508a59b3"
  },
  {
    "url": "assets/js/62.3219a802.js",
    "revision": "d8786cf66f3ef11a3a2722aa7d7fba3c"
  },
  {
    "url": "assets/js/63.949d911c.js",
    "revision": "f1bcb4f0a7b811e0f138643dca21166c"
  },
  {
    "url": "assets/js/64.7dcdf3c1.js",
    "revision": "7d94e72e46f72158a2d901ab67850c63"
  },
  {
    "url": "assets/js/65.7caa682e.js",
    "revision": "ebf268957706f6e70e18eec640ffaba8"
  },
  {
    "url": "assets/js/66.1f508ea9.js",
    "revision": "15c2685b69a18deb771542128f5beaea"
  },
  {
    "url": "assets/js/67.6de1cacd.js",
    "revision": "0bb07a2053c8c47e9b5ab7e6fc80fcd9"
  },
  {
    "url": "assets/js/68.b3b01d14.js",
    "revision": "2f52782409626f413d47c6d765a3d994"
  },
  {
    "url": "assets/js/69.ec2d42da.js",
    "revision": "c8968ace80df5a49d047c561ac6cb161"
  },
  {
    "url": "assets/js/7.d72185e1.js",
    "revision": "85dd857690f79d7f03db75c9c71bd5c3"
  },
  {
    "url": "assets/js/70.96e8aaa5.js",
    "revision": "21e5e87c07427c90291a5e0c703de5a0"
  },
  {
    "url": "assets/js/71.0dabbf52.js",
    "revision": "0c843a0736fb62a5678df6abf0e5d46b"
  },
  {
    "url": "assets/js/72.4fab5249.js",
    "revision": "2272441671cfa6e9d47a76a153fbc4e0"
  },
  {
    "url": "assets/js/73.e1eb7d07.js",
    "revision": "d5496233c59f06e02d2b81ab97a3dadf"
  },
  {
    "url": "assets/js/8.5396c4d5.js",
    "revision": "8eb3b461099607f39accda4670e4a929"
  },
  {
    "url": "assets/js/9.60b709bc.js",
    "revision": "ea975a7e51638ac5a35b5cfbd54a11f9"
  },
  {
    "url": "assets/js/app.bc3c5a66.js",
    "revision": "d47adef7259e88289c93c6e0a2bc3204"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "cd51305eef416d70661d8754ddb0f830"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "0308a402bab01512493e8d4ee1bbef9f"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "d4b7bb344d738cefe124166d074ed32f"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "78bbe1760c0042d6b60fd2d37dddb3b9"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "c1d352d366a999595c0e90342f813ec5"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "b09dc2b45280135ff0a19f2de2ce36d9"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "ab8cec58b9c60b76b5aa882c27092fd3"
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
    "revision": "fce26a8d735738e4fee913529f014c03"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "fe4c3f4534bfe3f92f760c50047c7c12"
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
    "revision": "ff4237316a19cea4f5dc402b219428b8"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "417465c9a129e70f3cfdf3e076013082"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "a72a5e1a12bfef39767db868c6b64ff3"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "4c4717d84283328de485cf054405e0e4"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "12eb2d44ba3009968b126573c4cc25f6"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "e22e63226784b25afbd230a948f4037c"
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
    "revision": "720117857747e109805769acd5e17bc5"
  },
  {
    "url": "guide/index.html",
    "revision": "64db4137130b298af9da7a1fa370b28e"
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
    "revision": "0bbf4a70b88cd6042db72235ba931649"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "1b36d8d079bb0c049da023a039de6cd3"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "b6e2c6096d54f23d01ae8d642f170bc3"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "38b029cee8e278263d050d9aa064c2f1"
  },
  {
    "url": "more/clean/index.html",
    "revision": "40435f5806f347cd55257303bc4ef20f"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "2150d2d7f5db843b4c84199610e79ea0"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "517a709f995c6afb29526dd18a5209c3"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "2a6c30f524902a1bf3558c1cb3432221"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "4175dec6b14a370e90647c015b460cf8"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "8842b46efe50aa16b1705af84367b827"
  },
  {
    "url": "more/interview/index.html",
    "revision": "aa07da8dd3dd4674c00a84fb641b36df"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "66d60a1905aa4f79abf0ddcddff14bb8"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "ff912014bfc1dfd49fe912a97e6f9622"
  },
  {
    "url": "os/centos/index.html",
    "revision": "546c6fd1608b2ac067e94badf7b894ee"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "4173acc11df1315a1990032635f93fcc"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "378acb1134dc087657152f7056e2226a"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "3a67c7bfa919bb53c7d8bad0b005217c"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "6d6f7ff90cca158e093442afe57fd56f"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "ecc1abba580ee46ae0d20242ef0f93c4"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "3e74234a2ce0e41d59f4d7dbcf2b4e65"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "ac5f807b044687de21ed7b9915dbf8a3"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "42c11d7910422b27a82e683fd99ea0de"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "c38ff1b713f0f9ef95eab54371a02bcf"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "743ff8b5b2766c2ee9ba0b9304a2d992"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "75f443cc117476ad8e252188e0c485d8"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "4ae96cbc6af58e1fed1fb2c9e8827fc7"
  },
  {
    "url": "os/linux/index.html",
    "revision": "8a6b789739cb5b46a53bb7798c97fbe5"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "3ede8fadd780646d6c47d0d8dacabc04"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "ccc2dbc8b5c0ae2161d360317190afca"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "48260bc22ad7cf4f8a020c345c429044"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "de97bd04804ed1bef82114393524ab1a"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "71c055c1115b787d1cb462e3a0b817be"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "8bc8250d7cef606f0a4c58f16322489d"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "cb51feb4c035952af8f01ad746382871"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "6b17a949f65fef6c618809d920743ed2"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "ac5d59a6dd214bd0c3fadae6612ca4d5"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "33b9d10d5952e47310e4294915e37ad6"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "660c93d5c8222d2b7d1ad866a98f9557"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "1d49009229299f37477048575a39ce06"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "143b1d41c472cc2fc6f2bc752420855e"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "0bfa76cdaa03edec206e424db8b88b8b"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "532607b5a157482778193b5dd228e710"
  },
  {
    "url": "tools/git/index.html",
    "revision": "429fe10431ccdcceb4ec379e72dc06e4"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "7686c30b6a54d5e42b110d0757420d0e"
  },
  {
    "url": "tools/github/index.html",
    "revision": "6662385a3cc25bcd07a6d73c716563e4"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "bf08ace526448ee1fdd4276c236868e3"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "61fddba146e2026bc0a919ae918e6ef1"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "bafad0b73f3d37c4a84e43fb004c742f"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "c0f925788fbb57a420358ecc12b3844a"
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
