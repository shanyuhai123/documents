---
autoSort: -145
---

# 二叉树的后序遍历

后序遍历：左右中

## 递归

``` ts
function postorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = []

  const rec = (root: TreeNode) => {
    if (root.left) {
      rec(root.left)
    }
    if (root.right) {
      rec(root.right)
    }

    ret.push(root.val)
  }

  if (root) {
    rec(root)
  }
  return ret
}
```

## 迭代

``` ts
function postorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = []
  const stack: TreeNode[] = []
  let prev: TreeNode | null = null // 标记是否遍历过子树

  while (root || stack.length) {
    // left 到底
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()!
    // 判断 right
    if (root.right === null || root.right === prev) {
      ret.push(root.val)
      prev = root
      root = null // 置为 null，否则重走 “left 到底”
    } else {
      stack.push(root) // 重新加回 stack
      root = root.right
    }
  }

  return ret
}
```
