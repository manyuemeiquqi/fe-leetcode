/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  let ans = -Infinity;
  const getMaxVal = (root, val) => {
    if (!root) return 0;
    let left = getMaxVal(root.left, val);
    let right = getMaxVal(root.right, val);
    let upVal = Math.max(root.val, root.val + left, root.val + right);
    let cur = Math.max(root.val, root.val + left, root.val + right, root.val + right + left);
    ans = Math.max(ans, cur);
    return upVal;
  };
  getMaxVal(root, 0);
  return ans;
};
// @lc code=end

