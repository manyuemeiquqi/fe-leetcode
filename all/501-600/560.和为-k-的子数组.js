/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  let count = 0
  // 和为0的子数组有一个
  const map = {
    0: 1,
  }
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (map[count - k])
      ans += map[count - k]
    map[count] = map[count] ? map[count] + 1 : 1
  }
  return ans
  // 看了评论提示，倒推看，连续和一般都可以用到前缀思想
}
// @lc code=end
