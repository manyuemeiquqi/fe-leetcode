/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  const dfs = (r1, r2) => {
    if (!r1 && !r2)
      return true
    if (!r1 || !r2)
      return false
    if (r1.val !== r2.val)
      return false
    return dfs(r1.left, r2.right) && dfs(r1.right, r2.left)
  }
  return dfs(root.left, root.right)
}
// @lc code=end
