---
autoSort: -58
---

# 最后一个单词的长度

## 反向遍历

移除掉空格。

``` ts
function lengthOfLastWord(s: string): number {
  let index = s.length - 1
  while (s[index] === ' ') {
    index--
  }

  let wordLength = 0
  while (index >= 0 && s[index] !== ' ') {
    wordLength++
    index--
  }
  return wordLength
}
```
