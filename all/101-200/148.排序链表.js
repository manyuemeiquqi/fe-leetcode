/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
const sortList = function (head) {
  const res = head
  let tmp = head
  const quickSort = (nums, l, r) => {
    if (l >= r)
      return
    let i = l - 1
    let j = r + 1
    const mid = nums[l + r >> 1]
    while (i < j) {
      do
        i++
      while (mid > nums[i])
      do
        j--
      while (mid < nums[j])
      if (i < j)
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    quickSort(nums, l, j)
    quickSort(nums, j + 1, r)
  }
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  quickSort(arr, 0, arr.length - 1)
  // const res1 = new ListNode()
  // let cur = res1
  // for (const item of arr) {
  //   cur.next = new ListNode(item)
  //   cur = cur.next
  // }
  // return res1.next
  for (const item of arr) {
    tmp.val = item
    tmp = tmp.next
  }
  return res
}
// 新开链表 和 数组 unshift都是时间复杂度比较高的操作，用原来链表赋值可以通过
// @lc code=end
