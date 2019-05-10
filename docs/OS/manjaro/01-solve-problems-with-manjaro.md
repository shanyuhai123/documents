---
title: Manjaro 的日常
---

## 1. 解决 Manjaro 录屏闪烁

### 问题情况

在使用 Manjaro 录屏后，发现录制出来的屏幕经常闪烁，部分画面遗失。

### 解决方案

::: tip 步骤
`系统设置` > `硬件` > `显示和监控` > `混成器` > `避免撕裂(垂直同步)` > `从不`
:::

![录屏闪烁](/OS/manjaro/os_manjaro_5_20190218171136.png)

## 2. 禁用笔记本键盘

### 问题情况

之前键盘进过水导致会启用按键失灵，所以需要禁用自带的键盘。

### 解决方案

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

## 3. 修复 TeamViewer 无法连接

### 问题情况

使用 TeamViewer 提示：未就绪，请检查您的连接。

### 解决方案

::: tip 一行解决
```sh
sudo teamviewer --daemon enable
```
:::

## 4. 连接 Windows Server

### 问题情况

需要在 Linux 系统下连接 Windows Server。

### 解决方案

::: tip 步骤
1. 首先需要安装 `rdesktop`
2. 接着直接使用 `rdesktop ip:port -u username`
:::
::: danger 注：
1. 添加 -f 参数可以以全屏模式进入
2. 在全屏模式下按 `ctrl+alt+enter` 可以退出全屏（这个才是想记录的……）
3. 其余参数见谷歌
:::