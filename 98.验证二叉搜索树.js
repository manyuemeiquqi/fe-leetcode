/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
const isValidBST = function (root) {
  const arr = [-Infinity]
  const dfs = (root) => {
    if (!root)
      return true
    // if (root.left && root.val <= root.left.val)
    //   return false
    // if (root.right && root.val >= root.right.val)
    //   return false
    // return dfs(root.left) && dfs(root.right)
    const res1 = dfs(root.left)
    if (root.val > arr[arr.length - 1])
      arr.push(root.val)
    else return false
    const res2 = dfs(root.right)
    return res1 && res2
  }
  return dfs(root)
}
// @lc code=end
