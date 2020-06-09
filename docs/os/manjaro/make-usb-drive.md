---
title: 制作U盘启动
---

## 说明

在 Windows 下常常使用 [rufus](https://rufus.ie/) 来制作启动盘，而 `rufus` 暂无对 `Linux` 平台的支持。

> 推荐 [Ventoy](https://github.com/ventoy/Ventoy)，不过其并不是适配所有。



## 制作

### 1. 获取 U盘 路径

```bash
fdisk -l # 从中找到 /dev/sdc
```

### 2. 格式化 U 盘

```bash
mkfs.[type] /dev/sdc # [type] 为需要的类型，如 fat32、ext4、ntfs，例 mkfs.ext4
```

### 3. dd 命令

指定 `iso` 及 U盘路径即可

```bash
dd if=/path/ubuntu-20.04-live-server-amd64.iso of=/dev/sdc
```

相对于 `rufus` 等工具，该指令可能会花费较多的时间。