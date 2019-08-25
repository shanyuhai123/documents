---
title: 安装 Nginx
---

## 检测源

首先需要检查当前源是否有 Nginx（CentOS示例），当没有的时候需要自己添加源。

```bash
yum list | grep nginx
# nginx.x86_64                             1:1.12.2-2.el7                  epel   
# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   
# nginx-filesystem.noarch                  1:1.12.2-2.el7    
```

## 更新源并安装

[官网](http://nginx.org/en/download.html) 可见 Nginx 稳定版本已经是 `1.16.1` ，所以需要[修改](http://nginx.org/en/linux_packages.html) yum 源。

更新 Nginx 的源在 [CentOS](/os/centos/install-the-latest-version-of-nginx)、[Ubuntu](/os/ubuntu/install-the-latest-version-of-nginx) 中稍有不同，需要区别安装。