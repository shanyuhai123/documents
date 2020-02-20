---
title: 限制模块
---


## 请求限制

请求限制 [limit_req_module](https://nginx.org/en/docs/http/ngx_http_limit_req_module.html) 比连接限制更优化，由于一个连接可以被多次复用。

### 1. limit_req_zone

首先需要在 `http` 作用域定义 `limit_req_zone`。

```nginx
Syntax:	limit_req_zone key zone=name:size rate=rate [sync];
Default: —
Context: http

# Example
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
```

### 2. limit_req

再在指定的作用域启用。

```nginx
Syntax:	limit_req zone=name [burst=number] [nodelay | delay=number];
Default: —
Context: http, server, location

# Example
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
location /search/ {
  limit_req zone=one burst=5;
}

limit_req_zone $binary_remote_addr zone=perip:10m rate=1r/s;
limit_req_zone $server_name zone=perserver:10m rate=10r/s;
server {
  limit_req zone=perip burst=5 nodelay;
  limit_req zone=perserver burst=10;
}
```

`$binary_remote_addr` 相对 `remote_addr` 占用的空间更少。



## 连接限制

[limit_conn_module](https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html) 步骤基本与请求限制一致。

### 1. limit_conn_zone

```nginx
Syntax:	limit_conn_zone key zone=name:size;
Default: —
Context: http

# Example
limit_conn_zone $binary_remote_addr zone=addr:10m;
```

### 2. limit_zone

```nginx
Syntax:	limit_zone name $variable size;
Default: —
Context: http

# Example
limit_conn_zone $binary_remote_addr zone=perip:10m;
limit_conn_zone $server_name zone=perserver:10m;

server {
  limit_conn perip 10;
  limit_conn perserver 100;
}
```



## 访问 IP 限制

[access_module](https://nginx.org/en/docs/http/ngx_http_access_module.html) 可用来限制访问的 IP，用法比较简单。

```nginx
Syntax:	allow address | CIDR | unix: | all;
Default: —
Context: http, server, location, limit_except

Syntax:	deny address | CIDR | unix: | all;
Default: —
Context: http, server, location, limit_except

# Example
location / {
  deny  192.168.1.1;
  allow 192.168.1.0/24;
  allow 10.1.1.0/16;
  allow 2001:0db8::/32;
  deny  all;
}
```



## 访问 账号 限制

[auth_basic_module](https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html) 可以为路径添加用户密码访问，可配合 IP 限制使用。

### 1. 生成密码

```bash
# 生成密码工具 htpasswd
# -b 参数为 在一行输入用户名和密码，而非根据提示输入密码
# -c 参数为 创建一个加密文件(注意已有则覆盖)，即增加用户时无需指定
htpasswd -bc /etc/nginx/auth_conf shanyuhai 123
# 若缺乏依赖则提示，安装即可
# centos 下
yum install httpd-tools
# ubuntu 下
apt install apache2-utils

cat /etc/nginx/auth_conf # 验证
```

### 2. 限制说明

```nginx
Syntax:	auth_basic string | off;
Default: auth_basic off;
Context: http, server, location, limit_except

Syntax:	auth_basic_user_file file;
Default: —
Context: http, server, location, limit_except

# Example
location / {
  auth_basic           "请输入用户名、密码";
  auth_basic_user_file auth_conf;
}
```



