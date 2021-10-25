---
autoSort: -219
---

# 存在重复元素 II

## 暴力

``` ts
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    let r = k
    while (r) {
      if (nums[i] === nums[i + r]) {
        return true
      }
      r--
    }
  }

  return false
}
```

## 哈希表

``` ts
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const s = new Set<number>()

  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) return true

    s.add(nums[i])
    if (s.size > k) {
      s.delete(nums[i - k])
    }
  }

  return false
}
```
