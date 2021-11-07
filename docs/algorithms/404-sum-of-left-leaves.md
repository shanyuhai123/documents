---
autoSort: -404
---

# 左子叶之和

## 递归

找到左子叶。

``` ts
const isLeave = (root: TreeNode): boolean => {
  return root.left === null && root.right === null
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) return 0
  let sum = 0

  if (root.left && isLeave(root.left)) {
    sum += root.left.val
  }

  return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
}
```
