---
autoSort: -383
---

# 赎金信

## 哈希表

``` ts
function canConstruct(ransomNote: string, magazine: string): boolean {
  const m = new Map<string, number>()
  for (let i = 0; i < magazine.length; i++) {
    m.set(magazine[i], (m.get(magazine[i]) || 0) + 1)
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let count = m.get(ransomNote[i])
    if (!count || count === 0) {
      return false
    } else {
      m.set(ransomNote[i], count - 1)
    }
  }

  return true
}
```
