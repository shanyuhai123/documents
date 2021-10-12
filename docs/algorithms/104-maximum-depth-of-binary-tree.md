---
autoSort: -104
---

# 二叉树的最大深度

## 递归

递归的思路很有意思，每递归一次深度 `+1`。

``` ts
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
```

## 迭代

每次清空一层，而非一个。使用 `slice` 复制当前层会占用更多的 `Runtime`，不如直接 `length`。

``` ts
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  const queue: TreeNode[] = [root]
  let count = 0
  while (queue.length) {
    let levelLength = queue.length
    
    while (levelLength--) {
      const cur = queue.shift()!
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    count++
  }
  return count
}
```
