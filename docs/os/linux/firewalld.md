---
title: 防火墙 firewalld
---

## 介绍

firewalld 是 CentOS 7 新增的特性，其支持动态更新，且添加了防火墙 "zones" 的概念。

firewalld 与 iptables 自身并不具备防火墙的功能，都需要通过内核的 netfilter 来实现，它们的作用都是维护过滤的规则。

firewalld 的配置文件存放在 `/usr/lib/firewalld/` 和 `/etc/firewalld/` 里的 XML 文件中。

```bash
# 安装
yum install firewalld firewall-config
```



## 指令

> 可能需要先使用 systemctl 套件启用服务。
>
> 除了使用命令格式外，还可以使用 GUI，不过需要注意的是在登录时需要 `ssh -Y user@ip` 。

::: danger
firewall-cmd [Options ... ]
:::

### 1. 状态选项

| option                 | effect                       |
| ---------------------- | ---------------------------- |
| --state                | firewalld 的状态。           |
| --reload               | 不中断服务的重新加载。       |
| --complete-reload      | 中断所有连接的重新加载。     |
| --runtime-to-permanent | 将当前防火墙的规则永久保存。 |
| --check-config         | 检查配置正确性。             |

### 2. 日志选项

| option                   | effect                                                       |
| ------------------------ | ------------------------------------------------------------ |
| --get-log-denied         | 获取记录被拒绝的日志。                                       |
| --set-log-denied=<value> | 设置记录被拒绝的日志，只能为 'all','unicast','broadcast','multicast','off' 其中的一个。 |



## 操作

在开始操作前需要对 zone 有一定的了解。

| zone     | zh       | effect                                                       |
| -------- | -------- | ------------------------------------------------------------ |
| drop     | 丢弃     | 任何接收的网络数据包都被丢弃，没有任何回复。仅能有发送出去的网络连接。 |
| block    | 限制     | 任何接收的网络连接都被 `IPv4` 的 icmp-host-prohibited 信息和 `IPv6` 的 icmp6-adm-prohibited 信息所拒绝。 |
| public   | 公共     | 在公共区域内使用，不能相信网络内的其他计算机不会对您的计算机造成危害，只能接收经过选取的连接。 |
| external | 外部     | 特别是为路由器启用了伪装功能的外部网。您不能信任来自网络的其他计算，不能相信它们不会对您的计算机造成危害，只能接收经过选择的连接。 |
| dmz      | 非军事区 | 用于您的非军事区内的电脑，此区域内可公开访问，可以有限地进入您的内部网络，仅仅接收经过选择的连接。 |
| work     | 工作     | 用于工作区。您可以基本相信网络内的其他电脑不会危害您的电脑。仅仅接收经过选择的连接。 |
| home     | 家庭     | 用于家庭网络。您可以基本信任网络内的其他计算机不会危害您的计算机。仅仅接收经过选择的连接。 |
| internal | 内部     | 用于内部网络。您可以基本上信任网络内的其他计算机不会威胁您的计算机。仅仅接受经过选择的连接。 |
| trusted  | 信任     | 可接受所有的网络连接。                                       |

`firewalld` 里的默认区域被设定为公共区域。

### 1. service

```bash
# 显示支持的 zone 列表：
firewall-cmd --get-zones
# 查看所有 zone 详情：
firewall-cmd --list-all-zones
# 查看某一 zone 详情：
firewall-cmd --zone=public --list-all
# 查看默认 zone：
firewall-cmd --get-default-zone
# 显示所有 services：
firewall-cmd --get-services
# 查看某一服务（返回 yes/no）：
firewall-cmd --query-service=<service name>
firewall-cmd --query-service=http # no / 80
# 显示当前 service：
firewall-cmd --list-services
# 添加服务：
firewall-cmd --add-service=<service name>
# 删除服务：
firewall-cmd --remove-service=<service name>
# 允许SSH服务通过：
firewall-cmd --enable service=ssh
# 禁止SSH服务通过：
firewall-cmd --disable service=ssh
# 添加服务至 zone：
firewall-cmd --zone=public --add-service=<service name> --permanent
```

### 2. port

```bash
# 查看所有端口：
firewall-cmd --list-port
# 查看某个端口：
firewall-cmd --query-port=22/tcp
# 添加某个端口：
firewall-cmd --add-port=22/tcp --permanent  
# 删除某个端口：
firewall-cmd --remove-port=22/tcp

# 将 80 端口的流量转发至 8080：
firewall-cmd --add-forward-port=port=80:proto=tcp:toport=8080   
```

### 3. IP

```bash
# 检查是否允许伪装 IP：
firewall-cmd --query-masquerade
# 允许防火墙伪装 IP：
firewall-cmd --add-masquerade
# 禁止防火墙伪装 IP：
firewall-cmd --remove-masquerade

# 封禁某个 IP：
firewall-cmd --permanent --add-rich-rule='rule family=ipv4 source address="ip" drop'
```

### 4. rich-rule

多规则命令的格式或结构如下（及[解释](https://access.redhat.com/documentation/zh_cn/red_hat_enterprise_linux/7/html/security_guide/sec-using_firewalls#Configuring_Complex_Firewall_Rules_with_the_Rich-Language_Syntax)）：

```bash
rule [family="<rule family>"]
    [ source address="<address>" [invert="True"] ]
    [ destination address="<address>" [invert="True"] ]
    [ <element> ]
    [ log [prefix="<prefix text>"] [level="<log level>"] [limit value="rate/duration"] ]
    [ audit ]
    [ accept|reject|drop ]
```

