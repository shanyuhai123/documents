---
autoSort: -257
---

# 二叉树的所有路径

## 递归

``` ts
function binaryTreePaths(root: TreeNode): string[] {
  const ret: string[] = []

  const rec = (root: TreeNode | null, path: number[]) => {
    if (root === null) return

    if (root.left === null && root.right === null) {
      ret.push([...path, root.val].join("->"))
    } else {
      rec(root.left, [...path, root.val])
      rec(root.right, [...path, root.val])
    }
  }

  rec(root, [])

  return ret
}
```

## 迭代

迭代则需要自行维护函数调用栈。

``` ts
function binaryTreePaths(root: TreeNode): string[] {
  const nodeQueue: TreeNode[] = [root]
  const pathQueue: number[][] = [[root.val]]
  const path: number[][] = []

  while (nodeQueue.length) {
    const n = nodeQueue.shift()!
    const p = pathQueue.shift()!

    if (n.left === null && n.right === null) {
      path.push(p)
      continue
    }
    if (n.left) {
      nodeQueue.push(n.left)
      pathQueue.push(p.concat(n.left.val))
    }
    if (n.right) {
      nodeQueue.push(n.right)
      pathQueue.push(p.concat(n.right.val))
    }
  }

  return path.map(p => p.join("->"))
}
```
