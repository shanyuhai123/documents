---
autoSort: -590
---

# N 叉树的后序遍历

## 递归

```ts
function postorder(root: Node | null): number[] {
  const ret: number[] = []

  const dfs = (root: Node | null) => {
    if (root === null) return

    root.children.forEach(node => dfs(node))
    ret.push(root.val)
  }

  dfs(root)
  return ret
}
```

## 迭代

```ts
function postorder(root: Node | null): number[] {
  const ret: number[] = []
  if (root === null) return ret

  const queue: Node[] = [root]
  while (queue.length) {
    const node = queue.pop()!
    queue.push(...node.children)
    ret.unshift(node.val)
  }
  
  return ret
}
```
