/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const mirrorTree = function (root) {
  const dfs = (root) => {
    if (!root)
      return
    dfs(root.left)
    dfs(root.right);
    [root.left, root.right] = [root.right, root.left]
  }
  dfs(root)
  return root
}
