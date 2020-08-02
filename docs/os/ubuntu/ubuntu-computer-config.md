---
title: Ubuntu 计算机配置
---

## 笔记本合盖不休眠

修改配置：

```bash
sudo vim /etc/systemd/logind.conf

#HandlePowerKey 按下电源键后的行为，默认power off
#HandleSleepKey 按下挂起键后的行为，默认suspend
#HandleHibernateKey 按下休眠键后的行为，默认hibernate
#HandleLidSwitch 合上笔记本盖后的行为，默认suspend

# 修改 HandleLidSwitch 为 ignore
```

重启服务：

```bash
sudo systemctl restart systemd-logind

# 或者直接重启电脑
reboot
```

