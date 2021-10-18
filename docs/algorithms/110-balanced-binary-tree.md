---
autoSort: -110
---

# 平衡二叉树

定义：在 AVL 树中，任意节点对应的两棵子树的最大高度差为 1。

## 暴力

自顶向下会对子树的高度重复计算。

``` ts
function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true
  if (!root.left && !root.right) return true

  function height(root: TreeNode | null): number {
    if (!root) return 0

    return Math.max(height(root.left), height(root.right)) + 1
  }

  return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
```

## 自底向上

如果存在一棵子树不平衡，那么整个二叉树一定是不平衡的。

``` ts
function isBalanced(root: TreeNode | null): boolean {
  function height(root: TreeNode | null): number {
    if (root === null) return 0
    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    } else {
      return Math.max(height(root.left), height(root.right)) + 1
    }
  }

  return height(root) >= 0
}
```
