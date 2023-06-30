/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  let cur = new ListNode()
  cur.next = head
  const res = cur
  let lConnect
  let rConnect
  let count = 0
  while (cur) {
    if (count + 1 === left) {
      left = cur.next
      lConnect = cur
    }
    if (count === right) {
      right = cur
      rConnect = cur.next
    }
    cur = cur.next
    count++
  }
  right.next = null
  lConnect.next = null

  // 翻转left 到right
  const partHead = left
  let tmp = null
  while (left) {
    const next = left.next
    left.next = tmp
    tmp = left
    left = next
  }
  lConnect.next = tmp
  partHead.next = rConnect
  return res.next
}
// @lc code=end
