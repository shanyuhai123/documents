---
title: Git 代理
---

## 介绍

clone 大项目时总是乏力，下载速度极慢，这时就需要为其设置代理了。



## 代理

1. 全局代理

   该项可参考 [alias](/os/linux/alias) 部分内容。

   ```bash
   gfw
   ```

2. git 代理

   在 Git 官网可获得提示 `http.proxy`，虽然在其余地方搜索还得到提示 `https.proxy`，但在官网并没有搜到对应内容，怀疑是误传。

   ```bash
   # 设置代理 
   git config --global http.proxy 'socks5://127.0.0.1:1080'
   # 取消代理
   git config --global --unset http.proxy
   
   # 更好的形式当然是设置为 alias
   alias proxygit="git config --global http.proxy socks5://127.0.0.1:1080"
   alias uproxygit="git config --global --unset http.proxy"
   ```



## 说明

git 代理支持多种协议：`http、https、socks、socks5`，本机通过 `ss` 启用了 socks5。