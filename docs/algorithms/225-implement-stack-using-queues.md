---
autoSort: -225
---

# 用队列实现栈

## 复刻

``` ts
class MyStack {
  #queue: number[] = []

  push(x: number): void {
    this.#queue.push(x)
  }

  pop(): number {
   return this.#queue.pop()!
  }

  top(): number {
    return this.#queue[this.#queue.length - 1]
  }

  empty(): boolean {
    return this.#queue.length === 0
  }
}
```
