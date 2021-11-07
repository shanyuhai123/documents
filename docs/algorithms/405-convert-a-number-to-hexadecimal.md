---
autoSort: -405
---

# 数字转换为十六进制数

## 暴力取模

``` ts
function toHex(num: number): string {
  if (num === 0) return '0'
  const hex = '0123456789abcdef'
  let ret: string[] = [] 
  
  if (num < 0) {
    num = Math.pow(2, 32) - Math.abs(num)
  }

  while (num) {
    ret.unshift(hex[num % 16])
    num = Math.floor(num / 16)
  }

  return ret.join('')
}
```
