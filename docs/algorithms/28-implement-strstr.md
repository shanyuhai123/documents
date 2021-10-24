---
autoSort: -28
---

# 实现 strStr

## 截取对比

```ts
function strStr(haystack: string, needle: string): number {
  // tail 实际为 head(0) + needle.length + 1
  let head = 0, tail = needle.length - 1

  while (tail < haystack.length) {
    if (haystack.substr(head, needle.length) === needle) return head
    head++
    tail++
  }

  return -1
}
```
