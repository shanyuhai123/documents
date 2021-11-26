---
autoSort: -594
---

# 最长和谐子序列

注意题目，可修改原数组顺序。

## 暴力

先排序使其有序。

```ts
function findLHS(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    let len = 0, flag = false, eq = 0
    for (let j = i + 1; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j])
      if (diff === 1) {
        len++
        flag = true
      } else if (diff === 0) {
        eq++
      } else {
        break
      }
    }

    // 优化，跳过相同节点
    i += eq
    max = Math.max(max, (len ? len + 1 : 0) + (flag ? eq : 0))
  }

  return max
}
```

## 哈希表

先计数再求和。

```ts
function findLHS(nums: number[]): number {
  const m = new Map()
  nums.forEach(n => {
    m.set(n, (m.get(n) || 0) + 1)
  })

  let max = 0
  for (const [k, v] of m) {
    const vn = m.get(k + 1)
    if (vn) {
      max = Math.max(max, v + vn)
    }
  }

  return max
}
```
