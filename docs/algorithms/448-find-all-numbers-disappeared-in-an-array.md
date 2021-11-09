---
autoSort: -448
---

# 找到数组中消失的所有数字

## 哈希表

``` ts
function findDisappearedNumbers(nums: number[]): number[] {
  const s = new Set(Array.from({ length: nums.length }, (v, i) => i + 1))

  for (const num of nums) {
    s.delete(num)
  }

  return Array.from(s)
}
```

## 原地修改

参考题解。

``` ts
function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length
  for (const num of nums) {
    // - 1 后为下标
    const x = (num - 1) % n
    nums[x] += n 
  }

  const ret: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= n) {
      // +1 恢复数值
      ret.push(i + 1)
    }
  }

  return ret
}
```
