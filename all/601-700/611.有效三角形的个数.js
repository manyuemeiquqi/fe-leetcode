/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function (nums) {
  // 两边之和大于第三边
  let ans = 0
  nums.sort((a, b) => b - a)
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      if (nums[i] < nums[j] + nums[k]) {
        ans += k - j
        j++
      }
      else {
        k--
      }
    }
  }

  return ans
}
// 只用两边之和大于第三边就可以
// @lc code=end
