---
autoSort: -55
---

# 跳跃游戏

## 贪心

每次追求跳得最远。

```ts
function canJump(nums: number[]): boolean {
  const len = nums.length
  let k = 0

  for (let i = 0; i < len; i++) {
    if (i > k) return false
    k = Math.max(k, i + nums[i])
  }

  return true
}
```
