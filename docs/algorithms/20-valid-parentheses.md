---
autoSort: -20
---

# 有效括号

## 利用栈

左符号入栈，右符号匹配上则出栈。

```ts
const pairs = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
])

function isValid(s: string): boolean {
  const len = s.length
  if (!len) return true
  if (len % 2) return false

  const stack: string[] = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      stack.push(ch)
    } else {
      if (!stack.length || pairs.get(stack.pop() as string) !== ch) {
        return false
      }
    }
  }

  return !stack.length
}
```
