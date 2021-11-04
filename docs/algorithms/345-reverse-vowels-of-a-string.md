---
autoSort: -345
---

# 反转字符串中的元音字母

## 双指针

``` ts
const swap = <T extends unknown>(arr: T[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]]

function reverseVowels(s: string): string {
  const chars = s.split("")
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let left = 0, right = chars.length - 1

  while (left < right) {
    if (!vowels.includes(chars[left])) {
      left++
    } else if (!vowels.includes(chars[right])) {
      right--
    } else {
      swap(chars, left, right)
      left++
      right--
    }
  }

  return chars.join("")
}
```
