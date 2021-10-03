---
autoSort: -66
---

# 加一

## 进位

要解决进位的问题，且连续进位如 `[9, 9]` 会导致长度变化 `[1, 0, 0]`。

``` ts
function plusOne(digits: number[]): number[] {
  let carry = false
  digits[digits.length - 1]++

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) digits[i]++
    carry = digits[i] > 9
    digits[i] %= 10
  }

  if (carry) digits.unshift(1)
  return digits
}
```
