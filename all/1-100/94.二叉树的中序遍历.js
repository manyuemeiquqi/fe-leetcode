/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const ans = []
  const dfs = (root) => {
    if (!root)
      return
    dfs(root.left)
    ans.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  return ans
}
// 找迭代写法
// @lc code=end
