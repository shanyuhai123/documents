---
title: 创建 SSH Key
---

## 创建 SSH Key 步骤

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

## 修复 ssh-add 存在的问题 :tada:

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

