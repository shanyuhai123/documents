---
autoSort: -292
---

# Nim 游戏

## 动态规划

判断条件：

+ 1 - 3 块石头时，可一次拿完，胜利
+ 4 块石头时，无法一次拿完，会剩 1 - 3 块，失败，另一方胜利条件达成
+ 5 块石头时，拿走一块，剩 4 块，另一方失败条件达成
+ 8 块石头时，另一方会剩 4 块，失败条件达成

``` ts
function canWinNim(n: number): boolean {
  // 优化了空间却还是超时了，所以可确定不能用循环
  // 边界
  const dp = Array(4).fill(true)

  for (let i = 4; i <= n; i++) {
    // 状态转移
    dp[i % 4] = !(dp[(i - 1) % 4] && dp[(i - 2) % 4] && dp[(i - 3) % 4])
  }

  return dp[n % 4]
}
```

## 数学

在上式中增加 `log`，会发现 `dp` 一直是 `[false, true, true, true]`。

``` ts
function canWinNim(n: number): boolean {
  return n % 4 !== 0
}
```
