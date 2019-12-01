---
title: 30s code archived
---

> [30 seconds of code (Archived)](https://www.30secondsofcode.org/tag/archived)



## binarySearch

**FUNCTION：**

```js
const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, end);
  return mid;
};
```

**CONCEPTS：**

二分查找。

**EXAMPLES：**

```js
binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 6); // 2
binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 21); // -1
```



## celsiusToFahrenheit/fahrenheitToCelsius

**FUNCTION：**

```js
const celsiusToFahrenheit = degrees => 1.8 * degrees + 32;
const fahrenheitToCelsius = degrees => (degrees - 32) * 5/9;
```

**CONCEPTS：**

摄氏度、华氏度转换。

**EXAMPLES：**

```js
celsiusToFahrenheit(33) // 91.4
fahrenheitToCelsius(32); // 0
```



## cleanObj

**FUNCTION：**

```js
const cleanObj = (obj, keysToKeep = [], childIndicator) => {
  Object.keys(obj).forEach(key => {
    if (key === childIndicator) {
      cleanObj(obj[key], keysToKeep, childIndicator);
    } else if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  });
  return obj;
};
```

**CONCEPTS：**

保留对象的属性。

**EXAMPLES：**

```js
const testObj = { a: 1, b: 2, children: { a: 1, b: 2 } };
cleanObj(testObj, ['a'], 'children'); // { a: 1, children : { a: 1}}
```



## countVowels

**FUNCTION：**

```js
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
```

**CONCEPTS：**

计算字符串中的元音数量。

**EXAMPLES：**

```js
countVowels('foobar'); // 3
countVowels('gym'); // 0
```



## factors

**FUNCTION：**

```js
const factors = (num, primes = false) => {
  const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return num >= 2;
  };
  const isNeg = num < 0;
  num = isNeg ? -num : num;
  let array = Array.from({ length: num - 1 })
    .map((val, i) => (num % (i + 2) === 0 ? i + 2 : false))
    .filter(val => val);
  if (isNeg)
    array = array.reduce((acc, val) => {
      acc.push(val);
      acc.push(-val);
      return acc;
    }, []);
  return primes ? array.filter(isPrime) : array;
};
```

**CONCEPTS：**

返回数字的因数。至于过滤非质数更倾向于使用高阶函数来过滤。

**EXAMPLES：**

```js
factors(12); // [2,3,4,6,12]
factors(12, true); // [2,3]
factors(-12); // [2, -2, 3, -3, 4, -4, 6, -6, 12, -12]
factors(-12, true); // [2,3]
```



## fibonacciCountUntilNum/fibonacciUntilNum

**FUNCTION：**

```js
const fibonacciCountUntilNum = num =>
  Math.ceil(Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2));
const fibonacciUntilNum = num => {
  let n = Math.ceil(Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2));
  return Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
};
```

**CONCEPTS：**

斐波那契数列。

**EXAMPLES：**

```js
fibonacciCountUntilNum(10); // 7
fibonacciUntilNum(10); // [ 0, 1, 1, 2, 3, 5, 8 ]
```



## heronArea

**FUNCTION：**

```js
const heronArea = (side_a, side_b, side_c) => {
    const p = (side_a + side_b + side_c) / 2
    return Math.sqrt(p * (p-side_a) * (p-side_b) * (p-side_c))
  };
```

**CONCEPTS：**

三角形面积。少了两边之和大于第三边（有效三角形）的异常处理。

**EXAMPLES：**

```js
heronArea(3, 4, 5); // 6
```



## howManyTimes

**FUNCTION：**

```js
const howManyTimes = (num, divisor) => {
  if (divisor === 1 || divisor === -1) return Infinity;
  if (divisor === 0) return 0;
  let i = 0;
  while (Number.isInteger(num / divisor)) {
    i++;
    num = num / divisor;
  }
  return i;
};
```

**CONCEPTS：**

划分为整数的次数。

**EXAMPLES：**

```js
howManyTimes(100, 2); // 2
howManyTimes(100, 2.5); // 2
howManyTimes(100, 0); // 0
howManyTimes(100, -1); // Infinity
```



## quickSort

**FUNCTION：**

```js
const quickSort = ([n, ...nums], desc) =>
  isNaN(n)
    ? []
    : [
        ...quickSort(nums.filter(v => (desc ? v > n : v <= n)), desc),
        n,
        ...quickSort(nums.filter(v => (!desc ? v > n : v <= n)), desc)
      ];
```

**CONCEPTS：**

快速排序。

**EXAMPLES：**

```js
quickSort([4, 1, 3, 2]); // [1,2,3,4]
quickSort([4, 1, 3, 2], true); // [4,3,2,1]
```



## speechSynthesis

**FUNCTION：**

```js
const speechSynthesis = message => {
  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};
```

**CONCEPTS：**

语音。

**EXAMPLES：**

```js
speechSynthesis('Hello, World'); // // plays the message
```