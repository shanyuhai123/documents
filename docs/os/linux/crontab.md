---
title: 解放双手计划
---

## 介绍

系统定时任务，解放双手，从定时器开始～



## 命令格式

::: danger

crontab [选项] [参数]

:::



## 选项

| 选项 |             含义             |
| :--: | :--------------------------: |
|  -e  |   编辑该用户的计时器设置。   |
|  -l  |   列出该用户的计时器设置。   |
|  -r  |   删除该用户的计时器设置。   |
|  -u  | 指定要设定计时器的用户名称。 |



## crontab 文件

crontab 文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令，格式如下：

```bash
minute（分） hour（时） day（天） month（月） week（周） command（命令）
```

在以上各个字段中，还可以使用以下特殊字符：

+ *：代表所有可能的值；
+ ,：可以表示一个分隔；
+ -：可以表示一个区间；
+ /：可以表示一个间隔频率，每隔该时间段。

> 全局任务计划列列表：`cat /etc/crontab`。
>
> anacron 可用于解决在服务器处于关机状态导致 crontab 计划无法执行的情况，在检测周期内判断是否有定时任务在关机后没有执行，若存在，则在特定的时间段内重新执行这些特定任务。



## 示例

首先需要执行 `crondtab -e` 启用编辑。

+ 每天凌晨 1:30 分重启 docker 服务：

  ```bash
  30 1 * * * systemctl restart docker.service
  ```

+ 每月 1、10、20 日的 23:59 重启 docker 服务：

  ```bash
  59 23 1,10,20 * * systemctl restart docker.service
  ```

+ 每月 1 到 10 日的 4:45 重启 docker 服务：

  ```bash
  45 4 1-10 * * systemctl restart docker.service
  ```

+ 每隔两分钟重启 docker 服务：

  ```bash
  */2 * * * * systemctl restart docker.service
  ```

+ 每月 10 到 20 日每隔两日的 4:45 重启 docker 服务：

  ```bash
  45 4 10-20/2 * * systemctl restart docker.service
  ```

+ 晚上 11 点到早上 7 点之间每隔一个小时重启 docker 服务：

  ```bash
  0 23-7/1 * * * systemctl restart docker.service
  ```





