---
title: 升级 HTTP 至 HTTPS
---

## 介绍

HTTPS（HyperText Transfer Protocol Secure）即超文本传输安全协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。



## 阿里云证书

### 1. 申请证书

阿里云也提供了 SSL 证书的功能，购买[免费型 DV SSL](https://common-buy.aliyun.com/?spm=5176.2020520163.cas.3.646456a7X7VPVZ&commodityCode=cas#/buy)（在小字提示中可以注意到免费证书可以申请 20 个），购买成功后会在 SSL 证书控制台看到一个未签发的证书。

点击申请，然后绑定域名即可，例如 `blog.shanyuhai.top`，稍等片刻即可等待审核完成。

### 2. 安装证书

找到域名对应的证书，下载至本地，然后上传至服务器。

```bash
# 创建证书目录
sudo mkdir /etc/nginx/certs

# 拷贝证书到 certs 目录下
sudo mv ~/downloads/blog.shanyuhai.top_nginx.zip /etc/nginx/certs

# 解压
sudo unzip blog.shanyuhai.top_nginx.zip
# 修改命名
mv 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key
sudo mv 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key
```

### 3. 修改 `.conf` 文件

找到之前 Nginx 对应的 `blog.shanyuhai.top` 的配置文件。

```bash
sudo vim /etc/nginx/conf.d/blog.conf
# 添加如下内容
server {
    listen 443 ssl;
    server_name blog.shanyuhai.top;
    # 证书文件
    ssl_certificate certs/blog.shanyuhai.top.pem;
    # 秘钥文件
    ssl_certificate_key certs/blog.shanyuhai.top.key;

    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;


    location / {
        root /var/www/html/blog;
        index index.html; 
    }
}

# 接着访问 https://blog.shanyuhai.top 验证
```

### 4. 重定向 http 到 https

```bash
# 将 80 端口的虚拟机修改为以下内容
server {
    listen       80;
    server_name  blog.shanyuhai.top;

    access_log  /var/log/nginx/blog.access.log  main;
    rewrite ^(.*) https://$host$1 permanent;

}

sudo nginx -s reload # 重启 nginx 服务
# 接着访问 http://blog.shanyuhai.top 验证
```



## Let's Encrypt 证书

### 1. 说明

Let's Encrypt 提供的 [certbot](https://certbot.eff.org/instructions) 可以快速生成证书，并能够自动完成配置。

> 还原阿里云做的配置，并打开网站验证是否还原。

选择 Nginx 和 Ubuntu 18.04 后就会弹出对应的[安装步骤](https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx)。

### 2. Add Certbot PPA

```bash
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
```

### 3. Install Certbot

```bash
sudo apt-get install certbot python-certbot-nginx
```

### 4. Get and install your certificates

```bash
# 执行后根据提示一步步安装即可
sudo certbot --nginx

cat /etc/nginx/conf.d/blog.conf # 查看变化
# 访问 https://blog.shanyuhai.top 验证
```

### 5. Test automatic renewal

Let’s Encrypt 证书的有效期为 90 天，所以需要自动续订。

```bash
sudo certbot renew --dry-run
```

