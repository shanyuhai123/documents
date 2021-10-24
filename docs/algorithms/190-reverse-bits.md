---
autoSort: -190
---

# 颠倒二进制位

抄。

## 逐位颠倒

``` ts
function reverseBits(n: number): number {
  let rev = 0

  for (let i = 0; i < 32 && n > 0; i++) {
    // n & 1 计算得到首位
    // 二进制位与 => 按位左移 => 二进制位或
    rev |= (n & 1) << (31 - i)
    n >>>= 1 // 原数据无符号按位右移
  }

  return rev >>> 0
}
```
