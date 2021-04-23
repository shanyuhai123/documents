---
title: 处理 IDEA
---

## 输入法光标不跟随

核心是使用 [JetBrainsRuntime](https://github.com/JetBrains/JetBrainsRuntime)，不过糟糕的是编译失败了，有一个提供了 Github Actions 来定时编译的[可使用版本](https://github.com/RikudouPatrickstar/JetBrainsRuntime-for-Linux-x64/releases)。

找到本地 IDEA 位置：

```bash
whereis idea
# /opt/intellij-idea-ultimate-edition/
```

将下载好的结果解压并移至 IDEA 目录：

```bash
sudo mv ~/download/jbr my-jbr
```

再利用 IDEA 的 Choose Runtime 插件选择 `jbr`：

1. 按下 `Ctrl + Shift + A`
2. 输入 `Choose Runtime`
3. 选择下载的 `/opt/intellij-idea-ultimate-edition/my-jbr`
4. 重启即可

