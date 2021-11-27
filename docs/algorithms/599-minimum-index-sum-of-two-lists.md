---
autoSort: -599
---

# 两个列表的最小索引总和

## 哈希表

找相同且不重复，很容易联想到哈希表。

```ts
function findRestaurant(list1: string[], list2: string[]): string[] {
  let strs: string[] = [], min = Infinity
  const m = new Map<string, number>()

  list1.forEach((l, i) => m.set(l, i))
  list2.forEach((l, i) => {
    const mi = m.get(l)
    if (mi !== undefined) {
      const index = i + mi
      if (index === min) {
        strs.push(l)
      } else if (index < min) {
        min = index
        strs = [l]
      }
    }
  })

  return strs
}
```
