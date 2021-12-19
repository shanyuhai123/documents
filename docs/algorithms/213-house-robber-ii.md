---
autoSort: -213
---

# 打家劫舍 II

该题在[打家劫舍](./198-house-robber)的基础上增加了限制条件，首尾二选一。

## 动态规划

```ts
function rob(nums: number[]): number {
  if (nums.length <= 2) return Math.max(...nums)

  const robRange = (nums: number[], start: number, end: number): number => {
    // 初始化状态
    let p = nums[start], q = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
      // 状态转移
      const max = Math.max(q, p + nums[i])
      p = q
      q = max
    }

    return q
  }

  return Math.max(
    robRange(nums, 0, nums.length - 2), // 首
    robRange(nums, 1, nums.length - 1) // 尾
  )
}
```
