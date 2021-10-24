---
autoSort: -206
---

# 反转链表

## 递归

可以从少的节点开始考虑，当两个节点时一个简单的思路是形成环，再断开。

``` ts
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }

  const n = reverseList(head.next)
  head.next.next = head
  head.next = null
  return n
}
```

## 迭代

``` ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let cur = head

  while (cur !== null) {
    const temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }

  return prev
}
```
