---
title: 字符串
sidebarDepth: 2
---

## 长度

### 1. byteSize

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

没想到长度是交由 `Blob` 处理。

**FUNCTION：**

```js
const byteSize = str => new Blob([str]).size;
```

**EXAMPLES：**

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```



## 判断

### 1. isAbsoluteURL（URL）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);
```

**EXAMPLES：**

```js
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
```

### 2. isAnagram

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

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

**EXAMPLES：**

```js
isAnagram('iceman', 'cinema'); // true
```

### 3. isUpperCase/isLowerCase

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const isUpperCase = str => str === str.toUpperCase();
const isLowerCase = str => str === str.toLowerCase();
```

**EXAMPLES：**

```js
isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```

### 4. palindrome（回文）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};
```

**EXAMPLES：**

```js
palindrome('taco cat'); // true
```

### 5. yesNo

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

**EXAMPLES：**

```js
yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
```



## 格式

### 1. capitalize（首字母大写）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
```

**EXAMPLES：**

```js
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```

### 2. expandTabs（换行符）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const expandTabs = (str, count) => str.replace(/\t/g, ' '.repeat(count));
```

**EXAMPLES：**

```js
expandTabs('\t\tlorem', 3); // '      lorem'
```

### 3. capitalizeEveryWord（单词大写）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```

**EXAMPLES：**

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```

### 4. fromCamelCase（驼峰）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
```

**EXAMPLES：**

```js
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
```

### 5. indentString（缩进）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));
```

**EXAMPLES：**

```js
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
```

### 6. mapString（自定义）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
```

**EXAMPLES：**

```js
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```

### 7. toCamelCase（驼峰）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const toCamelCase = str => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};
```

**EXAMPLES：**

```js
toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
toCamelCase('Some label that needs to be camelized'); // 'someLabelThatNeedsToBeCamelized'
toCamelCase('some-javascript-property'); // 'someJavascriptProperty'
toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'someMixedStringWithSpacesUnderscoresAndHyphens'
```

### 8. toKebabCase（横线）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
```

**EXAMPLES：**

```js
toKebabCase('camelCase'); // 'camel-case'
toKebabCase('some text'); // 'some-text'
toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase('AllThe-small Things'); // "all-the-small-things"
toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html"
```

### 9. toSnakeCase（下划线）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
```

**EXAMPLES：**

```js
toSnakeCase('camelCase'); // 'camel_case'
toSnakeCase('some text'); // 'some_text'
toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
toSnakeCase('AllThe-small Things'); // "all_the_small_things"
toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"
```

### 10. toTitleCase（标题）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');
```

**EXAMPLES：**

```js
toTitleCase('some_database_field_name'); // 'Some Database Field Name'
toTitleCase('Some label that needs to be title-cased'); // 'Some Label That Needs To Be Title Cased'
toTitleCase('some-package-name'); // 'Some Package Name'
toTitleCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'Some Mixed String With Spaces Underscores And Hyphens'
```



## 空格

### 1. containsWhitespace

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const containsWhitespace = str => /\s/.test(str);
```

**EXAMPLES：**

```js
containsWhitespace('lorem'); // false
containsWhitespace('lorem ipsum'); // true
```

### 2. compactWhitespace

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

**EXAMPLES：**

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```



## CSV

### 1. CSVToArray

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```

**EXAMPLES：**

```js
CSVToArray('a,b\nc,d'); // [['a','b'],['c','d']];
CSVToArray('a;b\nc;d', ';'); // [['a','b'],['c','d']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a','b'],['c','d']];
```

### 2. CSVToJSON

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

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

**EXAMPLES：**

```js
CSVToJSON('col1,col2\na,b\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON('col1;col2\na;b\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```



## 转义

### 1. escapeHTML（HTML）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

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

**EXAMPLES：**

```js
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```

### 2. unescapeHTML（HTML）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );
```

**EXAMPLES：**

```js
unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href="#">Me & you</a>'
```

### 3. escapeRegExp（正则）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

**EXAMPLES：**

```js
escapeRegExp('(test)'); // \\(test\\)
```

### 4. stripHTMLTags（HTML）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

**EXAMPLES：**

```js
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```



## 扩展

### 1. extendHex（颜色）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
```

**EXAMPLES：**

```js
extendHex('#03f'); // '#0033ff'
extendHex('05a'); // '#0055aa'
```

### 2. hexToRGB（RGB）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const hexToRGB = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};
```

**EXAMPLES：**

```js
hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
hexToRGB('#fff'); // 'rgb(255, 255, 255)'
```

### 3. RGBToHex（hex）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
```

**EXAMPLES：**

```js
RGBToHex(255, 165, 1); // 'ffa501'
```

### 4. mask（加密）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
```

**EXAMPLES：**

```js
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'
```

### 5. prettyBytes（字节）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const prettyBytes = (num, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};
```

**EXAMPLES：**

```js
prettyBytes(1000); // "1 KB"
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"
prettyBytes(123456789, 3, false); // "123MB"
```

### 6. removeNonASCII（ASCII）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

**EXAMPLES：**

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```

### 7. splitLines（换行）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const splitLines = str => str.split(/\r?\n/);
```

**EXAMPLES：**

```js
splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```

### 8. stringPermutations（排序）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};
```

**EXAMPLES：**

```js
stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']
```

### 9. truncateString（省略）

**FROM**

[30 seconds of code (String)](https://www.30secondsofcode.org/tag/string)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

**EXAMPLES：**

```js
truncateString('boomerang', 7); // 'boom...'
```