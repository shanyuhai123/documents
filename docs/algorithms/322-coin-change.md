---
autoSort: -322
---

# 零钱兑换

注意条件：每种硬币的数量是无限的。

## 递归

```ts
function coinChange(coins: number[], amount: number): number {
  const m = new Map<number, number>()

  const rec = (coins: number[], amount: number): number => {
    if (amount === 0) return 0
    if (amount < 0) return -1

    if (m.get(amount)) {
      return m.get(amount)
    }

    let ret = Infinity
    for (const coin of coins) {
      const sub = rec(coins, amount - coin)
      if (sub === -1) continue
      ret = Math.min(ret, sub + 1)
    }

    m.set(amount, ret === Infinity ? -1 : ret)
    return m.get(amount)!
  }

  return rec(coins, amount)  
}
```

## 动态规划

```ts
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0
  const max = amount + 1 // 最大值
  const dp = Array(max).fill(max)

  // 初始状态
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
      // 状态转移
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}
```
