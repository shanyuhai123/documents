---
title: 30s code browser
---

> [30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)



## arrayToHtmlList

**FUNCTION：**

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
```

**CONCEPTS：**   

指定 ID 拼接 li。

**EXAMPLES：**

```js
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```


## bottomVisible

**FUNCTION：**

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
```

**CONCEPTS：**   

判断底部是否可见（到底了）。计算浏览器的高度来判断。

**EXAMPLES：**

```js
bottomVisible(); // true
```


## copyToClipboard

**FUNCTION：**

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
//  navigator.clipboard
```

**CONCEPTS：**   

复制内容到剪切板。一般情况使用第三方提供的稳定、兼容。

**EXAMPLES：**

```js
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```


## counter

**FUNCTION：**

```js
const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};
```

**CONCEPTS：**   

指定一个计数 counter。

**EXAMPLES：**

```js
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```