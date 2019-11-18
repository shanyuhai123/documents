---
title: 别名 alias
---

## 介绍

alias 可用于设置指令的别名，固化则需要存放于 `~/.bashrc` 或 `~/.zshrc` 中。

> 有的时候命令历史提示会更好用，也就是需要更加了解 `zsh` 的生态。



## 常用规则

```bash
# 查找进程
alias pg='ps aux | grep $1'

# 随机字符串
alias random-str="base64 /dev/urandom | tr -d '/+' | dd bs=32 count=1 2>/dev/null && echo \n"

# 获取 ip
alias myip="curl -s myip.ipip.net | grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b'"

# 设置代理
alias gfw="export ALL_PROXY=socks5://127.0.0.1:1080 && curl ipinfo.io"
alias ugfw="unset ALL_PROXY"
```

