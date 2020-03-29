---
title: 访问 Github
---

## 介绍

由于部分原因会导致无法访问 Github，可配置 hosts 来解决一部分的问题，若之后彻底封了这方案自然是无效了。



## 配置

找到你的 hosts 文件，然后追加以下部分。

```bash
# github
192.30.253.112 github.com
192.30.253.113 github.com
151.101.184.133 assets-cdn.github.com
151.101.185.194 github.global.ssl.fastly.net
151.101.184.133 avatars0.githubusercontent.com
151.101.184.133 avatars1.githubusercontent.com
151.101.184.133 avatars2.githubusercontent.com
151.101.184.133 avatars3.githubusercontent.com
151.101.184.133 avatars4.githubusercontent.com
151.101.184.133 avatars5.githubusercontent.com
151.101.184.133 avatars6.githubusercontent.com
151.101.184.133 avatars7.githubusercontent.com
151.101.184.133 avatars8.githubusercontent.com
151.101.184.133 user-images.githubusercontent.com
151.101.184.133 camo.githubusercontent.com
192.30.255.116 api.github.com
```

