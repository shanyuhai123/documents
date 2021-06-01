---
title: 排序
---

## 交换函数

```ts
const swap = (arr: number[], i: number, j: number) => {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}
```



## 冒泡排序

冒泡排序就是重复 “从序列右边开始比较相邻两个数字大小，再根据结果交换两个数字的位置”。

```ts
const bubbleSort = (arr: number[]): number[] => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j)
      }
    }
  }

  return arr
}
```



## 选择排序

选择排序就是 “从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换”。

```ts
const selectionSort = (arr: number[]): number[] => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let k = i

    for (let j = i; j < len; j++) {
      if (arr[j] < arr[k]) {
        k = j
      }
    }

    if (k !== i) {
      swap(arr, i, k)
    }
  }

  return arr
}
```



## 插入排序

插入排序就是 “从右侧的未排序区域内取出一个数据，然后将其插入到已排序区域内合适的位置上”。

```ts
const insertionSort = (arr: number[]): number[] => {
  const len = arr.length

  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }

  return arr
}
```

