/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 插入 | 删除 | 替换  1->2 

var minDistance = function (word1, word2) {
    let m = word1.length, n = word2.length
    let dp = Array.from({
        length: m + 1
    }, () => new Array(n + 1).fill(0))
    for (let i = 1; i <= n; i++) {
        dp[0][i] = i
    }
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (word1.charAt(i - 1) == word2.charAt(j - 1))
                dp[i][j] = dp[i - 1][j - 1]
            else
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            // dp[i][j]=
        }
    }

    return dp[m][n]
};
// @lc code=end

