# Arch 神教

> 部分基础内容依旧在 `manjaro` 下，不做迁移。

快入 Arch 神教吧！必读 [WIKI](https://wiki.archlinux.org/)

## 配置防火墙

使用 `firewall-config` 可视化配置防火墙。

```sh
sudo firewall-config
```

![配置防火墙](./assets/firewall-config.png)

以放行 **`KDE Connect`** 服务为示例：

1. 配置切换到 “永久”
2. 在右下角的 “服务” 中找到 `kdeconnect`，勾选即可
3. 在左上角 “选项” 中重载防火墙
