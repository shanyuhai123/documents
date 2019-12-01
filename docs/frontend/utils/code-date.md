---
title: 30s code date
---

> [30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)



## dayOfYear

**FUNCTION：**

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

**CONCEPTS：**   

今年已过天数。

**EXAMPLES：**

```js
dayOfYear(new Date()); // 272
```



## formatDuration

**FUNCTION：**

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
```

**CONCEPTS：**   

格式化毫秒数。

**EXAMPLES：**

```js
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```



## getColonTimeFromDate

**FUNCTION：**

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

**CONCEPTS：**   

返回 HH:MM:SS 时间。

**EXAMPLES：**

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```



## getDaysDiffBetweenDates

**FUNCTION：**

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

**CONCEPTS：** 

返回日期间的天数。

**EXAMPLES：**

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```



## isAfterDate/isBeforeDate/isSameDate

**FUNCTION：**

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;
const isBeforeDate = (dateA, dateB) => dateA < dateB;
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
```

**CONCEPTS：** 

比较时间前后。

**EXAMPLES：**

```js
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```



## isWeekday/isWeekend

**FUNCTION：**

```js
const isWeekday = (t = new Date()) => {
  return t.getDay() % 6 !== 0;
};
const isWeekend = (t = new Date()) => {
  return t.getDay() % 6 === 0;
};
```

**CONCEPTS：** 

判断是否工作日、休息日。

**EXAMPLES：**

```js
isWeekday(); // true (if current date is 2019-07-19)
isWeekend(); // 2018-10-19 (if current date is 2018-10-18)
```



## maxDate/minDate

**FUNCTION：**

```js
const maxDate = dates => new Date(Math.max(...dates));
const minDate = dates => new Date(Math.min(...dates));
```

**CONCEPTS：** 

返回最大、最小日期。

**EXAMPLES：**

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
minDate(array); // 2016-01-08T22:00:00.000Z
```



## tomorrow/yesterday

**FUNCTION：**

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
const yesterday = () => {
  let t = new Date();
  t.setDate(t.getDate() - 1);
  return t.toISOString().split('T')[0];
};
```

**CONCEPTS：** 

返回明天、昨天的日期。在当前日期上 +(-)1 来实现区别。

**EXAMPLES：**

```js
tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
```