# Manjaro 下使用 Nvidia 显卡

参考 [在 Manjaro 配置 Optimus manager 实现 Nvidia-Prime 双显卡解决方案](https://blog.kongjune.com/manjaro-prime/) 即可。

## 安装依赖

由于使用的版本为 `manjaro Lysia`，所以配置项都无需处理，仅仅是：

```bash
sudo pacman -S optimus-manager

# 再从 yay 安装面板
yay -S optimus-manager-qt
```

接着可在设置 -> 系统信息中看到图形处理器已切换为 Nvidia，或者执行：

``` sh
nvidia-settings
```

## acpi_call 的尝试

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
