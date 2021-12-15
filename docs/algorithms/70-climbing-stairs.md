---
autoSort: -70
---

# 爬楼梯

## 递归

最后一步可能是跨了一级台阶，也肯能是两级，所以可以得到: `$f(x) = f(x - 1) + f(x -2)$` 公式。

再配合基础的 `f(1) = 1`，`f(2) = 2`。

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

## 动态规划

``` ts
function climbStairs(n: number): number {
  if (n <= 2) return n

  // 初始化状态
  let p = 1, q = 2
  for (let i = 3; i <= n; i++) {
    // 状态转移
    const sum = p + q
    p = q
    q = sum
  }

  return q
}
```
