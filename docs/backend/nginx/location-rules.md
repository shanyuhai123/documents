---
title: location 规则
---

## 规则

```nginx
Syntax:	location [ = | ~ | ~* | ^~ ] uri { ... }
		location @name { ... }
Default: —
Context: server, location
```

可以看到 [location](https://nginx.org/en/docs/http/ngx_http_core_module.html#location) 具备两种规则，其中 `@` 表示内部服务跳转，用于处理异常请求。

另外的是修饰符：

| prefix | priority | desc                                                         |
| :----: | :------: | ------------------------------------------------------------ |
|  `=`   |    1     | 路径完全匹配                                                 |
|  `~`   |    3     | 区分大小写的正则匹配                                         |
|  `~*`  |    3     | 不区分大小写的正则匹配                                       |
|   ^~   |    2     | 前缀匹配                                                     |
|        |    4     | 不带任何修饰的前缀匹配，便于区分后续用 `none` 替代，Nginx 并无该说法 |

### 1. `=`

```nginx
location = /abc {
  # localhost/abc # 匹配
  # localhost/ABC # 据说 windows 大小写不敏感会匹配，但未测试
  # localhost/abc/ # 不匹配
  # localhost/abcd # 不匹配
  # localhost/abc?a=1 # 匹配
}

location = /abc/ {
  # localhost/abc/ # 匹配
  # localhost/abc # 不匹配
  # localhost/abc/a # 不匹配
}
```

### 2. `~`、`~*`

```nginx
# 此处未对结尾做限制，`~*` 一致
location ~ ^/abc {
  # localhost/abc # 匹配
  # localhost/abcd # 匹配
  # localhost/abc/a # 匹配
  # localhost/abc/a/b # 匹配
}
```

### 3. `^~`、`none`

```nginx
# ^~ 一致，只是优先度更高
location /abc {
  # localhost/abc # 匹配
  # localhost/abcd # 匹配
  # localhost/abcd/a # 匹配
  # localhost/abc/a/b # 匹配
}
```



## 顺序

伪代码：

```js
let temp
if (精准匹配 `=`)
  return 精准匹配的结果
else
  if (前缀匹配) // 前缀匹配包括 `^~` 和 啥都没有
    if (前缀匹配 `^~`)
      return 前缀匹配结果
    else if (前缀匹配 `none`)
      temp = 前缀匹配结果
  else if (正则匹配)
    return 正则匹配结果
return temp
```

需要注意的是前缀匹配模式下与 `location` 在文件中的顺序无关，比的是谁的 `location` 更长；而正则匹配则跟顺序有关。