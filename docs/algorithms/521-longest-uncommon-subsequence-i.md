---
autoSort: -521
---

# 最长特殊序列 Ⅰ

脑筋急转弯。

## 长度比较

``` ts
function findLUSlength(a: string, b: string): number {
  if (a === b) return -1

  return Math.max(a.length, b.length)
}
```
