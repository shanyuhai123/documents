---
autoSort: -100
---

# 相同的树

## 深度优先

``` ts
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  } else if (p.val !== q.val) {
    return false
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
}
```

## 广度优先

根据队列先进先出实现广度优先。

``` ts
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }

  // 根据队列先进先出实现广度优先
  const queue = [p, q]
  while (queue.length) {
    // 取出先进的两个数据
    const nodeP = queue.shift()!
    const nodeQ = queue.shift()!
    if (nodeP.val !== nodeQ.val) {
      return false
    }

    // 推进四个数据
    if (nodeP.left && nodeQ.left) {
      queue.push(nodeP.left)
      queue.push(nodeQ.left)
    } else if (nodeQ.left || nodeP.left) {
      return false
    }
    if (nodeP.right && nodeQ.right) {
      queue.push(nodeP.right)
      queue.push(nodeQ.right)
    } else if (nodeP.right || nodeQ.right) {
      return false
    }
  }

  return true
}
```
