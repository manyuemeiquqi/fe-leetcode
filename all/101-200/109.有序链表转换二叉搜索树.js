/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  if (!head)
    return null
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  const len = arr.length
  const createTree = (l, r) => {
    if (l === r)
      return new TreeNode(arr[l])
    const mid = l + r >> 1
    const root = new TreeNode(arr[mid])
    if (l <= mid - 1)
      root.left = createTree(l, mid - 1)
    if (mid + 1 <= r)
      root.right = createTree(mid + 1, r)
    return root
  }
  return createTree(0, len - 1)
  // 看了题解才会做，感到难做的点是保持平衡，但是根据mid节点递归构建一定可以保持平衡
}
// @lc code=end
