---
autoSort: -541
---

# 反转字符串 II

## 遍历

``` ts
function reverseStr(s: string, k: number): string {
  const chars = Array.from(s)

  const reverse = <T extends unknown>(arr: T[], left: number, right: number): void => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  for (let i = 0; i < chars.length; i += 2 * k) {
    reverse(chars, i, Math.min(i + k, chars.length) - 1)
  }

  return chars.join('')
}
```
