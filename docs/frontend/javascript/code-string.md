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



## escapeHTML

**FUNCTION：**

```js
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
```

**CONCEPTS：**

HTML 转义（常用于防御 XSS 攻击）。利用了 replace 的第二个参数和策略模式。

**EXAMPLES：**

```js
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```



## escapeRegExp

**FUNCTION：**

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

**CONCEPTS：**

转义正则。

**EXAMPLES：**

```js
escapeRegExp('(test)'); // \\(test\\)
```



## fromCamelCase

**FUNCTION：**

```js
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
```

**CONCEPTS：**

从驼峰字符串格式转为其余格式。

**EXAMPLES：**

```js
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
```



## indentString

**FUNCTION：**

```js
const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));
```

**CONCEPTS：**

控制缩进。

**EXAMPLES：**

```js
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
```



## isAbsoluteURL

**FUNCTION：**

```js
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);
```

**CONCEPTS：**

判断是否为绝对路径的 URL。以 URL 协议开头。

**EXAMPLES：**

```js
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
```



## isAnagram

**FUNCTION：**

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
```

**CONCEPTS：**

检查两串字符串是否一致（不区分大小写，忽略空格、标点、特殊字符）。

**EXAMPLES：**

```js
isAnagram('iceman', 'cinema'); // true
isAnagram('Biceman', 'cinemaA'); // false
```



## isLowerCase/isUpperCase

**FUNCTION：**

```js
const isLowerCase = str => str === str.toLowerCase();
const isUpperCase = str => str === str.toUpperCase();
```

**CONCEPTS：**

判断字符串是否为小写、大写。

**EXAMPLES：**

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false
```



## mapString

**FUNCTION：**

```js
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
```

**CONCEPTS：**

字符串映射。

**EXAMPLES：**

```js
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```



## mask

**FUNCTION：**

```js
const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
```

**CONCEPTS：**

掩盖（填充）部分字符。利用 slice 保留后面一部分字符串，padStart 填充前一部分字符。

**EXAMPLES：**

```js
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'
```



## pad

**FUNCTION：**

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
```

**CONCEPTS：**

两侧填充字符串。

**EXAMPLES：**

```js
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```



## palindrome

**FUNCTION：**

```js
const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};
```

**CONCEPTS：**

判断是否为回文。

**EXAMPLES：**

```js
palindrome('taco cat'); // true
```



## pluralize

**FUNCTION：**

```js
const pluralize = (val, word, plural = word + 's') => {
  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};
```

**CONCEPTS：**

根据输入的数字返回对应的单词的单复数形式。当传进参数为对象时可以处理为闭包。

**EXAMPLES：**

```js
pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS);
autoPluralize(2, 'person'); // 'people'
```