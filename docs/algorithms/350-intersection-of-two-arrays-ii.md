---
autoSort: -350
---

# 两个数组的交集 II

相对[两个数组的交集](./349-intersection-of-two-arrays)，不能做去重操作。

## 计数

``` ts
function intersect(nums1: number[], nums2: number[]): number[] {
  const ret: number[] = []
  const m = new Map<number, number>()

  nums1.forEach(n => {
    m.set(n, (m.get(n) || 0) + 1)
  })
  nums2.forEach(n => {
    let count = m.get(n)
    if (count) {
      ret.push(n)
      m.set(n, --count)
    }
  })

  return ret
}
```
