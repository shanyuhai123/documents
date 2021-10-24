---
autoSort: -202
---

# 快乐数

寻找其终结条件。

## 哈希表

数字重复时自然就可以结束了。

``` ts
function isHappy(n: number): boolean {
  const s = new Set<number>()

  const calcNext = (n: number) => {
    let ret = 0
    for (let i of String(n)) {
      ret += Number(i) * Number(i)
    }
    return ret
  }

  // 可切换为递归
  while (n !== 1) {
    if (s.has(n)) return false

    s.add(n)
    n = calcNext(n)
  }

  return true
}
```

## 快慢指针

会重复的问题可以该思路。

``` ts
function isHappy(n: number) {
  const calcNext = (n: number) => {
    let ret = 0
    for (let i of String(n)) {
      ret += Number(i) * Number(i)
    }
    return ret
  }

  let slow = n
  let fast = calcNext(n)

  while (fast !== 1 && slow !== fast) {
    slow = calcNext(slow)
    fast = calcNext(calcNext(fast))
  }

  return fast === 1
}
```
