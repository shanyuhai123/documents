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