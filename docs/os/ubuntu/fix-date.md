---
title: 修复时间显示
---

## 介绍

初步安装系统后日期时间显示的并非当前时区。



## 解决方案

```sh
# 1. 显示时间
date -R
# Sun, 07 Jul 2019 xx:xx:xx +0000

# 2. 修改时区
sudo tzselect
# 按照提示修改即可

# 3. 拷贝文件到本地时间
sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 再次执行 date -R 即可看到正确时间
```



## 扩展

+ 常用的时间格式：

  ```bash
  date "+%Y-%m-%d %H:%M:%S"
  ```

  