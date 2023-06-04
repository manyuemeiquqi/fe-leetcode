/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    // 感觉像回溯
    let ans = 0
    const dfs = (root,depth)=>{
        if(!root) return
        ans = Math.max(ans,depth+1) 
        dfs(root.left,depth+1)
        dfs(root.right,depth+1)
    }
    dfs(root,0)
    return ans 
};
// 目前对于dfs 的参数还是存在疑惑，需要作为模版去联练习，代码哪里去终止，哪里去继续进行
// @lc code=end

