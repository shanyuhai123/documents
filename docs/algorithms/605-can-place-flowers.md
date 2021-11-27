---
autoSort: -605
---

# 种花问题

## 遍历

遇到前后未种植则直接种植。

```ts
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1 && flowerbed[i] === 0) {
      if (n) {
        // 种上花
        flowerbed[i] = 1
        n--
      } else {
        break
      }
    }
  }

  return n === 0
}
```
