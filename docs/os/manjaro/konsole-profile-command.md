---
title: Konsole 无法启动
---

## 介绍

修改了 Konsole Profile 的 Command 后无法启动。

<img :src="$withBase('/os/manjaro/konsole-profile-command.png')" alt="Konsole 无法启动">


## 排查问题

### 1. 默认操作

直接卸载重装 `Konsole`，失败。

### 2. 删除配置文件

不要模仿，其余软件可能导致问题。

```bash
whereis konsole
# /usr/bin/konsole /usr/share/konsole
# 删除以上文件夹内容，重装依旧失败
```

### 3. 找到 konsole profile 配置文件

所以最后的问题就是找到 konsole profile 的配置文件。

多番查找下找到了参考[内容](https://forum.manjaro.org/t/konsole-settings-are-not-persistent/2471/6)，其中指出了配置文件所在位置为 `~/.local/share/konsole/xxx.profile`。

```bash
vim ~/.local/share/konsole/Shell.profile

# 找到以下内容
[General]
Command=error bash
Name=Shell
Parent=FALLBACK/
StartInCurrentSessionDir=true

# 将 Command 恢复
```

重启启动 `Konsole`，启用成功。

