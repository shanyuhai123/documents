---
title: 30s code utility
---

> [30 seconds of code (Utility)](https://www.30secondsofcode.org/tag/utility)



## castArray

**FUNCTION：**

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

**CONCEPTS：**

转为数组。

**EXAMPLES：**

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```



## cloneRegExp

**FUNCTION：**

```js
const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
```

**CONCEPTS：**

拷贝正则。

**EXAMPLES：**

```js
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi
```



## coalesce

**FUNCTION：**

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
```

**CONCEPTS：**

返回第一个非 `null/undefined` 数据。

**EXAMPLES：**

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```



## coalesceFactory

**FUNCTION：**

```js
const coalesceFactory = valid => (...args) => args.find(valid);
```

**CONCEPTS：**

根据函数返回的第一个数据。

**EXAMPLES：**

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```



## extendHex

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

**CONCEPTS：**

将3位颜色码转为6位颜色码。

**EXAMPLES：**

```js
extendHex('#03f'); // '#0033ff'
extendHex('05a'); // '#0055aa'
```



## getURLParameters

**FUNCTION：**

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
```

**CONCEPTS：**

获取 URL 查询参数。比之前的写法更优。

**EXAMPLES：**

```js
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
getURLParameters('google.com'); // {}
```



## hexToRGB

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

**CONCEPTS：**

将 hex 格式的颜色转为 rgb(a) 格式。将 3 位颜色码转为 6 位颜色码便于后期处理。

**EXAMPLES：**

```js
hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
hexToRGB('#fff'); // 'rgb(255, 255, 255)'
```



## httpGet

**FUNCTION：**

```js
const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};
```

**CONCEPTS：**

HTTP GET 请求。

**EXAMPLES：**

```js
httpGet(
  'https://jsonplaceholder.typicode.com/posts/1',
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
```



## httpPost

**FUNCTION：**

```js
const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};
```

**CONCEPTS：**

HTTP POST 请求。

**EXAMPLES：**

```js
const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1337,
  "title": "Foo",
  "body": "bar bar bar"
}
*/
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  null, // does not send a body
  console.log
); /*
Logs: {
  "id": 101
}
*/
```



## isBrowser

**FUNCTION：**

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
```

**CONCEPTS：**

判断是否为浏览器环境。

**EXAMPLES：**

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```



## mostPerformant

**FUNCTION：**

```js
const mostPerformant = (fns, iterations = 10000) => {
  const times = fns.map(fn => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
```

**CONCEPTS：**

找到执行最快的函数的索引。

**EXAMPLES：**

```js
mostPerformant([
  () => {
    // Loops through the entire array before returning `false`
    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
  },
  () => {
    // Only needs to reach index `1` before returning false
    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
  }
]); // 1
```



## objectToQueryString

**FUNCTION：**

```js
const objectToQueryString = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = index === 0 ? '?' : '&';
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
        return queryString;
      }, '')
    : '';
};
```

**CONCEPTS：**

对象还原为查询字符串。

**EXAMPLES：**

```js
objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'
```



## parseCookie

**FUNCTION：**

```js
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
```

**CONCEPTS：**

解析 cookie 字符串为对象。

**EXAMPLES：**

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
```



## prettyBytes

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

**CONCEPTS：**

字节转为可读单位。

**EXAMPLES：**

```js
prettyBytes(1000); // "1 KB"
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"
prettyBytes(123456789, 3, false); // "123MB"
```



## randomHexColorCode

**FUNCTION：**

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

**CONCEPTS：**

随机 6 位 hex 颜色。`0xfffff` 表示为 16 进制，`0xff` 即 `15*16^1 + 15*16^0 = 255`，`0xfff0` 即 `15*16^2 + 15*16^1 + 15*16^0 = 4095`。

**EXAMPLES：**

```js
randomHexColorCode(); // "#e34155"
```



## timeTaken

**FUNCTION：**

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
```

**CONCEPTS：**

获取函数的执行时间。

**EXAMPLES：**

```js
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```



## toCurrency

**FUNCTION：**

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
```

**CONCEPTS：**

格式化数字为对应货币格式。

**EXAMPLES：**

```js
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```



## toDecimalMark

**FUNCTION：**

```js
const toDecimalMark = num => num.toLocaleString('en-US');
```

**CONCEPTS：**

浮点数转为千分位格式。需要注意的是会丢失精度至小数点三位。

**EXAMPLES：**

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```



## toOrdinalSuffix

**FUNCTION：**

```js
const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};
```

**CONCEPTS：**

序数化数字。

**EXAMPLES：**

```js
toOrdinalSuffix('123'); // "123rd"
```



## validateNumber

**FUNCTION：**

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

**CONCEPTS：**

验证是否为数字。

**EXAMPLES：**

```js
validateNumber('10'); // true
```



## yesNo

**FUNCTION：**

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

**CONCEPTS：**

判断是否为 `y/yes` 或 `n/no`。非以上情况默认值 `def`。

**EXAMPLES：**

```js
yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
```