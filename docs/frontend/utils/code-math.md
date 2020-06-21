---
title: 数学
sidebarDepth: 2
---

## 求和

### 1. sum

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
```

**EXAMPLES：**

```js
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```

### 2. sumPower

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
```

**EXAMPLES：**

```js
sumPower(10); // 385
sumPower(10, 3); // 3025
sumPower(10, 3, 5); // 2925
```

### 3. accumulate

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)],[]);
```

**EXAMPLES：**

```js
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```

### 4. distance（平方和后平方根）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

**EXAMPLES：**

```js
distance(1, 1, 2, 3); // 2.23606797749979
```

### 5. factorial（递归）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

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

**EXAMPLES：**

```js
factorial(6); // 720
```



## 均值

### 1. average

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

**EXAMPLES：**

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

### 2. averageBy（by）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
```

**EXAMPLES：**

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```



## 相等

### 1. approximatelyEqual（约）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
```

**EXAMPLES：**

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```

### 2. isNegativeZero（-0）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

**EXAMPLES：**

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```

### 3. isPowerOfTwo（2的幂）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const isPowerOfTwo = n => !!n && (n & (n - 1)) == 0;
```

**EXAMPLES：**

```js
isPowerOfTwo(0); // false
isPowerOfTwo(1); // true
isPowerOfTwo(8); // true
```



## 随机

### 1. randomHexColorCode（颜色）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

**EXAMPLES：**

```js
randomHexColorCode(); // "#e34155"
```

### 2. randomIntArrayInRange（区间）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

**EXAMPLES：**

```js
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```



## 区间

### 1. clampNumber（更近）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const clampNumber = (num, [a, b]) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
```

**EXAMPLES：**

```js
clampNumber(2, [3, 5]); // 3
clampNumber(1, [-1, -5]); // -1
```

### 2. geometricProgression（生成）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

初看时有点懵。

**FUNCTION：**

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
```

**EXAMPLES：**

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```

### 3. inRange（判断）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const inRange = (n, start, end = null) => {
  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};
```

**EXAMPLES：**

```js
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false
```

### 4. mapNumRange（区间映射）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
```

**EXAMPLES：**

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```

### 5. toSafeInteger（安全整数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const toSafeInteger = num =>
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
```

**EXAMPLES：**

```js
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
```



## 向量

### 1. vectorAngle（角度）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const vectorAngle = (x, y) => {
  let mX = Math.sqrt(x.reduce((acc, n) => acc + Math.pow(n, 2), 0));
  let mY = Math.sqrt(y.reduce((acc, n) => acc + Math.pow(n, 2), 0));
  return Math.acos(x.reduce((acc, n, i) => acc + n * y[i], 0) / (mX * mY));
};
```

**EXAMPLES：**

```js
vectorAngle([3, 4], [4, 3]); // 0.283794109208328
```

### 2. vectorDistance（距离）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const vectorDistance = (x, y) =>
  Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));
```

**EXAMPLES：**

```js
vectorDistance([10, 0, 5], [20, 0, 10]); // 11.180339887498949
```



## 转换

### 1. celsiusToFahrenheit（°C => °F）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const celsiusToFahrenheit = degrees => 1.8 * degrees + 32;
```

**EXAMPLES：**

```js
celsiusToFahrenheit(33); // 91.4
```

### 2. fahrenheitToCelsius（°F => °C）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const fahrenheitToCelsius = degrees => ((degrees - 32) * 5) / 9;
```

**EXAMPLES：**

```js
fahrenheitToCelsius(32); // 0
```

### 3. degreesToRads（角度 => 弧度）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;
```

**EXAMPLES：**

```js
degreesToRads(90.0); // ~1.5708
```

### 4. radsToDegrees（弧度 => 角度）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
```

**EXAMPLES：**

```js
radsToDegrees(Math.PI / 2); // 90
```

### 5. toCurrency（货币）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
```

**EXAMPLES：**

```js
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```

### 6. toOrdinalSuffix（序数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

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

**EXAMPLES：**

```js
toOrdinalSuffix('123'); // "123rd"
```

### 7. digitize（string => number）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

**EXAMPLES：**

```js
digitize(123); // [1, 2, 3]
```

### 8. sdbm

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};
```

**EXAMPLES：**

```js
sdbm('name'); // -3521204949
```



## Math

### 1. binomialCoefficient（二项式系数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

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

**EXAMPLES：**

```js
binomialCoefficient(8, 2); // 28
```

### 2. elo

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

[等级分](https://en.wikipedia.org/wiki/Elo_rating_system) 的实现。

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

### 3. fibonacci（斐波那契数列）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

**EXAMPLES：**

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```

### 4. gcd（最大公约数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

**EXAMPLES：**

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```

### 5. lcm（最小公倍数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

**EXAMPLES：**

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```

### 6. hammingDistance（汉明距离）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

`^` 按位异或操作。

**FUNCTION：**

```js
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
```

**EXAMPLES：**

```js
hammingDistance(2, 3); // 1
```

### 7. isPrime（质数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};
```

**EXAMPLES：**

```js
isPrime(11); // true
```

### 8. primes（质数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};
```

**EXAMPLES：**

```js
primes(10); // [2,3,5,7]
```

### 9. median（中位数）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
```

**EXAMPLES：**

```js
median([5, 6, 50, 1, -5]); // 5
```

### 10. standardDeviation（标准差）

**FROM**

[30 seconds of code (Math)](https://www.30secondsofcode.org/tag/math)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
```

**EXAMPLES：**

```js
standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)
standardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)
```
