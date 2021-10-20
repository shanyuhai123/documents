---
autoSort: -119
---

# 杨辉三角 II

在[杨辉三角](./118-pascals-triangle)中，利用上一行结果进行计算，此处只需返回最后一行结果，显然可以添加一个 `prev` 数组来解决问题。

## 一个数组

双循环是必不可少的。
实际上依然是两个数组，只不过从后往前不会覆盖前一轮的结果。

``` ts
function getRow(rowIndex: number): number[] {
  const row = Array(rowIndex + 1).fill(0)
  row[0] = 1

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] += row[j - 1]
    }
  }

  return row
}
```

## 单循环

想要真正意义上的一个数组，则需要利用数学公式来进行推导了。

``` ts
function getRow(rowIndex: number): number[] {
  const row = Array(rowIndex + 1).fill(0)
  row[0] = 1

  for (let i = 1; i <= rowIndex; i++) {
    row[i] = row[i - 1] * (rowIndex - i + 1) / i
  }

  return row
}
```
