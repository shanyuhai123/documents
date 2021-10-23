---
autoSort: -167
---

# 两数之和 II - 输入有序数组

## 二分查找

利用升序数组可以在暴力的基础上优化时间复杂度，按照该思路可以优化第二个数据的查询速度。

``` ts
function twoSum(numbers: number[], target: number): number[] {
  const len = numbers.length

  for (let i = 0; i < len; i++) {
    let low = i + 1, high = len - 1

    while (low <= high) {
      const mid = high + low >> 1
      const sum = numbers[i] + numbers[mid]

      if (sum === target) {
        return [i + 1, mid + 1]
      } else if (sum > target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
  }
  
  return [-1, -1]
}
```

## 双指针

双指针上再加二分。

``` ts
function twoSum(numbers: number[], target: number): number[] {
  let left = 0, right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    const mid = left + right >> 1

    if (sum === target) {
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[mid] > target) {
      right = mid - 1
    } else if (numbers[right] + numbers[mid] < target) {
      left = mid + 1
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
  
  return [-1, -1]
}
```
