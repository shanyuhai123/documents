---
title: 过量属性检测
---

## PR

看下官网的[示例](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)：

```tsx
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20
  }
}

const config = { colour: 'red', width: 100 }

createSquare(config) // OK
createSquare({ colour: 'red', width: 100 }) // ERROR
```

在 [Strict object literal assignment checking](https://github.com/Microsoft/TypeScript/pull/3823) 应该是特地为对象字面量增加了严格模式。



## 疑惑

为什么仅为对象字面量增加严格模式呢，SF 中有一个[探讨](https://stackoverflow.com/questions/52234014/in-typescript-why-is-it-that-an-object-cannot-specify-excess-properties-on-assi?rq=1)。

解释似乎很有道理，对象字面量仅在此处使用，应当严格限制，而引用的对象可能来自其他地方，如果你对其进行修改那么可能造成其余地方出现问题。