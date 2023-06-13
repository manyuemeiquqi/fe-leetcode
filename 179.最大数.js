/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
// 每一位都相同 长度不同的 取短的
  nums.sort((a, b) => {
    const str1 = `${a}`
    const str2 = `${b}`
    return Number(str2 + str1) - Number(str1 + str2)
  })
  const idx
  = nums.findIndex(item => Number(item))
  return nums.slice(idx).join('')
}
// 原来想多了，先一步一步校验去变比较，最后还不如直接拼接
// @lc code=end
