/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const res = head
  const arr = []
  while (head) {
    arr.push(head)
    head = head.next
  }

  if (n === arr.length)
    return res.next
  else
    arr[arr.length - n - 1].next = arr[arr.length - n].next

  return res
}
// @lc code=end
