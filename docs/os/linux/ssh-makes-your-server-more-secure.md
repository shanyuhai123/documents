---
description: SSH 让你的服务器更安全
---

# SSH 让你的服务器更安全

安全是相对而言的，正在不断探索中。

## SSH 架构

[**Secure Shell Protocol** (**SSH**)](https://en.wikipedia.org/wiki/Secure_Shell_Protocol) 分为两个部分，默认安装：

+ 客户端(ssh)：全局配置路径为 `/etc/ssh/ssh_config`，当前用户为 `~/.ssh`。
+ 服务端(sshd)：全局配置路径为 `/etc/ssh/sshd_config`，以及对应用户的 `~/.ssh/authorized_keys`。

### 客户端

访问服务器，第一次访问服务器会出现认证提示：

```bash
# user 为用户名
# hostname 为主机名（域名、IP）
ssh user@hostname
```

也可以快速执行服务器命令：

```bash
# 执行 ls
ssh user@hostname ls -al

# 交互式需添加 -t
ssh -t user@hostname vim xxx.conf
```

### 客户端生成 SSH Key

```bash
# 1. 利用邮箱生成 ssh key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# 2. 输入 rsa 文件名, 默认为 id_rsa
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter] # id_rsa_new
# 3. 输入密码短语（无密码短语为空）
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]

# 4. 快速生成 ssh key
ssh-keygen -f ~/.ssh/id_rsa  -P '' -q # 可修改文件名，还可接续上面的配置
```

再需要将生成的密钥对的公钥上传到服务器，虽然可以手动上传（FTP、VIM），但使用 SSH 提供的工具更为轻松：

```bash
# -i 指定公钥，可忽略 `.pub` 后缀
ssh-copy-id -i id_rsa_name.pub user@hostname
```

再次登录服务器时就会发现不需要输入帐号密码了。

### 客户端的快速访问

总是指定用户、服务器地址、密钥是一件麻烦的事情，可以写在配置文件中：

```bash
# 编辑 config 文件
vim ~/.ssh/config

# 在 config 文件末尾追加内容
Host aliyun # 一个便于你区别这是哪台机器的名字
    HostName xxx.xxx.xxx.xxx # 目的机器的 ip
    User root        # ssh 登陆时候的用户名
    Port 22          # ssh 所使用的端口，默认是 22
    IdentityFile /home/yuan/.ssh/id_rsa_new # 对应服务器公钥的本地私钥文件路径
```

快速访问：

```bash
ssh aliyun
```

## 加固服务器的操作

这部分主要是对服务器端 `/etc/ssh/sshd_config` 进行修改，修改完成后记得重启 `sshd` 服务：

```bash
systemctl restart sshd
```

### 基础操作

1. 修改默认的 sshd 端口，`Port`
2. 禁用密码登录，`PasswordAuthentication`
3. 禁止空密码，`PermitEmptyPasswords`
4. 禁用 root，`PermitRootLogin`
5. 登录用户白名单（多个用户之间添加空格），`AllowUsers`
6. 登录用户组白名单：`AllowGroups`

修改完配置后进行验证：

```bash
sshd -t
```

### SSH 隧道

可以使用 SSH 隧道（SSH Tunnel）的[转发模式](https://en.wikipedia.org/wiki/Port_forwarding)有三种：

+ 本地端口转发（Local port forwarding）
+ 远程端口转发（Remote port forwarding）
+ 动态端口转发（Dynamic port forwarding）

我们需要在本地访问部署在服务器上的服务，选择本地端口转发即可。例如在服务器的 30000 端口部署了 Web 服务。

可通过 `man ssh` 查看语法：

```bash
-L [bind_address:]port:host:hostport
-L [bind_address:]port:remote_socket
-L local_socket:host:hostport
-L local_socket:remote_socket
```

选择第一种，`ip + port` 的形式即可：

```bash
# 将服务器上 30000 端口转发到本地的 8080，打开浏览器即可验证
# -N 表示不登录服务器，仅转发端口
ssh -L localhost:8080:localhost:30000 user@hostname -N
```

当 `bind_address` 省略时，表示绑至所有网卡。在远程我们同样使用 `localhost` 指定为服务器主机，你也可以使用对应的 IP 进行替换，如果在局域网内，也可指定为局域网内其他服务器的 IP 地址，例如在 `172.21.0.2` 上：

```bash
# 将服务器上 80 端口转发到本地的 8080，打开浏览器即可验证
ssh -L localhost:8080:172.21.0.2:80 user@hostname -N
```

### 服务认证

这一部分实际上是 Nginx 的内容，在构建了一些开源服务时，即使你在用户认证上做了充足的准备，但软件是人写的总是存在漏洞，可以添加 `Basic Auth` 及 `IP 白名单` 进行访问。

### fail2ban

如果有黑客持续爆破你的服务器，那么可以使用 [fail2ban](/os/linux/fail2ban.html) 来限制他的 IP。

## 处理一些问题

### 修复 ssh-add 存在的问题

```bash
# 1. 生成新的 rsa 后需要链接到 ssh
ssh-add ~/.ssh/id_rsa_new
# 2. 然后此处会报错 Could not open a connection to your authentication agent.
# 3. 需要修复该问题
eval "$(ssh-agent -s)"
# 4. 再一次将新生成的 rsa 链接到 ssh
ssh-add ~/.ssh/id_rsa_new
# 5. 显示成功 
Identity added: /home/yuan/.ssh/id_rsa_new (your_email@example.com)
# 6. 测试是否成功
ssh-add -l
```
