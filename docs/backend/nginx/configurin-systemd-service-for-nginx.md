---
title: 为 Nginx 配置 systemd 服务
autoPrev: nginx-basic-operation
---

## 介绍

当使用[编译安装 Nginx](/backend/nginx/install-nginx.html#编译安装) 后，同样希望将 Nginx 加入至 systemd 进行管理，如果可以的话希望进一步对该 Nginx 进行区分。



## 阅读

首先需要了解一下 yum 安装的 Nginx 配置：

```bash
systemctl cat nginx.service

# /lib/systemd/system/nginx.service
[Unit]
Description=nginx - high performance web server
Documentation=http://nginx.org/en/docs/
After=network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/var/run/nginx.pid
ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID

[Install]
WantedBy=multi-user.target
```

接着可以阅读下官网的[示例](https://www.nginx.com/resources/wiki/start/topics/examples/systemd/)：

```bash
[Unit]
Description=The NGINX HTTP and reverse proxy server
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t
ExecStart=/usr/sbin/nginx
ExecReload=/usr/sbin/nginx -s reload
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```



## 操作

### 1. 下载

```bash
cd /usr/local/src # /usr/src 常用于存放内核源码
```

接着按照[之前](/backend/nginx/install-nginx.html#_2-下载)操作。

### 2. 编译

```bash
./configure --help | less # 查看帮助
./configure --prefix=/usr/local/nginx # 指定目录
make # 编译
make install # 安装

/usr/local/nginx -V # 验证 
```

### 3. 配置

nginx 配置：

```bash
# 启用 pid 路径
vim /usr/local/nginx/conf/nginx.conf
```

systemd 配置：

```bash
vim /usr/lib/systemd/system/nginx-compile.service # 此处自定义命名为 nginx-compile

# 添加如下内容
[Unit]
Description=nginx(compile) - high performance web server
Documentation=http://nginx.org/en/docs/
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
# 官网示例如下，但个人使用的为上面两种，尚分不清好坏
# ExecReload=/bin/kill -s HUP $MAINPID
# ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

### 4. 验证

```bash
systemctl status nginx-compile.service # 显示正确后即可执行 systemctl 套件
systemctl start nginx-compile.service
systemctl enable nginx-compile.service
systemctl status nginx-compile.service # 验证
```

