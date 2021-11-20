# 全球最大同性交友平台 Github

一些操作与 Github 更相关，所以将这些文档迁移到该目录下。当然也为后期扩展 GIthub 相关的知识提供了方便。

## 修改 hosts 访问

由于部分原因会导致无法访问 Github，可配置 hosts 来解决一部分的问题，但部分地区存在 sni 阻断，修改 hosts 无效。

> 后续更新引用 [修改 Hosts 解决 Github 访问失败](https://zhuanlan.zhihu.com/p/107334179)

``` text
# Github Hosts
# Update 20210925
# domain: github.com
140.82.112.4 github.com
140.82.112.10 nodeload.github.com
140.82.114.5 api.github.com
140.82.113.10 codeload.github.com
185.199.108.133 raw.github.com
185.199.108.153 training.github.com
185.199.108.153 assets-cdn.github.com
185.199.108.153 documentcloud.github.com
185.199.108.154 help.github.com

# domain: githubstatus.com
185.199.108.153 githubstatus.com

# domain: fastly.net
199.232.69.194 github.global.ssl.fastly.net

# domain: githubusercontent.com
185.199.108.133 raw.githubusercontent.com
185.199.108.154 pkg-containers.githubusercontent.com
185.199.108.133 cloud.githubusercontent.com
185.199.108.133 gist.githubusercontent.com
185.199.108.133 marketplace-screenshots.githubusercontent.com
185.199.108.133 repository-images.githubusercontent.com
185.199.108.133 user-images.githubusercontent.com
185.199.108.133 desktop.githubusercontent.com
185.199.108.133 avatars.githubusercontent.com
185.199.108.133 avatars0.githubusercontent.com
185.199.108.133 avatars1.githubusercontent.com
185.199.108.133 avatars2.githubusercontent.com
185.199.108.133 avatars3.githubusercontent.com
185.199.108.133 avatars4.githubusercontent.com
185.199.108.133 avatars5.githubusercontent.com
185.199.108.133 avatars6.githubusercontent.com
185.199.108.133 avatars7.githubusercontent.com
185.199.108.133 avatars8.githubusercontent.com
# End of the section
```

## 参考资料

1. [Github](https://help.github.com/cn)
