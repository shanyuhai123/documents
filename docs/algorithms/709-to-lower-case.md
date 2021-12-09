---
autoSort: -709
---

# 转换成小写字母

忽略 `toLowerCase()` 内置方法。

## ASCII编码

```ts
function toLowerCase(s: string): string {
  let ret = ''
  const abs = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
  const min = 'A'.charCodeAt(0), max = 'Z'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i)
    if (c >= min && c <= max) {
      ret += String.fromCharCode(c + abs)
    } else {
      ret += s[i]
    }
  }

  return ret
}
```
