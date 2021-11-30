---
autoSort: -643
---

# 子数组最大平均数

## 暴力

暴力虽好，但就是时间久。

```ts
function findMaxAverage(nums: number[], k: number): number {
  const total = (start: number, end: number) => {
    let ret = 0
    for (let i = start; i < end; i++) {
      ret += nums[i]
    }
    return ret
  }
  
  let max = total(0, k)
  for (let i = 1; i < nums.length - k + 1; i++) {
    max = Math.max(max, total(i, i + k))
  }

  return max / k
}
```

优化计算，移除前项增加后项。

```ts
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0
  const len = nums.length

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let maxSum = sum

  for (let i = k; i < len; i++) {
    sum = sum - nums[i - k] + nums[i]
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum / k
}
```
