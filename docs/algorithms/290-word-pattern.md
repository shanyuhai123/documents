---
autoSort: -290
---

# 单词规律

## 哈希表

``` ts
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ")
  if (pattern.length !== words.length) return false

  const patternMap = new Map()
  const wordMap = new Map()
  for (let i = 0; i < words.length; i++) {
    const p = pattern[i]
    const w = words[i]
    const pm = patternMap.get(p)
    const wm = wordMap.get(w)

    if ((pm && w !== pm) || (wm && p !== wm)) {
      return false
    }

    patternMap.set(p, w)
    wordMap.set(w, p)
  }

  return true
}
```
