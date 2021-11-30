---
autoSort: -653
---

# 两数之和 IV - 输入 BST

## 迭代

递归似乎无法立即终结？

```ts
function findTarget(root: TreeNode | null, k: number): boolean {
  const s = new Set()
  if (root === null) return false

  const stack: TreeNode[] = [root]
  while (stack.length) {
    const node = stack.pop()!
    if (s.has(k - node.val)) return true
    s.add(node.val)

    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return false
}
```
