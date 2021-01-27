---
title: 提供 .js 后缀
---

## 前置

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



## 解决方案

直接增加 `.ts` 后缀？那么很明显会得到 `导入路径不能以“.ts”扩展名结束。` 的错误。

根据  [TypeScript 编译器 tsc 命令能够自动补全完整的 js 后缀？](https://segmentfault.com/q/1010000038671707#) 在导入时增加 `.js` 后缀，最后生效了。

TypeScript 社区也对此进行了长期的讨论，并给出了一份[总结](https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339)。

