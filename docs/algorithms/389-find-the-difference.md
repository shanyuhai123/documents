---
autoSort: -389
---

# 找不同

## 求和

由于只添加了一个字符，所以可以计算。

``` ts
function findTheDifference(s: string, t: string): string {
  const calcNum = (s: string) => Array.from(s).reduce((total, cur) => total + cur.charCodeAt(0), 0)

  return String.fromCharCode(calcNum(t) - calcNum(s))
}
```

## 位运算

参考[只出现一次的数字](./136-single-number)。

``` ts
function findTheDifference(s: string, t: string): string {
  let single = 0
  
  for (let i = 0; i < s.length; i++) {
    single ^= s[i].charCodeAt(0)
  }
  for (let i = 0; i < t.length; i++) {
    single ^= t[i].charCodeAt(0)
  }

  return String.fromCharCode(single)
}
```
