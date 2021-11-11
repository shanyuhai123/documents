---
autoSort: -463
---

# 岛屿的周长

二维数组中 `1` 为陆地。

## 遍历

``` ts
function islandPerimeter(grid: number[][]): number {
  let sides = 0
  const row = grid.length, col = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) {
        let rounds = 4
        // 上
        if (i - 1 >= 0 && grid[i - 1][j]) {
          rounds--
        }
        // 右
        if (j + 1 < col && grid[i][j + 1]) {
          rounds--
        }
        // 下
        if (i + 1 < row && grid[i + 1][j]) {
          rounds--
        }
        // 左
        if (j - 1 >= 0 && grid[i][j - 1]) {
          rounds--
        }
        sides += rounds
      }
    }
  }

  return sides
}
```
