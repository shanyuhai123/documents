---
autoSort: -217
---

# 存在重复元素

跳过排序和哈系表解法。

## 去重

``` ts
const containsDuplicate = (nums: number[]): boolean => new Set(nums).size !== nums.length
```
