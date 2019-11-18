---
title: 远程同步文件
---

## Rsync

[Rsync](https://zh.wikipedia.org/wiki/Rsync)（Remote Sync），使用其 “Quick Check” 算法实现增量复制数据。可以使用 rsync 在不同目录（本地），不同服务器（远程）之前实现数据备份。在 3.x 版本可以做到一边对比差异一边复制。



### 1. 选项（特性）

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

### 2. 语法

```bash
rsync [OPTION]    SRC    DEST
rsync [OPTION]    SRC    [USER@]host:DEST
rsync [OPTION]    [USER@]HOST:SRC    DEST
rsync [OPTION]	  [USER@]HOST::SRC   DEST
rsync [OPTION]    SRC    [USER@]HOST::DEST
rsync [OPTION]    rsync://[USER@]HOST[:PORT]/SRC    [DEST]
```

### 3. 常用示例

+ 目录间推送数据

  ```bash
  rsync /ect/hosts /opt
  # 保持属性
  rsync -vzrtopg --progress /etc/hosts /opt
  ```

+ 目录间同步数据

  ```bash
  # 同步文件
  touch /null.txt
  cat /opt/hosts
  rsync -r --delete /null.txt /opt/hosts
  cat /opt/hosts # 验证
  # 同步目录
  mkdir /null
  rsync  -r --delete /null /opt
  ls /opt # 验证
  ```

+ 推送数据到对应主机端口

  ```bash
  rsync -avz /etc/hosts root@45.78.12.89:/opt
  # 等价于
  rsync -avz /etc/hosts -e  'ssh -p 22' root@45.78.12.89:/opt 
  # 切换到对应服务器上
  cat /opt/hosts # 验证
  ```

+ 从服务器拉取数据

  ```bash
  rsync -avz -e  'ssh -p 22' root@45.78.12.89:/opt/hosts /opt
  cat /opt/hosts # 验证
  ```

### 4. 可能存在的问题

看到部分文章说 rsync 传输大量小文件时会停止僵死（小文件是多小，大量是多大也没有描述清楚），这个问题搜了下，尚未得知具体的原因：

1. [Best way to copy millions of files between 2 servers](https://superuser.com/questions/291803/best-way-to-copy-millions-of-files-between-2-servers)
2. [How to speed up rsync for small files](https://serverfault.com/questions/365103/how-to-speed-up-rsync-for-small-files)



## Scp

`rsync` 虽然可以增量下载，速度快一些，还有更多的功能，但是 `scp` 非常不占资源，`rsync` 在小文件众多时会导致磁盘 `I/O` 非常高。



### 1. 语法

相对于 `rsync`，`scp` 的语法则简单很多：

```bash
scp (选项) (源文件) (目标文件)

# 选项
-1：使用 ssh 协议版本1；
-2：使用 ssh 协议版本2；
-4：使用 ipv4；
-6：使用 ipv6；
-B：以批处理模式运行；
-C：使用压缩；
-F：指定 ssh 配置文件；
-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如私钥），此参数直接传递给 ssh；
-l：指定宽带限制；
-o：指定使用的 ssh 选项；
-P：指定远程主机的端口号；
-p：保留文件的最后修改时间，最后访问时间和权限模式；
-q：不显示复制进度；
-r：以递归方式复制。

# 源文件：指定要复制的源文件。
# 目标文件：目标文件。格式为 `user@host:filename` （文件名为目标文件的名称）。
```

### 2. 常用示例

+ 密码形式上传文件：

  ```bash
  scp -r /home/shanyuhai/Download/test shanyuhai@47.111.23.259:/home/shanyuhai/downloads
  ```

  接着输入密码即可

+ 秘钥形式上传文件：

  ```bash
  scp -i ~/.ssh/id_rsa_xxx hi.png shanyuhai@47.111.23.259:/home/shanyuhai/downloads
  ```

+ 秘钥形式下载文件：

  ```bash
  scp -i ~/.ssh/id_rsa_xxx shanyuhai@47.111.23.259:/home/shanyuhai/downloads/hi.png pictures
  ```



> 还可以使用 `lrzsz` 来进行本地和远程的文件交互，不过需要双端都安装 `lrzsz`：
>
> + 下载（sz）
>
>   ```bash
>   sz filename
>   # 等待选择保存的本地路径
>   ```
>
> + 上传（rz）
>
>   ```bash
>   rz
>   # 等待选择文件
>   # （还可以拖拽文件）
>   ```