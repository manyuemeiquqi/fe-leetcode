/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let i = 0
  let ans
  const dfs = (root) => {
    if (!root)
      return
    dfs(root.left)
    i++
    if (i === k)
      ans = root.val
    dfs(root.right)
  }
  dfs(root)
  return ans
}
// 与剑指 Offer 54. 二叉搜索树的第k大节点相反
// @lc code=end
