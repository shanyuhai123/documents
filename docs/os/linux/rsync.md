---
title:  Rsync
---

## 介绍

[Rsync](https://zh.wikipedia.org/wiki/Rsync)（Remote Sync），使用其 “Quick Check” 算法实现增量复制数据。可以使用 rsync 在不同目录（本地），不同服务器（远程）之前实现数据备份。在 3.x 版本可以做到一边对比差异一边复制。



## 特性

Rsync 具有很多优异的特性，例如保持文件属性、权限；使用 rsh、ssh 等隧道加密传输文件（rsync 本身不会对数据加密）等。

具体的特性可以根据其命令参数得知：

| 短参数 |       长参数        | 描述                             |
| :----: | :-----------------: | :------------------------------- |
|   -v   |      --verbose      | 显示输出过程                     |
|   -q   |       --quiet       | 静默模式                         |
|   -P   |     --progress      | 显示同步的过程及传输时的进度信息 |
|   -e   |     --rsh     | 指定隧道 |
|   -a   |      --archive      | 多参数集合（-rtopgDl）           |
|   -r   |     --recursive     | 递归                             |
|   -t   |       --times       | 保持修改时间属性                 |
|   -o   |       --owner       | 保持属主                         |
|   -p   |       --perms       | 保持权限                         |
|   -g   |       --group       | 保持用户组                       |
|   -D   |      --devices      | 保持设备文件信息                 |
|   -l   |       --links       | 保持软链接                       |
|   -z   |     --compress      | 压缩                             |
|        |   --bwlimit=KBPS    | 限速，限制 I/O 带宽              |
|        |      --delete       | 删除，即无差异同步数据           |
|  -b      |      --backup       | 备份，对于已存在同样的文件名时，老文件重命名为 `~filename`，可以使用 `--suffix` 指定 |
|        | --backup-dir | 备份文件指定目录 |
|        |  --exclude=PATTERN  | 排除传输的文件模式                      |
|        | --exclude-from=FILE | 排除 FILE 中指定模式的文件       |
|        |  --include=PATTERN  | 包含传输的文件模式                  |
|        | --include-from=FILE | 包含 FILE 中指定模式的文件   |
| | --password-file=FILE | 从 FILE 中得到密码 |

其中常用参数为 `-avz`。



## 语法

```bash
rsync [OPTION]    SRC    DEST
rsync [OPTION]    SRC    [USER@]host:DEST
rsync [OPTION]    [USER@]HOST:SRC    DEST
rsync [OPTION]	  [USER@]HOST::SRC   DEST
rsync [OPTION]    SRC    [USER@]HOST::DEST
rsync [OPTION]    rsync://[USER@]HOST[:PORT]/SRC    [DEST]
```



## 常用示例

### 1. 替代 cp 操作

```bash
rsync /ect/hosts /opt
# 保持属性
rsync -vzrtopg --progress /etc/hosts /opt
```

### 2. 替代 rm 操作

```bash
# 删除文件
touch /null.txt # 空文件
cat /opt/hosts
rsync -r --delete /null.txt /opt/hosts
cat /opt/hosts # 验证
# 删除目录
mkdir /null # 空目录
rsync  -r --delete /null /opt
ls /opt # 验证
```

### 3. 替代 ls 操作

```bash
rsync /etc/hosts
```

### 4. 推送数据到对应主机端口

```bash
rsync -avz /etc/hosts root@45.78.12.89:/opt
# 等价于
rsync -avz /etc/hosts -e  'ssh -p 22' root@45.78.12.89:/opt 
# 切换到对应服务器上
cat /opt/hosts # 验证
```

### 5. 从服务器拉取数据

```bash
rsync -avz -e  'ssh -p 22' root@45.78.12.89:/opt/hosts /opt
cat /opt/hosts # 验证
```



