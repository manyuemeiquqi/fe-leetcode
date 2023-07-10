/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  const dp = new Array(n + 1).fill(1)
  // dpi 为 i的最大乘积
  // do[0]dp[1]不满足题意 可以不赋值

  dp[0] = undefined
  dp[1] = undefined
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // 这里意思就是 用dp的乘积可能就需要进行拆分 i-j 不用拆分的话，直接用这两个数 i-j 跟 j 计算
      if (dp[i - j])

        dp[i] = Math.max(dp[i], dp[i - j] * j)
      dp[i] = Math.max(dp[i], (i - j) * j)
    }
  }

  return dp[n]
}
// 看了题解
// @lc code=end
