---
autoSort: -98
---

# 验证二叉搜索树

## 中序遍历

二叉搜索树的中序遍历是递增的，利用该特性进行处理。

```ts
function isValidBST(root: TreeNode | null): boolean {
  let prev = -Infinity

  const rec = (root: TreeNode | null): boolean => {
    if (root === null) return true

    if (!rec(root.left)) return false
    if (root.val <= prev) return false
    prev = root.val
    return rec(root.right)
  }

  return rec(root)
}
```
