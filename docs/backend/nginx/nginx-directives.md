---
title: Nginx directives
---

## 介绍

在初学时注释过[配置文件](/backend/nginx/explain-the-main-configuration-file-of-nginx)，就以为是详解了～

其实每个参数都有比较复杂的用法，详情可见 Nginx 的 [directives](https://nginx.org/en/docs/dirindex.html)。



## [listen](https://nginx.org/en/docs/http/ngx_http_core_module.html#listen)

需要监听的端口。

::: danger

在官网的链接中需要注意的是：

1. Syntax（语法），语法没啥好说的。

2. Context（上下文），上下文即大括号 `{}` 的范围内，如 listen 仅可以写在 server 上下文中，不能写在 http 和 location 的上下文中。

:::



## [server_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name)

此处为是 core module 的介绍，其余模块与之相关的也有很多。

这边比较重要的是 Server 的匹配顺序：

1. 精确匹配；
2. `*` 在前的泛域名；
3. `*` 在后的泛域名；
4. 按文件中的顺序匹配正则表达式域名；
5. default server  <Badge text="重点" type="error"/>。未声明时指向文件第一个 server。

::: danger

在之前有多个项目时，有部分应用限制 IP 访问，结果我在删除原项目地址后，忘记关闭 DNS 解析了，恰好限制访问的应用 server 又排在第一个，时隔好久访问自己的域名才发现裸奔很久了 😭。

:::

### 1. 示例

```bash
server {
	listen    80 default_server; # 在 listen 后追加，而非 server_name
	server_name  www.shanyuhai.top shanyuhai.top;
}
```

### 2. 注意

在部分文章中注意到，如果你想要提高自己的网站的知名度，那么还需要配合 301 进行跳转，否则该项设置会导致搜索引擎收录他人的站点，而非你的。



## [alias](https://nginx.org/en/docs/http/ngx_http_core_module.html#alias)

alias 与 root 有相似的用法，主要是介绍他们之间的区别。

其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。

### 1. Context

+ alias：location
+ root：http、server、location、if in location

### 2. path

| directives | 区别                                  |
| ---------- | ------------------------------------- |
| root       | 将完整的 url 映射到文件路径。         |
| alias      | 将 location 后的 url 映射到文件路径。 |

### 3. config

开始前以两台虚拟机作为示例：

|     IP     |      role      |
| :--------: | :------------: |
| 10.0.0.131 | user（用户端） |
| 10.0.0.132 | web（服务器）  |

配置：

+ user

  ```bash
  # 为了之后方便，在 user(131) 主机下添加 DNS 解析
  echo "10.0.0.132  nginx.example.com
  " >> /etc/hosts
  ssh root@nginx.example.com # 验证
  ```

+ web

  ```bash
  # 确认服务启动
  ps -ef | grep nginx
  # 关闭防火墙
  systemctl stop firewalld.service
  # 创建文件
  mkdir foo
  echo 'hello world!' > foo/bar.txt
  echo 123456 > foo/123456.txt
  
  # 编辑默认配置
  vim /etc/nginx/conf.d/default.conf
  
  # 简化得到结果如下
  server {
      listen       80;
      server_name  localhost;
      
      access_log  /var/log/nginx/nginx.access.log  main;
      error_log  /var/log/nginx/nginx.error.log warn;
      
  
      location / {
          root   /usr/share/nginx/html;
          index  index.html index.htm;
      }
      
      # 以下为增加的内容
      location /root {
      		root /usr/share/nginx/html/foo;
      }
      location /alias {
      		alias /usr/share/nginx/html/foo;
      }
      location /root/dir/ {
      		root /usr/share/nginx/html/foo;
      		index bar.txt;
      }
      location /alias/dir/ {
      		alias /usr/share/nginx/html/foo;
      		index bar.txt;
      }
      location ~* /root(\d+\.txt) {
      		root /usr/share/nginx/html/foo/$1;
      }
      location ~* /alias(\d+\.txt) {
      		alias /usr/share/nginx/html/foo/$1;
      }
  }
  
  nginx -s reload # 重载配置
  ```

### 4. test

访问为 user 发起，log 为服务端 `nginx.error.log` 文件（仅在错误时提示）。

+ 获取 bar.txt 文件

  ```bash
  curl -i nginx.example.com/root/bar.txt
  # HTTP/1.1 404 Not Found
  # log：
  # open() "/usr/share/nginx/html/foo/root/bar.txt" failed (2: No such file or directory)
  
  curl -i nginx.example.com/alias/bar.txt
  # HTTP/1.1 200 OK
  # hello world!
  ```

+ 获取 bar.txt 文件（目录）

  ```bash
  curl -i nginx.example.com/root/dir/
  # HTTP/1.1 404 Not Found
  # log：
  # "/usr/share/nginx/html/foo/root/dir/bar.txt" is not found (2: No such file or directory)
  
  curl -i nginx.example.com/alias/dir/
  # HTTP/1.1 403 Forbidden
  # log：
  # directory index of "/usr/share/nginx/html/foo" is forbidden
  ```

+ 获取 123456.txt

  ```bash
  curl -i nginx.example.com/root/123456.txt
  # HTTP/1.1 404 Not Found
  # log：
  # open() "/usr/share/nginx/html/foo/root/123456.txt" failed (2: No such file or directory)
  
  curl -i nginx.example.com/alias/123456.txt
  # HTTP/1.1 200 OK
  # 123456
  ```





