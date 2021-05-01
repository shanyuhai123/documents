---
title: 排序
---

## 冒泡排序

冒泡排序就是重复 “从序列右边开始比较相邻两个数字大小，再根据结果交换两个数字的位置”。

```ts
const bubbleSort = (arr: number[], asc: boolean = true): number[] => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // compare
      if (asc ? (arr[j] > arr[j + 1]) : (arr[j] < arr[j + 1])) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}
```

