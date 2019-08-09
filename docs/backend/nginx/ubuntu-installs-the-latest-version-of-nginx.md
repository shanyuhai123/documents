---
title: Ubuntu 下安装最新版本的 Nginx
---

## 安装最新版本的 Nginx

首先是更新超级牛力：

```sh
apt update 
apt install nginx
```

然而这样安装的 nginx 只是最新的稳定版本而已

```sh
sudo apt install curl gnupg2 ca-certificates lsb-release
echo "deb http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list
echo "deb http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo apt update
sudo apt install nginx
```

## 查看版本

```sh
nginx -v
# nginx version: nginx/1.15.12
```