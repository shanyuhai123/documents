---
title: 常用命令
---

## 说明

终究还是要提取出常用命令，记忆越来越差了。

发现一篇更好的总结 [初次登录 Linux 服务器马上要做的 9 件事](https://linux.cn/article-12959-1.html)。



## 第一次接触

当登录一台服务器时，了解一下当前环境更好。

```bash
cat /etc/*-release
uname -a
hostnamectl
uptime
ip addr

# 修改阿里云主机名还需要注意 /etc/cloud/cloud.cfg 配置
sudo hostnamectl set-hostname shanyuhai
```



## 有人登录在上面吗

```bash
who
who -Hu
# 过滤具有访问权限
grep sh$ /etc/passwd
```



## 物理机还是虚拟机

看看自己是啥系统。如果是物理系统，你会看到供应商的名称（如 HP、IBM 等）以及服务器的品牌和型号；而在虚拟机中，你应该看到 KVM、VirtualBox 等，这取决于创建虚拟机时使用了什么虚拟化软件。

```bash
dmidecode -s system-manufacturer
dmidecode -s system-product-name
lshw -c system | grep product | head -1
cat /sys/class/dmi/id/product_name
cat /sys/class/dmi/id/sys_vendor
```



## 硬件

```bash
lscpu or cat /proc/cpuinfo
lsmem or cat /proc/meminfo
ifconfig -a
ethtool <devname>
lshw
lspci
dmidecode
```



## 网络连接

这是最经常关注的东西了。

```bash
netstat -tulpn # ss -tunlp
netstat -anp
# 查看建立的通信
lsof -i
# 查看端口服务占用
lsof -i :53
iptables -L -n
cat /etc/resolv.conf
```



## 日志

```bash
dmesg
tail -f /var/log/messages
journalctl
```

