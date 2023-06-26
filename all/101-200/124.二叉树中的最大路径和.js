/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
const maxPathSum = function (root) {
  let ans = -Infinity
  const dfs = (root) => {
    if (!root)
      return 0
    const resL = dfs(root.left)
    const resR = dfs(root.right)
    ans = Math.max(resL + resR + root.val, ans, root.val, resR + root.val, resL + root.val)
    return Math.max(root.val, Math.max(resL, resR) + root.val)
  }
  dfs(root)
  return ans
}
// @lc code=end
