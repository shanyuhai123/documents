---
autoSort: -191
---

# 位 1 的个数

可从[颠倒二进制位](./190-reverse-bits)中吸取步骤。

## 循环

``` ts
function hammingWeight(n: number): number {
  let ret = 0

  for (let i = 0; i < 32; i++) {
    if (n & 1) {
      ret++
    }
    n >>>= 1
  }

  return ret
}
```

## 位运算

从最低位的 1 开始翻转。

``` ts
function hammingWeight(n: number): number {
  let ret = 0

  while (n) {
    n &= n - 1
    ret++
  }

  return ret
}
```
