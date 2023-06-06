/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    const sum = numbers[l] + numbers[r]
    if (sum === target)
      return [l + 1, r + 1]
    else if (sum < target)
      l++
    else r--
  }
}
// @lc code=end
