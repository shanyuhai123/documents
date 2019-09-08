---
title:  用户管理
---

## 介绍

Linux 是多用户多任务操作系统，换句话说，Linux 系统支持多个多用户在同一时间内登录，并切每个用户可以执行不同的任务。

在登录 Linux 系统时虽然输入的是用户名和密码，但其实 Linux 并不认识用户名称，它只认识用户名对应的 ID。Linux 将用户名与 ID 的对应关系存放在 `/etc/passwd` 文件中；将用户组名与 GID 的对应关系存放在 `/etc/group` 文件中。



## passwd 格式

::: danger

`shanyuhai:x:1000:1000:shanyuhai:/home/shanyuhai:/bin/bash`

对应为 :arrow_right: 用户名:密码:UID:GID:描述信息:主目录:默认Shell

:::

|    名称    | 解释                                                         |
| :--------: | :----------------------------------------------------------- |
|   用户名   | 方便用户记忆的字符串。                                       |
|    密码    | x （x 虽然不是真正的密码，被删除则会被认为没有密码）表示该用户设置了密码，但不是真正的密码，真正的密码保存在 `/etc/shadow` 文件中。早期 UNIX 中，保存的是真正的加密密码串，后果就是被暴力破解。 |
|    UID     | 用来识别用户的 ID。0 为超级用户；1 ～ 1000 为伪用户；1000 ～ 65535 为普通用户。 |
|    GID     | 表示用户初始组的组 ID，创建用户时自动创建，用户可以加入其他的用户组（附加组）。 |
|  描述信息  | 即描述信息。                                                 |
|   主目录   | 主目录又称家目录。                                           |
| 默认 Shell | Shell 就是 Linux 的命令解释器。                              |



## 用户相关操作

|   命令   | 含义                                                         |
| :------: | ------------------------------------------------------------ |
| useradd  | 新增用户。                                                   |
|  passwd  | 修改密码。                                                   |
| usermod  | 修改用户（visudo 更强）。                                    |
|  chage   | 修改密码信息，可用于让用户登录后立即修改密码 `chage -d 0 username` 。 |
| userdel  | 删除用户。                                                   |
| groupadd | 新增用户组。                                                 |
| groupmod | 修改用户组。                                                 |
| groupdel | 删除用户组，仅适用于不是任何用户初始组的群组，否则删除失败。 |
| gpasswd  | 管理用户组。                                                 |
| newgrep  | 设置初始组。                                                 |



## useradd 解析

::: danger

useradd shanyuhai

:::

该命令会完成以下几项操作：

1. 在 `/etc/passwd` 文件中新增了一行与 `shanyuhai` 用户相关的数据；
2. 在 `/etc/shadow` 文件中新增了一行与 `shanyuhai` 用户密码相关的数据；
3. 在 `/etc/group` 文件中新增了一行与 `shanyuhai` 的群组；
4. 在 `/etc/gshadow` 文件中新增一行与 `shanyuhai` 群组密码相关的数据； 
5. 默认创建用户的主目录和邮箱；
6. 将 `/etc/skel` 目录中的配置文件复制到新用户的主目录中。



## userdel 解析

在执行 userdel 删除用户前需要先找到用户相关的数据并删除之。

::: danger

find -user shanyuhai # 找出所有并删除

userdel shanyuhai

:::

该命令会完成以下几项操作：

1. 删除 `/etc/passed` 记录；
2. 删除 `/etc/shadow` 记录；
3. 删除 `/etc/group` 记录；
4. 删除 `/etc/gshadow` 记录；
5. 删除邮箱：`rm -rf /var/spod/mail/username`；
6. 删除家目录：`rm -rf /home/username`；
7. 测试 `useradd username`，若没有报错则成功。



## 用户赋权

### 1. chown

chown 可以改变某个文件或目录的所有者和所属组，当是目录时记得加 `-R` 递归处理。

```bash
chown shanyuhai:shanyuhai /home/shanyuhai
# 或指定为当前用户
chown $USER ~/.ssh/config
```

### 2. chmod

| 角色 | 说明                        |
| :--: | --------------------------- |
|  u   | User，文件或目录的所有者。  |
|  g   | Group，文件或目录的所属组。 |
|  o   | Other，其余用户。           |

| 权限 | 说明                         |
| :--: | ---------------------------- |
|  r   | 读取权限，数字为 4。         |
|  w   | 写入权限，数字为 2。         |
|  x   | 执行（目录切换），数字为 1。 |

```bash
chmod u=rwx,g=rw,o=r /tmp/hello.txt
# 等价于
chmod 764 /tmp/hello.txt

# 追加执行权限
chmod u+x /tmp/hello.txt
```

### 3. setfacl

仅使用以上两种方案无法解决更为复杂的权限问题，这时需要引入 ACL（Access Control List） 来解决问题。

```bash
# 开始前可以先看已知权限
getfacl /tmp/hello.txt

# 1. 基于用户
useradd acl01 # ACL
ll hello.txt # 查看
setfacl -m u:acl01:rx hello.txt
ll hello.txt # 可以注意到权限位后面多了一个 `+`，表示该文件拥有 ACL 权限

getfacl /tmp/hello.txt # 验证

# 2. 基于用户组
groupadd acl02 # ACL
setfacl -m g:acl02:rx hello.txt

getfacl hello.txt # 验证
```

需要注意的是如果给父目录设定了默认 ACL 权限，那么父目录之后新建的子文件都会继承父目录的 ACL 权限（未设置则仅对目录生效）。

```bash
mkdir -p /tmp/hi
setfacl -m d:u:acl01:rx /tmp/hi
echo "你好" > /tmp/hi/chinese.txt

getfacl /tmp/hi/chinese.txt # 验证
```

