/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (!head)
    return null
  const arr = []
  while (head) {
    arr.push(head)
    head = head.next
  }
  const len = arr.length
  while (k >= len)
    k -= len
  if (k === 0)
    return arr[0]
  arr[len - 1].next = arr[0]
  let idx = k === 0 ? 0 : len - k
  const ans = arr[idx]
  idx = idx + len - 1 > len - 1 ? len - (len - idx) - 1 : idx + len
  arr[idx].next = null
  return ans
}
// 优化时间复杂度，另外这里的idx如何是多少，要考虑清楚
// @lc code=end
