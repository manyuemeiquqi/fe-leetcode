/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
const minDiffInBST = function (root) {
  let ans = Infinity
  let prev
  const dfs = (root) => {
    if (!root)
      return

    dfs(root.left)
    if (prev === undefined) {
      prev = root.val
    }
    else {
      ans = Math.min(ans, Math.abs(prev - root.val))
      prev = root.val
    }
    dfs(root.right)
  }
  dfs(root)
  return ans
}
// 转换为数组好理解些 ， js 要注意 prev 可能会为0
// @lc code=end
