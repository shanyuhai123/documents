---
autoSort: -111
---

# 二叉树的最小深度

叶子节点是指没有子节点的节点。

## 深度优先

``` ts
function minDepth(root: TreeNode | null): number {
  if (root === null) return 0

  if (root.left === null) {
    return minDepth(root.right) + 1
  } else if (root.right === null) {
    return minDepth(root.left) + 1
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
}
```

## 广度优先

层层遍历，当其中一个为叶子节点时即可返回。

``` ts
function minDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const queue: [TreeNode, number][] = [[root, 1]]
  while (queue.length) {
    const [node, depth] = queue.shift()!
    if (!node.left && !node.right) return depth

    if (node.left) {
      queue.push([node.left, depth + 1])
    }
    if (node.right) {
      queue.push([node.right, depth + 1])
    }
  }
}
```
