---
autoGroup-3: 字符串方法
title: 字符串查询方法
---

## String.prototype.charAt

### 1. 语法

::: danger
str.charAt(index)
:::

参数：

+ index：一个介于0 和字符串长度减1之间的整数，默认值为 0。

返回值：

索引值对应的字符串，如果 index 超出范围则返回空字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 初学时使用过。

### 3. 示例

+ displaying characters at different locations in a string

  ```js
  const anyString = "Brave new world";
  
  anyString.charAt(); // "B"
  anyString.charAt(0); // "B"
  anyString.charAt(1); // "r"
  anyString.charAt(999); // ""
  ```




## String.prototype.charCodeAt

### 1. 语法

::: danger
str.charCodeAt(index)
:::

参数：

+ index：一个介于0 和字符串长度减1之间的整数，默认值为 0。

返回值：

索引值对应的 Unicode，如果 index 超出范围则返 NaN。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 初学时使用过。

### 3. 示例

+ using charCodeAt

  ```js
  'ABC'.charCodeAt(); // 65
  'ABC'.charCodeAt(0); // 65
  'ABC'.charCodeAt(999); // NaN
  ```



## String.prototype.codePointAt

### 1. 语法

::: danger
str.codePointAt(pos)
:::

参数：

+ pos：一个介于0 和字符串长度减1之间的整数，默认值为 0。

返回值：

索引值对应的 Unicode，charCodeAt 的增强版，如果 index 超出范围则返 undefined。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using codePointAt

  ```js
  'ABC'.codePointAt(); // 65
  'ABC'.codePointAt(0); // 65
  'ABC'.codePointAt(999); // undefined
  ```



## String.prototype.endsWith

### 1. 语法

::: danger
str.endsWith(searchString[, length])
:::

参数：

+ searchString：要搜索的子字符串；
+ length：作为 str 的长度，可选。

返回值：

如果传入的子字符串在搜索字符串的末尾则返回 true，否则将返回 false，大小写敏感。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 用于判断是否以其结尾。

### 3. 示例

+ using endsWith

  ```js
  const str = 'To be, or not to be, that is the question.';
  str.endsWith('question.'); // true
  str.endsWith('to be');     // false
  str.endsWith('to be', 19); // true
  ```



## String.prototype.startsWith

### 1. 语法

::: danger
str.startsWith(searchString[, position])
:::

参数：

+ searchString：要搜索的子字符串；
+ length：作为 str 的长度，可选。

返回值：

如果传入的子字符串在搜索字符串的开头则返回 true，否则将返回 false，大小写敏感。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 用于判断是否以其开始。

### 3. 示例

+ using startsWith

  ```js
  const str = 'To be, or not to be, that is the question.';
  
  str.startsWith('To be');         // true
  str.startsWith('not to be');     // false
  str.startsWith('not to be', 10); // true
  ```



## String.prototype.includes

### 1. 语法

::: danger
str.includes(searchString[, position])
:::

参数：

+ searchString：要搜索的子字符串；
+ position：搜索的起始位置，可选。

返回值：

如果当前字符串包含被搜寻的字符串则返回 true，否则将返回 false，大小写敏感。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用语判断是否含有该字符串。

### 3. 示例

+ using includes

  ```js
  const str = 'To be, or not to be, that is the question.';
  str.includes('To be');       // true
  str.includes('question');    // true
  str.includes('nonexistent'); // false
  str.includes('To be', 1);    // false
  str.includes('TO BE');       // false
  str.includes('');            // true
  ```



## String.prototype.indexOf

### 1. 语法

::: danger
str.indexOf(searchValue, fromIndex)
:::

参数：

+ searchValue：被查找的值，默认值为 "undefined";
+ fromIndex：开始查找的位置，可选。

返回值：

指定值第一次出现的索引，未找到则返回 -1。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 早期用于判断是否存在某一字符串，后被 includes 方法取代。

### 3. 示例

+ checking occurrences

  ```js
  'Blue Whale'.indexOf('Blue') !== -1; // true
  ```



## String.prototype.lastIndexOf

### 1. 语法

::: danger
str.lastIndexOf(searchValue[, fromIndex])
:::

参数：

+ searchValue：被查找的值，默认值为 "undefined";
+ fromIndex：开始查找的位置，可选。

返回值：

指定值第一次出现的索引，未找到则返回 -1。

### 2. 描述

与 indexOf 一致，逆序查找。

