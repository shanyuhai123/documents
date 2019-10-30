---
title: 30s code math
---

> [30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)



## approximatelyEqual

**FUNCTION：**

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
```

**CONCEPTS：**

大约相等。利用 `epsilon` 来限制误差范围，需要注意 JavaScript 采用了 IEEE 754 标准导致的误差。

**EXAMPLES：**

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```



## average

**FUNCTION：**

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

**CONCEPTS：**

平均值。

**EXAMPLES：**

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```



## averageBy

**FUNCTION：**

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
```

**CONCEPTS：**

根据函数（属性）获取对应的均值。

**EXAMPLES：**

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```



## binomialCoefficient

**FUNCTION：**

```js
const binomialCoefficient = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};
```

**CONCEPTS：**

二项式系数（杨辉三角）。数学问题。。。

**EXAMPLES：**

```js
binomialCoefficient(8, 2); // 28
// 增加示例
binomialCoefficient(8, 4); // 70
```



## clampNumber

**FUNCTION：**

```js
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
const clampNumber = (num, a, b) => Math.min(Math.max(num, Math.min(a, b)), Math.max(a, b));
```

**CONCEPTS：**

取得值（不在边界内）靠近的边界值。分为两种情况，在左侧和在右侧。直接逆推，假设在左侧，即得到 `Math.max(num, Math.min(a, b))`；假设在右侧，即得到 `Math.min(num, Math.max(a, b))`，对该式取反得到就是 num 值而非边界值。替换代入即得到 `Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b))`，同理可得 `Math.min(Math.max(num, Math.min(a, b)), Math.max(a, b))`。

**EXAMPLES：**

```js
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```



## degreesToRads

**FUNCTION：**

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;
```

**CONCEPTS：**

角度转为弧度。

**EXAMPLES：**

```js
degreesToRads(90.0); // ~1.5708
```



## digitize

**FUNCTION：**

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

**CONCEPTS：**

数字转为数组。

**EXAMPLES：**

```js
digitize(123); // [1, 2, 3]
```



## distance

**FUNCTION：**

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

**CONCEPTS：**

勾股定理。

**EXAMPLES：**

```js
distance(1, 1, 2, 3); // 2.23606797749979
distance(0, 0, 4, 3); // 5
```



## elo

**FUNCTION：**

```js
const elo = ([...ratings], kFactor = 32, selfRating) => {
  const [a, b] = ratings;
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }
  return ratings;
};
```

**CONCEPTS：**

[等级分](https://en.wikipedia.org/wiki/Elo_rating_system) 的实现。

**EXAMPLES：**

```js
// Standard 1v1s
elo([1200, 1200]); // [1216, 1184]
elo([1200, 1200], 64); // [1232, 1168]
// 4 player FFA, all same rank
elo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]
/*
For teams, each rating can adjusted based on own team's average rating vs.
average rating of opposing team, with the score being added to their
own individual rating by supplying it as the third argument.
*/
```



## factorial

**FUNCTION：**

```js
const factorial = n =>
  n < 0
    ? (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })()
    : n <= 1
      ? 1
      : n * factorial(n - 1);
```

**CONCEPTS：**

阶乘。三元运算符替代多次判断。

**EXAMPLES：**

```js
factorial(6); // 720
```



## factorial

**FUNCTION：**

```js
const factorial = n =>
  n < 0
    ? (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })()
    : n <= 1
      ? 1
      : n * factorial(n - 1);
```

**CONCEPTS：**

阶乘。三元运算符替代多次判断，非整数会进入 `n < 0`。

**EXAMPLES：**

```js
factorial(6); // 720
```



## fibonacci

**FUNCTION：**

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

**CONCEPTS：**

斐波那契数列。

**EXAMPLES：**

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```



## gcd

**FUNCTION：**

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

**CONCEPTS：**

计算最大公约数。`!0` 和 `%` 配合的很好。

**EXAMPLES：**

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```