/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  const map = new WeakSet()
  while (headA) {
    map.add(headA)
    headA = headA.next
  }
  while (headB) {
    if (map.has(headB))
      return headB
    headB = headB.next
  }
  return null
}
// @lc code=end
