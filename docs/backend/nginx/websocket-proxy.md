---
title: websocket 反向代理
---

## 介绍

在理解[反向代理与负载均衡](/backend/nginx/nginx-upstream)后就可以快速实现 websocket 的反向代理，在之前的[配置](/backend/nginx/nginx-directives.html#alias) 的配置上进行修改。



## [config](http://nginx.org/en/docs/http/websocket.html)

```nginx
vim /etc/nginx/conf.d/default.conf

# 修改为以下内容
server {
    listen       80;
    server_name  nginx.example.com;

    #charset koi8-r;
    access_log  /var/log/nginx/nginx.access.log  main;
    error_log  /var/log/nginx/nginx.error.log warn;

    location /chat/ {
        proxy_pass http://echo.websocket.org;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

nginx -s reload # 重载配置
```



## test

接着在[测试页面](http://www.websocket.org/echo.html)将 Location 中的 `ws://echo.websocket.org` 替换为目标地址 `ws://nginx.example.com/chat/` （需要修改本地 DNS），Connect 成功即为成功。

