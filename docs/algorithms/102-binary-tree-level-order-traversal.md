---
autoSort: -102
---

# 二叉树的层序遍历

## 迭代

```ts
function levelOrder(root: TreeNode | null): number[][] {
  const ret: number[][] = []
  if (root === null) return ret

  let queue: TreeNode[] = [root]

  while (queue.length) {
    const currentRowLength = queue.length

    ret.push([])
    for (let i = 0; i < currentRowLength; i++) {
      const node = queue.shift()!
      ret[ret.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return ret
}
```
