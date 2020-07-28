---
title: 配置网络 netplan
---



## 版本

`Ubuntu20.04`



## ETH netplan

配置了 `/etc/network/interfaces` 发现并未生效，得知需要修改 `/etc/netplan` 的配置。

```bash
sudo vim /etc/netplan/00-installer-config.yaml

# 第一种
network:
  ethernets:
    enp5s0:
      addresses: [192.168.0.111/24]
      dhcp4: no
      optional: true
      gateway4: 192.168.0.1
      nameservers:
        addresses: [223.5.5.5,223.6.6.6]
  version: 2
  
# 第二种奇怪的配置，但是也很好用
network:
  ethernets:
    enp5s0:
      addresses: [192.168.0.111/24]
      dhcp4: yes
  version: 2
# 第二种的 ip addr 结果
inet 192.168.0.111/24 brd 192.168.0.255 scope global enp5s0
valid_lft forever preferred_lft forever
inet 192.168.0.104/24 brd 192.168.0.255 scope global secondary dynamic enp5s0
valid_lft 7199sec preferred_lft 7199sec
```

使配置生效：

```bash
sudo netplan generate
sudo netplan apply
```

配置完后同段内的机器可以 ping 通，并通过 ssh 进一步测试。



## 安装驱动

如果有 WIFI 网卡，则可跳过安装驱动。

```bash
ip addr
```

> 折腾许久，才发现是 Linux 内核不支持老网卡。

```bash
lshw -C network

# 结果
*-network UNCLAIMED # 未识别       
       description: Network controller
       product: BCM43142 802.11b/g/n
       vendor: Broadcom Inc. and subsidiaries
       physical id: 0
       bus info: pci@0000:04:00.0
       version: 01
       width: 64 bits
       clock: 33MHz
       capabilities: bus_master cap_list
       configuration: latency=0
       resources: memory:e3500000-e3507fff
```

```
sudo apt install firmware-b43-installer
```

[解决方案](https://askubuntu.com/questions/765584/is-it-possible-to-use-broadcom-bcm43142-wifi-in-ubuntu-16-04)：

```bash
sudo apt-get update
sudo apt-get install bcmwl-kernel-source

# 修改黑名单
sudo gedit /etc/modprobe.d/blacklist.conf
# 追加
blacklist b43
blacklist bcma
blacklist ssb
```

如果还有问题，可能需要修改 BIOS 的 `secrety root` 为 `disabled`。



## WIFI netplan

```bash
sudo vim /etc/netplan/00-installer-config.yaml

# 配置 wifi
wifis:
    wlp4s0:
      addresses: [192.168.0.122/24]
      dhcp4: false
      optional: true
      gateway4: 192.168.0.1
      nameservers:
        addresses: [223.5.5.5,223.6.6.6]
      access-points:
        "SSID":
          password: "password"
```

接着还需要启用 WIFI：

> 莫名奇妙测试出来的（也可能不用执行以下步骤），待后续正规化处理

```bash
sudo systemctl status netplan-wpa-wlp4s0.service # 根据你对应的 wifi 名称
systemctl daemon-reload
```