---
autoSort: -70
---

# 爬楼梯

## 动态规划

最后一步可能是跨了一级台阶，也肯能是两级，所以可以得到：

$f(x) = f(x - 1) + f(x -2)$

而最简单的 `f(1) = 1`，`f(2) = 2`。

``` ts
// 缓存数据，否则容易超时
const map = new Map()

function climbStairs(n: number): number {
  if (n < 1) return 1
  if (n === 1) return 1
  if (n === 2) return 2

  if (map.has(n)) {
    return map.get(n)
  }

  const value = climbStairs(n - 2) + climbStairs(n - 1)
  map.set(n, value)
  return value
}
```

## 滚动数组

想对于动态规划，空间复杂度为 `O(1)`：

``` ts
function climbStairs(n: number): number {
  let p = 0, q = 0, r = 1
  for (let i = 3; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }

  return r
}
```
