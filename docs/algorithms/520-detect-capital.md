---
autoSort: -520
---

# 检测大写字母

## 正则

正则匹配三种情况。

``` ts
function detectCapitalUse(word: string): boolean {
  return !!word.match(/^[A-Z]+$|^[A-Z][a-z]*$|^[a-z]+$/)
}
```
