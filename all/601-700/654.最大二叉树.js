/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  const dfs = (l, r) => {
    if (l > r)
      return null
    let max = l
    for (let i = l + 1; i <= r; i++)
      max = nums[i] > nums[max] ? i : max
    const root = new TreeNode(nums[max])
    root.left = dfs(l, max - 1)
    root.right = dfs(max + 1, r)
    return root
  }
  const len = nums.length
  return dfs(0, len - 1)
}
// 优化时间复杂度，单调栈解法
// @lc code=end
