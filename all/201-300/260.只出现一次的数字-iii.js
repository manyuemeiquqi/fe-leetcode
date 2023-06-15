/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  // https://luyuhuang.tech/2020/08/28/single-number.html#%E7%AC%AC%E4%B8%89%E9%A2%98

  const tmp = nums.reduce((prev, cur) => prev ^ cur)

  const leftNumber = tmp & (-tmp)
  let i = 0
  for (const num of nums) {
    if (num & leftNumber)
      i = i ^ num
  }
  return [i, tmp ^ i]
}
// 需要研究下位运算的性质
