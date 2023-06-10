/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
const diameterOfBinaryTree = function (root) {
  let ans = 0
  const dfs = (root) => {
    if (!root)
      return 0
    const lD = dfs(root.left) + 1
    const rD = dfs(root.right) + 1
    ans = Math.max(lD + rD, ans)
    return Math.max(lD, rD)
  }
  dfs(root)
  return ans - 2
}
// 直径一定通过某个节点，因此只要遍历每个节点下的最大直径（左右两颗子树的最大深度纸盒）
// @lc code=end
