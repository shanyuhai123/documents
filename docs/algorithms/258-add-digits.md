---
autoSort: -258
---

# 各位相加

要求常数时间复杂度，那么只能考虑数学方法了。

## 取模

``` ts
function addDigits(num: number): number {
  // 个位数直接返回
  if (num < 10) {
    return num
  }

  // 10 -> 1, 11 -> 2, 18 -> 9
  return num % 9 === 0 ? 9 : num % 9
}
```
