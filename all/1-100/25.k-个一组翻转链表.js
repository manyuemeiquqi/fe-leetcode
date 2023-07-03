/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
const reverseKGroup = function (head, k) {
  const dummy = new ListNode(undefined, head)
  for (let p0 = dummy; ;) {
    let p1 = p0
    for (let i = 0; p1 && i < k; i++)
      p1 = p1.next
    if (!p1)
      break
    let tmp = null
    let cur = p0.next
    for (let i = 0; i < k; i++) {
      const next = cur.next
      cur.next = tmp
      tmp = cur
      cur = next
    }
    const next = p0.next
    p0.next.next = cur
    p0.next = tmp
    p0 = next
  }
  return dummy.next
}
// 参考了灵神的题解，这里主要是外层需要包裹一层循环去满足一个有多少个K组
// 然后另外一点反转链表后如何接上链表，可以让循环继续下去
