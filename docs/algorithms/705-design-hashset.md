---
autoSort: -705
---

# 设计哈希集合

## 链地址法

为啥是 [769](https://planetmath.org/goodhashtableprimes)。

```ts
class MyHashSet {
  #base = 769
  #data = Array(this.#base).fill(0).map<number[]>(() => new Array())

  private hash(key: number) {
    return key % this.#base
  }

  add(key: number): void {
    const idx = this.hash(key)
    for (const el of this.#data[idx]) {
      if (el === key) {
        return
      }
    }

    this.#data[idx].push(key)
  }

  remove(key: number): void {
    const idx = this.hash(key)
    for (let i = 0; i < this.#data[idx].length; i++) {
      if (this.#data[idx][i] === key) {
        this.#data[idx].splice(i, 1)
        return
      }
    }
  }

  contains(key: number): boolean {
    const idx = this.hash(key)
    for (const el of this.#data[idx]) {
      if (el === key) {
        return true
      }
    }

    return false
  }
}
```
