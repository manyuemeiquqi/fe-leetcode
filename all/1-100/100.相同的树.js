/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  const dfs = (r1, r2) => {
    if (!r1 && !r2)
      return true
    if (!r1 || !r2)
      return false
    if (r1.val !== r2.val)
      return false
    return dfs(r1.left, r2.left) && dfs(r1.right, r2.right)
  }
  return dfs(p, q)
}
// @lc code=end
