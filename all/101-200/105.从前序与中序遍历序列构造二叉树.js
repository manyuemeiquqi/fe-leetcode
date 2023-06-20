/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (preorder.length === 0)
    return null
  const node = new TreeNode(preorder[0])
  const nodeVal = preorder[0]
  const idx = inorder.findIndex(item => item === nodeVal)
  const leftLen = idx
  node.left = buildTree(preorder.slice(1, 1 + leftLen), inorder.slice(0, idx))
  node.right = buildTree(preorder.slice(1 + leftLen), inorder.slice(idx + 1))
  return node
  // 掌握迭代
}
// @lc code=end
