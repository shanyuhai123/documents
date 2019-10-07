---
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