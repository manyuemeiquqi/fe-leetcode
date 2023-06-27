/*
 * @lc app=leetcode.cn id=951 lang=javascript
 *
 * [951] 翻转等价二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const flipEquiv = function (root1, root2) {
  const dfs = (r1, r2) => {
    if (!r1 && !r2)
      return true
    if ((!r1 && r2) || (r1 && !r2))
      return false
    if (r1.val !== r2.val)
      return false
    return (dfs(r1.left, r2.left) && dfs(r1.right, r2.right)) || (dfs(r1.left, r2.right) && dfs(r1.right, r2.left))
  }
  return dfs(root1, root2)
}
// @lc code=end
