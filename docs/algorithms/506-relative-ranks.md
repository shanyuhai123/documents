---
autoSort: -506
---

# 相对名次

中文站实属是坑，只给了一个误导性的例子。

## 排序

哈希表暂存数据。

> Runtime: 88 ms, faster than 96.30% of TypeScript online submissions for Relative Ranks.

``` ts
function findRelativeRanks(score: number[]): string[] {
  const m = new Map<number, string>()
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  ;[...score].sort((a, b) => b - a).forEach((s, i) => {
    if (i < 3) {
      m.set(s, medals[i])
    } else {
      m.set(s, `${i + 1}`)
    }
  })

  return score.map(s => m.get(s)!)
}
```
