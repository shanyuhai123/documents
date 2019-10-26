---
title: zsh 无法找到 npm
---

## 前言

一直以来都是开机使用 `bash`，在之后再切换到 `zsh`。最近设置为开机切换到 `zsh`，就导致使用 `npm` 命令时提示 `zsh: command not found`。



## 解决

首先需要确认是否是 `PATH` 出现了问题：

```bash
npm -v # zsh: command not found
node -v # v12.4.0
# 可以发现环境不存在问题
# 接着查看 .bashrc 配置是否有说明
less ~/.bashrc
# 注意到存在以下内容
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

于是就想起自己依赖 `nvm` 管理 `node`，将该内容追加到 `.zshrc` 中：

```bash
source ~/.zshrc
npm -v # 6.12.0
```

