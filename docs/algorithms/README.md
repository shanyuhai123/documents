# 算法

> 算法是很重要的，但我懒。

## 一些思想

### 递归

> 要理解递归，就得先理解什么是递归。

递归的基本思想是直接或间接的调用自身，这样原问题的求解就被转为了许多性质相同但是规模更小的子问题。
递归最重要的两个特征：调用自身、结束条件。调用自身是在解决子问题，而结束条件则一般为最简子问题的答案。
执行函数时会创建对应的执行上下文栈，而栈被创建过多层时存在 **栈溢出** 的风险。

### 分治

分治的核心思想就是 “分而治之”：

1. 分解：将原问题分解为相互独立，与原问题形式相同的子问题
2. 解决：分解到某个容易求解的边界后，递归求解
3. 合并：将子问题的解合并为原问题的解

### 动态规划

> 使用分治法时，若子问题并不独立，则更推荐使用动态规划。

### 贪心算法

贪心算法是一种在每一步选择中都采取当前状态下最好或最优选择，从而希望导致结果是最好或最优算法。
贪心算法与动态规划的不同在于它对每个问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。

## 从排序开始

### 交换函数

```ts
const swap = (arr: number[], i: number, j: number) => {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}
```

### 冒泡排序

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

### 选择排序

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

### 插入排序

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

### 快速排序

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
