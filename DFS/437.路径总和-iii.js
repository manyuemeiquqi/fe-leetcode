/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */

//前缀和 外加一个hash表 每次得到前缀和都去查表，看看是否可以满足条件
var pathSum = function (root, targetSum) {
    let ans = 0, map = { 0: 1 }
    dfs(root, 0)
    return ans
    function dfs(root, cur) {
        if (!root) return;
        cur += root.val
        ans += map[cur - targetSum] || 0

        map[cur] = (map[cur] || 0) + 1

        dfs(root.left, cur)
        dfs(root.right, cur)
        map[cur]--
    }
};
// @lc code=end

