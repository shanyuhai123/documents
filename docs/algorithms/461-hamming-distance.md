---
autoSort: -461
---

# 汉明距离

实际就是按位异或运算后，统计 `1` 的个数。

## 一的个数

``` ts
function hammingDistance(x: number, y: number): number {
  let count = 0
  let xor = x ^ y

  while (xor) {
    xor &= xor - 1
    count++
  } 

  return count
}
```
