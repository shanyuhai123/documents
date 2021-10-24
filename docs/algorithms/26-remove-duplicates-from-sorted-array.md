---
autoSort: -26
---

# 删除排序数组中的重复项

要求返回的是新数组的长度。

## 双指针

```ts
function removeDuplicates(nums: number[]): number {
  let i = 0, j = 0;

  for (; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      // i 偏移，并赋值
      nums[++i] = nums[j]
    }
  }

  return i + 1
}
```
