# nextTick 原理

借用一下 `UI = f(state)`，但如果说只要 `state` 变化了就去更新 `UI`，这会带来性能上的问题，所以我们需要一种机制来找到一个合适的时间改变 `UI`。

## 揭晓源码

```ts
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
```

四舍五入可以得到：

```ts
const p = Promise.resolve()

export function nextTick<T = void>(
  fn?: (this: T) => void
): Promise<void> {
  return fn ? p.then(fn) : p
}
```

这对应了两个用法：

```ts
// 1. 在 nextTick 中执行
nextTick(fn())

// 2. 配合 await 使用
await nextTick()
fn()
```

## 从单测开始

`nextTick` 是 `scheduler` 的一部分，得联系具体的实现才可以得知其价值。

### nextTick

```ts
it('nextTick', async () => {
  const calls: string[] = []
  const job1 = () => {
    calls.push('job1')
  }
  const job2 = () => {
    calls.push('job2')
  }
  const dummyThen = Promise.resolve().then()
  nextTick(job1)
  job2()

  expect(calls.length).toBe(1)
  await dummyThen
  expect(calls.length).toBe(2)
  expect(calls).toMatchObject(['job2', 'job1'])
})
```

`nextTick` 可以接受一个函数，并且在微任务 `dummyThen` 执行后执行，所以很容易得到：

```ts
export function nextTick (fn?: () => void) {
  const p = Promise.resolve()
  return fn ? p.then(fn) : p
}
```

### queueJob

```ts
test('basic usage', async () => {
  const calls: string[] = []
  const job1 = () => {
    calls.push('job1')
  }
  const job2 = () => {
    calls.push('job2')
  }
  queueJob(job1)
  queueJob(job2)

  expect(calls).toEqual([])
  await nextTick()
  expect(calls).toEqual(['job1', 'job2'])
})
```

`queueJob` 可以接收函数，并且在 `nextTick` 后依次输出，所以直接把 `nextTick` 代码抄一下：

```ts
export function queueJob (fn: () => void) {
  const p = Promise.resolve()
  return fn ? p.then(fn) : p
}
```

### queueJob flushing

```ts
it("should insert jobs in ascending order of job's id when flushing", async () => {
  const calls: string[] = []
  const job3 = () => {
    calls.push('job3')
  }
  job3.id = 1
  const job4 = () => {
    calls.push('job4')
  }
  const job5 = () => {
    calls.push('job5')
  }
  const job2 = () => {
    calls.push('job2')
    queueJob(job4)
    queueJob(job5)
  }
  job2.id = 10
  const job1 = () => {
    calls.push('job1')

    queueJob(job2)
    queueJob(job3)
  }
  queueJob(job1)

  expect(calls).toEqual([])
  await nextTick()
  expect(calls).toEqual(['job1', 'job3', 'job2', 'job4', 'job5'])
})
```

从中可以发现 `queneJob` 存在一个排序的能力，说明其并非是立即执行 `Promise.resolve()` 的，需要维护一个队列：

```ts
// 一开始有考虑利用 findIndex 或 filter 针对一些条件提前处理，但这些方法都会导致一次循环，那不如直接循环判断

```
