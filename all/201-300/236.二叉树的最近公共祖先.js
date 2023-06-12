/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  let path = []
  let flag = false
  const dfs = (root, target) => {
    if (!root || flag)
      return
    if (root === target) {
      flag = true
      path.push(root)
      return
    }
    dfs(root.left, target)
    dfs(root.right, target)
    if (flag)
      path.push(root)
  }
  dfs(root, p)
  const fatherSet = new Set([...path])
  flag = false
  path = []
  dfs(root, q)
  for (const root of path) {
    if (fatherSet.has(root))
      return root
  }
}
// 考虑其他做法，同时注意dfs的参数，保持一致
// @lc code=end
