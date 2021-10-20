---
autoSort: -118
---

# 杨辉三角

## 双循环

从上一层结果取值。

``` ts
function generate(numRows: number): number[][] {
  const ret: number[][] = []

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j]
    }
    ret.push(row)
  }

  return ret
}
```
