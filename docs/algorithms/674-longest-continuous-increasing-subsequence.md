---
autoSort: -674
---

# 最长连续递增序列

## 循环

```ts
function findLengthOfLCIS(nums: number[]): number {
  let max = 0, start = 0
  for (let i = 0; i < nums.length; i++) {
    // 重置起点
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i
    }
    max = Math.max(max, i - start + 1)
  }

  return max
}
```
