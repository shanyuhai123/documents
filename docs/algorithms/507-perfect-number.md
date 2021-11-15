---
autoSort: -507
---

# 完美数

## 暴力

``` ts
function checkPerfectNumber(num: number): boolean {
  if (num === 1) return false
  let ret = 1

  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      ret += i + num / i
    }
  }

  return ret === num
}
```
