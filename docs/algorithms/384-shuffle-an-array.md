---
autoSort: -384
---

# 打乱数组

## 洗牌算法

需要注意引用类型。

```ts
class Solution {
  #nums: number[]
  #origin: number[]
  constructor(nums: number[]) {
    this.#nums = nums
    this.#origin = [...nums]
  }

  reset(): number[] {
    return this.#nums = [...this.#origin]
  }

  shuffle(): number[] {
    for (let i = 0; i < this.#nums.length; i++) {
      const idx = Math.floor(Math.random() * (this.#nums.length - i)) + i
      ;[this.#nums[i], this.#nums[idx]] = [this.#nums[idx], this.#nums[i]]
    }

    return this.#nums
  }
}
```
