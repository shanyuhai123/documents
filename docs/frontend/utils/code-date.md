---
title: 日期
sidebarDepth: 2
---

## 常规

### 1. dayOfYear（已过天数）

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**FUNCTION：**

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

**EXAMPLES：**

```js
dayOfYear(new Date()); // 272
```

### 2. formatDuration（格式化毫秒）

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

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

**EXAMPLES：**

```js
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```

### 3. getColonTimeFromDate（time）

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**FUNCTION：**

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

**EXAMPLES：**

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```

### 3. getDaysDiffBetweenDates（天数间隔）

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**FUNCTION：**

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

**EXAMPLES：**

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```

### 4. getMeridiemSuffixOfInteger（am/pm）

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**FUNCTION：**

```js
const getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
    ? 12 + 'pm'
    : num < 12
    ? (num % 12) + 'am'
    : (num % 12) + 'pm';
```

**EXAMPLES：**

```js
getMeridiemSuffixOfInteger(0); // "12am"
getMeridiemSuffixOfInteger(11); // "11am"
getMeridiemSuffixOfInteger(13); // "1pm"
getMeridiemSuffixOfInteger(25); // "1pm"
```

### 5. isBeforeDate/isAfterDate/isSameDate

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**FUNCTION：**

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;
const isAfterDate = (dateA, dateB) => dateA > dateB;
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
```

**EXAMPLES：**

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

### 6. isLeapYear（闰年）

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**DETAIL：**

没想到判断闰年还能这么操作。

**FUNCTION：**

```js
const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
```

**EXAMPLES：**

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

### 7. isWeekday/isWeekend

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**FUNCTION：**

```js
const isWeekday = (t = new Date()) => {
  return t.getDay() % 6 !== 0;
};
const isWeekend = (t = new Date()) => {
  return t.getDay() % 6 === 0;
};
```

**EXAMPLES：**

```js
isWeekday(); // true (if current date is 2019-07-19)
isWeekend(); // 2018-10-19 (if current date is 2018-10-18)
```

### 8. minDate/maxDate

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**DETAIL：**

Math 配合展开符的常见操作。

**FUNCTION：**

```js
const minDate = dates => new Date(Math.min(...dates));
const maxDate = dates => new Date(Math.max(...dates));
```

**EXAMPLES：**

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```

### 8. yesterday/tomorrow

**FROM**

[30 seconds of code (Date)](https://www.30secondsofcode.org/tag/date/)

**DETAIL：**

Math 配合展开符的常见操作。

**FUNCTION：**

```js
const yesterday = () => {
  let t = new Date();
  t.setDate(t.getDate() - 1);
  return t.toISOString().split('T')[0];
};
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
```

**EXAMPLES：**

```js
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
```