---
autoSort: -36
---

# 有效的数独

## 哈希表

```ts
function isValidSudoku(board: string[][]): boolean {
  const n = board.length
  const rows = Array(n).fill(0).map(() => new Set())
  const cols = Array(n).fill(0).map(() => new Set())
  const groups = Array(n).fill(0).map(() => new Set())

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const item = board[i][j]
      if (item === '.') continue
      const g = Math.floor(i / 3) + Math.floor(j / 3) * 3

      if (rows[i].has(item) || cols[j].has(item) || groups[g].has(item)) {
        return false
      }
      rows[i].add(item)
      cols[j].add(item)
      groups[g].add(item)
    }
  }

  return true
}
```
