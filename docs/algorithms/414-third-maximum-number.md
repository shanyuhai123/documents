---
autoSort: -414
---

# 第三大的数

## 三个数

``` ts
function thirdMax(nums: number[]): number {
  let a = -Infinity, b = -Infinity, c = -Infinity

  for (const num of nums) {
    if (num > a) {
      c = b
      b = a
      a = num
    } else if (num < a && num > b) {
      c = b
      b = num
    } else if (num < b && num > c) {
      c = num
    }
  }

  return c === -Infinity ? a : c
}
```

## 去重排序

``` ts
function thirdMax(nums: number[]): number {
  const ret = Array.from(new Set(nums.sort((a , b) => a - b))).slice(-3)
  return ret.length < 3 ? ret.pop()! : ret.shift()!
}
```
