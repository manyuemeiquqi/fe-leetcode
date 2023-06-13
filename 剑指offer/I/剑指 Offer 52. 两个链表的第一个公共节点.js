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
