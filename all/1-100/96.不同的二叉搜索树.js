/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const dp = new Array(n + 1).fill(0)

  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++)
    // dp[n] 代表 n 个节点的二叉树数量 j 为左子树， i为节点总数 ，因为根节点占据一个，所以 i-j-1,i-j-1为右子树
      dp[i] += dp[j] * dp[i - j - 1]
  }

  return dp[n]
}
// @lc code=end
