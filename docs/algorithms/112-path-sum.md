---
autoSort: -112
---

# 路径总和

注意题目描述：根节点到叶子节点。

## 递归

``` ts
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false

  if (!root.left && !root.right) {
    return targetSum === root.val
  } else {
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  }
}
```

## 广度优先

``` ts
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false

  const queue: [TreeNode, number][] = [[root, targetSum]]
  while (queue.length) {
    const [node, sum] = queue.shift()

    if (!node.left && !node.right && node.val === sum) {
      return true
    }
    if (node.left) {
      queue.push([node.left, sum - node.val])
    }
    if (node.right) {
      queue.push([node.right, sum - node.val])
    }
  }
  return false
}
```
