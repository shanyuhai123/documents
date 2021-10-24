---
autoSort: -171
---

# Excel 表列序号

与[Excel 表列名称](./168-excel-sheet-column-title)相反。

## 进制转换

``` ts
function titleToNumber(columnTitle: string): number {
  const baseNum = 'A'.charCodeAt(0)
  let num = 0

  for (let i = 0; i < columnTitle.length; i++) {
    const cur = columnTitle.charCodeAt(i)
    num = num * 26 + (cur - baseNum + 1)
  }

  return num
}
```
