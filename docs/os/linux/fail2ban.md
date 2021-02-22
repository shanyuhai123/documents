---
title: fail2ban
---

## 安全

服务器安全一直是一个问题，常使用 [fail2ban](https://github.com/fail2ban/fail2ban) 来防止 SSH 暴力破解。

在启用 Web 服务后，常常会有一些脚本前来扫描是否存在漏洞，可以利用 `fail2ban` 禁用访问的 IP。还可以后端放出一些陷阱数据，正常用户界面不会展示，而一旦有爬虫访问了该数据，则禁用对应的 IP。



## 使用

```bash
# 安装
yum install fail2ban

# 查看日志
tail -f /var/log/fail2ban.log
```

在 `/etc/fail2ban/jail.conf` 明确指出不应该修改该文件，应当使用 `jail.local` 或 `jail.d/customisation.local`，个人更倾向于分模块处理。

### 1. SSH

添加对 SSH 的限制：

```bash
tee /etc/fail2ban/jail.d/sshd.local <<"EOF"
[sshd]
enabled = true
port = ssh
filter = sshd
# 禁用时长
bantime = 120
# 允许失败次数
maxretry = 3
# 查找失败次数的时长
findtime = 600
action = iptables[name=SSH, port=ssh, protocol=tcp]
EOF
```

查看该限制的情况：

```bash
# 查看所有 jail
fail2ban-client status
# 查看指定 jail
fail2ban-client status sshd

# 输出
Status for the jail: sshd
|- Filter
|  |- Currently failed: 0
|  |- Total failed:     0
|  `- Journal matches:  _SYSTEMD_UNIT=sshd.service + _COMM=sshd
`- Actions
   |- Currently banned: 0
   |- Total banned:     0
   `- Banned IP list:
```

用错误的密码尝试四次：

```bash
fail2ban-client status sshd

# 输出
Status for the jail: sshd
|- Filter
|  |- Currently failed: 1
|  |- Total failed:     4
|  `- Journal matches:  _SYSTEMD_UNIT=sshd.service + _COMM=sshd
`- Actions
   |- Currently banned: 0
   |- Total banned:     1
   `- Banned IP list: 10.0.0.1
```

再以正确的密码访问也会被拒绝，可以等待禁用时长过去，也可以手动放行：

```bash
fail2ban-client set sshd unbanip 10.0.0.1
```



