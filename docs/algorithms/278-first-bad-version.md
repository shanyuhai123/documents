---
autoSort: -278
---

# 第一个错误的版本

## 二分法

``` ts
const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0, right = n

    while (left < right) {
      // left + right >> 1 越界了，干
      const mid = Math.floor(left + (right - left) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}
```
