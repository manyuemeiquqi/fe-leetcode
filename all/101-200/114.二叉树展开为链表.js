/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  const dfs = (root) => {
    if (!root)
      return
    dfs(root.left)
    if (root.left && !root.left.left) {
      const tmp = root.right
      root.right = root.left

      // 找到左子树节点的最右侧子节点，该节点的右节点就是右子树
      let replaceRoot = root.right
      while (replaceRoot.right)
        replaceRoot = replaceRoot.right
      replaceRoot.right = tmp
      root.left = null
    }
    dfs(root.right)
  }
  dfs(root)
}
// @lc code=end
