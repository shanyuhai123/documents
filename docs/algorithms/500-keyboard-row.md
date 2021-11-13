---
autoSort: -500
---

# 键盘行

## 遍历

``` ts
function findWords(words: string[]): string[] {
  const ret: string[] = []
  const lines = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ]

  for (const word of words) {
    const line = lines.find(line => line.includes(word[0].toLowerCase()))!

    let flag = true
    for (let i = 1; i < word.length; i++) {
      if (!line.includes(word[i].toLowerCase())) {
        flag = false
        break
      }
    }

    if (flag) {
      ret.push(word)
    }
  }

  return ret
}
```
