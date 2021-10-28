---
autoSort: -232
---

# 用栈实现队列

## 双栈

栈先进后出，需要另一个栈模拟队列。

``` ts
class MyQueue {
  #inStack: number[] = []
  #outStack: number[] = []

  private in2out() {
    while(this.#inStack.length) {
      this.#outStack.push(this.#inStack.pop()!)
    }
  }

  push(x: number): void {
    this.#inStack.push(x)
  }

  pop(): number {
    if (!this.#outStack.length) {
      this.in2out()
    }

    return this.#outStack.pop()!
  }

  peek(): number {
    if (!this.#outStack.length) {
      this.in2out()
    }

    return this.#outStack[this.#outStack.length - 1]
  }

  empty(): boolean {
    return this.#inStack.length === 0 && this.#outStack.length === 0
  }
}
```
