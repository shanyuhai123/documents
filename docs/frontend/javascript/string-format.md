---
autoGroup-3: 字符串方法
title: 字符串格式化方法
---

## String.prototype.toLowerCase

### 1. 语法

::: danger
str.toLowerCase()
:::

返回值：

小写的字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 用于小写字符串。

### 3. 示例

+ using toLowerCase

  ```js
  'ALPHABET'.toLowerCase(); // 'alphabet'
  ```



## String.prototype.toString

### 1. 语法

::: danger
str.toString()
:::

返回值：

字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using toString

  ```js
  const x = new String("Hello world");
  x.toString(); // 输出 "Hello world"
  ```



## String.prototype.toUpperCase

### 1. 语法

::: danger
str.toUpperCase()
:::

返回值：

大写的字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用于大写字符串。

### 3. 示例

+ using toUpperCase

  ```js
  'alphabet'.toUpperCase(); // 'ALPHABET'
  ```



## String.prototype.trim

### 1. 语法

::: danger
str.trim()
:::

返回值：

两端去掉空白的新字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using trim

  ```js
  const orig = '   foo  ';
  orig.trim(); // 'foo'
  ```



## String.prototype.trimStart

### 1. 语法

::: danger
str.trimStart()
:::

返回值：

左侧去掉空白的新字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using trimLeft/trimStart

  ```js
  const str = "   foo  ";
  str.trimStart(); // 'foo  '
  str.trimLeft(); // 'foo  '
  ```



## String.prototype.trimEnd

### 1. 语法

::: danger
str.trimEnd()
:::

返回值：

右侧去掉空白的新字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using trimEnd

  ```js
  const str = "   foo  ";
  str.trimRight(); // '   foo'
  str.trimEnd(); // '   foo'
  ```

