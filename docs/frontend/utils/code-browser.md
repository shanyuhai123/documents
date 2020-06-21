---
title: 浏览器
sidebarDepth: 2
---

## 表单处理

### 1. serializeForm（序列化）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const serializeForm = form =>
  Array.from(new FormData(form), field => field.map(encodeURIComponent).join('=')).join('&');
```

**EXAMPLES：**

```js
serializeForm(document.querySelector('#form')); // email=test%40email.com&name=Test%20Name
```

### 2. serializeForm（对象化）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
```

**EXAMPLES：**

```js
formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }
```









## URL

### 1. currentURL（完整）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const currentURL = () => window.location.href;
```

**EXAMPLES：**

```js
currentURL(); // 'https://google.com'
```

### 2. getURLParameters（参数）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
```

**EXAMPLES：**

```js
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
getURLParameters('google.com'); // {}
```

### 3. getBaseURL（基础）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const getBaseURL = url =>
  url.indexOf('?') > 0 ? url.slice(0, url.indexOf('?')) : url;
```

**EXAMPLES：**

```js
getBaseURL('http://url.com/page?name=Adam&surname=Smith'); // 'http://url.com/page'
```



## 数组转为列表

### 1. arrayToHtmlList

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**DETAILS：**

原式中为指定 id，此处修改为广泛的 `selector`。

**FUNCTION：**

```js
const arrayToHtmlList = (arr, selector) =>
  (el => (
    (el = document.querySelector(selector)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
```

**EXAMPLES：**

```js
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```



## 剪切板

### 1. copyToClipboard

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

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
```

**EXAMPLES：**

```js
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```

### 2. navigator.clipboard

**FROM**

[w3c/clipboard-apis](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard)

**DETAILS：**

浏览器提供的实现。

**FUNCTION：**

```js
const data = new DataTransfer();
data.items.add("Howdy, partner!", "text/plain");
navigator.clipboard.write(data);
```



## 数值变化动画

### 1. counter

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

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

**EXAMPLES：**

```js
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```



## 事件

### 1. createEventHub（发布、订阅中心）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});
```

**EXAMPLES：**

```js
const handler = data => console.log(data);
const hub = createEventHub();
let increment = 0;

// Subscribe: listen for different types of events
hub.on('message', handler);
hub.on('message', () => console.log('Message event fired'));
hub.on('increment', () => increment++);

// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
hub.emit('increment'); // `increment` variable is now 1

// Unsubscribe: stop a specific handler from listening to the 'message' event
hub.off('message', handler);
```

### 2. listenOnce（仅监听一次）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const listenOnce = (el, evt, fn) => {
  let fired = false;
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e);
    fired = true;
  });
};
```

**EXAMPLES：**

```js
listenOnce(
  document.getElementById('my-id),
  'click',
  () => console.log('Hello world')
); // 'Hello world' will only be logged on the first click
```

### 3. on

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};
```

**EXAMPLES：**

```js
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling
```

### 4. off

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
```

**EXAMPLES：**

```js
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```







## 检测

### 1. detectDeviceType（设备类型）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
```

**EXAMPLES：**

```js
detectDeviceType(); // "Mobile" or "Desktop"
```

### 2. isBrowser（是否为浏览器）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
```

**EXAMPLES：**

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```

### 3. isBrowserTabFocused（标签页是否 actived）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const isBrowserTabFocused = () => !document.hidden;
```

**EXAMPLES：**

```js
isBrowserTabFocused(); // true
```

### 4. prefersDarkColorScheme（主题）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const prefersDarkColorScheme = () =>
  window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const prefersLightColorScheme = () =>
  window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
```

**EXAMPLES：**

```js
prefersDarkColorScheme(); // true
prefersLightColorScheme(); // true
```

### 4. supportsTouchEvents（touch）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const supportsTouchEvents = () =>
  window &&
  ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
```

**EXAMPLES：**

```js
supportsTouchEvents(); // true
```





## DOM 操作

### 1. createElement（创建）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
```

**EXAMPLES：**

```js
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className); // 'container'
```

### 2. hide/show（显/隐）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

const show = (...el) => [...el].forEach(e => (e.style.display = ''));
```

**EXAMPLES：**

```js
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```

### 3. insertBefore（前方插入）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

**EXAMPLES：**

```js
insertBefore(document.getElementById('myId'), '<p>before</p>');
// <p>before</p> <div id="myId">...</div>
```

### 4. insertAfter（后方插入）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
```

**EXAMPLES：**

```js
insertAfter(document.getElementById('myId'), '<p>after</p>');
// <div id="myId">...</div> <p>after</p>
```

### 5. scrollToTop（回到顶部）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

**EXAMPLES：**

```js
scrollToTop();
```

### 6. smoothScroll（平滑滚动）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
```

**EXAMPLES：**

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```



## DOM 关系

### 1. bottomVisible（页面底部）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
```

**EXAMPLES：**

```js
bottomVisible(); // false
```

### 2. elementContains（两个 DOM 间）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
```

**EXAMPLES：**

```js
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```

### 3. elementIsVisibleInViewport（DOM 可见）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
```

**EXAMPLES：**

```js
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
elementIsVisibleInViewport(el); // false - (not fully visible)
elementIsVisibleInViewport(el, true); // true - (partially visible)
```



## DOM 获取

### 1. getImages（图片）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};
```

**EXAMPLES：**

```js
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```

### 2. getStyle/setStyle（样式）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**DETAILS：**

省略获取 DOM 步骤。

**FUNCTION：**

```js
const getStyle = (selector, ruleName) => getComputedStyle(document.querySelector(selector)[ruleName];

const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

**EXAMPLES：**

```js
getStyle('p', 'font-size'); // '16px'

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```

### 3. hasClass/toggleClass（class）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**DETAILS：**

省略获取 DOM 步骤。

**FUNCTION：**

```js
const hasClass = (selector, className) => document.querySelector(selector).classList.contains(className);

const toggleClass = (el, className) => el.classList.toggle(className);
```

**EXAMPLES：**

```js
hasClass('p.special', 'special'); // true

toggleClass(document.querySelector('p.special'), 'special');
// The paragraph will not have the 'special' class anymore
```



## 获取滚动条位置

### 1. getScrollPosition

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

**EXAMPLES：**

```js
getScrollPosition(); // {x: 0, y: 200}
```



## HTTP 请求

### 1. httpPost（增）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

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

### 2. httpDelete（删）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const httpDelete = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('DELETE', url, true);
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send();
};
```

**EXAMPLES：**

```js
httpDelete('https://jsonplaceholder.typicode.com/posts/1', request => {
  console.log(request.responseText);
}); /*
Logs: {}
*/
```

### 3. httpPut（改）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const httpPut = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send(data);
};
```

**EXAMPLES：**

```js
const password = 'fooBaz';
const data = JSON.stringify({
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
});
httpPut('https://jsonplaceholder.typicode.com/posts/1', data, request => {
  console.log(request.responseText);
}); /*
Logs: {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

### 4. httpGet（查）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

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

### 5. httpsRedirect（https 重定向）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};
```

**EXAMPLES：**

```js
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```



## cookie

### 1. parseCookie（解析）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

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

**EXAMPLES：**

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
```

### 2. serializeCookie（序列化）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

**EXAMPLES：**

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```



## 全屏

### 1. fullscreen（进入）

**FROM**

整理。

**FUNCTION：**

```js
const fullscreen = (selector = document.body) => {
  if (selector.requestFullscreen) {
    selector.requestFullscreen();
  } else if (selector.mozRequestFullScreen) {
    selector.mozRequestFullScreen();
  } else if (selector.webkitRequestFullscreen) {
    selector.webkitRequestFullscreen();
  } else if (selector.msRequestFullscreen) {
    selector.msRequestFullscreen();
  }
};
```

**EXAMPLES：**

```js
fullscreen();
```

### 2. exitFullscreen（退出）

**FROM**

整理。

**FUNCTION：**

```js
const exitFullscreen = () => {
  if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
```

**EXAMPLES：**

```js
exitFullscreen();
```

### 3. isFullScreen（是否）

**FROM**

整理。

**FUNCTION：**

```js
const isFullScreen = () => {
  return !!(
    document.fullscreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen ||
    document.webkitFullScreen ||
    document.msFullScreen
  );
}
```

**EXAMPLES：**

```js
isFullScreen(); // false
```

### 3. getFullscreenElement（全屏节点）

**FROM**

整理。

**FUNCTION：**

```js
const getFullscreenElement = () => {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullScreenElement ||
    document.webkitFullscreenElement ||
    null
  );
}
```

**EXAMPLES：**

```js
getFullscreenElement(); // <section class="full"></section>
```



## 语音

### 1. speechSynthesis（文字）

**FROM**

整理。

**FUNCTION：**

```js
const speechSynthesis = message => {
  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};
```

**EXAMPLES：**

```js
speechSynthesis('Hello, World');
```



## 处理

### 1. prefix（前缀）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const prefix = prop => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
  const i = prefixes.findIndex(
    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
```

**EXAMPLES：**

```js
prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
```

### 2. UUIDGeneratorBrowser（UUID）

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
```

**EXAMPLES：**

```js
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```



## 未理解

### 1. observeMutations

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true
      },
      options
    )
  );
  return observer;
};
```

**EXAMPLES：**

```js
const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page
obs.disconnect(); // Disconnects the observer and stops logging mutations on the page
```

### 2. onUserInputChange

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const onUserInputChange = callback => {
  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};
```

