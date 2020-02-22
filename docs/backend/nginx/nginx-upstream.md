---
title: 反向代理与负载均衡
---

## 介绍

反向代理主要是利用 [upstream](https://nginx.org/en/docs/http/ngx_http_upstream_module.html)、server 模块指定上游服务地址来实现负载均衡，当然反向代理是前置条件。

指定的上游服务器地址中，地址可以是域名、IP 地址或 unix socket 地址。



## server parameters

|  parameters  |  type  | 作用                                                         |
| :----------: | :----: | ------------------------------------------------------------ |
|    weight    | number | 负载均衡时的权重，默认为 1。                                 |
|  max_conns   | number | 限制同时活动的最大链接数量（即最大并发 数），默认为 0，表示不限制。 |
|  max_fails   | number | 允许请求失败的次数，默认为 1。                               |
| fail_timeout | number | 在经历了 max_fails 次失败后，暂停服务的时间。                |
|    backup    |        | 指定当前 server 为备份服务器，仅当非备份服务器不可用时才启用。 |
|     down     |        | 将服务器标记为永久不可用。                                   |



## config

在之前的[基础](/backend/nginx/nginx-directives.html#alias)上新增三台 server 虚拟机。

```bash
vim /etc/nginx/conf.d/default.conf
# 此处偷懒全部 server 写在 default.conf 中，更好的形式是新建两个 `.conf` 文件，更更好的形式当然是新建两台虚拟机，然后修改 "DNS"
# 修改为如下内容
server {
    listen       8081;
    server_name  localhost;

    location / {
        return 200 '8081\n';
    }
}

server {
    listen       8082;
    server_name  localhost;

    location / {
        return 200 '8082\n';
    }   
}

server {
    listen       8083;
    server_name  localhost;

    location / {
        return 200 '8083\n';
    }
}

upstream backend {
    server 127.0.0.1:8081 weight=2;
    server 127.0.0.1:8082;
    server 127.0.0.1:8083 backup;
    keepalive 32;
}
    
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    access_log  /var/log/nginx/nginx.access.log  main;
    error_log  /var/log/nginx/nginx.error.log warn;

    location / {
        proxy_pass backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_connect_timeout 1s;
        proxy_next_upstream error;
    }
}

nginx -s reload # 重载配置
```



## test

简单的重复测试，查看负载均衡情况。

```bash
curl -i nginx.example.com
# HTTP/1.1 200 OK
# 8081

curl -i nginx.example.com
# HTTP/1.1 200 OK
# 8081

curl -i nginx.example.com
# HTTP/1.1 200 OK
# 8082

# 持续多次结果按照以上循环出现
```



## load balancing methods

Nginx 负载均衡有很多策略，上面示例是默认的 round-robin 算法（也就是基于 weight 权重）。

### 1. [ip-hash](https://nginx.org/en/docs/http/ngx_http_upstream_module.html#ip_hash) 算法

根据用户的 IP 地址作为 hash 算法（IPv4、IPv6 策略不同）的关键字，在服务器之间分配请求。该方法确保了来自统一客户端的请求将始终传递到同一台服务器。

在指定 `ip_hash` 算法后权重不再生效？（不同版本 Nginx 结果会 不一致），同理 `backup` 参数同样不可用。

启用配置示例：

```nginx
upstream backend {
    ip_hash;

    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com down;
    server backend4.example.com;
}
```

### 2. [hash](https://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash) 算法

相对于 `ip_hash` 不再局限于 `$remote_addr`，可以指定关键字（其余的变量甚至字符串）来形成 hash。

> 在之前了解到 `split_client` 可以用于处理 AB 测试，但是疑惑的是无法指定某一批用户，那么配合上 hash 算法能否实现更好的 AB 测试呢。

```nginx
Syntax:	hash key [consistent];
# 如果 consistent 指定了参数，则将使用 ketama 一致性哈希方法。该方法可确保在将服务器添加到组中或从组中删除服务器时，只有很少的键将被重新映射到不同的服务器。这有助于为缓存服务器获得更高的缓存命中率。
```



## upstream module directives

### 1. [proxy_pass](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass)

`proxy_pass` 可以设置代理服务器的协议和地址，以及应将位置映射到的可选的 URI。

需要注意的是 `proxy_pass` 必须以 `http://` 或 `https://` 开头。

URI 会导致类似 alias 的效果，不再是完整转发了。所以不携带 URI，则将请求 URI 以原始请求处理时客户端发送的格式传递到服务器；携带 URI 则会导致原始请求URI 的一部分将被 `proxy_pass` 中指定的 URI 代替。