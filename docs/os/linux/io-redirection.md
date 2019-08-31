---
title: 输入、输出重定向
---

## 介绍

[重定向](https://zh.wikipedia.org/wiki/%E9%87%8D%E5%AE%9A%E5%90%91_(%E8%AE%A1%E7%AE%97%E6%9C%BA))标准 IO 流：标准输入（STDIN，文件描述符 0）、标准输出（STDOUT，文件描述符 1）、标准错误（STDERR，文件描述符 2）。



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



## 核心使用

常利用[空设备](https://zh.wikipedia.org/wiki//dev/null)（/dev/null）和重定向来丢弃不需要的输出流。

```bash
cat /etc/hosts > /dev/null
```

很多时候会将其配合 `2>&1` 进行使用，可参考 [shell中>/dev/null 2>&1是什么鬼](http://www.kissyu.org/2016/12/25/shell%E4%B8%AD%3E%20:dev:null%202%20%3E%20&1%E6%98%AF%E4%BB%80%E4%B9%88%E9%AC%BC%EF%BC%9F/)。



