---
autoSort: -543
---

# 二叉树的直径

参考[二叉树的最大深度](./104-maximum-depth-of-binary-tree)。

## 递归

注：从根节点开始不一定最大。

``` ts
function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  const maxDepth = (root: TreeNode | null): number => {
    if (root === null) return 0

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    max = Math.max((left + right), max)
    return Math.max(left, right) + 1
  }

  maxDepth(root)

  return max
}
```
