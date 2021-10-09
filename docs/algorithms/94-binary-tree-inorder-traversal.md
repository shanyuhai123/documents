---
autoSort: -94
---

# 二叉树的中序遍历

左子树 => 根节点 => 右子树

## 递归

利用函数执行栈即可快速实现。

``` ts
function inorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = []

  const inorder = (root: TreeNode | null) => {
    if (!root) return
    inorder(root.left)
    ret.push(root.val)
    inorder(root.right)
  }

  inorder(root)

  return ret
}
```

## 迭代

递归隐式地维护了一个栈，而迭代则需要手动维护。

``` ts
function inorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = []
  const stack: TreeNode[] = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop() as TreeNode | null
    ret.push(root!.val)
    root = root!.right
  }
  
  return ret
}
```
