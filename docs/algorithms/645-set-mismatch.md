---
autoSort: -645
---

# 错误的集合

略过哈希表方法。

## 位运算

可参考[丢失的数字](./268-missing-number)。

```ts
function findErrorNums(nums: number[]): number[] {
  const s = Array.from(new Set(nums))
  const totalN = nums.reduce((acc, cur) => acc + cur, 0)
  const totalS = s.reduce((acc, cur) => acc + cur, 0)

  let missing = nums.length

  for (let i = 0; i < nums.length; i++) {
    missing ^= s[i] ^ i
  }

  return [totalN - totalS, missing]
}
```
