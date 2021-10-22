---
autoSort: -53
---

# 最大子序和

## 计算值

若前一个元素大于 0，则将其加到当前元素上，最后获取被修改数组的最大值即可。

``` ts
function maxSubArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1] 
    }
  }

  return Math.max(...nums)
}
```

## 动态规划

``` ts
function maxSubArray(nums: number[]): number {
  const dp = Array(nums.length).fill(0)
  
  // 边界
  dp[0] = nums[0]
  let max = dp[0]
  for (let i = 1; i < nums.length; i++) {
    // 转移公式
    dp[i] = Math.max((dp[i - 1] + nums[i]), nums[i])
    max = Math.max(dp[i], max)
  }

  return max
}
```

优化：每次计算时仅需要对比上次结果即可，所以无需维护一个数组。

``` ts
function maxSubArray(nums: number[]): number {
  let cur = nums[0]
  let max = cur

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max((cur + nums[i]), nums[i])
    max = Math.max(cur, max)
  }

  return max
}
```
