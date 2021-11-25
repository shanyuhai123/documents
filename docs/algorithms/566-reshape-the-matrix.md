---
autoSort: -566
---

# 重塑矩阵

## 遍历

```ts
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length
  const n = mat[0].length
  if (m * n !==  r * c) return mat

  const ret: number[][] = Array(r).fill(0).map(_ => Array(c).fill(0))

  for (let i = 0; i < m * n; i++) {
    ret[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n]
  }

  return ret
}
```

## 展开

```ts
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const flatten = mat.flat()
  if (flatten.length !== r * c) return mat

  const ret: number[][] = Array(r).fill(0).map(_ => Array(c).fill(0))

  for (let i = 0; i < r * c; i++) {
    ret[Math.floor(i / c)][i % c] = flatten[i]
  }

  return ret
}
```
