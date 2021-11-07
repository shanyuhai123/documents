---
autoSort: -392
---

# 判断子序列

## 双指针

原始字符串每轮都会增加，子序列一致时才增加。

``` ts
function isSubsequence(s: string, t: string): boolean {
  let sp = 0, tp = 0
  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++
    }
    tp++
  }

  return sp === s.length
}
```
