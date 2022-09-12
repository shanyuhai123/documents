---
description: Arch Linux 系统迁移到新硬盘
autoPrev: README
---

# Arch 系统迁移

> 买了新硬盘，怎么可以吃灰呢？

## 制作 Arch Live

首先下载新[镜像](https://archlinux.org/download/)。

```sh
# 用U盘替换 /dev/sdx，如 /dev/sdb。（不要加上数字，也就是说，不要键入 /dev/sdb1 之类的东西)
dd bs=4M if=/path/to/archlinux.iso of=/dev/sdx status=progress && sync
```

## 分区

### 1. 查看分区信息

首先查看当前系统的分区：

```sh
fdisk -l
```

得到磁盘信息：

```txt
# 当前磁盘
Disk /dev/nvme0n1：476.94 GiB
设备               起点       末尾      扇区   大小 类型
/dev/nvme0n1p1     2048    2099199   2097152     1G EFI 系统
/dev/nvme0n1p2  2099200   35653631  33554432    16G Linux swap
/dev/nvme0n1p3 35653632 1000215182 964561551 459.9G Linux 文件系统
# 新磁盘
Disk /dev/nvme1n1：476.94 GiB
```

### 2. 新磁盘修改分区

首先进入新磁盘：

```sh
fdisk /dev/nvme1n1
```

根据提示，依次执行：

```sh
命令(输入 m 获取帮助)：n
分区号 (1-128, 默认  1):
第一个扇区 (2048-1000215182, 默认 2048):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (2048-1000215182, 默认 1000214527): +1G

创建了一个新分区 1，类型为“Linux filesystem”，大小为 1 GiB。
命令(输入 m 获取帮助)：n
分区号 (2-128, 默认  2):
第一个扇区 (2099200-1000215182, 默认 2099200):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (2099200-1000215182, 默认 1000214527): +16G

创建了一个新分区 2，类型为“Linux filesystem”，大小为 16 GiB。
命令(输入 m 获取帮助)：n
分区号 (3-128, 默认  3):
第一个扇区 (35653632-1000215182, 默认 35653632):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (35653632-1000215182, 默认 1000214527):

创建了一个新分区 3，类型为“Linux filesystem”，大小为 459.9 GiB。
命令(输入 m 获取帮助)：t
分区号 (1-3, 默认  3): 1
分区类型或别名（输入 L 列出所有类型）：L
分区类型或别名（输入 L 列出所有类型）：1

已将分区“Linux filesystem”的类型更改为“EFI System”。
命令(输入 m 获取帮助)：t
分区号 (1-3, 默认  3): 2
分区类型或别名（输入 L 列出所有类型）：19

已将分区“Linux filesystem”的类型更改为“Linux swap”。
命令(输入 m 获取帮助)：w
分区表已调整。将调用 ioctl() 来重新读分区表。正在同步磁盘。
```

注：

```sh
n: 新建分区
+16G: 新建分区的大小为 16G
t：修改分区类型，默认都为
L：查看所有的分区类型，找到你需要的
```

操作完成后可自行查看结果 `fdsik -l`。

### 3. 分区格式化

每种不同类型的分区需要不同操作：

```sh
# 格式化 boot
mkfs.fat -F32 /dev/nvme1n1p1
# 格式化 swap
mkswap /dev/nvme1n1p2
# 格式化 根分区
mkfs.ext4 /dev/nvme1n1p3
```

## 系统文件迁移

```sh
# 挂载根分区
mount /dev/nvme1n1p3 /mnt
# 同步数据，此处未同步 boot
rsync -aAXv /* /mnt --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found","/boot" }
```

由于经常搞崩电脑，还是练习下拆开步骤的形式。

## 重建 boot

移除旧磁盘，再进入准备好的 `Arch Live` 环境。

### 1. 挂载分区并生成 fstab

```sh
# 查看分区信息
fdisk -l
# 挂载根节点
mount /dev/nvme0n1p3 /mnt
# 挂载 boot
mount /dev/nvme0n1p1 /mnt/boot
# 生成 fstab
genfstab -L /mnt > /mnt/etc/fstab
```

若后续启用 [swap](https://wiki.archlinux.org/title/Swap_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))，则再执行 `genfstab` 即可。

### 2. 安装依赖

进入系统并安装依赖：

```sh
arch-chroot /mnt
pacman -S linux mkinitcpio efibootmgr
# 有需要也可重装 grub
pacman -S grub
```

### 3. 生成 grub

```sh
# 执行 grub-install
grub-install --efi-directory=/boot
# 生成 grub.cfg（若报错，可增加 LANG=C）
grub-mkconfig -o /boot/grub/grub.cfg
# LANG=C grub-mkconfig -o /boot/grub/grub.cfg
```

## 其他方式

> 未曾尝试

```sh
# disk
dd if=/dev/sdx of=/dev/sdy conv=noerror,sync
# image
dd if=/dev/sdx of=/run/media/shanyuhai/xxx/sys.img
dd if=sys.img of=/dev/sdy
```
