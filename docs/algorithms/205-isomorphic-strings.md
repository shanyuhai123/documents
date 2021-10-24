---
autoSort: -205
---

# 同构字符串

## 哈希表

映射不一定相同，需要准备两个哈希表。

``` ts
function isIsomorphic(s: string, t: string): boolean {
  const ms = new Map<string, string>()
  const mt = new Map<string, string>()

  for (let i = 0; i < s.length; i++) {
    const sVal = s[i]
    const tVal = t[i]
    const msVal = ms.get(sVal)
    const mtVal = mt.get(tVal)

    if ((msVal !== tVal && msVal !== undefined) || (mtVal !== sVal && mtVal !== undefined)) {
      return false
    }

    ms.set(sVal, tVal)
    mt.set(tVal, sVal)
  }

  return true
}
```
