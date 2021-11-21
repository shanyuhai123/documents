---
description: Arch 下使用向日葵远程控制
---

# 使用向日葵远程控制

通过 `yay` 进行安装客户端：

```sh
yay -S sunloginclient
```

## 启动失败

这需要启动它的服务：

```sh
systemctl start runsunloginclient.service
```

对于该软件，个人倾向于在使用后立即停止：

```sh
systemctl stop runsunloginclient.service
```
