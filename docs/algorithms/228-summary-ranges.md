---
autoSort: -228
---

# 汇总区间

## 遍历

该思路判断条件过多。

``` ts
function summaryRanges(nums: number[]): string[] {
  let ret: string[] = []
  let prev = undefined
  let count = 1

  for (let i = 0; i < nums.length; i++) {
    const next = nums[i + 1]
    if (prev === undefined) {
      prev = nums[i]
    }

    if (prev + count === next) {
      count++
      continue
    } else {
      if (count === 1 || (count === 1 && next === undefined)) {
        ret.push(`${prev}`)
      } else {
        ret.push(`${prev}->${nums[i]}`)
      }
      prev = undefined
      count = 1
    }
  }

  return ret
}
```

## 双指针

双指针则思路更清晰一些。

``` ts
function summaryRanges(nums: number[]): string[] {
  let ret: string[] = []
  if (nums.length === 1) {
    ret.push(`${nums[0]}`)
    return ret
  }
  
  let i = 0, j = 1;

  while (i < nums.length) {
    while (nums[j] - nums[j -1] === 1) {
      j++
    }

    if (j - i === 1) {
      ret.push(`${nums[i]}`)
    } else {
      ret.push(`${nums[i]}->${nums[j - 1]}`)
    }

    i = j++
  }

  return ret
}
```
