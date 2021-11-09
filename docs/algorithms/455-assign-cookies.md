---
autoSort: -455
---

# 分发饼干

抽象理解为求交集。

## 排序

``` ts
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let count = 0

  let j = 0
  for (let i = 0; i < g.length; i++) {
    while(g[i] > s[j]) {
      j++
    }
    if (g[i] <= s[j]) {
      j++
      count++
    }
  }

  return count
}
```
