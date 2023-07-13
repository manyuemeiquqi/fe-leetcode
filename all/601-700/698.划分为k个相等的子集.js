/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
  nums.sort((a, b) => b - a)
  let sum = nums.reduce((a, b) => a + b)
  if (sum % k !== 0)
    return false
  sum /= k
  const flag = new Array(nums.length).fill(false)
  const dfs = (k, cur) => {
    if (k === 0)
      return true
    if (cur === sum)
      return dfs(k - 1, 0)
    for (let i = 0; i < nums.length; i++) {
      if (flag[i] === false && cur + nums[i] <= sum) {
        flag[i] = true
        if (dfs(k, cur + nums[i]))
          return true
        flag[i] = false
      }
      //   当前i匹配不到任何数可以组合
      if (flag[i] === false && cur === 0)
        return false
    }
    // return false
  }
  return dfs(k, 0)
}
// @lc code=end
