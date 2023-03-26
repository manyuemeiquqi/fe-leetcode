/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
    let res = dp(root)
    return Math.max(res[0], res[1])
    // 结构 0 not 1 yes 
    function dp(root) {
        if (!root) return [0, 0]
        let leftVal = dp(root.left)
        let rightVal = dp(root.right)
        return [Math.max(leftVal[0], leftVal[1]) + Math.max(rightVal[0], rightVal[1]),
        root.val + leftVal[0] + rightVal[0]]
    }
};
// @lc code=end

