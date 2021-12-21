---
autoSort: -38
---

# 外观数列

## 递归

```ts
function countAndSay(n: number): string {
  if (n === 1) return '1'

  let str = countAndSay(n - 1)
  let ret = ''
  let count = 0, prev = ''
  for (const s of str) {
    if (s === prev) {
      count++
    } else {
      if (count) {
        ret += `${count}${prev}`
      }

      count = 1
      prev = s
    }
  }
  // 追加数据
  ret += `${count}${prev}`

  return ret
}
```
