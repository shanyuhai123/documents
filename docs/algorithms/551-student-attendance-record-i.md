---
autoSort: -551
---

# 学生出勤记录 I

## 遍历

```ts
function checkRecord(s: string): boolean {
  let ac = 0 // 统计 A
  let lc = 0 // 统计 L

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      ac++
    }
    if (s[i] === 'L') {
      lc++
    } else {
      lc = 0
    }

    if (ac === 2 || lc === 3) {
      return false
    }
  }

  return true
}
```
