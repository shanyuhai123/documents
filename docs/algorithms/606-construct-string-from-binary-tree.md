---
autoSort: -606
---

# 根据二叉树构造字符串

## 递归

看到这种结果第一反应就是递归。

```ts
function tree2str(root: TreeNode | null): string {
  if (root === null) return ''
  if (root.left === null && root.right === null) return `${root.val}`
  if (root.right === null) return `${root.val}(${tree2str(root.left)})`

  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`
}
```
