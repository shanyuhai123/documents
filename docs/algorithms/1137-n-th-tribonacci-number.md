---
autoSort: -1137
---

# 第 N 个泰波那契数

相对于[斐波那契数](./509-fibonacci-number)仅多了一个变量。

## 动态规划

```ts
function tribonacci(n: number): number {
  if (n < 2) return n
  if (n === 2) return 1

  let p = 0, q = 1, r = 1
  for (let i = 3; i <= n; i++) {
    const sum = p + q + r
    p = q
    q = r
    r = sum
  }

  return r
}
```
