---
title: 防盗链
---

## 介绍

referer （引用页），常用于防盗链，当使用 CDN、OSS 时经常会碰到类似的提示。

> referer 正确英文为 referrer，但由于早期 HTTP 规范的拼写错误，为了保持向后兼容也就将错就错了。



## 配置

```nginx
Syntax:	valid_referers none | blocked | server_names | string ...;
Default: —
Context: server, location

# Example
location / {
  valid_referers none blocked *.example.com example.* nginx.example.top/foo/ ~\.google\.;

  if ($invalid_referer) {
      return 403;
  }
  return 200 'valid_referers\n';
}
```



## 测试

### 1. *.example.com

```bash
curl -e 'http://dev.example.com' nginx.example.com
# 等价于
curl -H 'referer: http://dev.example.com' nginx.example.com
# HTTP/1.1 200 OK
# valid_referers

curl -ie 'http://dev.aexample.com' nginx.example.com
# HTTP/1.1 403 Forbidden
```

### 2. example.*

```bash
curl -ie 'http://example.org' nginx.example.com
# HTTP/1.1 200 OK
# valid_referers

curl -ie 'http://dev.example.org' nginx.example.com
# HTTP/1.1 403 Forbidden

curl -ie 'http://example.org/aaa' nginx.example.com
# HTTP/1.1 200 OK
# valid_referers
```

### 3. nginx.example.top/foo/

```bash
curl -ie 'http://nginx.example.top' nginx.example.com
# HTTP/1.1 403 Forbidden

curl -ie 'http://nginx.example.top/aaa' nginx.example.com
# HTTP/1.1 403 Forbidden

curl -ie 'http://nginx.example.top/foo' nginx.example.com
# HTTP/1.1 403 Forbidden
curl -ie 'http://nginx.example.top/foo/' nginx.example.com
# HTTP/1.1 200 OK
# valid_referers

curl -ie 'http://nginx.example.top/foo/aa' nginx.example.com
# HTTP/1.1 200 OK
# valid_referers
```

