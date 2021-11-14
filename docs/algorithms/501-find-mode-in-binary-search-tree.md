---
autoSort: -501
---

# 二叉搜索树中的众数

## 中序遍历

借助二叉搜索树的规则。

``` ts
function findMode(root: TreeNode | null): number[] {
  let ret: number[] = []
  let current = 0, count = 0, max = 0

  const track = (val: number) => {
    if (val === current) {
      count++
    } else {
      current = val
      count = 1
    }

    if (count === max) {
      ret.push(current)
    }
    if (count > max) {
      max = count
      ret = [current]
    }
  }

  const dfs = (root: TreeNode | null) => {
    if (root === null) return

    dfs(root.left)
    track(root.val)
    dfs(root.right)
  }

  dfs(root)

  return ret
}
```
