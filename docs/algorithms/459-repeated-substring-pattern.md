---
autoSort: -459
---

# 重复的子字符串

## 暴力

不要说什么 KMP，暴力就完事了。

``` ts
function repeatedSubstringPattern(s: string): boolean {
  for (let i = 1; i <= s.length >> 1; i++) {
    const si = s.substring(0, i)

    if (si.repeat(s.length / i) === s) {
      return true
    }
  }

  return false
}
```
