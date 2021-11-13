---
autoSort: -492
---

# 构造矩形

## 开方

``` ts
function constructRectangle(area: number): number[] {
  // 向下取整所以为 w
  let w = Math.floor(Math.sqrt(area))

  while (area % w !== 0) {
    w--
  }

  return [area / w, w]
}
```
