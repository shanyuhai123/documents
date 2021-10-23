---
autoSort: -144
---

# 二叉树的前序遍历

先序遍历：中左右

## 递归

``` ts
function preorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = []

  const rec = (root: TreeNode) => {
    ret.push(root.val)

    if (root.left) {
      rec(root.left)
    } 
    if (root.right) {
      rec(root.right)
    }
  }

  if (root) {
    rec(root)
  }
  return ret
}
```

## 迭代

``` ts
function preorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = []
  if (!root) return ret
  const stack: TreeNode[] = [root]

  while (stack.length) {
    const node = stack.pop()!

    ret.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }

  return ret
}
```
