---
autoSort: -19
---

# 删除链表的倒数第 N 个结点

## 双指针

```ts
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head)
  let fast = dummy, slow = dummy

  // 快指针先走 n 步
  while (n--) {
    fast = fast.next
    if (fast === null) return dummy.next
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  // 修改指向
  slow.next = slow.next.next
  return dummy.next
}
```
