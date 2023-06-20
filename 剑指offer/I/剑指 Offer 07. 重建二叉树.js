/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
