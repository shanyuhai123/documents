---
title: 了解 Yum
---

## 什么是 yum

YUM 全称（Yellowdog Updater, Modified），基于 `Yellow Dog Updater` 修改而来，是一个在 Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包。

>  RPM 是为了简化安装的复杂度，而 Yum 软件仓库视为了解决软件包之间的依赖关系。



## 软件包来源

可供Yum下载的软件包包括 Fedora, Centos 和 RedHat 本身的软件包，其中 Fedora 的软件包是由Linux社区维护的，并且基本是自由软件。所有的包都有一个独立的 GPG 签名。



## yum 工作机制

+ 服务器端：在服务器上面存放了所有的 RPM 软件包，然后以相关的功能去分析每个 RPM 文件的依赖性关系，将这些数据记录成文件存放在服务器的某特定目录内。 
+ 客户端：如果需要安装某个软件时，先下载服务器上面记录的依赖性关系文件(可通过 WWW 或 FTP 方式)，通过对服务器端下载的纪录数据进行分析，然后取得所有相关的软件，一次全部下载下来进行安装。



## 指令

### 1. 安装

```bash
yum install xxx
```

### 2. 删除

```bash
yum remove xxx
# 或
yum erase xxx
```

### 3. 升级

```bash
yum upgrade xxx
# 或
yum update xxx
```

### 4. 查询

```bash
yum info xxx
```

### 5. 搜索

```bash
# 包含 xxx
yum search xxx
```

### 6. 依赖关系

```bash
yum deplist xxx
```

### 7. 可更新

```bash
yum check-update
```

### 8. 可安装和可更新

```bash
yum list
```

### 9. 已安装

```bash
yum list installed
```

#### 10. 已安装且不在资源库

```bash
yum list extras
```

### 11. 清除全部

```bash
yum clean all
```

### 12. 清除临时包文件

```bash
# /var/cache/yum 下文件
yum clean packages
```

### 13. 清除 rpm 头文件

```bash
yum clean headers
```

### 14. 清除旧的 rpm 头文件

```bash
yum clean oldheaders
```



## 指令参数

+ `-e`：静默执行
+ `-t`：忽略错误
+ `-R`：设置等待命令执行结束的最大时间（分钟）
+ `-y`：自动应答，执行时不需要交互确认
+ `--skip-broken`：忽略依赖问题
+ `--nogpgcheck`：忽略 GPG 校验过程



## 注意事项

### 1. 卸载基础包

yum 卸载基础包时，会把上层的依赖包也卸载掉。从 yum 的设计理念出发，这样的操作是合理的，可以减少系统中多余的软件。