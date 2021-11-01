---
autoSort: -283
---

# 移动零

## 双指针

一开始的思路是双指针交换：

```　ts
const swap = (arr: number[], left: number, right: number) => [arr[left], arr[right]] = [arr[right], arr[left]]

function moveZeroes(nums: number[]): void {
  let left = 0, right = nums.length - 1

  while (left < right) {
    if (nums[left] === 0) {
      while (nums[right] !== 0 && left < right) {
        if (nums[right] === 0) {
          right--
          continue
        }
        swap(nums, left, right)
      }
      right--
    }
    left++
  }
}
```

但结果顺序不对，修改：

``` ts
const swap = (arr: number[], left: number, right: number) => [arr[left], arr[right]] = [arr[right], arr[left]]

function moveZeroes(nums: number[]): void {
  let prev = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nums[prev] === 0) {
        swap(nums, i, prev)
      }
      prev++
    }
  }
}
```
