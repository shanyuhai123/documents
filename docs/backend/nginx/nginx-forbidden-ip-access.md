---
title: 禁止 IP 访问
---

## 修改配置

个人比较倾向于对 `default.conf` 进行修改：

```nginx
server {
  listen   80 default_server;
  listen   [::]:80 default_server;
  server_name  _;
  return 444;
}
```