---
title: 传参 xargs
---

## 介绍

xargs 能够处理管道或 stdin（标准输入）并将其转为特定的命令参数，用于给其他命令传递参数（大多数命令不接受 stdin 作为参数）。

如果没有给出命令，那么默认使用 echo 命令，空格是默认界定符。这就意味着通过管道传递给 xargs 的输入若包含换行符制表符一连串的空白，都会被视为空格。



## 选项参数

| 选项 | 说明               |
| :--: | ------------------ |
|  -p  | 确认要执行的命令。 |
|  -d  | 自定义界定符。     |
|  -n  | 指定项数。         |
|  -L  | 指定行数。         |



## 日常使用

其实基本上只配合 `rm`、`wget` 作为日常使用。

### 1. 删除

```bash
touch test{1..5}.txt
find . -type f -name "test[2-3]*" | xargs -p rm
ls # 验证
```

### 2. 下载

```bash
cat << EOF >> meitu.txt
http://hd.wallpaperswide.com/thumbs/im_hungry-t2.jpg
http://hd.wallpaperswide.com/thumbs/river_aerial_view-t2.jpg
http://hd.wallpaperswide.com/thumbs/space_eye-t2.jpg
EOF

cat meitu.txt
mkdir images
cat meitu.txt | xargs wget -c -P images
# 打开文件夹查看吧
```

