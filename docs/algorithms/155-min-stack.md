---
autoSort: -155
---

# 最小栈

## 双栈

额外创建一个栈保留最小值。

``` ts
class MinStack {
  #stack: number[] = []
  #minStack: number[] = [Infinity]

  push(val: number): void {
    this.#stack.push(val)
    // 应对 pop，保留小值
    this.#minStack.push(Math.min(this.#minStack[this.#minStack.length - 1], val)) 
  }

  pop(): void {
    this.#stack.pop()
    this.#minStack.pop()
  }

  top(): number {
    return this.#stack[this.#stack.length - 1]
  }

  getMin(): number {
    return this.#minStack[this.#minStack.length - 1]
  }
}
```
