---
title: 检测服务器通达
---

## 准备

首先需要确认服务端、客户端的配置均没有问题。



## 检测

### 1. ping

检查物理链路是否抵达：

```bash
ping [ip]
```

### 2. tracepath

路由跟踪指令：

```bash
tracepath [ip]
```

### 3. telnet

检查服务端是否提供服务：

```bash
telnet [ip] [port]
```

当 telnet 提示拒绝服务时，存在两种可能性：

1. 服务未开启，不存在服务；

2. 防火墙拒绝访问：

   在 CentOS6 中防火墙是 iptables，在 CentOS7 中是 firewalld

   ```bash
   systemctl status firewalld
   ```

   

