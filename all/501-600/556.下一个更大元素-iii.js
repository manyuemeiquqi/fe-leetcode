/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = function (n) {
/**
 * @param {number} n
 * @return {number}
 */
  const nextGreaterElement = function (n) {
    const nums = (`${n}`).split('').map(item => +item)
    const len = nums.length
    let i = len - 2
    while (i >= 0 && nums[i] >= nums[i + 1])
      i--

    if (i < 0)
      return -1

    let j = len - 1
    while (nums[j] <= nums[i])
      j--
    [nums[i], nums[j]] = [nums[j], nums[i]]
    let k = i + 1
    let p = len - 1
    while (k < p) {
      [nums[k], nums[p]] = [nums[p], nums[k]]
      k++
      p--
    }
    let ans = +nums.join('')
    ans = ans > 2 ** 31 - 1 ? -1 : ans
    return ans
  }
}
// 就是下一个排列
// @lc code=end
