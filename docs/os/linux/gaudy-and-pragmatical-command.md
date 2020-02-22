---
title: 花里胡哨且实用的命令
---

## 快速备份

```bash
cp test.txt{,.bak}
ls -al test.txt* # 验证
```



## 创建文件夹

```bash
mkdir /app/{template,logs,package/src} -p
```



## 生成序列文件内容

```bash
for i in  {1..3}; do echo $i > $i;done
```

