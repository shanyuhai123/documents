---
title: 如何启用硬盘
---

该项仅在虚拟机下进行测试，与实体机有一定区别。



## 准备环境

+ 虚拟机：VirtualBox（6.0.10）



## 新增磁盘工作

事情的开始你需要有一块磁盘。

### 1. 操作步骤

1. 打开虚拟机；
2. 在界面中点击设置并选中存储；
3. 可以选择已有的控制器也可以新建控制器，点击添加存储附件（虚拟硬盘）；
4. 控制器选项有 SAS、SATA、IDE（古老的存在，现在很少用了），控制器即对应不同类型的硬盘；
5. 创建新的虚拟盘，默认 VDI 文件类型，动态分配；
6. 分配期望的大小；
7. 确认创建。



## 磁盘进行 RAID

为了数据更安全，更快捷，需要进行 [RAID](/os/linux/raid)。

此处缺乏 RAID 实践，以后可能会补上，参考资料：

1. [CentOS 6.3 下配置软 RAID](http://www.iyunwei.com/docs/sysadmin_command/CentOS6.3%E4%B8%8B%E9%85%8D%E7%BD%AE%E8%BD%AFRAID.pdf)；
2. [Intel 主板中 BIOS 中启用 RAID](https://www.intel.cn/content/www/cn/zh/support/articles/000006748/boards-and-kits/desktop-boards.html)；

需要补充的是，虽然很多资料都说明硬件 RAID 更具优势，但是在现在高速 Nvme 硬盘的情况下是否依然效率更高呢 :boy:？



## 磁盘分区工作

磁盘是按柱面进行分区的，磁盘分区信息登记的地点为[磁盘分区表](https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%BC%95%E5%AF%BC%E8%AE%B0%E5%BD%95)，磁盘分区表存放位置为 0 磁道 0 柱面 1 扇区。

该扇区（1 扇区）划分为，前 446 字节为系统引导信息，中间 64 字节为分区表，后 2 字节为分区结束标识。

修改磁盘分区常用工具为：

+ fdisk：处理 MBR 分区，MBR 分区小于 2T；
+ parted：处理 GPT 分区，GPT 分区大于 2T。

### 1. 操作步骤

1. 首先添加一块虚拟硬盘到系统中；
2. 使用 `fdisk -l` 获取新增硬盘的信息；
3. 确认以 `3P+1E(3L)` 分区为示例；
4. 根据新增硬盘信息输入 `fdisk /dev/sdb`；
5. 可以输入 `m` 查看帮助；
6. 输入 `n` 新增分区；
7. 输入 `p` 选择主分区；
8. 分区 number，default 为 1，回车即可；
9. first sector，default 2048，回车即可；
10. last sector，设置 1G 大小，即输入 `+1G`；
11. 输入 `p` 查看结果，确认无误后继续；
12. 循环上面的步骤，开始第二个主分区；
13. 输入 `n` 新增分区；
14. 输入 `p` 选择主分区；
15. 分区 number，default 为 2，回车即可；
16. first sector，default 2099200，回车即可；
17. last sector，设置 1G 大小，即输入 `+1G`；
18. 输入 `p` 查看结果，确认无误后继续；
19. 循环上面的步骤，开始第三个主分区；
20. 输入 `n` 新增分区；
21. 输入 `p` 选择主分区；
22. 分区 number，default 为 3，回车即可；
23. first sector，default 4196352，回车即可；
24. last sector，设置 1G 大小，即输入 `+1G`；
25. 输入 `p` 查看结果，确认无误后继续；
26. 循环上面的步骤，开始扩展分区；
27. 输入 `n` 新增分区；
28. 输入 `e` 选择主分区；
29. first sector，default 6293504，回车即可；
30. last sector，default 12582911，回车选择剩余所有空间即可；
31. 输入 `p` 查看结果，确认无误后继续；
32. 接下来在扩展分区中新建逻辑分区；
33. 输入 `n` 新增分区；
34. first sector，default 6293504，回车即可；
35. last sector，设置 1G 大小，即输入 `+1G`；
36. 输入 `p` 查看结果，确认无误后继续；
37. 循环上面的步骤，开始第二个逻辑分区；
38. 输入 `n` 新增分区；
39. first sector，default 6293504，回车即可；
40. last sector，设置 1G 大小，即输入 `+1G`；
41. 输入 `p` 查看结果，确认无误后继续；
42. 循环上面的步骤，开始第三个逻辑分区；
43. 输入 `n` 新增分区；
44. first sector，default 6293504，回车即可；
45. last sector，default 12582911，回车选择剩余所有空间即可；
46. 输入 `p` 查看结果，确认无误后继续；
47. 输入 `w` 保存分区结果；
48. 输入 `partprobe /dev/sdb` 通知分区信息修改了，或者重启虚拟机。



## 磁盘分区类型

磁盘的分区类型往往决定该分区具体的作用。

### 1. 操作步骤

1. 使用 `fdisk -l` 获取新增硬盘的信息；
2. 根据硬盘信息选择 `fdisk /dev/sdb`；
3. 输入 `m` 查看帮助；
4. 输入 `l` 查看分区类型；
5. 输入 `t` 修改分区 system Id；
6. 输入 `7` 选择第七个分区；
7. 根据提示输入 `L` 查看 codes；
8. 输入 `8e`；
9. 输入 `p` 查看结果，确认无误后继续；
10. 输入 `w` 保存分区结果；
11. 输入 `partprobe /dev/sdb` 通知分区信息修改了，或者重启虚拟机。



## 分区文件系统

磁盘需要借助[文件系统](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F)才能实现磁盘管理，[数据存取](/computer/data-write)。

### 1. 操作步骤

1. 使用 `fdisk -l` 获取新增硬盘的信息；
2. 根据硬盘信息选择 `fdisk /dev/sdb`；
3. 输入 `mkfs -t ext4 /dev/sdb1` 来创建 ext4 文件系统；
4. 或输入 `mkfs.xfs /dev/sdb2` 来创建 xfs 文件系统；
5. 查看输入，可以观察到生成了一定数量的 inodes 和 blocks，这是关键所在。

> inode 作用，存储文件的属性信息，同时存放指向文件实体的指针。
>
> 当存放文件提示：no space left on device，可能是 inodes 数量满了。
>
> 排查二连：`df -h`，`df -i`。



## 挂载磁盘分区

挂载分区前需要完成以上工作。

挂载分区分为临时挂载和永久挂载。

### 1. 临时挂载分区操作步骤

1. 输入 `mount -t ext4 /dev/sdb1 /mnt`；
2. 创建文件测试 `echo hello > /mnt/hello.txt`；
3. 验证 `cat /mnt/hello.txt`；
4. 查看挂载结果 `cat /proc/mounts`；
5. 卸载 `umount /mnt`。

### 2. 永久挂载分区操作步骤

1. 永久实际上是开机自动挂载；
2. 输入 `cat /etc/fstab` 查看输入格式；
3. 输入 `blkid` 查看 /dev/sdb2 的 UUID；
4. 编辑 `/etc/fstab`；
5. 追加 `UUID=8c0514b8-70a9-4389-a17c-823e55ff8789                                 /mnt                    xfs     defaults        0 0`；
6. 或使用分区也可 `/dev/sdb2                                 /mnt                    xfs     defaults        0 0`；
7. 重启输入 `cat /proc/mounts` 或 `df -h` 挂载结果。



## 补充：扩展 swap

发现 swap 早期分配的太小了不够用可以追加。

### 1. 操作步骤

1. 输入 `free -m` 查看 swap 大小；
2. 输入 `fdisk -l` 查看可用的分区；
3. 无可用分区就按照 [磁盘分区工作](/os/linux/how-to-enable-the-hard-disk.html#磁盘分区工作) 新建一个分区；
4. 输入 `mkswap /dev/sdb3` 格式化分区为 swap；
5. 输入 `swapon -a /dev/sdb3` 启用 swap 分区；
6. 输入 `free -m` 验证结果。



