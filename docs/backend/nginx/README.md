---
title: 首页
---

## 介绍

主要用于解决在使用 Nginx 时遇到的问题，以及是怎么解决的。

::: danger 切记

记得设置 `default_server`，否则在删除对应的 `conf` 后可能导致不该出现的 `server` 暴露出来。

```nginx
server {
	listen    80 default_server; # 在 listen 后追加，而非 server_name
	server_name  xxx.example.com example.com;
}
```

:::



## 参考资料

1. [Nginx](http://nginx.org/en/docs/)
2. 《精通Nginx》：Dimitri Aivaliotis 著