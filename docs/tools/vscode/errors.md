---
title: 错误处理
---

## 无法监视文件变化

其实这个问题存在已久，但是一直没有去处理。

当 VSCode 弹出该提示时会给一个对应的[链接](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)，执行它提供的命令：

```bash
cat /proc/sys/fs/inotify/max_user_watches # 19200
```

限制比较小，接着查看[解决方案](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers)。虽然提示说 `Arch Linux` 应当使用 `echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system`，但我的 manjaro 执行后依旧存在问题。

采用常规的 Linux 解决方案：

```bash
# 如果该方式创建存在问题，可手动一步步修改
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
cat /proc/sys/fs/inotify/max_user_watches # 524288
```



