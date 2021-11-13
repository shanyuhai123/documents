---
autoSort: -495
---

# 提莫攻击

## 遍历

``` ts
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ret = 0
  let expired = 0

  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] >= expired) {
      ret += duration
    } else {
      ret += timeSeries[i] + duration - expired
    }

    expired = timeSeries[i] + duration
  }

  return ret
}
```
