/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
const isPalindrome = function (head) {
  function isValid(arr) {
    let l = 0
    let r = arr.length - 1
    while (l < r) {
      if (arr[l] !== arr[r])
        return false
      l++
      r--
    }
    return true
  }
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return isValid(arr)
}
// @lc code=end
