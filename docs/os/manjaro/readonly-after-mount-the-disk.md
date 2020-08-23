---
title: 挂载硬盘后只读
---

## 情况

双系统使用情况下，当切换系统时挂载硬盘时仅具有只读权限。

直接使用 `dolpgin` 操作无提示，后采用命令行操作得到提示：

```bash
sudo mount /dev/sda2 /run/media/shanyuhai/GROCERY

# 提示
The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
Falling back to read-only mount because the NTFS partition is in an
unsafe state. Please resume and shutdown Windows fully (no hibernation
or fast restarting.)
```



## 修复

可利用 `ntfs` 自带的修复工具：

```bash
ntfsfix /dev/sda2

# 再次挂载
sudo mount /dev/sda2 /run/media/shanyuhai/GROCERY
```

再次尝试在文件夹内进行编辑、删除操作发现可行了。