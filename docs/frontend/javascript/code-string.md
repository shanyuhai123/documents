---
title: 30s code string
---

> [30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)



## CSVToArray

**FUNCTION：**

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```

**CONCEPTS：**

CSV 字符串转为二维数组。判断 title 后，依次对换行符、分隔符进行划分。

**EXAMPLES：**

```js
CSVToArray('a,b\nc,d'); // [['a','b'],['c','d']];
CSVToArray('a;b\nc;d', ';'); // [['a','b'],['c','d']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a','b'],['c','d']];
```



## CSVToJSON

**FUNCTION：**

```js
const CSVToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};
```

**CONCEPTS：**

CSV 字符串 JSON。利用 reduce 构成 JSON 并保留了 title。

**EXAMPLES：**

```js
CSVToJSON('col1,col2\na,b\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON('col1;col2\na;b\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```



## URLJoin

**FUNCTION：**

```js
const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
```

**CONCEPTS：**

URL 拼接。没看懂正则这一块。

**EXAMPLES：**

```js
URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```



## byteSize

**FUNCTION：**

```js
const byteSize = str => new Blob([str]).size;
```

**CONCEPTS：**

获取字节的长度。四字节的字符直接使用 length 判断会错误。

**EXAMPLES：**

```js
'😀'.length; // 2
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```



## capitalize/decapitalize

**FUNCTION：**

```js
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
```

**CONCEPTS：**

首字母大写、小写。利用 `...` 运算符获取剩余的参数（对象上常用该方法解构）。

**EXAMPLES：**

```js
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar', true); // 'fOOBAR'
```



## capitalizeEveryWord

**FUNCTION：**

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```

**CONCEPTS：**

单词首字母大写。相对于早期自用的 split 然后首字母大写，该形式匹配单词边界 `\b` 明显更优。

**EXAMPLES：**

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```



## compactWhitespace

**FUNCTION：**

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

**CONCEPTS：**

格式化空格符。`\s` 匹配空白符，`{2,}` 匹配大于 2 的空白符。

**EXAMPLES：**

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```