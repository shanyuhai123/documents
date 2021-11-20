# Manjaro 的异常处理

## 解决 Manjaro 录屏闪烁

### 1. 问题情况

在使用 Manjaro 录屏后，发现录制出来的屏幕经常闪烁，部分画面遗失。

### 2. 解决方案

::: tip 步骤
`系统设置` > `硬件` > `显示和监控` > `混成器` > `避免撕裂(垂直同步)` > `从不`
:::

![录屏闪烁](./assets/screen-flashing-when-recording.png)

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

## 屏幕时不时卡死

### 1. 问题情况

在看视频时出现的概率比较大，即屏幕频繁绘制时出问题了。

### 2. 解决方案

初步猜测是显卡驱动有问题。然后在软件包搜了下 `nouveau`，果然存在 `xf86-video-nouveau` 开源驱动，移除后就恢复正常了。

应该是哪次更新系统顺手给安装上去了。

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

## 旧系统内核无法删除

### 1. 问题情况

卸载时出现以下提示：

```sh
checking dependencies...
:: removing linux510-headers breaks dependency 'linux510-headers' required by linux-latest-headers
:: removing linux510-r8168 breaks dependency 'linux510-r8168' required by linux-latest-r8168
```

### 2. 解决方案

参考 [Cannot remove linux57 - breaks dependency .. required by linux-latest-[something]](https://forum.manjaro.org/t/cannot-remove-linux57-breaks-dependency-required-by-linux-latest-something/7679)，执行：

```sh
sudo pacman -Rcsnu linux510-headers
sudo pacman -Rcsnu linux510-r8168
```

再次尝试后即可。
