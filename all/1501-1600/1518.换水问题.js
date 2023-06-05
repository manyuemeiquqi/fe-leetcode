/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换水问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function (numBottles, numExchange) {
  let ans = numBottles
  while (numBottles >= numExchange) {
    const exchange = (numBottles / numExchange) >> 0
    ans += exchange
    numBottles = exchange + numBottles % numExchange
  }

  return ans
}
numWaterBottles(9, 3)
// @lc code=end
