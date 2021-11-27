---
autoSort: -598
---

# 范围求和

## 交集

由于总是从 `(0, 0)` 开始，所以判断会简单一些。

```ts
function maxCount(m: number, n: number, ops: number[][]): number {
  let x = m, y = n
  for (const op of ops) {
    x = Math.min(x, op[0])
    y = Math.min(y, op[1])
  }

  return x * y
}
```
