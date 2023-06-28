/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  s = ` ${s}`
  p = ` ${p}`
  const dp = Array.from({
    length: m + 1,
  }, () => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j] === '*')
        dp[i][j] = dp[i][j - 1] || (i && dp[i - 1][j])

      else
        dp[i][j] = (s[i] === p[j] || p[j] === '?') && i && dp[i - 1][j - 1]
    }
  }
  return dp[m][n]
}
// 这个状态转移方程没想出来，主要是 当匹配为*如何匹配，这里意思要么用* 匹配 i跟i-1 要么 *不参与i的匹配
// @lc code=end
