---
autoSort: -83
---

# 删除排序链表中的重复元素

## 遍历

由于数据是排序的，所以遍历即可。

``` ts
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head

  let cur: ListNode = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}
```
