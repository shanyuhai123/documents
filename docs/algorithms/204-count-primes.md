---
autoSort: -204
---

# 计数质数

## 暴力

```ts
const isPrime = (num: number): boolean => {
  const boundary = Math.floor(Math.sqrt(num))
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false
  return num >= 2
}

function countPrimes(n: number): number {
  let ret = 0
  for (let i = 2; i < n; i++) {
    ret += +isPrime(i)
  }

  return ret
}
```
