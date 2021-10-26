---
autoSort: -226
---

# 翻转二叉树

## 递归

``` ts
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left
  return root
}
```

## 迭代

``` ts
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const node = queue.shift()!
    let temp = node.left

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }

    node.left = node.right
    node.right = temp
  }

  return root
}
```
