---
autoSort: -263
---

# 丑数

## 数学

从 `5、3、2` 依次处理即可。

``` ts
function isUgly(n: number): boolean {
  if (n <= 0) return false
  const uglyNumArr: number[] = [5, 3, 2]

  for (const u of uglyNumArr) {
    while (n % u === 0) {
      n /= u
    }
  }
  

  return n === 1
}
```
