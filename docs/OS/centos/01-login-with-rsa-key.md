---
title: 使用 RSA 登录服务器
---

## 1. 生成 RSA

此处直接参考 [创建 SSH Key](/Base/git/01-generate-ssh-key.html#_1-创建-ssh-key-步骤) 。

将生成的公钥（`id_rsa_new.pub`）拷贝。



## 2. 开启 RSA

### 登录服务器

```bash
# xxx.xxx.xxx.xxx 为你的 ip 地址
ssh root@xxx.xxx.xxx.xxx
```

### 拷贝公钥到服务器

```bash
# 编辑服务器认证 keys
vim ～/.ssh/authorized_keys
# 确认保存
cat ～/.ssh/authorized_keys
# 内容为： ssh-rsa……
```

### 编辑 SSH 配置文件

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



## 3. 设置文件权限

关于 [chmod](https://zh.wikipedia.org/wiki/Chmod)，对文件设置权限可以很好的保护系统。

```bash
sudo chmod 600 ~/.ssh/authorized_keys && chmod 700 ~/.ssh/
```



## 4. 快速访问服务器

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

