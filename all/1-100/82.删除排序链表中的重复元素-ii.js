/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
const deleteDuplicates = function (head) {
  const ans = new ListNode()
  let p = ans
  while (head) {
    if (head.val !== head.next?.val) {
      p.next = new ListNode(head.val)
      head = head.next
      p = p.next
    }
    else {
      const val = head.val
      while (head && head.val === val)
        head = head.next
    }
  }
  return ans.next
}
// @lc code=end
