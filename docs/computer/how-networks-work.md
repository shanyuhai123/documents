---
title: 网络是怎样连接的
sidebarDepth: 2
---

::: tip

一直以来，从输入链接到页面显示内容经历了什么是一个非常常规的面试题，而 《网络是怎样连接的》目录已经很好的回答了这个问题。

:::

<img :src="$withBase('/computer/how-networks-work-1.jpg')" alt="how-networks-work-1">

## 第一章 浏览器生成消息 -- 探索浏览器内部

### 1. 生成 HTTP 请求消息

生成 HTTP 前需要解析 URL：

```bash
# 1. HTTP 协议
http://user:password@www.shanyuhai.top:80/dir/index.html
# user 用户名（可省略）
# password 密码（可省略）
# www.shanyuhai.top Web 服务器域名
# 80 端口（可省略）
# /dir/index.html 文件的路径名

# 2. FTP 协议
ftp://user:password@ftp.shanyuhai.top:21/dir/index.html
# user 用户名（可省略）
# password 密码（可省略）
# ftp.shanyuhai.top FTP 服务器域名
# 21 端口（可省略）
# /dir/index.html 文件的路径名

# 3. 客户端本地文件
file://localhost/home/shanyuhai/project/network/index.html
# localhost 计算机名（可省略）
# /home/shanyuhai/project/network/index.html 文件的路径名

# mailto 邮件
mailto:shanyuhai@shanyuhai.top
# shanyuhai@shanyuhai.top 邮件地址

# news 新闻组
news:comp.protocols.tcp
# comp.protocols.tcp 新闻组名
```

HTTP 主要方法：

|  方法   | 含义                                                         |
| :-----: | ------------------------------------------------------------ |
|   GET   | 获取 URI 指定的信息。如果 URI 指定的是文件，则返回文件的内容；如果 URI 指定的是 [CGI 程序](https://zh.wikipedia.org/wiki/CGI)，则返回该程序的输出数据。 |
|  POST   | 从客户端向服务器发送数据。一般用于发送表单中填写数据等情况。 |
|  HEAD   | 和 GET 基本相同，只不过它只返回 HTTP 的消息头（message header），而不返回数据的内容。用于获取文件最后更新时间等信息。 |
| OPTIONS | 用于通知或查询通信选项。                                     |
|   PUT   | 替换 URI 指定的服务器上的文件。如果 URI 指定的文件不存在，则创建该文件。 |
| DELETE  | 删除 URI 指定的服务器上的文件。                              |
|  TRACE  | 将服务器收到的请求行和头部（header）直接反给客户端。用于在使用代理的环境中检查改写请求的情况。 |
| CONNECT | 使用代理传输加密消息时使用。                                 |

在了解以上基础后就可以生成请求消息了：

```
<方法><空格><URI><空格><HTTP 版本>
<字段名1>:<字段值>
<字段名2>:<字段值>
<字段名n>:<字段值>
<空行>
<消息体>
```

第一行为**请求行**，通过这一行就可以大致了解请求的内容。

第二部分一堆字段名被称为**消息头**，每行包含一个头字段，用于表示请求行的附加信息。消息头的行数根据具体可变，一直延伸到空行为止。

**消息体（message body）** 包含客户端向服务器发送的数据，例如用 POST 方法向服务器发送的网页表单数据。

### 2. 向 DNS 服务器查询 Web 服务器的 IP 地址

### 3. 全世界 DNS 服务器的大接力

### 4. 委托协议栈发送消息



## 第二章 用电信号传递 TCP/IP -- 探索协议栈和网卡

### 1. 创建套接字

### 2. 连接服务器

### 3. 收发数据

### 4. 从服务器断开并删除套接字

### 5. IP 与以太网的包收发操作

### 6. UDP 协议的收发操作



## 第三章 从网络到网络设备 -- 搜索集线器、交换机和路由器

### 1. 信号在网线和集线器中传输

### 2. 交换机的包转发操作

### 3. 路由器的包转发操作

### 4. 路由器的附加功能



## 第四章 通过接入网进入互联网内部 -- 探索接入网和网络运营商

### 1. ADSL 接入网的结构和工作方式

### 2. 光纤接入网（FTTH）

### 3. 接入网中使用的 PPP 和隧道

### 4. 网络运营商的内部

### 5. 跨越运营商的网络包



## 第五章 服务器端的局域网有什么玄机

### 1. Web 服务器的部署地点

### 2. 防火墙的结构和原理

### 3. 通过请求平分给多台服务器来平衡负载

### 4. 使用缓存服务器来分担负载

### 5. 内容分发服务



## 第六章 请求到达 Web 服务器，响应返回浏览器 -- 短短几秒的 “漫长旅行” 迎来终点

### 1. 服务器概览

### 2. 服务器的接收操作

### 3. Web 服务器程序解释请求消息并作出响应

### 4. 浏览器响应消息并显示内容

