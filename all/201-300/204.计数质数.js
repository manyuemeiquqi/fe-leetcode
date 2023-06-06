/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        return false
    }

    return true
  }
  let ans = 0
  if (n < 2)
    return 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i))
      ans++
  }
  return ans
}
// 时间复杂度，判断质数的其他方法
// @lc code=end
