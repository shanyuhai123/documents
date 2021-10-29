---
autoSort: -237
---

# 删除链表中的节点

## 替换

入参为删除的节点，所以无法直接将上级的 `next` 指向下级。

``` ts
function deleteNode(root: ListNode | null): void {
  if (root && root.next) {
    root.val = root.next.val
    root.next = root.next.next
  }
}
```
