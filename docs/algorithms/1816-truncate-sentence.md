---
autoSort: -1816
---

# 截断句子

## 遍历

```ts
function truncateSentence(s: string, k: number): string {
  let i = 0
  for (i = 0; i < s.length && k > 0; i++) {
    if (s[i] === ' ') {
      k--
    }
    if (k === 0) break
  }

  return s.substring(0, i)
}
```
