---
autoSort: -557
---

# 反转字符串中的单词 III

需要先确认单词位置。

## 遍历

```ts
function reverseWords(s: string): string {
  const ret: string[] = []

  for (let i = 0; i < s.length; i++) {
    let str = ''
    let j = i

    while(j < s.length && s[j] !== ' ') {
      str = s[j] + str
      j++
    }

    ret.push(str)
    i = j
  }

  return ret.join(' ')
}
```
