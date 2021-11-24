---
autoSort: -561
---

# 数组拆分

## 排序

取较小的一位。

```ts
function arrayPairSum(nums: number[]): number {
  return nums.sort((a, b) => a - b).reduce((acc, n, i) => acc + (i % 2 === 0 ? n : 0), 0)
}
```
