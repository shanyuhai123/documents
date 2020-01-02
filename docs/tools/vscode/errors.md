---
title: 错误处理
---

## 无法监视文件变化

其实这个问题存在已久，但是一直没有去处理。

当 VSCode 弹出该提示时会给一个对应的[链接](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)，执行它提供的命令：

```bash
cat /proc/sys/fs/inotify/max_user_watches # 19200
```

限制比较小，接着查看[解决方案](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers)。虽然提示说 `Arch Linux` 应当使用 `echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system`，但我的 manjaro 重启后依旧存在问题。

最后的解决方案：

```bash
ll /etc/sysctl.d/
# 40-max-user-watches.conf
# 50-max_user_watches.conf # 需注意文件名区别
cat /etc/sysctl.d/50-max_user_watches.conf
fs.inotify.max_user_watches = 19200 # 利用 vim 修改后重启成功
```



## 空文件夹折叠

在一次更新之后 VSCode 添加了新的特性 `Compact Folders`，这种行为与 Chrome 浏览器擅自遮挡 `www` 一样恶心。

打开 `Settings`，输入 `Compact Folders` 取消选中即可。