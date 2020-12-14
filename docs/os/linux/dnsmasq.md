---
title: Dnsmasq
---

## 前言

一开始选择了 [bind](https://www.isc.org/bind/)，试用后觉得配置麻烦就选择了更为轻量的 [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html)。

该笔记基本参考 [CentOS7 安装 dnsmaqs 局域网 DNS](https://www.cnblogs.com/pyyu/p/10318334.html)。



## 安装

### 1. 基本环境

```bash
yum install bind-utils dnsmasq -y
```

### 2. 备份

```bash
cp /etc/dnsmasq.conf /etc/dnsmasq.conf.bak
```

### 3. 配置

在 `/etc/dnsmasq.conf` 中可以看到都是注释项，所以猜测清空所有再增加也可：

```bash
port=53
# 表示严格按照 resolv-file 文件中的顺序从上到下进行 DNS 解析, 直到第一个成功解析成功为止
strict-order
# 指定上游dns服务器
resolv-file=/etc/resolv.dnsmasq.conf
# 自定义的dns记录文件
addn-hosts=/etc/dnsmasq.hosts
# 设为当前服务器
listen-address=192.168.0.42
# 缓存大小
cache-size=150


# 注意该项是否正确（我在启用时网卡指向了另外一个）
interface=eth0
```

填写上游 DNS 服务：

```bash
vim /etc/resolv.dnsmasq.conf

# 写入
nameserver 223.5.5.5
nameserver 223.6.6.6
nameserver 114.114.114.114
```

填写自建的 DNS 解析：

```bash
vim /etc/dnsmasq.hosts

# 写入
192.168.0.144 test.com
```

将当前主机的 DNS 服务指向 `dnsmasq`，若重启失效那么需要对 `NetworkManager` 进行配置。

```bash
vim /etc/resolv.conf

nameserver 192.168.0.42
```

最后重启服务：

```bash
# 检查配置正确
dnsmasq --test

# 重启
systemctl restart dnsmasq
```



## 测试

切换到其他主机下：

```bash
dig @192.168.0.42 test.com
```

如果测试失败，可以考虑端口是否被防火墙拦截：

```bash
telnet 192.168.0.42 53
```

