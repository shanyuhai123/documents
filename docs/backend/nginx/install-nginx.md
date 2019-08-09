---
title: 安装 Nginx
---

## 准备环境

在使用 Nginx 前，最好先去创建一个 [Linux 用户](/OS/centos/add-user) 账号。

### 1. 基本环境

```bash
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim
```

### 2. 管理资源

在用户目录下新建几个文件夹来管理所有的资源。

```bash
# app 为 application 简写
# backup 备份
# logs 日志
mkdir app backup logs
```

### 3. 安装工具

RPM、YUM 和 APT 都可以安装和删除包。不过，个人习惯用 YUM 安装包，使用 `rpm -ql xxx` 查看包相关的路径。

## Nginx

### 1. 检测源

首先需要检查 yum 源是否有 Nginx，当没有的时候需要自己添加源。

```bash
yum list | grep nginx
# nginx.x86_64                             1:1.12.2-2.el7                  epel   
# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   
# nginx-filesystem.noarch                  1:1.12.2-2.el7    
```

[官网](http://nginx.org/en/download.html) 可见 Nginx 稳定版本已经是 `1.14.2` ，所以需要[修改](http://nginx.org/en/linux_packages.html) yum 源。

```bash
vim /etc/yum.repos.d/nginx.repo

cat /etc/yum.repos.d/nginx.repo
# [nginx-stable]
# name=nginx stable repo
# baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
# gpgcheck=1
# enabled=1
# gpgkey=https://nginx.org/keys/nginx_signing.key

```

重新查看源。

```bash
yum list | grep nginx 

# nginx.x86_64                             1:1.14.2-1.el7_4.ngx            nginx-stable
# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   
# nginx-debug.x86_64                       1:1.8.0-1.el7.ngx               nginx-stable
# nginx-debuginfo.x86_64                   1:1.14.2-1.el7_4.ngx            nginx-stable
```

### 2. 安装

```bash
yum install nginx
```

### 3. 查看版本

```bash
nginx -v
# nginx version: nginx/1.14.2
```