---
title: root 与 alias 区别
---

## 前言

alias 与 [root](https://nginx.org/en/docs/http/ngx_http_core_module.html#root) 有相似的用法，主要是介绍他们之间的区别。

其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。

> 待如今了解到 `$request_filename` 后发现与想法一致。

```nginx
# alias
Syntax:	alias path;
Default: —
Context: location

# root
Syntax:	root path;
Default: root html;
Context: http, server, location, if in location
```



## 区别

此中区别与 [proxy_pass](/backend/nginx/proxy-pass-rules) 相似。

| directives | difference                            |
| :--------: | ------------------------------------- |
|    root    | 将完整的 url 映射到文件路径。         |
|   alias    | 将 location 后的 url 映射到文件路径。 |

```nginx
server {
  listen       8083;
  server_name localhost;

  location /root {
    root /usr/share/nginx/html;
  }

  location /alias {
    alias /usr/share/nginx/html;
  }
  
  location /root/dir/ {
    root /usr/share/nginx/html;
  }

  location /alias/dir/ {
    alias /usr/share/nginx/html;
  }
  
  location ~* /root(\d+\.txt) {
      root /usr/share/nginx/html/$1;
  }
  location ~* /alias(\d+\.txt) {
      alias /usr/share/nginx/html/$1;
  }
}
```

| curl($request)          | $request_filename                           |
| ----------------------- | ------------------------------------------- |
| `/root`                 | `/usr/share/nginx/html/root`                |
| `/root/index.html`      | `usr/share/nginx/html/root/index.html`      |
| `/alias`                | `/usr/share/nginx/html`                     |
| `/alias/index.html`     | `/usr/share/nginx/html/index.html`          |
| `/root/dir/`            | `/usr/share/nginx/html/root/dir/`           |
| `/root/dir/index.html`  | `/usr/share/nginx/html/root/dir/index.html` |
| `/alias/dir/`           | `/usr/share/nginx/html`                     |
| `/alias/dir/index.html` | `/usr/share/nginx/htmlindex.html`           |
| `/root/123456.txt`      | `/usr/share/nginx/html/root/123456.txt`     |
| `/alias/123456.txt`     | `/usr/share/nginx/html/123456.txt`          |
| `/alias123456.txt`      | `/usr<br/>/share/nginx/html/123456.txt`     |

当使用 `alias` 且 `location` 以 `/` 结尾时需注意 `/` 被废弃，与 `proxy_pass` 中情况一致。