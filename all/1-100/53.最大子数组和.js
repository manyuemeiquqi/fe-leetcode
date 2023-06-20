/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const len = nums.length
  const dp = new Array(len).fill(0)
  let ans = nums[0]
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    ans = Math.max(ans, dp[i])
  }
  return ans
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// const maxSubArray = function (nums) {
//   const length = nums.length
//   let ans = -Infinity
//   let cur = 0
//   // 这段代码思想是，如果目前小于0，那就一直往前走，找一个逼近0的返回 找到大于0的 开始计算连续和，只要大于0连续计算，
//   for (let i = 0; i < length;) {
//     if (cur + nums[i] >= 0) {
//       cur += nums[i]

//       ans = Math.max(ans, cur)
//       i++
//     }
//     else {
//       cur = 0
//       while (nums[i] < 0 && i < length) {
//         ans = Math.max(ans, nums[i])

//         i++
//       }
//     }
//   }
//   return ans
// }
// @lc code=end
