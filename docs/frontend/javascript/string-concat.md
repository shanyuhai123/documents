---
autoGroup-3: 字符串方法
title: 字符串拼接方法
---

## String.prototype.concat

### 1. 语法

::: danger
str.concat(string2, string3[, ..., stringN])
:::

参数：

+ string2...stringN：和原字符串连接的多个字符串。

返回值：

返回一个新的字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 一般使用模板字符串或 `+` 拼接，尚未使用过，强烈不推荐使用该方法。



## String.prototype.padStart

### 1. 语法

::: danger
str.padStart(targetLength [, padString])
:::

参数：

+ targetLength：当前字符串需要填充到的目标长度；
+ padString：填充字符串。

返回值：

在原字符串开头填充指定字符串直到形成直到目标长度字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using padStart

  ```js
  'abc'.padStart(10, "foo");  // "foofoofabc"
  'abc'.padStart(6,"123465"); // "123abc"
  'abc'.padStart(8, "0");     // "00000abc"
  'abc'.padStart(1);          // "abc"
  'abc'.padStart(4);          // " abc"
  'abc'.padStart(10);         // "       abc"
  ```



## String.prototype.padEnd

### 1. 语法

::: danger
str.padEnd(targetLength [, padString])
:::

参数：

+ targetLength：当前字符串需要填充到的目标长度；
+ padString：填充字符串。

返回值：

在原字符串末尾填充指定字符串直到形成直到目标长度字符串。

### 2. 描述

与 padStart 一致，在末尾添加。




## String.prototype.repeat

### 1. 语法

::: danger
str.repeat(count)
:::

参数：

+ count：重复的次数。

返回值：

指定数量的新字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 填充字符串时使用。

### 3. 示例

+ using repeat

  ```js
  'abc'.repeat(-1);   // RangeError
  'abc'.repeat(0);    // ''
  'abc'.repeat(1);    // 'abc'
  'abc'.repeat(2);    // 'abcabc'
  'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
  ```
