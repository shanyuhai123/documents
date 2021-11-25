---
autoSort: -575
---

# 分糖果

## 去重

```ts
function distributeCandies(candyType: number[]): number {
  return Math.min(new Set(candyType).size, candyType.length / 2)
}
```
