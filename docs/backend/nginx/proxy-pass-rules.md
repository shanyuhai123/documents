---
title: proxy_pass 规则
---

## 前言

::: danger 声明 1

前端做反向代理时一般会在接口前增加一个 `api` 路径，如 `/api/user`，但后端并没有这么个东西，那么就会导致一些问题。

:::

::: danger 声明 2

`location` 一般采用前缀匹配的模式。

:::

日常使用中虽可采用 `rewrite` 解决多余路径的问题（此处可如此使用的缘由是 `rewrite` 的处理阶段在 `proxy_pass` 之前）。

```nginx
location /api {   
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Scheme $scheme;
  
    # 路径重写
    rewrite  /api/(.*)  /$1  break;
    proxy_pass http://localhost:8123;
}
```

但探索一下 `location` + `proxy_pass` 也是不错的选择。



## 规则

```nginx
Syntax:	proxy_pass URL;
Default: —
Context: location, if in location, limit_except
```

其中唯一需要注意的是，当 `proxy_pass` 后无 `/` 时为相对地址，有则为绝对地址。

### 1. 相对地址

相对地址时会将 `location` 匹配的 `uri` 加入代理。

```nginx
server {
  listen       8085;
  server_name localhost;

  location / {
    return 200 "8084 \n";
  }
}

server {
  listen       8083;
  server_name localhost;

  location /api {
    proxy_pass http://localhost:8085;
  }
}

server {
  listen       8084;
  server_name localhost;

  location /api {
    proxy_pass http://localhost:8085/app;
  }
}
```

| curl                        | 8083          | 8084          |
| --------------------------- | ------------- | ------------- |
| `localhost:8083/api`        | `/api`        | `/api`        |
| `localhost:8083/api/user`   | `/api/user`   | `/api/user`   |
| `localhost:8084/api`        | `/api`        | `/app`        |
| `localhost:8084/api/user`   | `/api/user`   | `/app/user`   |
| `localhost:8084/apipp/user` | `/apipp/user` | `/apppp/user` |

### 2. 绝对地址

绝对地址则不会将 `location` 匹配的 `uri` 加入代理，即直接丢弃。

```nginx
server {
  listen       8085;
  server_name localhost;

  location / {
    return 200 "8084 \n";
  }
}

server {
  listen       8083;
  server_name localhost;

  location /api {
    proxy_pass http://localhost:8085/;
  }
}

server {
  listen       8084;
  server_name localhost;

  location /api {
    proxy_pass http://localhost:8085/app/;
  }
}

# 解决多余的 `/`
server {
  listen       8086;
  server_name localhost;

  location /api/ {
    proxy_pass http://localhost:8085/app/;
  }
}
```

| curl                        | proxy         | target                                |
| --------------------------- | ------------- | ------------------------------------- |
| `localhost:8083/api`        | `/api`        | `/`                                   |
| `localhost:8083/api/user`   | `/api/user`   | `//user`                              |
| `localhost:8084/api`        | `/api`        | `/app/`                               |
| `localhost:8084/api/user`   | `/api/user`   | `/app//user`                          |
| `localhost:8084/apipp/user` | `/apipp/user` | `/app/pp/user`                        |
| `localhost:8086/api`        | `/api`        | `location` 未匹配，所以不进入 `proxy` |
| `localhost:8086/api/user`   | `/api/user`   | `/app/user`                           |

可以观测到少了匹配到的 `api` 部分，而作为路径的 `/` 未匹配到显得多余起来，解决的方案是使 `location` 匹配到 `/` 即可。

