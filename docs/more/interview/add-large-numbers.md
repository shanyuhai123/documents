---
title: 大数相加
---

JavaScript 采用了 IEEE 754 标准中的浮点算法来表示数字 Number

此处附图

![JavaScript Number](/base/interview/javascript-value-range.png)

## 大数相加示例

### 1. 示例 1

```javascript
// 数字太大会被转为科学计数法
const num1 = 10000000000000000000000000 + 11111111111111111111111111;
const num2 = 21111111111111111111111000;
console.log(num1 === num2); // true
```

### 2. 示例 2

在上图中可以看到区间为 `Math.pow(2, 53)`, 那就以此作为测试

```javascript
const num1 = Math.pow(2, 52);
console.log(num1 === num1 + 1); // false
const num2 = Math.pow(2, 53);
console.log(num2 === num2 + 1); // true
// 继续增大数字
const num3 = Math.pow(2, 54);
console.log(num3 === num3 + 1); // true
const num4 = Math.pow(2, 54);
console.log(num4 === num4 + 2); // true
const num5 = Math.pow(2, 54);
console.log(num5 === num5 + 3); // false
// 再往后的就自行测试吧
```



## 解决大数相加的问题

### 1. 将数字转化为字符串

关于 `~~` 的 [作用](https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript/5971668)

```javascript
const add = (a, b) => {
  let result = '';
  let temp = 0;
  a = a.toString().split('');
  b = b.toString().split('');
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    result = temp % 10 + result;
    temp = temp > 9;
  }
  // 使用正则消除开头的 0
  return result.replace(/^0+/, '');
}

console.log(add(10000000000000000000000000, 11111111111111111111111111) === 21111111111111111111111000); // false
```

### 2. 直接使用 [bigNumber.js](https://github.com/MikeMcl/bignumber.js/) 库



## 参考资料

 [js实现大数相加](http://www.plqblog.com/views/article.php?id=29)



