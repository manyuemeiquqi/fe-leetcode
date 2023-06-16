/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  const arr = []
  const isMinus = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  while (divisor <= dividend) {
    arr.push(divisor)
    divisor += divisor
  }
  // console.log(arr)
  let ans = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= dividend) {
      dividend -= arr[i]
      ans += 2 ** i
    }
  }
  ans = isMinus ? -ans : ans
  if (ans < -(2 ** 31) || ans > 2 ** 31 - 1)
    return 2147483647
  return ans
  // 暴力超时，因此考虑倍增被除数，累加的时候注意把被除数的倍数加上
}
// @lc code=end
