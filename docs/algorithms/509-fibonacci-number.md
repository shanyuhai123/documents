---
autoSort: -509
---

# 斐波那契数

## 递归

```ts
function fib(n: number): number {
  // 记忆已计算的值
  const s = new Map<number, number>()

  const rec = (n: number): number => {
    if (n === 0 || n === 1) return n
    if (s.get(n)) {
      return s.get(n)
    }

    const ret = rec(n - 2) + rec(n - 1)
    s.set(n, ret)
    return ret
  }

  return rec(n)
}
```

## 动态规划

动态规划入门题。

``` ts
function fib(n: number): number {
  if (n < 2) return n

  // 优化空间复杂度
  let prev = 0, cur = 1
  for (let i = 2; i <= n; i++) {
    let sum = prev + cur
    prev = cur
    cur = sum
  }

  return cur
}
```
