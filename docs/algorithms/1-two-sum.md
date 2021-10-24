---
autoSort: -1
---

# 两数之和

## 暴力破解

循环还是循环。

```ts
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
```

## 哈希表

让查询操作交给其他的数据结构。

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (map.has(target - value)) {
      return [map.get(target - value), i]
    } else {
      map.set(value, i)
    }
  }
}
```
