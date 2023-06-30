/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
const oddEvenList = function (head) {
  const oddHead = new ListNode()
  let oddCur = oddHead
  const evenHead = new ListNode()
  let evenCur = evenHead
  let idx = 1
  while (head) {
    if (idx % 2 === 1) {
      oddCur.next = head
      oddCur = oddCur.next
    }
    else {
      evenCur.next = head
      evenCur = evenCur.next
    }
    head = head.next
    idx++
  }
  oddCur.next = null
  evenCur.next = null
  oddCur.next = evenHead.next
  return oddHead.next
}
// 开始因为 O1的时间复杂度没想到怎么做，实际上看了题解，就是利用两个指针串联起来就行
// @lc code=end
