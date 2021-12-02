---
autoSort: -661
---

# 图片平滑器

## 遍历

```ts
function imageSmoother(img: number[][]): number[][] {
  const row = img.length, col = img[0].length
  const ret = Array(row).fill(0).map(_ => Array(col).fill(0))

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let count = 0

      for (let ri = r - 1; ri <= r + 1; ri++) {
        for (let ci = c - 1; ci <= c + 1; ci++) {
          if (ri >= 0 && ri < row && ci >= 0 && ci < col) {
            ret[r][c] += img[ri][ci]
            count++
          }
        }
      }

      ret[r][c] = Math.floor(ret[r][c] / count) 
    }
  }

  return ret
}
```
