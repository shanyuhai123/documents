---
autoSort: -415
---

# 字符串相加

## 模拟进位

可以固定模 10。

``` ts
function addStrings(num1: string, num2: string): string {
  let n1 = num1.length - 1, n2 = num2.length - 1, carry = false
  let ret = []

  while (n1 >= 0 || n2 >= 0 || carry) {
    const sum = (Number(num1[n1]) || 0) + (Number(num2[n2]) || 0) + (carry ? 1 : 0)
    if (carry) {
      carry = false
    }
    if (sum >= 10) {
      carry = true
    }
    // push + reverse 效率更高
    ret.unshift(sum % 10)
    
    n1--
    n2--
  }

  return ret.join('')
}
```
