---
title: Git 忽略跟踪的文件
---

## 忽略规则

> 首先你需要在项目根目录下新建一个 `.gitignore` 文件

+ 空格不匹配任何文件，可以作为分隔符号；
+ 以 `#` 开始的为注释；
+ `\` 表示转义符；
+ `!` 开始的表示否定，也就是开启跟踪；
+ `/` 开始的表示项目根目录；
+ `/` 结尾的表示某个文件夹，但是不匹配该文件；
+ `**` 表示多级，其位置可在开始，中间，结束；
+ `?` 表示单个字符；
+ `[]` 表示单个字符列表； 



## 忽略示例

### 1. 文件

```bash
# 忽略 所有 a.txt 文件
a.txt
# 仅忽略根目录下的 a.txt 文件
/a.txt
# 忽略 config 目录下的 secret.json
config/secret.json
# 忽略 所有的 .env 结尾的文件
*.env
```

### 2. 目录

```bash
# 忽略 node_modules 目录
node_modules/
```

### 3. 取反

```bash
# 跟踪 public 目录下的 .env 文件
!public/.env
```

### 4. 组合

```bash
# 忽略 docs 下的所有 .md 文件
docs/*.md # 这是错误的，因为不能忽略 `docs/git/` 目录下的文件
docs/**/*.md # 正确结果

# 忽略以 .a 、.b 或 .c 结尾的文件
*.[abc] # 正确
*.[a-c] # 也正确

# 忽略 docs 下的除 secret 命名的所有文件
docs/
!docs/secret.*

## 忽略 src 下的所有 index.js 文件
src/**/index.js
```



## 规则不生效

`.gitignore` 指定的是未跟踪文件，已经跟踪的（tracked）不受影响。

解决方法就是清除本地缓存再提交：

```bash
git rm --cached

# 示例 -- 取消某个文件
git rm --cached a.txt
# 示例 -- 取消某个文件夹
git rm -r --cached a/
# 示例 -- 取消所有文件
git rm -r --cached .
```

