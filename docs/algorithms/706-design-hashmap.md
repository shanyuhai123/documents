---
autoSort: -706
---

# 设计哈希映射

可在[设计哈希集合](./705-design-hashset)上稍作修改。

## 链地址法

```ts
class MyHashMap {
  #base = 769
  #data = Array(this.#base).fill(0).map<[number, number][]>(() => new Array())

  private hash(key: number) {
    return key % this.#base
  }

  put(key: number, value: number): void {
    const idx = this.hash(key)
    for (const el of this.#data[idx]) {
      if (el[0] === key) {
        el[1] = value
        return
      }
    }

    this.#data[idx].push([key, value])
  }

  get(key: number): number {
    const idx = this.hash(key)
    for (const el of this.#data[idx]) {
      if (el[0] === key) {
        return el[1]
      }
    }

    return -1
  }

  remove(key: number): void {
    const idx = this.hash(key)
    for (let i = 0; i < this.#data[idx].length; i++) {
      if (this.#data[idx][i][0] === key) {
        this.#data[idx].splice(i, 1)
        return
      }
    }
  }
}
```
