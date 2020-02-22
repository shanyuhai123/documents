---
title: rewrite 规则
---

## 介绍

`rewrite` 常用于 `url` 重写，以及重定向。准确来说 `rewrite` 是作用于 `$request_uri`。

其实理解完修改的是 `$request_uri` 部分即可理解，我之前是卡在这里了。

```nginx
Syntax:	rewrite regex replacement [flag];
Default: —
Context: server, location, if

# Example
rewrite ^(.*) https://$host$1 permanent; # https

if ($http_user_agent ~ Chrome) {
  rewrite ^(.*)$ /chrome/$1 break;
}
```



## flag

|   flag    | 说明                        |
| :-------: | --------------------------- |
|   last    | 使用更改的 URI 匹配新位置。 |
|   break   | 停止处理当前的指令集。      |
| redirect  | 返回 302 （临时）重定向。   |
| permanent | 返回 301 （永久）重定向。   |