---
autoSort: -682
---

# 棒球比赛

自行维护一组数据。

## 遍历

```ts
function calPoints(ops: string[]): number {
  const scores: number[] = []
  for (const op of ops) {
    if (op === 'C') {
      scores.pop()
    } else if (op === 'D') {
      const prev = scores[scores.length - 1]
      scores.push(prev * 2)
    } else if (op === '+') {
      const prev_1 = scores[scores.length - 1]
      const prev_2 = scores[scores.length - 2]
      scores.push(prev_1 + prev_2)
    } else {
      scores.push(Number(op))
    }
  }

  return scores.reduce((acc, cur) => acc + cur, 0)
}
```
