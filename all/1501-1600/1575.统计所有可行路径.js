/*
 * @lc app=leetcode.cn id=1575 lang=javascript
 *
 * [1575] 统计所有可行路径
 */

// @lc code=start
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
const countRoutes = function (locations, start, finish, fuel) {
  const mod = 1e9 + 7
  const len = locations.length
  const dp = Array.from({ length: fuel + 1 }, () => new Array(len).fill(0))

  //                  0 1 2 3 ---fule
  // 0
  // 1
  // 3
  // start
  for (let i = 0; i <= fuel; i++)
    dp[i][finish] = 1

  for (let i = 1; i <= fuel; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        const cost = Math.abs(locations[j] - locations[k])
        if (j !== k && i >= cost)
          dp[i][j] = (dp[i][j] + dp[i - cost][k]) % mod
      }
    }
  }

  return dp[fuel][start]
}
// https://www.acwing.com/solution/content/20130/
// @lc code=end
