---
title: AUR
---

## 说明

AUR（Arch User Repository ），Arch 社区软件仓库，包含了一些非官方的软件。

Arch 的包管理器 pacman 不直接支持 AUR，支持 AUR 的工具常常被称之为 `AUR 助手`。



## AUR 助手

早期使用的是 Yaourt，不过其已经不再维护，所以切换到 [yay](https://github.com/Jguer/yay)。

### 1. 安装 yay

```bash
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### 2. 修改 yay 源

yay 默认源为 `aur.archlinux.org`，为其创建配置文件即可修改源：

```bash
yay -Syu --devel --combinedupgrade --save
# 或
yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
```

接着修改 `.config/yay/config.json`，替换为对应的[镜像源地址](https://mirror.tuna.tsinghua.edu.cn/help/AUR/)。

### 3. yay 命令

|             Command             | Description                                                  |
| :-----------------------------: | ------------------------------------------------------------ |
|      `yay <Search Term> `       | Present package-installation selection menu.                 |
|            `yay -Ps`            | Print system statistics.                                     |
|            `yay -Yc`            | Clean unneeded dependencies.                                 |
|            `yay -G `            | Download PKGBUILD from ABS or AUR.                           |
|        `yay -Y --gendb`         | Generate development package database used for devel update. |
| `yay -Syu --devel --timeupdate` | Perform system upgrade, but also check for development package updates and use PKGBUILD modification time (not version number) to determine update. |

日常使用的为：

**搜索：**`yay -Ss <package-name>`

**安装：** `yay -S <package-name>`

