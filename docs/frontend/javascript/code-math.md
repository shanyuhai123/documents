---
title: 30s code math
---

> [30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)
>
> 想要啃下这一部分，要先熟悉 [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象的内置方法。



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



## geometricProgression

**FUNCTION：**

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
```

**CONCEPTS：**

等比数列。

**EXAMPLES：**

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```



## hammingDistance

**FUNCTION：**

```js
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
```

**CONCEPTS：**

汉明距离。其中 `^` 按位异或操作。

**EXAMPLES：**

```js
// 2 => 10, 3 => 11 XOR 01 => 1
hammingDistance(2, 3); // 1
```



## inRange

**FUNCTION：**

```js
const inRange = (n, start, end = null) => {
  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};
```

**CONCEPTS：**

判断是否在范围内。

**EXAMPLES：**

```js
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false
```



## isDivisible

**FUNCTION：**

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

**CONCEPTS：**

是否可被整除。

**EXAMPLES：**

```js
isDivisible(6, 3); // true
```



## isEven/isOdd

**FUNCTION：**

```js
const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 === 1;
```

**CONCEPTS：**

判断奇偶。

**EXAMPLES：**

```js
isEven(3); // false
isOdd(3); // true
```



## isNegativeZero

**FUNCTION：**

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

**CONCEPTS：**

判断是否为 `-0`。

**EXAMPLES：**

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```



## isPrime

**FUNCTION：**

```js
const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};
```

**CONCEPTS：**

是否为质数。最后的 num 很细节，减少一个判断。

**EXAMPLES：**

```js
isPrime(11); // true
```



## lcm

**FUNCTION：**

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

**CONCEPTS：**

最小公倍数。

**EXAMPLES：**

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```



## luhnCheck

**FUNCTION：**

```js
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
```

**CONCEPTS：**

[Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)。

**EXAMPLES：**

```js
luhnCheck('4485275742308327'); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false
```



## mapNumRange

**FUNCTION：**

```js
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
```

**CONCEPTS：**

尚未理解使用场景。

**EXAMPLES：**

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```



## maxBy/minBy

**FUNCTION：**

```js
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

**CONCEPTS：**

返回某条件下最大值、最小值。

**EXAMPLES：**

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2
```



## median

**FUNCTION：**

```js
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
```

**CONCEPTS：**

中位数。

**EXAMPLES：**

```js
median([5, 6, 50, 1, -5]); // 5
```



## percentile

**FUNCTION：**

```js
const percentile = (arr, val) =>
  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;
```

**CONCEPTS：**

百分比。

**EXAMPLES：**

```js
percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
```