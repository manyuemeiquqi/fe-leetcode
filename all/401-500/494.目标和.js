/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b)
  target = (sum + target) / 2
  if (!Number.isInteger(target) || target < 0)
    return 0
  // 0 1 背包
  const dp = Array.from({ length: nums.length + 1 }, () => new Array(target + 1).fill(0))
  dp[0][0] = 1

  // ij意思 用 0,-i数字填充j的最大方案数字

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (j >= nums[i - 1]) {
        // 用前i-1个数字填充 j-i的容量         用i-1个数字填充j的容量
        dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j]
      }
      else { dp[i][j] = dp[i - 1][j] }
    }
  }
  // console.log('dp: ', dp)
  return dp[nums.length][target]
}
// 自己单独写还是大致写出来转移方程，经典 01 背包，细节注意点 一个是dp初始化，以为数字可能为0因此，填充为容量为0的方案不是固定为0的
// @lc code=end
