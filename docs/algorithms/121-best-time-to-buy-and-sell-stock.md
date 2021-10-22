---
autoSort: -121
---

# 买卖股票的最佳时机

将每个元素之间的差值算出来，形成一个数组，这道题就演变成了求[最大子序之和](./53-maximum-subarray)。

## 暴力

双循环求得最大差值，不过超时了。

``` ts
function maxProfit(prices: number[]): number {
  let max = 0

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(prices[j] - prices[i], max)
    }
  }

  return max
}
```

## 单循环

想要最高收益，在历史最低价买入即可。

``` ts
function maxProfit(prices: number[]): number {
  let max = 0
  let min = prices[0]

  for (let i = 0; i < prices.length; i++) {
    max = Math.max(prices[i] - min, max)
    min = Math.min(prices[i], min)
  }

  return max
}
```

## 动态规划

相对于最大子序和，该题需要两种状态才可以确认收益：`0` 表示未持有股票，`1` 表示持有股票。
`dp[0][0]` 表示第 0 天持有股票，所以第一天 `dp[0][0] = -prices[0]`；`dp[0][1]` 表示第 0 天不持有股票，所以 `dp[0][1] = 0`。

``` ts
function maxProfit(prices: number[]) {
  const len = prices.length
  const dp = Array(len).fill([0, 0])

  // 边界条件
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < len; i++) {
    // 转移公式
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    ]
  }

  return dp[len - 1][1]
}
```
