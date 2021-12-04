---
autoSort: -693
---

# 交替位二进制数

## 字符串

转为字符串后循环。

```ts
function hasAlternatingBits(n: number): boolean {
  const str = n.toString(2)
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false
    }
  }
  return true
}
```

## 位运算

每次与 1 做与运算，然后右移一位。

```ts
function hasAlternatingBits(n: number): boolean {
  let temp = -1
  while (n) {
    if ((n & 1) === temp) {
      return false
    }
    temp = n & 1
    n >>= 1
  }
  return true
}
```
