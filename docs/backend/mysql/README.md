---
title: 首页
---

## 介绍

主要用于解决在使用 MySQL 时遇到的问题，以及是怎么解决的。



## 环境

学习环境基于 Docker：

```bash
docker run -d \
	-p 33006:3306 \
	-e MYSQL_ROOT_PASSWORD=mypasswd \
	--name some-mysql \
  mysql:8.0
```

调试工具为 MySQL Workbench，可在 `Preferences` 中为其设置 `Use UPPERCASE`。



## 参考资料

1. 《MySQL 必知必会》
2. 《高性能 MySQL》