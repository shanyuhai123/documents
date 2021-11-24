---
autoSort: -559
---

# N 叉树的最大深度

可参考[二叉树的最大深度](./104-maximum-depth-of-binary-tree)。

## 递归

```ts
function maxDepth(root: Node | null): number {
  if (root === null) return 0
  if (root.children.length === 0) return 1

  return Math.max(...root.children.map(child => maxDepth(child))) + 1
}
```
