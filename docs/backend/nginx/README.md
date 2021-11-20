---
description: 快速开启 Nginx
tags:
  - nginx
---

# 快速开启 Nginx

## 一些重要的事

### 防止泄漏

记得设置 `default_server`，否则在删除对应的 `conf` 后可能导致不该出现的 `server` 暴露出来。

```nginx
server {
  listen    80 default_server; # 在 listen 后追加，而非 server_name
  server_name  xxx.example.com example.com;
}
```

### 禁止 IP 访问

```nginx
server {
  listen   80 default_server;
  listen   [::]:80 default_server;
  server_name  _;
  return 444;
}
```

## 安装 Nginx

虽然现在大部分时候都上 docker 了，但偶尔自己编译模块时手动安装还是比较方便的。

### 1. 检测源

首先需要检查当前源是否有 Nginx（CentOS示例），当没有的时候需要自己添加源。

```bash
yum list | grep nginx
# nginx.x86_64                             1:1.12.2-2.el7                  epel   
# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   
# nginx-filesystem.noarch                  1:1.12.2-2.el7    
```

### 2. 更新 yum 源并安装

[官网](http://nginx.org/en/download.html) 中 Nginx 稳定版本已经是 `1.20.1` ，而检测结果依然是 `1.12.2`，[修改](http://nginx.org/en/linux_packages.html) yum 源来获取最新版。

更新 Nginx 的源在 [CentOS](/os/centos/install-the-latest-version-of-nginx.html)、[Ubuntu](/os/ubuntu/install-the-latest-version-of-nginx.html) 中稍有不同，需要区别安装。

### 3. 编译安装

当需要添加一些第三方模块时就可以使用该形式，以下为 `CentOS 7.6`。

#### 下载

进入[官网](http://nginx.org/en/download.html)获取对应的版本下载链接。

```bash
wget http://nginx.org/download/nginx-1.20.1.tar.gz

tar -zxvf nginx-1.20.1.tar.gz # 解压
ll nginx-1.20.1 # 验证
cp -r nginx-1.20.1/contrib/vim/* ~/.vim # 拷贝 vim 配置
vim nginx-1.20.1/conf/nginx.conf # 验证
```

#### 配置

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

## 必须知道的基本操作

### 启用安全组

在一顿操作之后，明明本地可以访问，为啥外网访问不了？可能是你忘记开放云服务器的安全组了。

操作流程：

`登录` > `控制台` > `云服务器ECS（左侧）` > `安全组` > `配置规则` > `添加安全组规则` > `填充内容` > `确定`

### 进程与端口

```bash
# 进程
# ps 是 Process Status 的简写，可以通过 ps 来查看对应的进程
ps -ef | grep nginx
# 端口
# netstat 是 net status 的简写， 可以查看有哪些端口正在被占用
netstat -lntup
```

### 启动

```bash
# 直接启动
nginx
# systemctl 启动
systemctl start nginx.service
# 开机自启
systemctl enable nginx.service
```

### 停止

```bash
# normal quit
nginx -s quit
# force stop
nginx -s stop
# systemctl
systemctl stop nginx.service

# kill pid
killall nginx
## 或
kill -9 pid
```

### 重启

```bash
# normal
nginx -s reload
# systemctl
systemctl restart nginx.service
```

## 内置变量

Nginx 提供了丰富的[内置变量](https://nginx.org/en/docs/varindex.html)，如果引入了其他模块还会有对应模块的变量。

|      variable       |          module          | description                                                  |
| :-----------------: | :----------------------: | ------------------------------------------------------------ |
|       `$args`       |                          | 请求参数                                                     |
|       `$uri`        |                          | 当前请求的 `uri`，不带参数                                   |
|   `$request_uri`    |                          | 请求的 `uri`，带完整参数                                     |
|       `$host`       |                          | 请求报文的 `host` 首部                                       |
|     `$hostname`     |  `ngx_http_core_module`  | Nginx 服务运行在主机的主机名                                 |
|   `$remote_addr`    | `ngx_stream_core_module` | 客户端 IP                                                    |
|   `$remote_port`    | `ngx_stream_core_module` | 客户端端口                                                   |
| `$request_filename` |                          | 用户请求中的 `uri` 经过本地 `root` 或 `alias` 映射后的本地文件路径。可将其加入 `log` 中研究 `root` 和 `alias` |
|   `$server_addr`    | `ngx_stream_core_module` | 服务器 IP                                                    |
|   `$server_port`    | `ngx_stream_core_module` | 服务求端口                                                   |
| `$server_protocol`  |                          | 服务器的 HTTP 协议版本，例 `HTTP/1.0`、`HTTP/1.1`            |
|      `$scheme`      |                          | 请求中的协议，例 `http`、`https`                             |

指定 `module` 时基本上都有 `ngx_http_core_module`。

## 参考资料

1. [Nginx](http://nginx.org/en/docs/)
2. 《精通Nginx》：Dimitri Aivaliotis 著