**EXAMPLES：**

```js
onUserInputChange(type => {
  console.log('The user is now using', type, 'as an input method.');
});
```

### 3. recordAnimationFrames

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const recordAnimationFrames = (callback, autoStart = true) => {
  let running = true,
    raf;
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = () => {
    running = true;
    run();
  };
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };
  if (autoStart) start();
  return { start, stop };
};t onUserInputChange = callback => {
  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};
```

**EXAMPLES：**

```js
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts again
const recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames
```

### 4. renderElement

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const renderElement = ({ type, props = {} }, container) => {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  const isListener = p => p.startsWith('on');
  const isAttribute = p => !isListener(p) && p !== 'children';

  Object.keys(props).forEach(p => {
    if(isAttribute(p)) element[p] = props[p];
    if(!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });

  if(!isTextElement && props.children && props.children.length)
    props.children.forEach(childElement => renderElement(childElement, element));

  container.appendChild(element);
}
```

**EXAMPLES：**

```js
const myElement = {
  type: 'button',
  props: {
    type: 'button',
    className: 'btn',
    onClick: () => alert('Clicked'),
    children: [
      { props: { nodeValue: 'Click me' } }
    ]
  }
};

renderElement(
  myElement,
  document.body
);
```

### 5. runAsync

**FROM**

[30 seconds of code (Browser)](https://www.30secondsofcode.org/tag/browser)

**FUNCTION：**

```js
const runAsync = fn => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
      type: 'application/javascript; charset=utf-8'
    })
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};
```

**EXAMPLES：**

```js
const longRunningFunction = () => {
  let result = 0;
  for (let i = 0; i < 1000; i++)
    for (let j = 0; j < 700; j++) for (let k = 0; k < 300; k++) result = result + i + j + k;

  return result;
};
/*
  NOTE: Since the function is running in a different context, closures are not supported.
  The function supplied to `runAsync` gets stringified, so everything becomes literal.
  All variables and functions must be defined inside.
*/
runAsync(longRunningFunction).then(console.log); // 209685000000
runAsync(() => 10 ** 3).then(console.log); // 1000
let outsideVariable = 50;
runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'
```
