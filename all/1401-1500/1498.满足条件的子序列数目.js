/*
 * @lc app=leetcode.cn id=1498 lang=javascript
 *
 * [1498] 满足条件的子序列数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ans = 0
  const len = nums.length
  let i = 0
  let j = len - 1

  const powArr = new Array(len).fill(1)
  for (let i = 1; i < len; i++)
    powArr[i] = (powArr[i - 1] << 1) % (1e9 + 7)
    // 幂会出现溢出需要取余

  while (i <= j) {
    if (nums[i] + nums[j] <= target) {
      ans += powArr[j - i]
      i++
    }
    else {
      j--
    }
  }
  return ans % (1e9 + 7)
}
// @lc code=end
