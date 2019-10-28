---
title: 锁屏快捷键
---

## 配置

## 已有配置

### 1. Desktop Behavior

在快捷键（Shortcuts）多番查找无果后，将目光放在了 Desktop 上。

`Desktop Behavior` > `Screen Locking` > `Keyboard shortcut`。

接着输入对应的快捷键，Windows 下锁屏快捷键为 `Win + R`，此处保持一致。

### 2. Shortcuts

在 `Desktop Behavior` 修改后惊奇的发现该部分也发生了变化。

`Shortcuts` > `Global Shortcuts` > `System Settings` > `Lock Session`。

可以注意到 `Lock Session` 的快捷键配置从空白变为了  `Win + R`，所以直接改该配置也是可以的。至于为什么此处命名为 `Lock Session` 就不得而知了。



## 命令配置

当然可以直接使用命令来完成锁屏功能。

```bash
# 在命令行输入 screensaver，按下 tab 等待补全选项
xdg-screensaver
# 在得到的命令前追加 man
man xdg-screensaver
# 阅读手册后得到结果
xdg-screensaver lock
# 执行后进入锁屏
```

得到锁屏指令后，再绑定到对应的快捷键即可。

`Shortcuts` > `Custom Shortcuts` > `Edit` > `New` > `Global Shortcuts` > `Command/URL`。

依次配置好 `Trigger（触发器 Shortcuts "Win + L"）` 和 `Action（命令 Command "xdg-screensaver lock"）` ，测试结果成功。 

