---
title: CentOS 下安装最新版本的 Nginx
---

## 安装依赖

```sh
sudo yum install yum-utils
```



## 更新源

```sh
vim /etc/yum.repos.d/nginx.repo

# 配置内容为
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
```



## 启用配置

```bash
sudo yum-config-manager --enable nginx-mainline
# 或 nginx-stable
```



## 安装 Nginx

```bash
sudo yum install nginx

nginx -v # 验证
# nginx version: nginx/1.17.3
```

