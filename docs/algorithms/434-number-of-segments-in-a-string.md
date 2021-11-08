---
autoSort: -434
---

# 字符串中的单词数

## 遍历

``` ts
function countSegments(s: string): number {
  let count = 0, last = ' '

  for (let ch of s) {
    if (ch === ' ' && last !== ' ') {
      count++
    }
    last = ch
  }

  return last === ' ' ? count : count + 1
}
```
