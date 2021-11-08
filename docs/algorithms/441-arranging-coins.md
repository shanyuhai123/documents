---
autoSort: -441
---

# 排列硬币

## 一元二次方程求解

``` ts
function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
}
```
