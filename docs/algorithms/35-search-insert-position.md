---
autoSort: -35
---

# 搜索插入位置

## 二分法

```ts
function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1

  while (left <= right) {
    const mid = right + left >> 1
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
```
