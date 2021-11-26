---
autoSort: -589
---

# N 叉树的前序遍历

## 递归

```ts
function preorder(root: Node | null): number[] {
  const ret: number[] = []

  const dfs = (root: Node | null) => {
    if (root === null) return

    ret.push(root.val)
    root.children.forEach(node => {
      dfs(node)
    })
  }

  dfs(root)
  return ret
}
```

## 迭代

`forEach` 还需要配置 `reverse` 使用，性能低。

```ts
function preorder(root: Node | null): number[] {
  const ret: number[] = []
  if (root === null) return ret

  const stack: Node[] = [root]

  while (stack.length) {
    const node = stack.pop()!
    ret.push(node.val)
    
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i])
    }
  }

  return ret
}
```
