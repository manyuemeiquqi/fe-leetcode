/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = function (root) {
  const queue = [root]
  let ans = 1
  while (queue.length) {
    let len = queue.length
    const tmp = []
    const first = queue[0].val
    while (len--) {
      const cur = queue.shift()
      if (cur.left) {
        cur.left.val = cur.val * 2 - 1 - first
        tmp.push(cur.left)
      }
      if (cur.right) {
        cur.right.val = cur.val * 2 - first
        tmp.push(cur.right)
      }
    }

    if (tmp.length) {
      queue.push(...tmp)
      ans = Math.max(tmp[tmp.length - 1].val - tmp[0].val + 1, ans)
    }
  }
  return ans
}
// 这里会存在 溢出的问题，
// @lc code=end
