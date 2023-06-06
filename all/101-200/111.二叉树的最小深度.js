/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
const minDepth = function (root) {
  // 遍历每个叶子节点，去depth最小值
  let ans
  const dfs = (root, depth) => {
    if (!root.left && !root.right) {
      ans = ans ? Math.min(ans, depth) : depth
      return
    }
    if (root.left)
      dfs(root.left, depth + 1)
    if (root.right)
      dfs(root.right, depth + 1)
  }
  if (!root)
    return 0
  dfs(root, 1)
  return ans
// 优化时间复杂度
}
// @lc code=end
