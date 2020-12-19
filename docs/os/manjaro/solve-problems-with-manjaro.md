---
title: Manjaro 的日常
---

## 解决 Manjaro 录屏闪烁

### 1. 问题情况

在使用 Manjaro 录屏后，发现录制出来的屏幕经常闪烁，部分画面遗失。

### 2. 解决方案

::: tip 步骤
`系统设置` > `硬件` > `显示和监控` > `混成器` > `避免撕裂(垂直同步)` > `从不`
:::

![录屏闪烁](/os/manjaro/screen-flashing-when-recording.png)



## 禁用笔记本键盘

### 1. 问题情况

之前键盘进过水导致会启用按键失灵，所以需要禁用自带的键盘。

### 2. 解决方案

::: tip 初级方案  
```bash
# manjaro 下 xinput 被 xorg-xinput 替代
sudo pacman -S xorg-xinput
# 查看设备列表
xinput list
# 查看笔记本键盘信息 
xinput list-props 'AT Translated Set 2 keyboard'
# Device Enabled (147): 1 =》 `1` 表示维禁用
xinput set-prop 17 'Device Enabled' 0
# 再次查看设备信息即可
```
:::

::: danger 终极方案
`关电源` > `打开后盖` > `拆除笔记本键盘排线`
:::



## 修复文件夹名为英文

### 1. 问题情况

将系统设置为中文后，用户目录下的文件夹也随之变为中文，在日常使用时就会造成频繁切换输入这就让人很烦了。而直接重命名会导致出现一些问题。

### 2. 解决方案

::: tip 初级方案  

```bash
# 1. 找到 `～/.config/user-dirs.dis` 文件
vim ~/.config/user-dirs.dirs 
# 2. 接着将中文命名修改为新改的英文，并使其生效
source ~/.config/user-dirs.dirs
# 3. 然而这并没有结束，你还需要修改右侧图标的位置
右键 > 编辑 > 位置
```

:::



## 双显卡解决方案

参考 [在 Manjaro 配置 Optimus manager 实现 Nvidia-Prime 双显卡解决方案](https://blog.kongjune.com/manjaro-prime/) 即可。

由于使用的版本为 `manjaro Lysia`，所以配置项都无需处理，仅仅是：

```bash
sudo pacman -S optimus-manager optimus-manager-qt

# 或需从 yay 安装
yay -S optimus-manager-qt
```

接着启用即可。

> 2020-12-17 更新

在后续的使用中 `bbsswitch` 似乎被卸载了（不确定是我个人卸载，还是系统升级被移除）导致切换失败。

在上面的页面中还有其他选择，如 `acpi_call`，所以：

```bash
# 安装
sudo pacman -S acpi_call-dkms

# 启用
sudo modprobe acpi_call
```

接着可以使用命令行工具 [optimus-switch-sddm](https://github.com/dglt1/optimus-switch-sddm)。

在界面 QT 工具中选用 `acpi_call` 导致桌面无法启动，未排查出原因，后续修改配置文件 `/etc/optimus-manager/optimus-manager.conf`，改回 `switching=bbswitch` 才使得桌面启动。



## 风扇起飞

### 1. 问题情况

系统风扇起飞，一般是由于某个程序占用资源过多导致。

### 2. 解决方案

> 解决后可能会导致其他问题。

引起该问题有很多情况，之前也总是忘记抓罪犯：

1. [baloo](https://wiki.archlinux.org/index.php/Baloo) 建立文件索引

   ```bash
   balooctl status  # 查看状态
   balooctl suspend   # 停止
   balooctl disable  # 禁用
   ```

   除了命令行还可以在 `系统` =》 `查找` 中找到该配置项。