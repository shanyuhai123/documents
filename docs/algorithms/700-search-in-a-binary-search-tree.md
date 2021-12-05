---
autoSort: -700
---

# 二叉搜索树中的搜索

## 递归

```ts
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null
  if (root.val === val) return root
  // 利用二叉搜索树的特性
  return searchBST(val < root.val ? root.left : root.right, val)
}
```
