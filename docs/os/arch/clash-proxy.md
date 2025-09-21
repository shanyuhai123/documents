# 代理工具 Clash

时至今日，仅考虑基于 Clash（Clash.Meta） 内核的产品了。

## 安装

```sh
sudo pacman -S paru
paru -S clash-verge-rev-bin
```

## TUN 模式

> TUN 模式是核心需求

创建虚拟网卡，接管所有系统流量，实现透明代理。原使用的 SwitchOmega、ProxyChains 等工具可以被淘汰了。
