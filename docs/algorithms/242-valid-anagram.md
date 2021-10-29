---
autoSort: -242
---

# 有效的字母异位词

第一思路是哈希表，前者遍历计数增加，后者遍历减少，若得负值则返回 `false`。

## 排序

``` ts
function isAnagram(s: string, t: string): boolean {
  return s.length === t.length && Array.from(s).sort().join("") === Array.from(t).sort().join("")
}
```
