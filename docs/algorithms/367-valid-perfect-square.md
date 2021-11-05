---
autoSort: -367
---

# 有效的完全平方数

## 二分查找

``` ts
function isPerfectSquare(num: number): boolean {
  let left = 0, right = num
  while (left <= right) {
    const mid = left + right >> 1
    const square = mid * mid
    if (square > num) {
      right = mid - 1
    } else if (square < num) {
      left = mid + 1
    } else {
      return true
    }
  }

  return false
}
```
