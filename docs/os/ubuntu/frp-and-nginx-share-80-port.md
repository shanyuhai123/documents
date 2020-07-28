---
title: FRP 和 Nginx 共用 80 端口
sidebarDepth: 2
---

## 前置

虽然在 [FRP](https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1) 官网中给了 web 服务配置的示例，但在实际使用中存在两个问题：

+ 有时部分资源找不到，导致页面无法渲染
+ 域名后面还带一个端口，实在有点丑



## 配置

### 1. 服务器端 FRP 配置

```ini
[common]
bind_port = 7000
vhost_http_port = 8080
subdomain_host = frp.xxx.com
```

### 2. 服务器端 Nginx 配置

利用正则来匹配所有的 `frp` 二级域名。

```nginx
# /etc/nginx/conf.d/frp.conf

server {
    listen       80;
    server_name  frp.xxx.com *.frp.xxx.com;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        proxy_pass              http://127.0.0.1:7000;
        # 此处简写
        proxy_set_header        Host $host;
    }


    #error_page  404              /404.html;

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

### 3. 域名解析配置

根据 Nginx 的配置添加两项：

+ `frp.xxx.com`
+ `*.frp.xxx.com`

### 4. 客户端 FRP 配置

**客户端的 Nginx 配置为默认时就可以使用，此处省略。**

```ini
[common]
server_addr = xxx.xx.xx.xxx
server_port = 7000

# [ssh] 省略

[web1]
type = http
local_ip = 127.0.0.1
local_port = 80
subdomain = sub1
```



## 测试

最后通过浏览器访问 `sub1.frp.xxx.com` 即可展现效果。

