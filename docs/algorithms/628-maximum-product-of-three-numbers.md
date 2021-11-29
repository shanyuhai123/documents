---
autoSort: -628
---

# 三个数的最大乘积

需要注意负数的处理。

## 排序

```ts
function maximumProduct(nums: number[]): number {
  const len = nums.length
  nums.sort((a, b) => b - a)

  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[len - 1] * nums[len - 2])
}
```
