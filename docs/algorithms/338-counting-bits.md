---
autoSort: -338
---

# 比特位计数

## 按位与

``` ts
function countBits(n: number): number[] {
  const bits = Array(n + 1).fill(0)

  const countOnes = (x: number): number => {
    let counts = 0
    while (x > 0) {
      x &= x - 1
      counts++
    }

    return counts
  }

  for (let i = 1; i <= n; i++) {
    bits[i] = countOnes(i)
  }

  return bits
}
```

## 奇偶数

奇数：二进制中，奇数一定比前面的偶数多一个 1。
偶数：二进制中，偶数最低位是 0,向右位移一位，1 个数不变。

``` ts
function countBits(n: number): number[] {
  const bits = Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      bits[i] = bits[i - 1] + 1
    } else {
      bits[i] = bits[i >> 1]
    }
  }

  return bits
}
```
