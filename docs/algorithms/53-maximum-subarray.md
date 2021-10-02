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
