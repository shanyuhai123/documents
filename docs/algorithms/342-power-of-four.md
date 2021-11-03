---
autoSort: -342
---

# 4 的幂

可在[2 的幂](./231-power-of-two.md)基础上修改。

## 按位运算

2 的幂会涉及 `10101010101010101010101010101010`，按位运算为 0 即可证明。

``` ts
function isPowerOfFour(n: number): boolean {
  const o2 = parseInt('10'.repeat(16), 2)
  return n > 0 && (n & n - 1) === 0 && (n & o2) === 0
}
```
