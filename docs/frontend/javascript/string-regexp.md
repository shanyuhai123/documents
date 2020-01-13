---
autoGroup-3: 字符串方法
title: 字符串正则方法
---

## String.prototype.match

### 1. 语法

::: danger
str.match(regexp)
:::

参数：

+ regexp：一个正则表达式对象。

返回值：

如果使用 g 标志，则返回与完整正则表达式匹配的所有结果，但不会返回捕获组；如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ using match

  ```js
  const str = 'For more information, see Chapter 3.4.5.1';
  const re = /see (chapter \d+(\.\d)*)/i;
  str.match(re);
  
  // logs [ 'see Chapter 3.4.5.1',
  //        'Chapter 3.4.5.1',
  //        '.1',
  //        index: 22,
  //        input: 'For more information, see Chapter 3.4.5.1' ]
  
  // 'see Chapter 3.4.5.1' is the whole match.
  // 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
  // '.1' was the last value captured by '(\.\d)'.
  // The 'index' property (22) is the zero-based index of the whole match.
  // The 'input' property is the original string that was parsed.
  ```

+ using global and ignore case flags with match

  ```js
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const re = /[A-E]/gi;
  str.match(re); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
  ```

+ using match with no parameter

  ```js
  const str = "Nothing will come of nothing.";
  str.match(); // returns [""]
  ```



## String.prototype.matchAll

### 1. 语法

::: danger
str.matchAll(regexp)
:::

参数：

+ regexp：一个正则表达式对象。

返回值：

一个迭代器。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 初学时使用过。

### 3. 示例

+ Regexp.exec and matchAll

  ```js
  const regexp = RegExp('foo[a-z]*','g');
  const str = 'table football, foosball';
  let match;
  
  while ((match = regexp.exec(str)) !== null) {
    console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
    // expected output: "Found football start=6 end=14."
    // expected output: "Found foosball start=16 end=24."
  }
  
  const str = 'table football, foosball';
  const matches = str.matchAll(/foo[a-z]*/g);
  
  for (const match of matches) {
    console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
  }
  // expected output: "Found football start=6 end=14."
  // expected output: "Found foosball start=16 end=24."
  ```

+ better access to capturing groups

  ```js
  const str = 'test1test2';
  const re = /t(e)(st(\d?))/g;
  
  str.match(re); // ["test1", "test2"]
  [...str.matchAll(re)].map(s => s[0]); // ["test1", "test2"]
  ```



## String.prototype.search

### 1. 语法

::: danger
str.search(regexp)
:::

参数：

+ regexp：一个正则对象。

返回值：

首次匹配到时的索引，否则返回 -1。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - indexOf 无法满足需求时。

### 3. 示例

+ using search

  ```js
  const str = "hey JudE";
  const re = /[A-Z]/g;
  const re2 = /[.]/g;
  str.search(re); // returns 4, which is the index of the first capital letter "J"
  str.search(re2); // returns -1 cannot find '.' dot punctuation
  ```
