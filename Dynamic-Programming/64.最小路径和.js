/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (dp) {
    let row = dp.length, col = dp[0].length
    for (let i = 1; i < row; i++)
        dp[i][0] += dp[i - 1][0]
    for (let i = 1; i < col; i++)
        dp[0][i] += dp[0][i - 1]

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
        }
    }
    return dp[row - 1][col - 1]

};
// @lc code=end

