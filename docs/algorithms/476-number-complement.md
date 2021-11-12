---
autoSort: -476
---

# 数字的补数

## 位运算

先求出最高位。

``` ts
function findComplement(num: number): number {
  let highbit = 0
  for (let i = 1; i < 31; i++) {
    if (num >= (1 << i)) {
      highbit++
    } else {
      break
    }
  }

  const mask = highbit == 30 ? 0x7fffffff : (1 << (highbit + 1)) - 1;
  return num ^ mask;
}
```
