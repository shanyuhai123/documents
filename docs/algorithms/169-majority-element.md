---
autoSort: -169
---

# 多数元素

最直白的自然是哈希表计数。

## 排序

排序后中间的值一定是众数。

``` ts
function majorityElement(nums: number[]): number {
  return nums.sort()[Math.floor(nums.length / 2)]
}
```

## 投票法

直觉是想到栈了。

``` ts
function majorityElement(nums: number[]): number {
  const stack: number[] = []

  for (let n of nums) {
    if (!stack.length) {
      stack.push(n)
      continue
    }

    if (stack[stack.length - 1] === n) {
      stack.push(n)
    } else {
      stack.pop()
    }
  }

  return stack[0]
}
```

优化下空间复杂度，则可以得到投票法。

``` ts
function majorityElement(nums: number[]): number {
  let candidate = 0
  let count = 0

  for (let n of nums) {
    if (count === 0) {
      candidate = n
    }

    count += candidate === n ? 1 : -1
  }

  return candidate
}
```
