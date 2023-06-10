/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const path = []
  const ans = []
  const dfs = (root) => {
    if (!root)
      return
    path.push(root.val)
    if (!root.left && !root.right)
      ans.push(path.join('->'))

    dfs(root.left)
    dfs(root.right)
    path.pop()
  }
  dfs(root)
  return ans
}
// @lc code=end
