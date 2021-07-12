---
description: TypeScript 常见问题
---

# TypeScript 常见问题

## 过量属性检测

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

### 疑惑

为什么仅为对象字面量增加严格模式呢，SF 中有一个[探讨](https://stackoverflow.com/questions/52234014/in-typescript-why-is-it-that-an-object-cannot-specify-excess-properties-on-assi?rq=1)。

解释似乎很有道理，对象字面量仅在此处使用，应当严格限制，而引用的对象可能来自其他地方，如果你对其进行修改那么可能造成其余地方出现问题。



## 提供 js 后缀

在 HTML 中使用 `type="module"` 时：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>module</title>
  <script type="module" src="index.js"></script>
</head>
<body>Hello Module</body>
</html>
```

其中，`index.js` 由 `tsc` 生成，其中：

```tsx
// index.ts
import { method1 } from "./modules/m1"
```

编译后得到的结果为：

```js
// index.js
import { method1 } from "./modules/m1"
```

由于缺乏后缀名称，那么浏览器访问时自然就 404 了。

### 解决方案

直接增加 `.ts` 后缀？那么很明显会得到 `导入路径不能以“.ts”扩展名结束。` 的错误。

根据  [TypeScript 编译器 tsc 命令能够自动补全完整的 js 后缀？](https://segmentfault.com/q/1010000038671707#) 在导入时增加 `.js` 后缀，最后生效了。

TypeScript 社区也对此进行了长期的讨论，并给出了一份[总结](https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339)。

