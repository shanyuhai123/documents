---
autoSort: -387
---

# 字符串中的第一个唯一字符

## 队列

队列的先进先出．

``` ts
function firstUniqChar(s: string): number {
  const pos = new Map<string, number>()
  const queue: [string, number][] = []

  for (const [i, ch] of Array.from(s).entries()) {
    if (!pos.has(ch)) {
      pos.set(ch, i)
      queue.push([ch, i])
    } else {
      pos.set(ch, -1)
      while (queue.length && pos.get(queue[0][0]) === -1) {
        queue.shift()
      }
    }
  }

  return queue.length ? queue[0][1] : -1
}
```
