/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ans = Infinity
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i]
      if (sum === target)
        return sum
      ans = Math.abs(sum - target) < Math.abs(ans - target) ? sum : ans
      if (sum - target > 0)
        r--
      else
        l++
    }
  }
  return ans
}
