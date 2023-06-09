/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  let res = null
  const dfs = (root) => {
    if (!root || res)
      return
    if (root.val === val)
      res = root

    else if (root.val > val)
      dfs(root.left)
    else
      dfs(root.right)
  }
  dfs(root)
  return res
}
// @lc code=end
