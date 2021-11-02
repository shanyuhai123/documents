---
autoSort: -303
---

# 区域和检索 - 数据不可变

## 惰性计算

``` ts
class NumArray {
  private nums: number[]
  private index = 0
  constructor(nums: number[]) {
    this.nums = nums
  }

  private getNum(i: number): number {
    if (this.nums[i] === undefined) return 0
    return this.nums[i]
  }

  sumRange(left: number, right: number): number {
    // 当右标超出已计算区间才进行计算
    if (right > this.index) {
      for (let i = this.index + 1; i <= right; i++) {
        this.nums[i] = this.getNum(i - 1) + this.nums[i] 
      }
      this.index = right
    }

    return this.nums[right] - this.getNum(left - 1)
  }
}
```
