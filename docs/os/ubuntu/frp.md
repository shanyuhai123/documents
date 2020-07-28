---
title: FRP
---

## 介绍

::: tip

FRP（Fast Reverse Proxy）is a fast reverse proxy to help you expose a local server behind a NAT or firewall to the Internet. As of now, it supports **TCP** and **UDP**, as well as **HTTP** and **HTTPS** protocols, where requests can be forwarded to internal services by domain name.

来自 [FRP](https://github.com/fatedier/frp)

:::

此处仅以配置 SSH 服务为示例。



## 准备

### 1. 安全设置

这是一件有风险的事情，所以开始前最好确认你的公网、内网服务器都已经做好防护工作，例如[修改 ssh 配置](/os/linux/login-with-rsa-key)：禁用 root、使用密钥替换密码登录、切换端口等操作。

### 2. 资源下载

需要在 github 上下载最新的 [frp release](https://github.com/fatedier/frp/releases) 到公网、内网服务器上，注意选择对应的版本。

### 3. 端口开放

如果是阿里云，需要在云实例中开放下方将要使用的端口。

+ `bind_port/server_port`
+ `remote_port`



## 配置

### 1. 公网服务器

公网服务器修改 `frps.ini` 文件。

```ini
# frps.ini
[common]
bind_port = 7000
```

配置解释：

+ `bind_port` 为 `frp` 服务器端接收客户端流量的端口

启动服务端 `frp` 程序。

```bash
nohup ./frps -c frps.ini &
```

### 2. 内网服务器

内网服务器修改 `frpc.ini` 文件。

```ini
# frpc.ini
[common]
server_addr = x.x.x.x
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
```

配置解释：

+ `server_addr` 为 `frp` 服务端 `ip` 地址，也可以是域名
+ `server_port` 为 `frp` 服务端的 `bind_port` 
+ `local_ip` 为 `frp` 客户端的 `ip` 或 `127.0.0.1`
+ `local_port` 为 `frp` 客户端的 ssh 端口，其默认为 22，在安全设置时可能修改为其他
+ `remote_port` 为 `frp` 客户端挂载到 `frp` 服务端的端口。在此示例中访问服务端 `6000` 端口相当于访问客户端 `22` 端口

启动客户端 `frp` 程序。

```bash
nohup ./frpc -c frpc.ini &
```

### 3. 停止服务

以上述形式启动的服务，需要先找到进程号再停止。

```bash
ps -aux | grep frp | grep -v grep
# 72029
kill -9 72029

# 验证
ps -aux | grep frp | grep -v grep
```





## 使用

### 1. 公网跳板（不推荐）

在之前安全设置中已经使用了密钥登录，为了简化操作可以配置 [ssh config](/os/linux/login-with-rsa-key.html#快速访问服务器)。

```bash
# 进入公网
ssh aliyun

# 再从公网进入内网
ssh private
```

### 2. 直接访问

若公网服务端被黑了，就会导致黑客可以直接进入你的内网。当然如果希望公网只是一个跳板，方便其余机器进入也可以选择上一种方式。

```bash
# 直接访问内网
# 配置该 config 时可以认识到 `local_port` 与 `remote_port` 之间的关系
ssh aliyun2private
```



## systemd

在下载对应的 `frp` 文件时，解压后注意到存在 `systemd` 文件夹，查看例如服务端配置。

```bash
# cat systemd/frps.service

[Unit]
Description=Frp Server Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/frps -c /etc/frp/frps.ini

[Install]
WantedBy=multi-user.target

# cat systemd/frpc.service

[Unit]
Description=Frp Client Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/frpc -c /etc/frp/frpc.ini
ExecReload=/usr/bin/frpc reload -c /etc/frp/frpc.ini

[Install]
WantedBy=multi-user.target
```

仅说明 `frps.service` 配置文件：

+ `frps` 启动程序放入 `/usr/bin` 目录中
+ `frps.ini` 配置文件放入 `/etc/frp` 目录中
+ `frps.service` 服务程序放入 `/lib/systemd/system` 目录中

最后：

```bash
# 更新服务文件，记得加上 sudo
sudo systemctl daemon-reload

# 开启
sudo systemctl start frps
```

