# 扩展 Vue Router Meta 信息

在实际应用中会在 `meta` 添加一些字段，方便做路由上的功能扩展。而 TypeScript 中要添加对应的类型提示首先想到对 `RouteRecordRaw` 做扩展：

```ts
export interface MenuMeta {
  // 标题
  title: string
  // 图标
  icon?: string
  // 在侧边栏中隐藏
  hideInMenu?: boolean
}

export type MenuRecordRaw = RouteRecordRaw & {
  meta?: MenuMeta & RouteMeta
  children?: MenuRecordRaw[]
}
```

对于部分原生方法需要重新指定类型，不够友好，后续在文档中看到[路由元信息](https://next.router.vuejs.org/zh/guide/advanced/meta.html)：

```ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 路由名称
    title: string
    // 路由图标
    icon?: string
    // 从侧边栏隐藏
    hideInMenu?: boolean
  }
}
```
