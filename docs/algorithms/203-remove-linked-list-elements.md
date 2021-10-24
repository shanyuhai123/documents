---
autoSort: -203
---

# 移除链表元素

## 递归

``` ts
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return head
  }

  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}
```

## 迭代

迭代在处理 `head` 时有点麻烦，增加一个虚拟 `node` 则很容易就解决问题了。

``` ts
function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 虚拟 node
  const dummyNode = new ListNode()
  dummyNode.next = head
  let exec = dummyNode

  while (exec.next !== null) {
    if (exec.next.val === val) {
      exec.next = exec.next.next
    } else {
      exec = exec.next
    }
  }

  return dummyNode.next
}
```
