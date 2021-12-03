---
autoSort: -680
---

# 验证回文字符串 Ⅱ

最多删除一个字符，可认为有一次容错。

## 双指针

```ts
function validPalindrome(s: string): boolean {
  let left = 0, right = s.length - 1

  const valid = (s: string, l: number, r: number): boolean => {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++
      r--
    }

    return true
  }

  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      // 容错可以从左边，也可以从右边。
      return valid(s, left + 1, right) || valid(s, left, right - 1)
    }
  }

  return true
}
```
