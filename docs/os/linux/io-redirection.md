---
title: 输入、输出重定向
---

## 介绍

重定向标准 IO 流：标准输入（STDIN，文件描述符 0）、标准输出（STDOUT，文件描述符 1）、标准错误（STDERR，文件描述符 2）。



## 输出重定向

### 1. 语法

> 切记，执行输出时记得提前备份，防止覆盖源文件 :cry:。

```bash
command > file
```

执行命令 command 然后将结果输出至 file 文件中。

### 2. 示例

+ echo：基础操作；

  ```bash
  echo "hello world" > linux.txt
  ```

+ cat：普遍的使用；

  ```bash
  cat linux.txt > linux1.txt
  ```

+ command：command 解释。

  ```bash
  which google-chrome-stable > linux.txt
  ```

### 3. 扩展内容

+ 错误输入：命令错误时不会生效，修改默认文件描述符输入错误提示信息；

  ```bash
  cho "hello world" 2> test.txt
  ```

+ 追加输入：追加内容。

  ```bash
  echo "hello world" >> test.txt
  ```



## 输入重定向

### 1. 语法

```bash
command < file
```

可以从文件获取输入。

### 2. 示例

一般输入重定向会配合输出重定向进行使用（就我个人而言）。

```bash
# command < input > out
grep -v "tt." < test.txt > newTest.txt
```

