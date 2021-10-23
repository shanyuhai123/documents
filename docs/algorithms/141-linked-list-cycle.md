---
autoSort: -141
---

# 环形链表

要求常量空间。

## 快慢指针

环形链表快指针可以追上慢指针。

``` ts
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false

  let slow: ListNode | null = head
  let fast: ListNode | null = head.next
  while (slow !== fast) {
    if (slow === null || fast === null || fast.next === null) {
      return false
    }

    slow = slow.next
    fast = fast.next.next
  }

  return true
}
```
