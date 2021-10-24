---
autoSort: -21
---

# 合并两个有序链表

## 递归

```ts
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
```

## 迭代

```ts
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let list = new ListNode()
  const dummy = list

  while (l1 && l2) {
    if (l1.val < l2.val) {
      list.next = l1
      l1 = l1.next
    } else {
      list.next = l2
      l2 = l2.next
    }

    list = list.next
  }

  list.next = l1 ? l1 : l2

  return dummy.next
}
```
