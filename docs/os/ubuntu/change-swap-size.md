---
title: 修改 swap 分区大小
---

## 介绍

有时系统（`ubuntu20.04`）部分应用提示 502。



## 步骤

### 1. 初始状态

查看大小：

```bash
free -h

              total        used        free      shared  buff/cache   available
Mem:           15Gi       3.5Gi       9.7Gi        14Mi       2.2Gi        11Gi
Swap:         4.0Gi          0B       4.0Gi
```

查看位置：

```bash
swapon -s

Filename                                Type            Size    Used    Priority
/swap.img                               file            4194300 0       -2
```

### 2. 新增 swap

一般 swap 为内存的 1-1.5 倍。

```bash
dd if=/dev/zero of=/swapfile bs=1G count=16

# 验证
ll /sw*

# 修改文件权限
sudo chmod 0600 /swapfile
# 生成 swap
sudo mkswap -f /swapfile

# 验证
ll /sw*
```

### 3. 替换 swap

```bash
# 关闭旧的
swapoff /swap.img
# 启用新的
sudo swapon /swapfile

# 验证
free -h
```

### 4. 开机启动

```bash
# 备份
sudo cp /etc/fstab /etc/fstab.bak

# 将对应的 /swap.img 修改为 /swapfile
sudo vim /etc/fstab

# 验证
sudo reboot
sudo rm -f /swap.img # 确认后删除旧 swap
```

