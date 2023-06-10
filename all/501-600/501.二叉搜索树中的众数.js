/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
const findMode = function (root) {
  const map = {}
  let max = 1

  const dfs = (root) => {
    if (!root)
      return
    if (!map[root.val]) {
      map[root.val] = {
        val: root.val,
        count: 1,
      }
    }
    else {
      map[root.val].count++
      max = Math.max(max, map[root.val].count)
    }
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return Object.values(map).filter(item => item.count === max).map(item => item.val)
}
// 该解法没用到搜索树的性质，需要在思索下
// @lc code=end
