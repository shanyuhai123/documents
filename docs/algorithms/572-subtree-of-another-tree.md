---
autoSort: -572
---

# 另一棵树的子树

## 暴力

```ts
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const check = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null && subRoot === null) return true
    if (root === null || subRoot === null || root.val !== subRoot.val) return false

    return check(root.left, subRoot.left) && check(root.right, subRoot.right)
  }

  const dfs = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null) return false

    return check(root, subRoot) || dfs(root.left, subRoot) || dfs(root.right, subRoot)
  }

  return dfs(root, subRoot)
}
```
