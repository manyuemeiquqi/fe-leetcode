/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
// 跟奇偶链表可以用一种解法
  const sHead = new ListNode()
  let sCur = sHead
  const lHead = new ListNode()
  let lCur = lHead
  while (head) {
    if (head.val >= x) {
      lCur.next = head
      lCur = lCur.next
    }
    else {
      sCur.next = head
      sCur = sCur.next
    }
    head = head.next
  }

  lCur.next = null
  sCur.next = null
  sCur.next = lHead.next
  return sHead.next
}
// 优化时间复杂度
// @lc code=end
