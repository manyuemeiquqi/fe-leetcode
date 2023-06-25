/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let num1 = ''
  let num2 = ''

  while (l1) {
    num1 += l1.val
    l1 = l1.next
  }
  while (l2) {
    num2 += l2.val
    l2 = l2.next
  }
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, '0')
  num2 = num2.padStart(len, '0')
  let extraOne = 0
  let ans = null
  for (let i = len - 1; i >= 0; i--) {
    let num = Number(num1[i]) + Number(num2[i]) + extraOne
    if (num >= 10) {
      num %= 10
      extraOne = 1
    }
    else {
      extraOne = 0
    }
    const tmp = new ListNode(num)
    tmp.next = ans
    ans = tmp
  }
  if (extraOne === 1) {
    const head = new ListNode(1)
    head.next = ans
    return head
  }
  return ans
}
// 优化空间
// @lc code=end
