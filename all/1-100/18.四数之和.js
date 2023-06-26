/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const ans = []
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let m = j + 1
      let n = nums.length - 1
      const fixedVal = nums[i] + nums[j]
      while (m < n) {
        const cur = fixedVal + nums[m] + nums[n]
        if (cur === target) {
          ans.push([nums[i], nums[j], nums[m], nums[n]])
          m++
          n--
          continue
        }
        if (cur < target)
          m++
        else
          n--
      }
    }
  }
  return Array.from(new Set(ans.map(item => item.join(',')))).map(item => item.split(','))
}
// 时间空间都要优化
// @lc code=end
