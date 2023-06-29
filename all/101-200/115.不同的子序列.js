/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
  const m = s.length
  const n = t.length
  const dp = Array.from(new Array(m + 1),
    () => new Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i][0] = 1
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j]
      if (s[i - 1] === t[j - 1])
        dp[i][j] += dp[i - 1][j - 1]
    }
  }

  return dp[m][n]
}

// 还是没做出来，这个dp有点跟之前匹配的正则的类似， s[i-1]参与匹配就是需要 dp[i-1][j-1]不参与就是dp[i-1][j]
// @lc code=end
