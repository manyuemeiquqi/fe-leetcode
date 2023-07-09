/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  const dfs = (root) => {
    if (!root)
      return null
    if (root.val === key) {
      if (!root.left && !root.right) {
        return null
      }
      else if (!root.left) {
        return root.right
      }
      else if (!root.right) {
        return root.left
      }
      else {
        const rightChild = root.right
        const leftChild = root.left
        let cur = rightChild
        while (cur.left)
          cur = cur.left
        cur.left = leftChild
        return rightChild
      }
    }

    if (root.val > key) {
      root.left = dfs(root.left)
      return root
    }
    if (root.val < key) {
      root.right = dfs(root.right)
      return root
    }
  }
  return dfs(root)
}
// 墨迹了一会，主要忘记了怎么处理找到节点后去连接父子节点
// @lc code=end
