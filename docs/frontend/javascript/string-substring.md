---
autoGroup-3: 字符串方法
title: 字符串截取方法
---

## String.prototype.replace

### 1. 语法

::: danger
str.replace(regexp|substr, newSubStr|function)
:::

参数：

+ regexp：一个正则对象;
+ substr：将被替换的字符串；
+ newSubStr：替换的字符串；
+ function：用于创建新字符串的函数。

返回值：

替换后的新字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用于替换模板。

### 3. 示例

+ defining the regular expression in replace

  ```js
  const str = 'Twas the night before Xmas...';
  str.replace(/xmas/i, 'Christmas'); // Twas the night before Christmas...
  ```

+ switch words in a string

  ```js
  const str = 'John Smith';
  str.replace(/(\w+)\s(\w+)/, '$2, $1'); // Smith, John
  ```

+ using an inline function that modifies the matched characters

  ```js
  function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
      return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  }
  
  styleHyphenFormat('borderTop'); // border-top
  ```



## String.prototype.slice

### 1. 语法

::: danger
str.slice(beginIndex[, endIndex])
:::

参数：

+ beginIndex：开始索引；
+ endIndex：结束索引，可选。

返回值：

从原字符串中提取出来的新字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 冲用于切割字符串。

### 3. 示例

+ using slice to create a new string

  ```js
  const str = 'The morning is upon us.';
  str.slice(1, 8); // he morn
  str.slice(4, -2); // morning is upon u
  str.slice(12); // is upon us.
  str.slice(30); // ""
  ```

+ using slice with negative indexes

  ```js
  const str = 'The morning is upon us.';
  str.slice(-3);     // 'us.'
  str.slice(-3, -1); // 'us'
  str.slice(0, -1);  // 'The morning is upon us'
  ```



## String.prototype.split

### 1. 语法

::: danger
str.split([separator[, limit]])
:::

参数：

+ separator：分隔符；
+ limit：限定返回分割片段数量。

返回值：

分割后的数组。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用于格式化数据（字符串）。

### 3. 示例

+ removing spaces from a string

  ```js
  const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
  const re = /\s*(?:;|$)\s*/;
  names.split(re); // ["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", ""]
  ```

+ returning a limited number of splits

  ```js
  const myString = 'Hello World. How are you doing?';
  myString.split(' ', 3); // ["Hello", "World.", "How"]
  ```

+ splitting with a RegExp to include parts of the separator in the result

  ```js
  const myString = 'Hello 1 word. Sentence number 2.';
  myString.split(/(\d)/); // [ "Hello ", "1", " word. Sentence number ", "2", "." ]
  ```



## String.prototype.substring

### 1. 语法

::: danger
str.substring(indexStart[, indexEnd])
:::

参数：

+ indexStart：开始索引；
+ indexEnd：结束索引。

返回值：

指定部分新字符串。

### 2. 描述

slice 弱化版。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using substring

  ```js
  const anyString = "Mozilla";
  
  // 输出 "Moz"
  anyString.substring(0,3);
  anyString.substring(3,0);
  anyString.substring(3,-3);
  anyString.substring(3,NaN);
  anyString.substring(-2,3);
  anyString.substring(NaN,3);
  
  // 输出 "lla"
  anyString.substring(4,7);
  anyString.substring(7,4);
  
  // 输出 ""
  anyString.substring(4,4);
  
  // 输出 "Mozill"
  anyString.substring(0,6);
  
  // 输出 "Mozilla"
  anyString.substring(0,7);
  anyString.substring(0,10);
  ```

