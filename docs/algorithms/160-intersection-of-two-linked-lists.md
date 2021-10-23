---
autoSort: -160
---

# 相交链表

这种题目都可以用哈希表来方便解决，但追求常量空间解决方案时则难度加倍。

## 双指针

这个很有意思，交换式：`a + c + b === b + c + a`

``` ts
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null
  }

  let pa: ListNode | null = headA, pb: ListNode | null = headB
  while (pa !== pb) {
    pa = pa === null ? headB : pa.next
    pb = pb === null ? headA : pb.next
  }

  return pa
}
```
