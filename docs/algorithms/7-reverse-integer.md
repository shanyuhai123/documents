---
autoSort: -7
---

# 整数反转

## 字符串

直接的处理：

```ts
function reverse (x: number): number {
  let value = parseInt(x.toString().split('').reverse().join(''))
  if (x < 0) {
    value = -value
  }

  return value > Math.pow(2, 31) - 1 || value < Math.pow(-2, 31) ? 0 : value
}
```

## 数学计算

```ts
function reverse (x: number): number {
  let res = 0

  while(x) {
    const last = x % 10
    res = res * 10 + last

    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
      return 0
    }

    x = ~~(x / 10)
  }

  return res
}
```
