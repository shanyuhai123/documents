---
autoSort: -747
---

# 至少是其他数字两倍的最大数

参考[第三大的数](./414-third-maximum-number)。

## 遍历

```ts
function dominantIndex(nums: number[]): number {
  let max = -Infinity, mi = -1
  let next = -Infinity
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num > max) {
      next = max
      max = num
      mi = i
    } else if (num < max && num > next) {
      next = num
    }
  }


  return next === -Infinity
    ? mi
    : max >= next * 2
      ? mi
      : -1
}
```
