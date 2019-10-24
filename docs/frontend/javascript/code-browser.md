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



## createElement

**FUNCTION：**

```js
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
```

**CONCEPTS：**

创建一个 DOM，超过一个则仅返回第一个。

**EXAMPLES：**

```js
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
el.className; // 'container'
```



## createEventHub <Badge text="important" type="error"/>

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

**CONCEPTS：**

创建一个事件发布、订阅中心。发布主要靠循环判断。

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



## currentURL

**FUNCTION：**

```js
const currentURL = () => window.location.href;
```

**CONCEPTS：**

当前 URL。

**EXAMPLES：**

```js
currentURL(); // "https://docs.shanyuhai.top/"
```



## detectDeviceType

**FUNCTION：**

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
```

**CONCEPTS：**

判断设备类型。

**EXAMPLES：**

```js
detectDeviceType(); // "Mobile" or "Desktop"
```



## elementContains

**FUNCTION：**

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
```

**CONCEPTS：**

DOM 包含关系。

**EXAMPLES：**

```js
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```



## elementIsVisibleInViewport

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

**CONCEPTS：**

判断元素是否在视口中。

**EXAMPLES：**

```js
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
elementIsVisibleInViewport(el); // false - (not fully visible)
elementIsVisibleInViewport(el, true); // true - (partially visible)
```



## formToObject

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

**CONCEPTS：**

表单元素转为对象。

**EXAMPLES：**

```js
formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }
```



## getImages

**FUNCTION：**

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};
```

**CONCEPTS：**

获取某节点内的所有图片链接。

**EXAMPLES：**

```js
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```



## getScrollPosition

**FUNCTION：**

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

**CONCEPTS：**

获取当前页面的滚动位置。

**EXAMPLES：**

```js
getScrollPosition(); // {x: 0, y: 200}
```



## getStyle/setStyle

**FUNCTION：**

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

**CONCEPTS：**

指定、设置元素样式。

**EXAMPLES：**

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px
```



## hasClass/toggleClass

**FUNCTION：**

```js
const hasClass = (el, className) => el.classList.contains(className);
const toggleClass = (el, className) => el.classList.toggle(className);
```

**CONCEPTS：**

判断、切换元素 class。

**EXAMPLES：**

```js
hasClass(document.querySelector('p.special'), 'special'); // true
toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```



## hide/show

**FUNCTION：**

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
const show = (...el) => [...el].forEach(e => (e.style.display = ''));
```

**CONCEPTS：**

隐藏、显示指定元素。

**EXAMPLES：**

```js
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```



## httpsRedirect

**FUNCTION：**

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};
```

**CONCEPTS：**

重定向到 https。利用了 replace 方法导致无法返回。

**EXAMPLES：**

```js
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```



## insertAfter/insertBefore

**FUNCTION：**

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

**CONCEPTS：**

插入 HTML 片段。

**EXAMPLES：**

```js
insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```



## isBrowserTabFocused

**FUNCTION：**

```js
const isBrowserTabFocused = () => !document.hidden;
```

**CONCEPTS：**

当前标签页是否处于 actived 状态。可以利用标签页切换事件和 title 做一点有意思的事情。

**EXAMPLES：**

```js
isBrowserTabFocused(); // true
```



## nodeListToArray

**FUNCTION：**

```js
const nodeListToArray = nodeList => [...nodeList];
```

**CONCEPTS：**

node 列表转为数组。

**EXAMPLES：**

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```



## observeMutations

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

**CONCEPTS：**

尚不能理解使用场景。

**EXAMPLES：**

```js
const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page
obs.disconnect(); // Disconnects the observer and stops logging mutations on the page
```



## off/on

**FUNCTION：**

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};
```

**CONCEPTS：**

移除、添加事件监听。

**EXAMPLES：**

```js
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling
```



## onUserInputChange

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

**CONCEPTS：**

监听用户输入类型为 mouse 还是 touch。 

**EXAMPLES：**

```js
onUserInputChange(type => {
  console.log('The user is now using', type, 'as an input method.');
});
```



## prefix

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

**CONCEPTS：**

补充浏览器前缀。

**EXAMPLES：**

```js
prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
```



## recordAnimationFrames

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
};
```

**CONCEPTS：**

记录动画状态。

**EXAMPLES：**

```js
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts again
const recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames
```



## redirect

**FUNCTION：**

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

**CONCEPTS：**

重定向。

**EXAMPLES：**

```js
redirect('https://google.com');
```



## runAsync

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

**CONCEPTS：**

使用 web worker 进程。尚不能理解具体使用。

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



## scrollToTop

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

**CONCEPTS：**

回到顶部。

**EXAMPLES：**

```js
scrollToTop();
```



## smoothScroll

**FUNCTION：**

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
```

**CONCEPTS：**

平滑滚动至某位置。锚点效果。

**EXAMPLES：**

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```



## serializeForm

**FUNCTION：**

```js
const serializeForm = form =>
  Array.from(new FormData(form), field => field.map(encodeURIComponent).join('=')).join('&');
```

**CONCEPTS：**

序列化表单。

**EXAMPLES：**

```js
serializeForm(document.querySelector('#form')); // email=test%40email.com&name=Test%20Name
```



## triggerEvent

**FUNCTION：**

```js
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));
```

**CONCEPTS：**

事件上绑定自定义数据。

**EXAMPLES：**

```js
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
```