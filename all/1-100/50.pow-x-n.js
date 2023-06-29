/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0)
    return 1
  const isMinus = n < 0
  n = Math.abs(n)
  let res = 1
  //   指数为偶数 计算方式成 (x*x)的n/2的指数倍
  while (n >= 1) {
    if (n % 2 === 1) {
      res *= x
      n--
    }
    else {
      x *= x
      n /= 2
    }
  }

  return isMinus ? 1 / res : res
}
// 看了题解，想到了快速幂，但是不知道如何去转换
// @lc code=end
