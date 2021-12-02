---
autoSort: -671
---

# 二叉树中第二小的节点

## 递归

```ts
function findSecondMinimumValue(root: TreeNode | null): number {
  let ret = -1
  if (root === null) return ret

  let min = root.val
  const dfs = (root: TreeNode | null) => {
    if (root === null) return
    if (ret !== -1 && root.val >= ret) return
    if (root.val > min) {
      ret = root.val
    }
    dfs(root.left)
    dfs(root.right)
  }
  
  dfs(root)
  return ret
}
```
