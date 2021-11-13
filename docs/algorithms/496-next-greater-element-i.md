---
autoSort: -496
---

# 下一个更大元素 I

限定条件比较多：无重复元素、子集。
而且需要注意是：下一个是指位置上，而不是大小上。

## 暴力

``` ts
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ret: number[] = Array(nums1.length).fill(0)

  for (let i = 0; i < nums1.length; i++) {
    let j = 0

    // 找到值
    while (j < nums2.length && nums1[i] !== nums2[j]) j++
    // 找到更大的
    while (j < nums2.length && nums1[i] >= nums2[j]) j++

    ret[i] = j < nums2.length ? nums2[j] : -1
  }

  return ret
}
```
