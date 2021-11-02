---
autoSort: -326
---

# 3 的幂

## 除法

由于是幂，所以总是除的清的。

``` ts
function isPowerOfThree(n: number): boolean {
  // 首先排除小于等于 0 的数
  if (n <= 0) return false
  const RANGE_MAX = 1162261467

  return RANGE_MAX / n === Math.floor(RANGE_MAX / n)
}
```
