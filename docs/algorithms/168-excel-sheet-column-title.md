---
autoSort: -168
---

# Excel 表列名称

需要知道字符串的 `charCodeAt` 及 `fromCharCode` 方法。

## 26个字母

``` ts
function convertToTitle(columnNumber: number): string {
  const A = 'A'.charCodeAt(0)
  let str = ''

  while (columnNumber !== 0) {
    columnNumber--
    str = String.fromCharCode(columnNumber % 26 + A) + str
    columnNumber = Math.floor(columnNumber / 26)
  }

  return str
}
```
