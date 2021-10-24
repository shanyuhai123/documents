---
autoSort: -9
---

# 回文数

## 字符串

提前加一些判断。

```ts
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }
  if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
    return false
  }
  
  const str = x.toString()
  const mid = Math.floor(str.length / 2)
  const isEven = mid === str.length / 2
  
  return isEven
    ? str.slice(0, mid) === str.slice(mid).split('').reverse().join('')
    : str.slice(0, mid) === str.slice(mid + 1).split('').reverse().join('')
}
```

## 数字

取出反转数字比大小。

```ts
function isPalindrome(x: number): boolean {
  if (x === 0) {
    return true
  }
  // 末尾为 0 的必定 false
  if (x < 0 || x % 10 === 0) {
    return false
  }
  if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
    return false
  }
  
  let num = 0
  while (x > num) {
    num = num * 10 + x % 10
    x = Math.floor(x / 10)
  }
  
  return x === num || x === Math.floor(num / 10)
}
```
