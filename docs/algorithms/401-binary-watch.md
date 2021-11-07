---
autoSort: -401
---

# 二进制手表

## 暴力

借助[位 1 的个数](./191-number-of-1-bits)。

``` ts
const countOne = (n: number): number => {
  let count = 0

  while (n) {
    n &= n - 1
    count++
  }

  return count
}

function readBinaryWatch(turnedOn: number): string[] {
  const ret: string[] = []

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countOne(h) + countOne(m) === turnedOn) {
        ret.push(`${h}:${m < 10 ? '0' : ''}${m}`)
      }
    }
  }

  return ret
}
```
