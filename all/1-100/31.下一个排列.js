/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  // 以487654321 为例子下一个为 587644321 交换点的两个数字满足以下特征
  // 一个从右往左变成递减的转折点，右侧递减的， 找到大于要交换的点，交换后，在reverse 让这段递减的变成递增的。
  const len = nums.length
  let i = len - 2
  while (i >= 0 && nums[i] >= nums[i + 1])
    i--

  if (i < 0) {
    nums.reverse()
    return
  }
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
}
// @lc code=end
