---
autoSort: -48
---

# 旋转图像

要求原地旋转。

## 交换

```ts
function rotate(matrix: number[][]): void {
  const n = matrix.length

  // 画图找规律
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      [matrix[j][n - i - 1], matrix[i][j], matrix[n - 1 - j][i], matrix[n - i - 1][n - j - 1]] = [matrix[i][j], matrix[n - 1 - j][i], matrix[n - i - 1][n - j - 1], matrix[j][n - i - 1]]
    }
  }
}
```
