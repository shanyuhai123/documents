# 花里胡哨且实用的命令

## 快速备份

```bash
cp test.txt{,.bak}
ls -al test.txt* # 验证
```

很多时候更希望以时间作为区分进行备份：

```sh
cp test{,_`date +%y%m%d_%H%M`}
```

这样有些麻烦，可将其制作为一个脚本，可通过类似 `bash cpfile.sh test` 调用：

```sh
#!/bin/bash
sudo cp $1 $1_`date +%y%m%d_%H%M`
```

## 清空文件

```bash
true > access.log
```

## 创建文件夹

```bash
mkdir /app/{template,logs,package/src} -p
```

## 生成序列文件内容

```bash
for i in  {1..3}; do echo $i > $i;done
```
