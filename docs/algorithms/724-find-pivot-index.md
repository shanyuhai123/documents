---
autoSort: -724
---

# 寻找数组的中心下标

## 遍历

```ts
function pivotIndex(nums: number[]): number {
  const total = nums.reduce((acc, cur) => acc + cur, 0)
  
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum * 2 + nums[i] === total) {
      return i
    }

    sum += nums[i]
  }

  return -1
}
```
