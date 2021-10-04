---
autoSort: -69
---

# 求平方根

## 二分查找

在不允许用原内置数学计算的情况下，可以考虑通过二分法逼近。

``` ts
function mySqrt(x: number): number {
  if (x === 0) return 0

  let start = 0, end = x, ret = -1
  while (start <= end) {
    let mid = start + (end - start >> 1)
    if (mid * mid <= x) {
      ret = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return ret
}
```
