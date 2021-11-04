---
autoSort: -344
---

# 反转字符串

## 双指针

``` ts
const swap = <T extends unknown>(arr: T[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]]

function reverseString(s: string[]): void {
  let left = 0, right = s.length - 1

  while (left < right) {
    swap(s, left, right)
    left++
    right--
  }
}
```
