---
title: 修改软件源
---

## 切换为国内镜像

`manjaro` 默认镜像非国内，会导致下载速度过慢，切换镜像地址：

```bash
sudo pacman-mirrors -i -c China -m rank
```



## ArchlinuxCN

ArchlinuxCN 是由 Arch Linux 中文社区维护的非官方的仓库，也就是说它会提供一些没有被 Arch Linux 收录的国产软件。
需注意它是 `arch` 的而非 `manjaro` 的，而 `manjaro` 的官方源更新滞后于 `arch`，当上游出现 `ABI` 破坏性更新时，ArchlinuxCN 会优先保证 Arch Linux 的用户体验，至于更新落后的 `manjaro` 可能就会挨打了。

### 1. 命令行配置

```bash
sudo vim /etc/pacman.conf

# 在最后追加
# 当然你也可以使用其他镜像
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
# Server = https://mirrors.aliyun.com/archlinuxcn/$arch

# 再添加源的 key
sudo pacman -S archlinuxcn-keyring

# 更新软件列表
sudo pacman -Syy
```

### 2. 界面配置

`Octopi` > `工具` > `软件源编辑器`。