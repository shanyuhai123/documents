# 排序

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
    // 每轮 i 循环都能确认最大值
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

选择排序就是 “从待排序的数据中寻找最小值，将其放到已排序队列的末尾”。

```ts
const selectionSort = (arr: number[]): number[] => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(arr, i, minIndex)
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
    // 每轮 i 循环为左区域排好序
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



## 快速排序

快速排序就是 “从待排序的数据原地排序并利用分治的思想解决，有点类似冒泡的增强版”。

```ts
// 分区操作
const partition = (arr: number[], left: number, right: number) => {
  const pivot = left
  let index = pivot + 1

  // 原地排序
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }

  // 将基准 pivot 移至中间
  swap(arr, pivot, index - 1)
  return index - 1
}

const quickSort = (arr: number[], left = 0, right = arr.length - 1): number[] => {
  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}
```

