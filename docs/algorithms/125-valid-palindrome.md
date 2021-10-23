---
autoSort: -125
---

# 验证回文串

注意：只考虑字母和字符串，忽略大小写。

## 双指针

``` ts
function isPalindrome(s: string): boolean {
  let target = s.toLowerCase()
  const isValidReg = /[a-zA-Z0-9]/
  let left = 0, right = target.length - 1

  while (left < right) {
    while (!isValidReg.test(target[left]) && left < right) left++
    while (!isValidReg.test(target[right]) && left < right) right--

    if (target[left] !== target[right]) {
      return false
    }

    left++
    right--
  }

  return true
}
```

## 递归

> Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for Valid Palindrome.

不要相信 LeetCode Runtime。

``` ts
function isPalindrome(s: string): boolean {
  let target = s.toLowerCase()
  const isValidReg = /[a-zA-Z0-9]/
  
  const rec = (left: number, right: number): boolean => {
    if (left > right) return true

    if (!isValidReg.test(target[left])) return rec(left + 1, right)
    if (!isValidReg.test(target[right])) return rec(left, right - 1)

    if (target[left] !== target[right]) {
      return false
    }
    return rec(left + 1, right - 1)
  }

  return rec(0, target.length - 1)
}
```
