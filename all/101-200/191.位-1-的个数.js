/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let ans = 0
  n = n.toString(2)
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1')
      ans++
  }
  return ans
}
// 学习位运算
// @lc code=end
