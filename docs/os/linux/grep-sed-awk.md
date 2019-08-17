---
title: 文本三剑客
---

## grep

grep（global regular expression print），适用于查找匹配文本，支持基础正则表达式，扩展的正则表达式需要增加 `-E` 选项或使用 `egrep` 命令。

### 1. 命令格式

::: danger

grep [选项…] patterns 文件

:::

### 2. 常用选项

| 选项 |            含义            |
| :--: | :------------------------: |
|  -c  |      统计匹配的行数。      |
|  -i  |  忽略模式中的字母大小写。  |
|  -v  |  取反，列出没有匹配到的。  |
|  -w  |       匹配整个单词。       |
|  -n  |      显示匹配的行号。      |
|  -E  |      扩展正则表达式。      |
|  -o  | 仅输出文件中匹配到的部分。 |

### 3. 示例

+ 取出存在 name 的行：

  ```bash
  grep name package.json
  ```

+ 取出没有 name 的行并显示行号：

  ```bash
  grep -vn name package.json
  ```

+ 获取文件中出现 docs 的次数：

  ```bash
  grep -o docs package.json | grep -c docs
  # or
  grep -o docs package.json | wc -l
  ```



## sed（行）

sed（stream edit 流编辑器），就类似于 vim，可快速实现对文件的增删改查。区别是 vim 还需要交互操作，而 sed 可以预置一组规则。

### 1. 命令格式

::: danger

sed [选项…] [内置命令] 文件

:::

### 2. 常用选项

| 选项 |                   含义                    |
| :--: | :---------------------------------------: |
|  -n  | 取消 sed 的默认输出（仅输出自己想要的）。 |
|  -i  |   直接修改文件的内容，而非输出到终端。    |
|  -e  |                脚本命令。                 |
|  -f  |              脚本文件命令。               |

### 3. 内置命令

| 命令 |                             含义                             |
| :--: | :----------------------------------------------------------: |
|  a   |                    append，表示追加文本。                    |
|  d   |                  delete，表示匹配行的文本。                  |
|  i   |                    insert，表示插入文本。                    |
|  p   |                print，表示打印匹配行的内容。                 |
|  s   | 匹配 regexp 部分内容，使用 replacement 替换 regexp 匹配的内容。 |

### 4. 示例

+ 替换文本中的 docs 为 hello：

  ```bash
  sed 's/docs/hello/g' package.json
  ```

+ 删除所有含有 @ 的行：

  ```bash
  sed '/@/'d package.json
  ```

+ 输出 20 - 23 行的内容：

  ```bash
  head -23 package.json | tail -3
  # or
  sed -n '20,23p' package.json
  ```

+ 修改 20 -23 行中 bugs 为 features：

  ```bash
  sed '2,3s/bugs/features/' package.json
  ```

+ 在第 5 行追加 hello world：

  ```bash
  sed '5a hello world' package.json
  ```

+ 输出第 5 行到第一个包含 docs 行之间的所有行：

  ```bash
  sed -n '5,/docs/p' package.json
  ```

+ 输出 5 - 10 行的内容到新的文件中：

  ```bash
  sed -n '5,10w test.txt' package.json
  cat test.txt # 验证
  ```



## awk（列）

awk（Aho、Weingberger、Kernighan 三人姓名） 是一种编程语言，适用于处理数据和生成报告，进行更为复杂的处理。可以顺带了解下 cut。

awk 会自动给一行中的每个数据元素分配一个变量，默认情况下：

+ $0：代表整个文本行；
+ $1：代表文本行中的第 1 个数据字段；
+ $2：代表文本行中的第 2 个数据字段；
+ $n：代表文本行中的第 n 个数据字段；
+ $NF：代表文本行中的最后一个数据字段；
+ $(NF-1)：代表文本行中的倒数第二个数据字段。

###  1. 命令格式

::: danger

awk [选项…] pattern{action} 文件

:::

::: danger

awk 'BEGIN{ commands } pattern{ commands } END{ commands }'

:::

### 2. 常用选项

| 选项 |             含义             |
| :--: | :--------------------------: |
|  -F  |         指定分隔符。         |
|  -f  |        指定脚本文件。        |
|  -v  | 在处理过程之前，初始化变量。 |

### 3. 示例

了解其基本使用即可。

+ 输出第一列内容：

  ```bash
  sed -n '1,5p' /etc/passwd | awk -F ":" '{print $1}'
  ```

+ 使用变量：

  ```bash
  echo | awk '{ var1="v1"; var2="v2"; var3="v3"; print var1"="var2"="var3; }'
  ```

+ 输出 20 - 23 行的行号及内容：

  ```bash
  awk 'NR>19&&NR<24 {print NR,$0}' package.json
  # or
  awk 'NR=20,NR=21,NR=22,NR=23 {print NR,$0}' package.json
  ```

+ 输出含有 docs 的行：

  ```bash
  awk '/docs/' package.json
  ```