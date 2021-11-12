---
autoSort: -482
---

# 密钥格式化

## 遍历

``` ts
function licenseKeyFormatting(s: string, k: number): string {
  const ret: string[] = []
  let count = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const cur = s[i]
    if (cur !== '-') {
      count++
      ret.push(cur.toUpperCase())
      if (count % k === 0 && i !== 0) {
        ret.push('-')
      }
    }
  }

  if (ret.length && ret[ret.length - 1] === '-') {
    ret.pop()
  }

  return ret.reverse().join('')
}
```
