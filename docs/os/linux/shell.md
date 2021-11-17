---
autoPrev: everything-is-a-file
---

# Shell 脚本

一点点追加。

## Bash 变量

Bash 变量分为：环境变量和自定义变量。

### 环境变量

环境变量是 Bash 环境自带的变量，进入 Shell 时已经定义好了，它们通常时系统定义好的，也可以由用户从父 Shell 传入子 Shell。

### 自定义变量

自定义变量是用户在当前 Shell 里自己定义的变量，仅在当前 Shell 可用。一旦退出 Shell，该变量就不存在了。

### 特殊变量 - 脚本内

脚本文件内部可以使用特殊变量：

+ `$0`：脚本文件名，即 `script.sh`
+ `$1~$9`：对应脚本的第一个参数到第九个参数
+ `$#`：参数的总数
+ `$@`：全部的参数，参数之间使用空格分隔

解析一个示例：

``` sh
dir=`cd $(dirname $0) && pwd` # 注意等号两边不要有空格
# $0 => 即脚本文件名（包含你进入的目录）./shells/echo.sh
# $(dirname $0) => 输出文件目录，包裹住使得不会被 `echo` 解析成两部分 ./shells
# 完成的 => 进入目录，并获取其完整路径 /home/shanyuhai/code/shells
```

## 条件语句

### if

``` sh
if [ expression ]
then
   Statement(s) to be executed if expression is true
fi

# if expr1 ?then? body1 elseif expr2 ?then? body2 elseif ... ?else? ?bodyN?
```

`then` 语句中为常规执行语句，而 `expression` 判断表达式提供了一些快捷判断。

#### 1. 文件判断

+ `[ -a file ]`：如果 `file` 存在，则为 true
+ `[ -d file ]`：如果 `file` 存在且是一个目录，则为 true
+ `[ -f file ]`：如果 `file` 存在且是一个普通文件，则为 true

#### 2. 字符串判断

+ `[ -n string ]`：如果字符串 `string` 长度大于 0，则为 true
+ `[ -z string ]`：如果字符串 `string` 长度为 0，则为 true
