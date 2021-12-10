---
autoSort: -771
---

# 宝石与石头

## 哈希表

```ts
function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0

  const s = new Set(Array.from(jewels))
  for (let i = 0; i < stones.length; i++) {
    if (s.has(stones[i])) {
      count++
    }
  }

  return count
}
```
