---
autoSort: -27
---

# 移除元素

## 双指针

如果不是要求原地，直接 `filter` 解决。

由于数组不要求顺序，可将其放置到最后。

```ts
const swap = (arr: number[], i: number, j:number): void => {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}

function removeElement(nums: number[], val: number): number {
  let left = 0, right = nums.length

  while (left < right) {
    if (nums[left] === val) {
      swap(nums, left, right - 1)
      right--
    } else {
      left++
    }
  }

  return left
}
```
