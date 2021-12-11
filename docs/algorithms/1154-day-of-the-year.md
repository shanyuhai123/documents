---
autoSort: -1154
---

# 一年中的第几天

## getTime

获得差值。

```ts
function dayOfYear(date: string): number {
  const handleDate = new Date(date)

  return Math.floor((handleDate.getTime() - new Date(handleDate.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24)
}
```
