---
autoSort: -409
---

# 最长回文串

## 奇数计数

``` ts
function longestPalindrome(s: string): number {
  const m = new Map()
  let count = 0

  for (let i = 0; i < s.length; i++) {
    const mc = m.get(s[i])

    m.set(s[i], (mc || 0) + 1)
    if ((mc || 0) % 2 === 0) {
      count++
    } else {
      count--
    }
  }

  return s.length - (count === 0 ? 0 : count - 1)
}
```
