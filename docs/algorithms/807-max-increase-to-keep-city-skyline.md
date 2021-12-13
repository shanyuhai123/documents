---
autoSort: -807
---

# 保持城市天际线

## 贪心

```ts
function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const n = grid.length
  const rowMax = Array(n).fill(0)
  const colMax = Array(n).fill(0)

  // 获取最大
  for (let i = 0; i < rowMax.length; i++) {
    for (let j = 0; j < colMax.length; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j])
      colMax[j] = Math.max(colMax[j], grid[i][j])
    }
  }

  let ret = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ret += Math.min(rowMax[i], colMax[j]) - grid[i][j]
    }
  }

  return ret
}
```
