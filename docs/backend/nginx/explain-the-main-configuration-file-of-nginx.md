---
title: 粗解配置文件
---

## 配置格式

基本的 Nginx 文件由若干个部分组成，每个部分都是通过下列的方法定义的。

```bash
<section> {
  <directive> <parameters>；
}
```

大括号实际上表示一个新上下文（context），需要注意的是，每一个指令行需要使用 `;` 来进行结束。



## nginx.conf

```bash
cat /etc/nginx/nginx.conf
```

获取内容如下：

```bash
# 配置 worker 进程的用户和组，默认是 nginx
user  nginx;
# Nginx 进程，一般设置为和 CPU 核数一致，示例的阿里云学生机为 1 核
worker_processes  1;

# 错误日志存放目录，指令的第二个参数表示被记录错误的级别
# 错误级别：debug、info、notice、warn、error 等
error_log  /var/log/nginx/error.log warn;
# 设置记录主进程 ID 的文件
pid        /var/run/nginx.pid;

events {
		# 单个进程最大并发数
    worker_connections  1024;
}

# 主要配置文件
http {
		# 文件扩展名与类型映射表
    include       /etc/nginx/mime.types;
    # 默认文件类型
    default_type  application/octet-stream;
		# 设置日志格式：访问地址-访问用户-本地事件-请求
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

		# 访问日志
    access_log  /var/log/nginx/access.log  main;

		# 直接复制数据从一个文件到另一个文件描述符
    sendfile        on;
    # 仅依赖于 sendfile 的使用
    # 在一个数据包中尝试发送响应头，以及在数据包中发送一个完整的文件
    #tcp_nopush     on;

		# 保持连接的时间（超时时间）
    keepalive_timeout  65;
		
		# 开启 gzip 压缩
    #gzip  on;

		# 当前文件为 Nginx 主配置文件（入口），控制子配置项位置和文件
    include /etc/nginx/conf.d/*.conf;
}
```



## default.conf

在主配置文件（nginx.conf）中可以看到子配置项所在的目录：

```bash
# include /etc/nginx/conf.d/*.conf;
# 查看该目录下的文件：
ls /etc/nginx/conf.d/
# default.conf # 默认
```

### 1. 解析

```bash
cat /etc/nginx/conf.d/default.conf
```

获取内容如下：

```bash
# 任何由关键字 server 的部分都被称为 “虚拟服务器”
# 一个虚拟服务器由 listen 和 server_name 指令组合定义
server {
		# 监听端口
    listen       80;
    # 监听域名
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

		# location 指令可以用在虚拟服务器 server 部分，并且意味着来自客户端的 URI 或者内部重定向访问
		# location 定义： location [modifier] uri {...}
    location / {
    		# 服务默认启动目录
        root   /usr/share/nginx/html;
        # 默认文件格式
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    # 错误状态码对应的页面
    error_page   500 502 503 504  /50x.html;
    # 对应页面的路径
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```