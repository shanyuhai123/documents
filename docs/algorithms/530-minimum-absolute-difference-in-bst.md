---
autoSort: -530
---

# 二叉搜索树的最小绝对差

## 中序遍历

借助二叉搜索树的特性。

``` ts
function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity, pre = -1

  const dfs = (root: TreeNode | null) => {
    if (root === null) return

    dfs(root.left)
    if (pre !== -1) {
      min = Math.min(min, Math.abs(root.val - pre))
    }
    pre = root.val
    dfs(root.right)
  }

  dfs(root)
  return min
}
```
