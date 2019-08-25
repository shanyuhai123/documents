---
title: Ubuntu 下安装最新版本的 Nginx
---

## 安装依赖

```sh
sudo apt install curl gnupg2 ca-certificates lsb-release
```



## 更新源

```sh
# 稳定版
echo "deb http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 最新版
echo "deb http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```



## 验证 Nginx

```sh
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
# 输出 OK 则正确
sudo apt-key fingerprint ABF5BD827BD9BF62
# 对比输出结果是否为
# pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
#      573B FD6B 3D8F BC64 1079  A6AB ABF5 BD82 7BD9 BF62
# uid   [ unknown] nginx signing key <signing-key@nginx.com>
```



## 安装 Nginx

```bash
sudo apt update # 更新
sudo apt install nginx # 安装

nginx -v # 验证
# nginx version: nginx/1.17.3
```

