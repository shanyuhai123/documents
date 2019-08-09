---
title: 解析 URL 参数
---

## 目标

将常规的 URL 字符串的参数解析为对象的形式



## 方案

### 1. 字符串的 split

该方法比较直白，此处不做概述。



### 2. 正则表达式

```js
let url = 'https://www.google.com/search?source=hp&ei=cDq0XK-QBfPB0PEP7peesAk&q=解析+url+参数&btnK=Google+Search&oq=解析+url+参数&gs_l=psy-ab';

const queryURLParameter = url => {
  let regx = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};
  
  url.replace(regx, (...args) => {
    obj[args[1]] = args[2];
  })
  
  return obj;
}

queryURLParameter(url);
// {source: "hp", ei: "cDq0XK-QBfPB0PEP7peesAk", q: "解析+url+参数", btnK: "Google+Search", oq: "解析+url+参数", …}
```

