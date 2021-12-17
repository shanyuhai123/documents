---
autoSort: -198
---

# 打家劫舍

根据规律写出伪代码：

```js
S1 = H1
S2 = max(S1, H2)
S3 = max(S2, S1 + H3)
S4 = max(S3, S2 + H4)
```

## 动态规划

```ts
function rob(nums: number[]): number {
  // 初始化状态
  let p = nums[0]
  let q = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    // 状态转移
    const max = Math.max(q, p + nums[i])
    p = q
    q = max
  }

  return q || p
}
```
