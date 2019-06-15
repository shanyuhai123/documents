---
title: 上传文件到服务器
---

## 介绍

推荐先完成该目录下的前置任务：

1. 增加用户
2. 使用 RSA 登录服务器

**正文**

```bash
scp -r your_source_dir [your_user_name]@xxx.xxx.xxx.xxx:/server/dir

# scp -r dist shanyuhai@47.111.23.259:/home/shanyuhai/downloads
```