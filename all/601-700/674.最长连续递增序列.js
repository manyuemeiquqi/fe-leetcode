/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  let ans = [nums[0]]
  let tmp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > tmp[tmp.length - 1]) {
      tmp.push(nums[i])
    }
    else {
      ans = ans.length > tmp.length ? ans : tmp
      tmp = [nums[i]]
    }
  }
  ans = ans.length > tmp.length ? ans : tmp
  return ans.length
}
// @lc code=end
