---
title: 使用 RSA 登录服务器
---

## 生成 RSA

此处直接参考 [创建 SSH Key](/os/linux/generate-ssh-key) 。

将生成的公钥（`id_rsa_new.pub`）拷贝。



## 开启 RSA

### 1. 登录服务器

```bash
# xxx.xxx.xxx.xxx 为你的 ip 地址
ssh root@xxx.xxx.xxx.xxx
```

### 2. 拷贝公钥到服务器

注意事项：若需要其余用户登录，则需要在该用户下创建该文件，root 下的该文件将不会生效。

```bash
# 编辑服务器认证 keys
# 若保存失败则需要先创建该文件
vim ～/.ssh/authorized_keys
# 确认保存
cat ～/.ssh/authorized_keys
# 内容为： ssh-rsa……

# 更好的形式是利用 ssh-copy-id 直接推送
ssh-copy-id -i id_rsa_name.pub root@ip
```

### 3. 编辑 SSH 配置文件

**启用公钥认证**

```bash
vim /etc/ssh/sshd_config

# 在 normal 模式下输入 “/” 进入查找模式
# 启用以下三项
RSAAuthentication yes     # RSA认证
PubkeyAuthentication yes  # 公钥认证
AuthorizedKeysFile .ssh/authorized_keys  # 公钥认证文件路径
```

**重启 sshd 服务**

```bash
service sshd restart
# 或
systemctl restart sshd
```

**测试公钥登录**

在测试前先跳转至第四步完成本地配置。

```bash
ssh aliyun

# 得到结果
# Welcome to Alibaba Cloud Elastic Compute Service !
```

**拒绝密码登录**

```bash
vim /etc/ssh/sshd_config

# 在 normal 模式下输入 “/” 进入查找模式
PasswordAuthentication no # 密码认证

# 再执行上方的 重启 sshd 服务
```

**测试密码登录**

```bash
ssh root@xxx.xxx.xxx.xxx

# root@xxx.xxx.xxx.xxx: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
```

**拒绝 root 用户登录**

在使用该项时，先完成 [增加用户](/os/linux/user)。

```bash
vim /etc/ssh/sshd_config

# 在 normal 模式下输入 “/” 进入查找模式
PermitRootLogin no # 禁止 root 登录
AllowUsers shanyuhai # 允许登录的用户

# 再执行上方的 重启 sshd 服务
```

**测试 root 用户登录**

```bash
ssh aliyun

# root@47.112.26.219: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).

# 修改 4.快速访问服务器 的 User 为 User shanyuhai
```





## 设置文件权限

关于 [chmod](https://zh.wikipedia.org/wiki/Chmod)，对文件设置权限可以很好的保护系统。

```bash
sudo chmod 600 ~/.ssh/authorized_keys && chmod 700 ~/.ssh/
```



## 快速访问服务器

```bash
# 编辑 config 文件
vim ~/.ssh/config

# 在 config 文件末尾追加内容
Host aliyun                  		# 一个便于你区别这是哪台机器的名字
    HostName xxx.xxx.xxx.xxx  # 目的机器的ip
    User root         		# ssh登陆时候的用户名
    Port 22               		# ssh所使用的端口，默认是22
    IdentityFile /home/yuan/.ssh/id_rsa_new    # 对应服务器公钥的本地私钥文件路径
```

