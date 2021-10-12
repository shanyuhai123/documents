---
autoSort: -108
---

# 将有序数组转为二叉搜索树

## 二分法

从数组中间开始构建即可。

``` ts
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const dfs = (left: number, right: number) => {
    if (left > right) return null

    const mid = (right - left >> 1) + left
    const node = new TreeNode(nums[mid])
    node.left = dfs(left, mid - 1)
    node.right = dfs(mid + 1, right)

    return node
  }

  return dfs(0, nums.length - 1)
}
```
