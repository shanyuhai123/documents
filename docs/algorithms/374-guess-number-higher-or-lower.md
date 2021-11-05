---
autoSort: -374
---

# 猜数字大小

## 二分查找

``` ts
function guessNumber(n: number): number {
  let left = 0, right = n
  while (left < right) {
    const mid = left + right >> 1
    if (guess(mid) <= 0) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
```
