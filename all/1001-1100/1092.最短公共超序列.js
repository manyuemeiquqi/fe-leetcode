/*
 * @lc app=leetcode.cn id=1092 lang=javascript
 *
 * [1092] 最短公共超序列
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const shortestCommonSupersequence = function (str1, str2) {
// dp[i][j] holds the shortest supersequence between the first i chars of str1 and the first j chars of str2
  const dp = new Array(str1.length + 1)
    .fill()
    .map(() => new Array(str2.length + 1))

  // Initialize base cases
  for (let i = 0; i <= str1.length; i++)
    dp[i][0] = str1.substring(0, i)

  for (let j = 0; j <= str2.length; j++)
    dp[0][j] = str2.substring(0, j)

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
    // If next char to add is common between strings, we can add it to the previous supersequence
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1]
      }
      // Otherwise choose the shorter supersequence to add it to
      else {
        if (dp[i - 1][j].length < dp[i][j - 1].length)
          dp[i][j] = dp[i - 1][j] + str1[i - 1]

        else
          dp[i][j] = dp[i][j - 1] + str2[j - 1]
      }
    }
  }

  return dp[str1.length][str2.length]
}
// @lc code=end
