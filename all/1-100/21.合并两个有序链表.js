/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  const ans = new ListNode()
  let cur = ans
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      cur.next = new ListNode(list2.val)
      list2 = list2.next
    }
    else {
      cur.next = new ListNode(list1.val)
      list1 = list1.next
    }
    cur = cur.next
  }

  if (list1)
    cur.next = list1
  if (list2)
    cur.next = list2
  return ans.next
}
// 注意链表先构造要给头节点，返回的时候返回头节点的next 优化时间复杂度
// @lc code=end
