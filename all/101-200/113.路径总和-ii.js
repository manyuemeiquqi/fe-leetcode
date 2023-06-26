/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  const ans = []
  const path = []
  let sum = 0
  const dfs = (root) => {
    if (!root)
      return
    path.push(root.val)
    sum += root.val
    if (sum === targetSum && !root.left && !root.right)
      ans.push([...path])

    dfs(root.left)
    dfs(root.right)
    path.pop()
    sum -= root.val
  }
  dfs(root)
  return ans
}
// @lc code=end
