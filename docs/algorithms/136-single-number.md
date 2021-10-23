---
autoSort: -136
---

# 只出现一次的数字

不看题解想不到常数空间复杂度的答案。

## 位运算

``` ts
function singleNumber(nums: number[]): number {
  // 任何数与 0 作异或运算，仍为其本身
  let single = 0

  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i]
  }

  return single
}
```
