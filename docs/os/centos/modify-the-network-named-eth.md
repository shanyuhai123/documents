---
title: 修改网卡名为 eth
---

## 修改网卡配置

```bash
# 查看网卡
ip addr 
# ens33

# 修改配置文件
cd /etc/sysconfig/network-scripts
cp ifcfg-ens33{,.bak} # 备份
mv ifcfg-ens33 ifcfg-eth0
vim ifcfg-eth0
# 修改
# NAME=eth0
# DEVICE=eth0
cat ifcfg-eth0 # 验证
```



## 修改 grub 配置

```bash
# 修改 grub 配置
vim /etc/sysconfig/grub
# 修改，在其后追加
# GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root net.ifnames=0 biosdevname=0 rd.lvm.lv=centos/swap rhgb quiet net.ifnames=0 biosdevname=0"
cat /etc/sysconfig/grub # 验证

# 更新配置
grub2-mkconfig -o /boot/grub2/grub.cfg
```



## 验证

```bash
shutdown -r now # 重启
ip addr
# eth0
```

