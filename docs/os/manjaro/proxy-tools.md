---
title: 代理工具
---

## Shadowsocks

### 1. 安装

通过任意形式安装即可。

### 2. 配置

配置文件在 `/etc/shadowsocks/config.json`：

```json
{
  "server": "xxx.xxx.xxx.xxx",
  "server_port": port,
  "local_address": "127.0.0.1",
  "local_port": 1080,
  "password": "yourpassword",
  "timeout": 300,
  "method": "aes-256-cfb",
  "fast_open": false,
  "workers": 1,
  "prefer_ipv6": false
}
```

文件名可以自定，且可以设置多个文件方便快速切换。

### 3. 指定配置

指定一个配置文件，如之前的 `config.json` 文件：

```bash
sslocal -c /etc/shadowsocks/config.json
```

### 4. 启动

```bash
# 通过 `@` 指定配置 
systemctl start shadowsocks@config
systemctl enable shadowsocks@config
```



## Qv2ray

> Qv2ray 在 manjaro 下经常一更新系统就崩，伤透了心



## Clash

### 1. 安装

在 [release](https://github.com/Dreamacro/clash/releases) 中选择一个适合你的，并解压。

```bash
sudo cp ~/downloads/clash /usr/local/bin
```

### 2. 初试

直接运行：

```bash
sudo /usr/local/bin

# 输出
INFO[0000] Can't find config, create a initial config file
INFO[0000] Can't find MMDB, start download
INFO[0000] Mixed(http+socks5) proxy listening at: 127.0.0.1:7890
```

然后呢？

### 3. 配置

在一些教程中能够直接解析服务商提供的 base64，但我失败了，于是采取了取巧的方案，从已有的导出 `config.yaml` 配置即可。

### 4. 守护进程

移入配置：

```bash
sudo cp ~/downloads/config.yaml /etc/clash
sudo cp ~/downloads/Country.mmdb /etc/clash
```

新增 `systemd` 配置 `/etc/systemd/system/clash.service`：

```bash
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/clash -d /etc/clash

[Install]
WantedBy=multi-user.target
```

启动：

```bash
# 其他一致
sudo systemctl start clash.service
sudo systemctl enable clash.service
```

