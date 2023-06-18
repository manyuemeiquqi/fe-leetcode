/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head)
    return null
  const oneNodeHead = head
  const ans = head.next
  let father
  while (head) {
    const a = head
    const b = head.next
    if (!b)
      break
    const c = head.next.next
    a.next = c
    b.next = a
    if (father)
      father.next = b
    head = b.next.next
    father = b.next
  }
  return ans || oneNodeHead
}
// @lc code=end
