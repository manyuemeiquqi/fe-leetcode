/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
const isBalanced = function (root) {
  let flag = true
  const dfs = (root) => {
    if (!root)
      return 0
    const leftD = dfs(root.left) + 1
    const rightD = dfs(root.right) + 1
    if (flag && Math.abs(leftD - rightD) > 1)
      flag = false
    return Math.max(leftD, rightD)
  }
  dfs(root)
  return flag
}
// 如果想要深度，就要明确当root为空你要返回什么样的结构，该题还可以进行优化
// @lc code=end
