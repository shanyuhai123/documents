---
autoSort: -231
---

# 2 的幂

题目不让用递归和循环。

## 二进制

都提到 2 的幂了，也很快联想到二进制、位运算，不过依然需避开循环。

``` ts
function isPowerOfTwo(n: number): boolean {
  // 100 & 011 => 0
  // 以此类推
  return n > 0 && (n & n - 1) === 0
}
```

## 约数

根本没想到的方法。

``` ts
function isPowerOfTwo(n: number): boolean {
  const BIG = 1 << 30
  return n > 0 && BIG % n === 0
}
```
