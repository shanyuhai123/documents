---
autoSort: -234
---

# 回文链表

第一思路就是整成数组，然后就可参考[验证回文串](./125-valid-palindrome)。

## 快慢指针

链表难的点就在于不能很快找到中间，所以这一题可以当作找到链表中间的练习，最后配合[反转链表](./206-reverse-linked-list)。

``` ts
const getHalfNode = (head: ListNode): ListNode => {
  let slow = head
  let fast = head

  // ts 代码提示还是差一点，slow.next 存在了，fast 还需要加 `!`
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next!
    fast = fast.next.next
  }

  return slow
}

const reverseListNode = (head: ListNode | null): ListNode | null => {
  if (head === null || head.next === null) return head

  const n = reverseListNode(head.next)
  head.next.next = head
  head.next = null

  return n
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) return true
  if (head.next.next === null) {
    return head.val === head.next.val
  }

  const end = reverseListNode(getHalfNode(head).next)

  let left = head
  let right = end
  // 右边可能会少，以右判断结束
  while (right !== null) {
    if (left.val !== right.val) return false
    left = left.next!
    right = right.next
  }

  return true
}
```
