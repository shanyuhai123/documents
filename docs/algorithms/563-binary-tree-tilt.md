---
autoSort: -563
---

# 二叉树的坡度

## 递归

```ts
function findTilt(root: TreeNode | null): number {
  let ret = 0
  
  const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0
    const sumLeft = dfs(root.left)
    const sumRight = dfs(root.right)
    ret += Math.abs(sumLeft - sumRight)
    return sumLeft + sumRight + root.val
  }

  dfs(root)
  return ret
}
```
