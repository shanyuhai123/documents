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



## 更新 yum 源并安装

[官网](http://nginx.org/en/download.html) 可见 Nginx 稳定版本已经是 `1.16.1` ，所以需要[修改](http://nginx.org/en/linux_packages.html) yum 源。

更新 Nginx 的源在 [CentOS](/os/centos/install-the-latest-version-of-nginx)、[Ubuntu](/os/ubuntu/install-the-latest-version-of-nginx) 中稍有不同，需要区别安装。



## 编译安装

当需要添加一些第三方模块时就可以使用该形式。

### 1. 环境

虚拟机：CentOS 7.6

### 2. 下载

进入[官网](http://nginx.org/en/download.html)获取对应的版本下载链接。

```bash
wget http://nginx.org/download/nginx-1.16.1.tar.gz

tar -zxvf nginx-1.16.1.tar.gz # 解压
ll nginx-1.16.1 # 验证
cp -r nginx-1.16.1/contrib/vim/* ~/.vim # 拷贝 vim 配置
vim nginx-1.16.1/conf/nginx.conf # 验证
```

### 3. 配置

```bash
./configure --help | less # 查看帮助
./configure --prefix=/home/shanyuhai/nginx # 指定目录

# 可能会缺乏依赖（解决方案）
yum install -y httpd-devel pcre perl pcre-devel zlib zlib-devel GeoIP GeoIP-devel # 重新执行，当然也可以先使用 yum 安装自动获取一遍依赖（暂不清楚是否会导致负面影响）

# 结果如下
# creating objs/Makefile # 新增目录

# nginx path prefix: "/home/shanyuhai/nginx"
# nginx binary file: "/home/shanyuhai/nginx/sbin/nginx"
# nginx modules path: "/home/shanyuhai/nginx/modules"
# nginx configuration prefix: "/home/shanyuhai/nginx/conf"
# nginx configuration file: "/home/shanyuhai/nginx/conf/nginx.conf"
# nginx pid file: "/home/shanyuhai/nginx/logs/nginx.pid"
# nginx error log file: "/home/shanyuhai/nginx/logs/error.log"
# nginx http access log file: "/home/shanyuhai/nginx/logs/access.log"
# nginx http client request body temporary files: "client_body_temp"
# nginx http proxy temporary files: "proxy_temp"
# nginx http fastcgi temporary files: "fastcgi_temp"
# nginx http uwsgi temporary files: "uwsgi_temp"
# nginx http scgi temporary files: "scgi_temp"

ll objs # 查看稍后 make 的内容
make # 编译
ll objs # 验证
make install # 安装

/home/shanyuhai/nginx/sbin/nginx -V # 验证
```

