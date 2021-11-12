---
autoSort: -485
---

# 最大连续 1 的个数

## 原地增加

``` ts
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[i] = (nums[i - 1] || 0) + nums[i]
    }

    max = Math.max(max, nums[i])
  }

  return max
}
```

## 分割

``` ts
function findMaxConsecutiveOnes(nums: number[]): number {
  return Math.max(...nums.join('').split('0').map(str => str.length))
}
```
