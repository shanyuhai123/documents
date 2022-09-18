# 传参 xargs

xargs 能够处理管道或 stdin（标准输入）并将其转为特定的命令参数，用于给其他命令传递参数（大多数命令不接受 stdin 作为参数）。

如果没有给出命令，那么默认使用 echo 命令，空格是默认界定符。这就意味着通过管道传递给 xargs 的输入若包含换行符制表符一连串的空白，都会被视为空格。

## 选项参数

| 选项 | 说明               |
| :--: | ------------------ |
|  -p  | 确认要执行的命令。 |
|  -d  | 自定义界定符。     |
|  -n  | 指定项数。         |
|  -L  | 指定行数。         |

## 简单使用

### 1. 配合 rm 批量删除

```bash
touch test{1..5}.txt
find . -type f -name "test[2-3]*" | xargs -p rm
```

### 2. 配合 wget 批量下载

```bash
# 存储图片列表到文件
cat << EOF >> meitu.txt
http://hd.wallpaperswide.com/thumbs/im_hungry-t2.jpg
http://hd.wallpaperswide.com/thumbs/river_aerial_view-t2.jpg
http://hd.wallpaperswide.com/thumbs/space_eye-t2.jpg
EOF

# 下载到 images 文件夹
mkdir images
cat meitu.txt | xargs wget -c -P images
```

### 3. 配合 git 批量删除分支

```sh
git branch | grep "reg-branches" | xargs git branch -D
```
