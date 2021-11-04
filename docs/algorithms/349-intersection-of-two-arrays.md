---
autoSort: -349
---

# 两个数组的交集

## 哈希表

``` ts
function intersection(nums1: number[], nums2: number[]): number[] {
  const s = new Set(nums1)
  return [...new Set(nums2)].filter(n => s.has(n))
}
```
