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
    "revision": "b3deca5e5a23a91994922316bdc3492a"
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
    "url": "assets/js/17.22168e41.js",
    "revision": "9a400807182e6cc9e6f24586801b79e7"
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
    "url": "assets/js/39.fe29841b.js",
    "revision": "dfdaaa94dd607fe8bbbd09d6c6c8a2b2"
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
    "url": "assets/js/41.a5d13cc5.js",
    "revision": "6b92ea33e4892e753e9416344fa0b230"
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
    "url": "assets/js/45.0c30e28f.js",
    "revision": "13ced29c9a4af41e9abefa5cf300bff3"
  },
  {
    "url": "assets/js/46.57a0c1ce.js",
    "revision": "5752c415a6a7ec6507d997c16fad5d1f"
  },
  {
    "url": "assets/js/47.26c3ed64.js",
    "revision": "60dfbd646996b546f15552b4020c03cd"
  },
  {
    "url": "assets/js/48.16c55cbb.js",
    "revision": "1d632938c2eb747014adb3bb5219c9fd"
  },
  {
    "url": "assets/js/49.5323682c.js",
    "revision": "2a69bcfb38a592ca51110fb34aeeaae4"
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
    "url": "assets/js/52.d35e419d.js",
    "revision": "89def6a116b3b5b6191aa217dc2fc8ee"
  },
  {
    "url": "assets/js/53.53b8aad9.js",
    "revision": "9c84d444d2ce8a61c593a142592bee74"
  },
  {
    "url": "assets/js/54.5cb2bb2e.js",
    "revision": "7e351a61e38f5e64072886d3f9532aad"
  },
  {
    "url": "assets/js/55.ec523ddb.js",
    "revision": "986625d74eff9abf0cb8ef0eb7822bfd"
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
    "url": "assets/js/59.2a528e9d.js",
    "revision": "c2375dfbc25038f4db9fe7cfee3a1242"
  },
  {
    "url": "assets/js/6.12b05d96.js",
    "revision": "db22879f5d978dcdb62613a5e4358849"
  },
  {
    "url": "assets/js/60.463ad364.js",
    "revision": "dcb46dfb21263b2cfb27a74585b60ada"
  },
  {
    "url": "assets/js/61.9483a153.js",
    "revision": "5da7e872500ae273b2d739ecf07ef4dd"
  },
  {
    "url": "assets/js/62.6f085388.js",
    "revision": "6986066a493c4c25a10ec1994f922aa4"
  },
  {
    "url": "assets/js/63.0840901a.js",
    "revision": "4e298daa5e226127cc30677c5e58895d"
  },
  {
    "url": "assets/js/64.e26ccd74.js",
    "revision": "a31584df505eb0ca60d28f83bf187900"
  },
  {
    "url": "assets/js/65.6ed30baf.js",
    "revision": "9c5646cec2c2b28503409f577cc7c76b"
  },
  {
    "url": "assets/js/66.8ee89ae9.js",
    "revision": "3d60ef67cb2a602c8f34fb583373b713"
  },
  {
    "url": "assets/js/67.d6aa69a3.js",
    "revision": "b189953f9795c26db057b98c647ec9be"
  },
  {
    "url": "assets/js/68.97cad390.js",
    "revision": "49bdd4310c3d5b6f56e9c6fa1da080a3"
  },
  {
    "url": "assets/js/69.3c9eacae.js",
    "revision": "d61e8ada4d0ebd43696317ab7f3637f3"
  },
  {
    "url": "assets/js/7.b1f2efd6.js",
    "revision": "580e43f5bde07cda27c6e9af9837f12b"
  },
  {
    "url": "assets/js/70.96e8aaa5.js",
    "revision": "21e5e87c07427c90291a5e0c703de5a0"
  },
  {
    "url": "assets/js/71.43014791.js",
    "revision": "484bee7b503cb731b6e5bc94748ac17b"
  },
  {
    "url": "assets/js/72.fc2b8df4.js",
    "revision": "8bd66e8e66b419d216746f3caf33d91f"
  },
  {
    "url": "assets/js/73.e1eb7d07.js",
    "revision": "d5496233c59f06e02d2b81ab97a3dadf"
  },
  {
    "url": "assets/js/8.87618958.js",
    "revision": "3b8046ffcddae325368648380e85201f"
  },
  {
    "url": "assets/js/9.60b709bc.js",
    "revision": "ea975a7e51638ac5a35b5cfbd54a11f9"
  },
  {
    "url": "assets/js/app.c5c27252.js",
    "revision": "ac6a9cc4304d7a870d02576f6e88d82b"
  },
  {
    "url": "assets/js/vendors~docsearch.d37d6418.js",
    "revision": "9d25b8980720b2eff05b5bf7779bd621"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "61f43d551b456f3ccca03a40a68c3957"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "8696464e10a34fd35cc1bb3ff4e75a54"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "1b2f1ea8388da24d27b8dcc271da79ad"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "f25f21094b0553937a4bbe7d12dcfcd1"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "46a16b6c7571de11c668891ecc59ffa3"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "6c3a4f8bd073cd4d9eca2a57e7636cac"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "bb2c1058fa3ca86e3b0a6128398beeb4"
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
    "revision": "8bbf2f22ea64ef2103eadded7f7d7d6c"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "d4e1d576d8812c36d32e560eed9ab0ed"
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
    "revision": "44340a5a20ac5d924ccc02ec40f11280"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "3d4d61c214d49068605f29ce95508cec"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "c7d19751cfcb779322ab587d69e42cbf"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "164193ac33ca9f89c27354363e7f87a6"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "3b90afe32745ca9616636433a8a047cc"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "bd7da7cd3fb68d1faa072afff27f1d0d"
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
    "revision": "72717d5f6a5e70210c80ef192a3adba1"
  },
  {
    "url": "guide/index.html",
    "revision": "945f265a04cc1722a5384eae20617a73"
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
    "revision": "711b8d0e96ef55e9a2d8e0b9cb43dcb4"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "2cbd6a412007bc4fac13ad3e8c2f7f97"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "b67bde6797acad844a11f214fed5a286"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "7d78937d6ffa2c010249308d51d26839"
  },
  {
    "url": "more/clean/index.html",
    "revision": "60cc4c03f916946a44c77ad022696659"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "d218da2cbd4b9368ed20a3160c8cacb5"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "ce75b373acd198b6fdefc3b7df244376"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "a604ae6c0baaca9772ccd6ff48a4a9cd"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "9136269fe4ecab7e5abad0c1dc9265e0"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "649aaf8ba0d10b2e0d8a55b08b0d610b"
  },
  {
    "url": "more/interview/index.html",
    "revision": "4c61c799c7e0549290d53c5d3c493621"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "6d9ec189a0c352b1e17e76e7f16672fe"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "4a310e67602ea540e849e460d26b7f1a"
  },
  {
    "url": "os/centos/index.html",
    "revision": "9c53f2856869a102932e866539b55442"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "9fefaffe30342118e451fb325cc3af8c"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "cfde7060d95f545dcb3febe2ee71ef89"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "7755bd15dd961da7125233276f0a28c4"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "dd380cd53679192ed685dd1b4ea89b0e"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "64308fedd6c697d26b5cd9872743d7d3"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "a74f8b509d2ce280180f25b0c8dc4162"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "72053938e42cf188a7747592076bdfe4"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "d3a264e074a3e3a174db5724b291c1d7"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "c167d3d1e233c2471a5bcdd8564b0428"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "758d9ae49389395e52920e3d4f52dff2"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "12c16370b3b8cd0712b99592139dd904"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "0001b376dabd753dbea099098fb64b44"
  },
  {
    "url": "os/linux/index.html",
    "revision": "18afb3ce8718703ec608f19604743aa2"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "a420278490d17be6d82c2bdb1dd0a36a"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "3cce71f78d960cedff7f4fb9be6822d0"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "eb2fd04b4f3ff3d8ff4e6630883b6c38"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "2a36097421815acac9aad9f5a7bc0d06"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "8b635a52b899e382a9e225ebb815fe74"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "8cfe920147c819782b2c8c7fa95ea25a"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "3aadb96f24504a639f31639ef777b122"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "e8e3e653e7e43ce2a485fed8528a19ec"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "d6c4905321557c09f895e092ef004ed3"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "65a82a489d99c0ee10cf19b3439d5925"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "992a63a967e01c0b16f4f58936fc0510"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "a4b777203d8dc09cc9cd8bc1ae078642"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "95fd0d53ba0df3591c861d922c0cbe53"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "43b8344e6303fcb3da3ee78e994c5b4d"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "e4bceecbe05cf9f47c51cfdd4888d6ed"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d12d95810b5227b59d26b8ec0e5f813f"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "8c1496b66193da244c4d6576b3754399"
  },
  {
    "url": "tools/github/index.html",
    "revision": "557b54fd1cc69617f1b6911ee4e127d1"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "e689f80147e7c396a58eef0a4acb61c4"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "a95e3aa46064b7e8b7823b26a69d6758"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "0e122b4a018f495d923bef6423223dc7"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "34815b31b7ca4ba6e0c00bf5de4c2bef"
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
