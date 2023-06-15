/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  let slow = head
  let fast = head

  do {
    if (!slow || !fast.next || !fast.next.next)
      return null
    slow = slow.next
    fast = fast.next.next
  } while (slow !== fast)
  let ans = head
  while (ans !== slow) {
    ans = ans.next
    slow = slow.next
  }
  return ans
}
// 这里注意两点，1是如何推理 2是严格控制开始两个指针必须在同一个起点出发
// @lc code=end
