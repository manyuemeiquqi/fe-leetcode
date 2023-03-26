/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
//这里进行ans判断的有点多，可以进行优化
var maximalSquare = function (matrix) {
    let ans = 0
    let m = matrix.length, n = matrix[0].length
    const dp = Array.from({
        length: m
    }, () => new Array(n).fill(0))
    for (let i = 1; i < m; i++) {
        dp[i][0] = matrix[i][0]
        ans = Math.max(ans, dp[i][0])
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = matrix[0][i]
        ans = Math.max(ans, dp[0][i])
    }
    dp[0][0] = matrix[0][0]
    ans = Math.max(ans, dp[0][0])
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
            ans = Math.max(ans, dp[i][j])
        }
    }
    return ans * ans
};
// @lc code=end

