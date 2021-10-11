---
autoSort: -101
---

# 对称二叉树

对称二叉树可看作两棵树互为**镜像**。所以可以参考 [相同的树](./100-same-tree) 进行实现，不过要稍作修改。

## 递归

``` ts
function check(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  } else if (p.val !== q.val) {
    return false
  } else {
    return check(p.left, q.right) && check(p.right, q.left)
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
}
```

## 迭代

相对 `same tree` 提前结束判断，优化代码量。

``` ts
function check(p: TreeNode | null, q: TreeNode | null): boolean {
  // 根据队列先进先出实现广度优先
  const queue = [p, q]
  while (queue.length) {
    const nodeP = queue.shift()!
    const nodeQ = queue.shift()!

    if (!nodeP && !nodeQ) continue
    if ((!nodeP || !nodeQ) || (nodeP.val !== nodeQ.val)) return false

    queue.push(nodeP.left)
    queue.push(nodeQ.right)
    queue.push(nodeP.right)
    queue.push(nodeQ.left)
  }

  return true
}

function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
}
```
