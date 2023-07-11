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
const minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++)
    dp[i][0] = i

  for (let i = 1; i <= n; i++)
    dp[0][i] = i

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1])
        dp[i][j] = dp[i - 1][j - 1]
      else
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
    }
  }

  return dp[m][n]
}
// 自己慢慢写就能写出来，👍，明白初始化跟匹配的 状态转移关系后，编辑距离就很好做了
// @lc code=end
