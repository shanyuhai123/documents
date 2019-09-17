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



## [rewrite](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite)

该指令可以用于修改访问的 URL，对应的语法为：

::: danger

rewrite regex replacement [flag]

:::

flag 具有以下参数：

|   flag    | 说明                        |
| :-------: | --------------------------- |
|   last    | 使用更改的 URI 匹配新位置。 |
|   break   | 停止处理当前的指令集。      |
| redirect  | 返回 302 （临时）重定向。   |
| permanent | 返回 301 （永久）重定向。   |

近期在升级站点到 https 时就用到了该语法：

```bash
rewrite ^(.*) https://$host$1 permanent;

# 及 Certbot 自动配置的
if ($host = blog.shanyuhai.top) {
    return 301 https://$host$request_uri;
} # managed by Certbot
```



## [location](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)

可以注意到 `Context:	server, location`，也就是 location 可以嵌套，该项之前都没有注意到过。比较特殊的是 `@` 前缀定义命名位置。这样的位置不用于常规请求处理，而是用于请求重定向，它们不能嵌套。

location 的匹配规则与常规的不一致，非正序匹配，也非倒序匹配，而是：

> 为了找到与给定请求匹配的位置，nginx首先检查使用前缀字符串（前缀位置）定义的位置。其中，选择并记住具有最长匹配前缀的位置。然后按照它们在配置文件中的出现顺序检查正则表达式。正则表达式的搜索在第一次匹配时终止，并使用相应的配置。如果未找到与正则表达式的匹配，则使用先前记住的前缀位置的配置。