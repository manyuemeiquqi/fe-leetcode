/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  const n = nums.length
  // nums中只能出现的元素数值范围 1~n
  for (let i = 0; i < n; i++) {
    while (i + 1 !== nums[i] && nums[i] < n + 1 && nums[i] > 0
       && nums[nums[i] - 1] !== nums[i]) {
      const idx = nums[i] - 1;
      [nums[i], nums[idx]] = [nums[idx], nums[i]]
    }
  }
  let res = 1
  for (let i = 0; i < n; i++) {
    if (nums[i] !== res)
      break

    res++
  }

  return res
}
// 原地hash 看了题解，
// @lc code=end
