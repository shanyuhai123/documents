# 支持 98 配列键盘

> 买了新键盘，`F1-F12` 及 `F1-F12 + Fn` 键全是多媒体。

## 尝试

翻了说明书：

+ `Fn + W`、`Fn + M` 长按切换 Win、Mac 模式无效
+ `Fn + Pause` 切换多媒体无效
+ `Fn + Del`  恢复出厂模式无效

## 解决方案

在 V 站搜到[相关资料](https://github.com/Kurgol/keychron/blob/master/k2.md#f-keys-on-ubuntu)京造（Keychron）键盘在 linux 下会被 `hid_apple` 驱动程序识别。

按资料文档操作即可：

```sh
# 1. 写入 fnmode
echo "options hid_apple fnmode=2" | sudo tee /etc/modprobe.d/hid_apple.conf
# 2. 重新生成 initramfs
sudo mkinitcpio -P
# 3. 重启系统
reboot
```
