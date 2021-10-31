---
autoSort: -268
---

# 丢失的数字

排序解法掠过。

## 和

``` ts
function missingNumber(nums: number[]): number {
  const len = nums.length
  const expect = len * (len + 1) / 2

  return expect - nums.reduce((acc, cur) => acc + cur, 0)
}
```

## 位运算

``` ts
function missingNumber(nums: number[]): number {
  let missing = nums.length

  for (let i = 0; i < nums.length; i++) {
    missing ^= nums[i] ^ i
  }

  return missing
}
```
