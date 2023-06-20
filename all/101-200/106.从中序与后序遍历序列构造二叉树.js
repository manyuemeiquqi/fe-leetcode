/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  if (inorder.length === 0)
    return null
  const nodeVal = postorder[postorder.length - 1]
  const node = new TreeNode(nodeVal)
  const idx = inorder.findIndex(item => item === nodeVal)
  const leftLen = idx
  node.left = buildTree(inorder.slice(0, idx), postorder.slice(0, leftLen))
  node.right = buildTree(inorder.slice(idx + 1), postorder.slice(leftLen, postorder.length - 1))
  return node
  // 掌握迭代
}
// @lc code=end
