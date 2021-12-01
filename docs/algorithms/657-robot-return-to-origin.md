---
autoSort: -657
---

# 机器人能否返回原点

## 模拟

不用考虑朝向。

```ts
function judgeCircle(moves: string): boolean {
  // 数组麻烦，选择更简单的形式
  let x = 0, y = 0
  for (const move of moves) {
    if (move === 'U') y += 1
    if (move === 'R') x += 1
    if (move === 'D') y -= 1
    if (move === 'L') x -= 1
  }

  return x === 0 && y === 0
}
```
