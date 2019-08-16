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
    "revision": "6c7c96439daefa60bd0124318923f737"
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
    "url": "assets/js/10.839a682a.js",
    "revision": "15ecb3d6d88cc1c1d8c0f5b69b8ae5de"
  },
  {
    "url": "assets/js/11.be75d00f.js",
    "revision": "383c01571898c5be4442f172a61a8443"
  },
  {
    "url": "assets/js/12.adddfcb7.js",
    "revision": "61590c77ffc3dca78e46646496aecf00"
  },
  {
    "url": "assets/js/13.0ac25a2a.js",
    "revision": "1a9e3a67a8157b886f7be47ad512287c"
  },
  {
    "url": "assets/js/14.a5fa92f1.js",
    "revision": "63d4bcd737d111dd95a4b22172e48030"
  },
  {
    "url": "assets/js/15.79016036.js",
    "revision": "f7b8f07046b923e8c60ec5ef46680c17"
  },
  {
    "url": "assets/js/16.ac89c0d6.js",
    "revision": "ccda0326c93ba8966bd9336e08602b5d"
  },
  {
    "url": "assets/js/17.45e317c6.js",
    "revision": "3aafb48e532a9737eb954759db40cd08"
  },
  {
    "url": "assets/js/18.4988d92a.js",
    "revision": "487b95b99c34e6342c7946d0d20446dd"
  },
  {
    "url": "assets/js/19.07663625.js",
    "revision": "6528636e8c1c5caaf7c92061a5f44935"
  },
  {
    "url": "assets/js/20.297934b8.js",
    "revision": "b1333985b0bd344ba24770867eb029ab"
  },
  {
    "url": "assets/js/21.af92dd33.js",
    "revision": "ea3756121ac77253437389a0fc122706"
  },
  {
    "url": "assets/js/22.86f896c8.js",
    "revision": "4ca1bf652affb52f253efd48ba0cd1e7"
  },
  {
    "url": "assets/js/23.9d5b71fd.js",
    "revision": "3d85660d5a02a5bb9349e2e7f1c2161b"
  },
  {
    "url": "assets/js/24.21a78a8c.js",
    "revision": "17c9658536e4750ef9bb7a52f5fecc2e"
  },
  {
    "url": "assets/js/25.2d40a052.js",
    "revision": "d02f1f40fa22077757d15960cfa5b2a5"
  },
  {
    "url": "assets/js/26.3d2f32eb.js",
    "revision": "f9be98b2827c198f995b1e5c3a02d3d3"
  },
  {
    "url": "assets/js/27.1e968eb6.js",
    "revision": "158068d32d0545cf9b29ffc2d8a21e73"
  },
  {
    "url": "assets/js/28.9bb0070b.js",
    "revision": "7e7df6438122a3b93818b53859dff7b8"
  },
  {
    "url": "assets/js/29.85b6f3b9.js",
    "revision": "393ac2e4c3f593733def7f15e328742a"
  },
  {
    "url": "assets/js/3.ab280696.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.9aa610ff.js",
    "revision": "d77b7b4f60ab5a3ea58e5232e7f34cf9"
  },
  {
    "url": "assets/js/31.36f16204.js",
    "revision": "ae61fa9344d4e131d23f9f0d1f6e8089"
  },
  {
    "url": "assets/js/32.4a24c02b.js",
    "revision": "d397ecd9efc792347515c5a5135fd87b"
  },
  {
    "url": "assets/js/33.6d3e66fa.js",
    "revision": "83d2580bb726c42a27560cde1bfc9c17"
  },
  {
    "url": "assets/js/34.bf8029f7.js",
    "revision": "d9c51655f94f3eddbe1f3c29b1e7cc0b"
  },
  {
    "url": "assets/js/35.ac15d921.js",
    "revision": "a19a2d2f3883b8195cf7aad6ea4164f1"
  },
  {
    "url": "assets/js/36.1db67fd4.js",
    "revision": "6c12f9e3cc7f03042c10d82b42e50eea"
  },
  {
    "url": "assets/js/37.b0a63f27.js",
    "revision": "03dc764d82140a16c02c7f9d2c911008"
  },
  {
    "url": "assets/js/38.25088049.js",
    "revision": "460e396d874946bfa610e12ec72394e2"
  },
  {
    "url": "assets/js/39.1f696420.js",
    "revision": "4051e791ef10d493e28895ad72447aba"
  },
  {
    "url": "assets/js/4.b1b88a84.js",
    "revision": "cf0c072b7d7ec309ebbd9039fdcc2467"
  },
  {
    "url": "assets/js/40.3d39500f.js",
    "revision": "0643096dee564de03e1274ce1f8c79d8"
  },
  {
    "url": "assets/js/41.c348caec.js",
    "revision": "b485208b6785cb5c445ed5d09257694b"
  },
  {
    "url": "assets/js/42.16dc63a1.js",
    "revision": "1750b36eb19e13c7413ac12ca61a00b9"
  },
  {
    "url": "assets/js/43.b551c668.js",
    "revision": "98a45fb0bc3084dafb0a2fde262c8cc5"
  },
  {
    "url": "assets/js/44.5d37a105.js",
    "revision": "3eee2eedd49c91265e999c21a2817d34"
  },
  {
    "url": "assets/js/45.9cee3408.js",
    "revision": "1de0176ac1d85f867def94f748e5dbc3"
  },
  {
    "url": "assets/js/46.dffce64a.js",
    "revision": "4ad1720fba69a6d08ad9775c106226d8"
  },
  {
    "url": "assets/js/47.6aaa5306.js",
    "revision": "199ea3fe489cdc670b89a6de2a72e828"
  },
  {
    "url": "assets/js/48.515d2db5.js",
    "revision": "65913241eca26994b10bf1911834b872"
  },
  {
    "url": "assets/js/49.6536cb2d.js",
    "revision": "d0709ebdc3a04d7104676bfe05c50bd0"
  },
  {
    "url": "assets/js/5.69c9e47e.js",
    "revision": "f8b4659419746e794fba2183c5c02dd9"
  },
  {
    "url": "assets/js/50.783947ef.js",
    "revision": "f5a32d71d0380ab3a329e03298b8c89c"
  },
  {
    "url": "assets/js/51.06425c63.js",
    "revision": "0f2e155dfd80169fd76ee375f61df457"
  },
  {
    "url": "assets/js/52.e295d545.js",
    "revision": "b3126d79821e8d53c0adbac021a2b744"
  },
  {
    "url": "assets/js/53.f85b2101.js",
    "revision": "06f1a0b6753b28413fb00f49c734deed"
  },
  {
    "url": "assets/js/54.2730180c.js",
    "revision": "30b118dabda8763157256aa6a65c9e64"
  },
  {
    "url": "assets/js/55.a6caa9ca.js",
    "revision": "c4859d91ca0f30dd5ea843017ee74640"
  },
  {
    "url": "assets/js/56.609a259a.js",
    "revision": "601886884d15a3e7d2901c6f19950275"
  },
  {
    "url": "assets/js/57.92532832.js",
    "revision": "7eb77205b7b3e177c95c9bc462c82088"
  },
  {
    "url": "assets/js/58.e37e0336.js",
    "revision": "783c036f78b1f3856d4a105ef65cf5c3"
  },
  {
    "url": "assets/js/59.031304dc.js",
    "revision": "33580361a91db9d0822d9ceb2dbbcf65"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/60.f0152721.js",
    "revision": "821c128ea8d989c27598e4c87c04b37d"
  },
  {
    "url": "assets/js/61.f8fda5b3.js",
    "revision": "28c05b1be5df1d2d3f7453f80f4f8e91"
  },
  {
    "url": "assets/js/62.ccbdd6a9.js",
    "revision": "68bad922b61ce749a3fa70251a7c0fb0"
  },
  {
    "url": "assets/js/63.4b9fb7c8.js",
    "revision": "e67561daad6dabb7ade7d7ac19df596e"
  },
  {
    "url": "assets/js/64.b6495997.js",
    "revision": "ba42993be86969d601c1a1ed14140e7e"
  },
  {
    "url": "assets/js/65.40a1cf71.js",
    "revision": "d9c9d60a039684e1985fe31842575013"
  },
  {
    "url": "assets/js/66.02f44f81.js",
    "revision": "f3e37cbe8802e245b09a507e23dde306"
  },
  {
    "url": "assets/js/67.7332f004.js",
    "revision": "b4aee2611cb6632c235938be094344d0"
  },
  {
    "url": "assets/js/68.fafdd322.js",
    "revision": "17f80caecd70ff422bc508ea2c882e65"
  },
  {
    "url": "assets/js/69.6c1ed81a.js",
    "revision": "d067d44e7b61b20785cd79d0de2d4905"
  },
  {
    "url": "assets/js/7.18370e64.js",
    "revision": "b1eb8712c7308f09beff88062cfcf64a"
  },
  {
    "url": "assets/js/70.42ea6d53.js",
    "revision": "90af88f87474a80a75bf655e6f827903"
  },
  {
    "url": "assets/js/71.3886e269.js",
    "revision": "52899b5003ca4a1cb6d5a7eb5c6c2685"
  },
  {
    "url": "assets/js/72.fe169819.js",
    "revision": "a7e18668c66cdc41dd074b7433487bf0"
  },
  {
    "url": "assets/js/73.8d3c9799.js",
    "revision": "d0a76005f46cc595e029e9b9e951d765"
  },
  {
    "url": "assets/js/74.3df607f9.js",
    "revision": "817d9d7bf9bcf4bef4351dec6c986758"
  },
  {
    "url": "assets/js/75.4935972b.js",
    "revision": "77af8b5f77c4c4589e34a4bd2f36bb7e"
  },
  {
    "url": "assets/js/76.57cec5ae.js",
    "revision": "ba3e3d7d0303bbff49e86e209d790a0d"
  },
  {
    "url": "assets/js/8.c78f8716.js",
    "revision": "aebcd3f075eb6d3e67c11ffcd1fa1dc5"
  },
  {
    "url": "assets/js/9.98c5db61.js",
    "revision": "24c76615680232f1fa9e4cbe737c532d"
  },
  {
    "url": "assets/js/app.82badbfa.js",
    "revision": "88d5bd0f83a5001d3e57d6ecdb1f82c0"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "560e1fb5d4d5bda49c7f3014c485ce63"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "3fccc3612b041a1e3e379587d782005a"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "042c3193ce77a1c5c7a39636b97d6e8e"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "ce3766476e340aeedcb8d0a8599e7f0c"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "01163d3434ed50c0d61e44e856a3e983"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "646d815413d3933f9f1fd5ae84c2d365"
  },
  {
    "url": "backend/nginx/ubuntu-installs-the-latest-version-of-nginx.html",
    "revision": "67e6bec715f77fff932db65794705bbf"
  },
  {
    "url": "base/interview/1468042984788341.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "computer/data-write.html",
    "revision": "0d846f87277d21cf8df4143294f7df98"
  },
  {
    "url": "computer/index.html",
    "revision": "2b93b845218f8fb65ea1085e698f3fe2"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "0ddc5ec687a39242ec684bfd5d24319b"
  },
  {
    "url": "frontend/javascript/array-methods.html",
    "revision": "32bcfa2fa6446b10277509883d6a4355"
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
    "revision": "b82da50dcbff105c5661905d10596f46"
  },
  {
    "url": "frontend/javascript/maybe-optimization-is-needed.html",
    "revision": "3820cde65261b6a82154514a2af89d30"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "a86ff006c68265b2f7cd5abe5cd64d34"
  },
  {
    "url": "frontend/nodejs/install-nodejs.html",
    "revision": "b7a3f7759c10127fa520fd1749e31a23"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "a2fee3ee1a906dce7b476c094e531280"
  },
  {
    "url": "frontend/webpack/loader.html",
    "revision": "51e6c3632dcf3172650fe44760b0ca50"
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
    "revision": "6b546c7887d0ef1c9f06765e25a384c1"
  },
  {
    "url": "guide/index.html",
    "revision": "d36b4a78610bbeadb4604ef963698467"
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
    "revision": "d6fe9b884405cfceedcc5e4fc2d70592"
  },
  {
    "url": "more/algorithm/index.html",
    "revision": "bf0bab71ab41507e284454f31102f400"
  },
  {
    "url": "more/bookmark/index.html",
    "revision": "d9c6bf1904e4090f567c98e06d4fd631"
  },
  {
    "url": "more/clean/docs.html",
    "revision": "937edd1f0b2b7a6add8d07a5b8b981df"
  },
  {
    "url": "more/clean/index.html",
    "revision": "6a01d355809af7817a97f0772e35ec03"
  },
  {
    "url": "more/clean/javascript.html",
    "revision": "50e904881e5a17368c4bb29a63c76f68"
  },
  {
    "url": "more/clean/versions.html",
    "revision": "2676da0b3449c11b46f333b689ab0533"
  },
  {
    "url": "more/hodgepodge/index.html",
    "revision": "c7ef7dec867413c8236f9beeab8c76ab"
  },
  {
    "url": "more/hodgepodge/restful-api-best-practices.html",
    "revision": "ef2044fc5c25e3da4384d5da44ea4ad8"
  },
  {
    "url": "more/interview/add-large-numbers.html",
    "revision": "4e97d5910283cce2531edbd8cbc1bcc6"
  },
  {
    "url": "more/interview/index.html",
    "revision": "4e44ada32da27d4a4adada434e967809"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "2d03eec7367a9fb4d1d0c3ad31dab8ae"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "4c7bca677359aa7bb5ea7fd012a03920"
  },
  {
    "url": "os/centos/index.html",
    "revision": "fccd83959951ed20610898d920211e7b"
  },
  {
    "url": "os/centos/install-centos-for-the-first-time.html",
    "revision": "1d475bf5e08a95870d6b32507e9e5614"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "953b4608ff98e1b4e2151a959f61b607"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "4996f91feaafc024c8e29e01ae72afba"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "d8e6c1f5d26aa22d6a1d2c76832aa2df"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "7659e6e91aa6b0d6af4477332685b1d5"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "fc205f8c9d875bd31401076e3eeceb3e"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "44bb0cabe660da5eb1b7e4b5f23ae21b"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "5b53caa9c59c6677f78d854a4bd5b972"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "371885776398f03a7668a4718a319c1f"
  },
  {
    "url": "os/linux/generate-ssh-key.html",
    "revision": "cedd3466301fc728ce93ab3d075a5b80"
  },
  {
    "url": "os/linux/how-to-install-centos-on-virtualbox.html",
    "revision": "e7fd688afd8355e83dac45a51459f278"
  },
  {
    "url": "os/linux/how-to-install-manjaro-on-virtualbox.html",
    "revision": "ead6021b7b6e846ba85f37d7e84cdae7"
  },
  {
    "url": "os/linux/index.html",
    "revision": "f3d7fd1fc00b86136c2e7aa7716b462c"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "cba9d2d533edc35cf306a5492b83c89c"
  },
  {
    "url": "os/linux/login-with-rsa-key.html",
    "revision": "40c05b2627c47b68dbdf7467d25f15b7"
  },
  {
    "url": "os/linux/scp.html",
    "revision": "ad75ccf0ecd74fa935e8d166ae814952"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "eb310c743a2cce510c6f6c1007ee50c1"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "263da781e677fb4af85f062b74ab27b1"
  },
  {
    "url": "os/manjaro/index.html",
    "revision": "00c39b5396530597fe4096a0c68cf17b"
  },
  {
    "url": "os/manjaro/manjaro-configuration.html",
    "revision": "4b127e6cee156d029239e56aa337adf1"
  },
  {
    "url": "os/manjaro/most-used-softwares.html",
    "revision": "52e92414d3ed47e0316f92868415751c"
  },
  {
    "url": "OS/manjaro/os_manjaro_5_20190218171136.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "os/manjaro/solve-problems-with-manjaro.html",
    "revision": "19a239b4122f5af32ce186c4b70996d2"
  },
  {
    "url": "os/ubuntu/add-user.html",
    "revision": "274aad5dcb51d4e4b0c6216ca0151e86"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "f628c350f6c8fc7f2f1acecb5b22d792"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "80160064ee14c6ac7b7e9bd3142ee713"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "8360ce0534880aab81375c07a6ae5908"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "04b8b478f14f596fa0978172be948068"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "3bf1052dac3bd4dc2a8da4ed495e173f"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "7eba7fd21afd0fb36ca44269bc60baec"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2ad712c06acfc1de0bd9df877bb5f158"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "aee9a17fe40bc49329737b446c730c4b"
  },
  {
    "url": "tools/github/index.html",
    "revision": "59da488bdeca2900b333d4af6ee5a525"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d4e24ba70293466ae5c4fb904538e286"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "152a83c2e71828870cb7122cf1e2e280"
  },
  {
    "url": "tools/vscode/plugins.html",
    "revision": "56f024db32a368e41bdbe80dc171cc29"
  },
  {
    "url": "tools/vscode/tricks.html",
    "revision": "0bd28734b8f15455ec0261583d11f7db"
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
