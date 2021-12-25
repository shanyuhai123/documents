---
autoSort: -999
---

# 可以被一步捕获的棋子数

## 暴力

```ts
function numRookCaptures(board: string[][]): number {
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const n = board.length
  let ret = 0, rx = 0, ry = 0

  // 寻找 R
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'R') {
        rx = i
        ry = j
        break
      }
    }
  }

  // 收集 p
  for (let i = 0; i < 4; i++) {
    for (let step = 0;; step++) {
      const tx = rx + step * dx[i]
      const ty = ry + step * dy[i] // 0 不做位移

      if (tx < 0 || tx >= n || ty < 0 || ty >= n || board[tx][ty] === 'B') {
        break
      }
      if (board[tx][ty] === 'p') {
        ret++
        break
      }
    }
  }

  return ret
}
```
