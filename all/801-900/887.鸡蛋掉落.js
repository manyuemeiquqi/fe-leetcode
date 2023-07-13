/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
const superEggDrop = function (k, n) {
  const dp = Array.from({ length: n + 1 },
    () => new Array(k + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++)
      dp[i][j] = dp[i - 1][j - 1] + 1 + dp[i - 1][j]
    if (dp[i][k] >= n)
      return i
  }
}
// dp表示 j枚鸡蛋扔i次得到的最高楼层
// 那么如果想通过k枚鸡蛋 得到 f(x,k)>=n  求x的最小次数
// @lc code=end
