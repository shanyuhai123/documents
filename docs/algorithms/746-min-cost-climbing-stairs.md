---
autoSort: -746
---

# 使用最小花费爬楼梯

注意提示：下标至少为 2。

## 动态规划

```ts
function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length

  // 初始化状态
  let p = 0, q = 0
  for (let i = 2; i <= n; i++) {
    // 状态转移
    const min = Math.min(cost[i - 1] + q, cost[i - 2] + p)
    p = q
    q = min
  }

  return q
}
```
