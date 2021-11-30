---
autoSort: -637
---

# 二叉树的层平均值

## 迭代

递归还需要维护层数，迭代则直接一些。

```ts
function averageOfLevels(root: TreeNode | null): number[] {
  const ret: number[] = []
  if (root === null) return ret

  let line: TreeNode[] = [root]
  while (line.length) {
    const next: TreeNode[] = []
    let total = 0
    line.forEach(node => {
      total += node.val
      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    })
    ret.push(total / line.length)
    line = next
  }

  return ret
}
```
