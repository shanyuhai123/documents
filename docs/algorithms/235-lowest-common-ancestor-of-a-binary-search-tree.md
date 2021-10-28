---
autoSort: -235
---

# 二叉搜索树的最近公共祖先

二叉搜索树又称二叉排序树，利用其特性解决问题更简单。

## 递归

值分布在节点左右时，那么公共祖先自然是当前节点。

``` ts
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || p === null || q === null) return root
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)

  return root
}
```
