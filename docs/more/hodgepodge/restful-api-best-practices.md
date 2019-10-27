---
title: RESTful API 最佳实践
---

## 介绍

RESTful（Representational State Transfer）是一种 API 设计规范，用于 Web 数据接口的设计。

如果一个架构符合 REST 原则，就称之为 RESTful 架构。

> **要理解 RESTful 架构，最好的方法就是去理解 Representational State Transfer 这个词组到底是什么意思，它的每一个词代表了什么涵义。**

REST的名称"表现层状态转化"中，省略了主语。"表现层"其实指的是"资源"（Resources）的"表现层"。

**所谓"资源"，就是网络上的一个实体，或者说是网络上的一个具体信息。**

一般会使用一个 URI（Universal Resource Identifier，统一资源标志符）来指向它。

> 参考资料中的描述存在一些问题，当对一些问题产生疑惑时推荐通过谷歌或者 [wiki](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6) 来查询。
>
> 原本 URI 包含 URL 和 URN，但是很遗憾 URN 使用率过低，导致目前几乎所有的 URI 都是 URL。



## URL 设计

::: warning
此处设计仅作为一个思路，个人觉得直接参阅大公司的 API 设计指南更好一些。

1. [Google](https://cloud.google.com/apis/design/)
2. [Github](https://developer.github.com/v3/)
3. [Twitter](https://developer.twitter.com/en/docs/basics/getting-started)
4. [Microsoft](https://docs.microsoft.com/zh-cn/azure/architecture/best-practices/api-design) <Badge text="中文友好" type="error"/>

:::

### 1. 动词 + 宾语

RESTful 的核心思想就是，客户端发出的数据操作指令都是 “动词 + 宾语” 的结构。比如 `GET /articles` 这个命令，`GET` 是动词，`articles` 是宾语。

动词通常为五种 HTTP 方法，对应 CRUD 操作：

+ GET：读取（READ）；
+ POST：新建（Create）；
+ PUT：更新（Update）；
+ PATCH：更新（Update），通常是部分更新；
+ DELETE：删除（Delete）。

### 2. 动词的覆盖

某些情况只能使用 `GET` 和 `POST` 方法。此时可以采用 `X-HTTP-Method-Override` 来模拟操作。

### 3. 宾语必须是名词

宾语是 HTTP 动作的对象，它应该是名词。

### 4. 复数 URL

既然 URL 是名词，那么应该使用复数，还是单数呢？

此处建议都使用复数 URL，如 `GET /articles/2` 。

### 5. 避免多级 URL

常见的情况是，资源需要多级分类，因此很容易写出多级的 URL，比如获取某个作者的某一类文章。

```bash
# 缺乏语义及难以扩展
GET /authors/12/categories/2

# 更好的做法是，除了第一级，其他级别都用查询字符串表达
GET /authors/12?categories=2

# 查询已发布的文章
GET /articles?published=true
```



## 状态码

### 1. 状态码必须精确

客户端的每一次请求，服务器都必须给出回应。回应包括 HTTP 状态码和数据两部分。

HTTP 状态码就是一个三位数，分成五个类别：

+ 1xx：相关信息；
+ 2xx：操作成功；
+ 3xx：重定向；
+ 4xx：客户端错误；
+ 5xx：服务器错误。

这五大类共包含 100 多种状态码，覆盖了绝大部分可能遇到的情况。每一种状态码都是标准的（或约定的）解释，客户端只需要查看状态码，就可以判断发生了什么情况，所以服务器应该返回尽可能精确的状态码。

API 不需要 `1xx` 状态码。

### 2. `2xx` 状态码

`200` 状态码表示操作成功，但是不同的方法可以返回更精确的状态码：

+ GET：200 OK；
+ POST：201 Created；
+ PUT：200 OK；
+ PATCH：200 OK；
+ DELETE：204 No Content;

上面代码中，`POST` 返回 `201` 状态码，表示已经生成了新的资源；`DELETE` 状态码返回 `204` 状态码，表示资源已经不存在。

此外，`202 Accepted` 状态码表示服务器已经收到请求，但还未进行处理，会在未来再处理，通常用于异步操作。举个例子：

```http
HTTP/1.1 202 Accepted

{
  "task": {
    "href": "/api/company/job-management/jobs/2130040",
    "id": "2130040"
  }
}
```

### 3. `3xx` 状态码

API 用不到 `301` 状态码（永久重定向）和 `302` 状态码（暂时重定向，`307` 也是这个含义），因为它们可以由应用级别返回，浏览器会直接跳转，API 几倍可以不考虑这两种情况。

API 用到的 `3xx` 状态码，主要是 `303 See Other`，表示参考另一个 URL。它与 `302` 和 `307` 的含义一样，也是 “暂时重定向”，区别在于 `302` 和 `307` 用于 `GET` 请求，而 `303` 用于 `POST`、`PUT` 和 `DELETE` 请求。收到 `303` 之后，浏览器不会自动跳转，而会让用户决定下一步该怎么办。举个例子：

```http
HTTP/1.1 303 See Other
Location: /api/orders/12345
```

### 4. `4xx` 状态码

`4xx` 状态码表示客户端错误，主要有下面几种：

+ 400：`Bad Requset` 服务器不理解客户端的请求，未做任何处理；
+ 401：`Unauthorized` 用户为提供身份验证凭据，或者没有通过身份验证；
+ 403：`Forbidden` 用户通过了验证，但是不具有访问资源所需的权限；
+ 404：`Not Found` 请求的资源不存在，或者不可用；
+ 405：用户已经通过了身份验证，但是所用的 HTTP 方法不在他的权限之内；
+ 410：`Gone` 所请求的资源已经从这个地址转移，不再可用；
+ 415：`Unsupported Media Type` 客户端要求的返回格式不支持。比如，API 只能返回 JSON 格式，但是客户端要求返回 XML 格式；
+ 422：`Unprocessable Entity` 客户端上传的附件无法处理，导致请求失败；
+ 429：`Too Many Requests` 客户端的请求次数超过限额。

### 5. `5xx` 状态码

`5xx` 状态码表示服务端错误。一般来说，API 不会向用户透露服务器的详细信息，所以仅需要两个状态码就足够了：

+ 500：`Internal Server Error` 客户端请求有效，服务器处理时发生了意外；
+ 503：`Service Unavailable` 服务器无法处理请求，一般用于网站维护状态。



## 服务器响应

### 1. 不要返回纯文本

API 返回的数据格式，不应该是纯文本，而应该是一个 JSON 对象，因为这样才能返回标准的结构化数据。所以服务器响应的 HTTP 头的 `Content-Type` 属性要设为 `application/json` 。

### 2. 发生错误时，不要返回 200 状态码

有一种不恰当的做法是，即使发生错误，也返回 200 状态码，把错误信息放在数据体中，例如：

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "failure",
  "data": {
    "error": "Expected at least two items in list."
  }
}
```

上面的代码中，解析数据体以后，才能得知操作失败。

这样的做法实际上取消了状态码，这是完全不可取的。正确的做法是，状态码反应发生的错误，具体的错误信息放在数据体里面返回，举个例子：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Invalid payoad.",
  "detail": {
     "surname": "This field is required."
  }
}
```



## 参考资料

[理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)

[RESTful API 最佳实践](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)