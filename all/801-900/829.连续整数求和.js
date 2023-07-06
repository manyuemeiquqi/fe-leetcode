/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] 连续整数求和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const consecutiveNumbersSum = function (n) {
//   n *= 2
//   let res = 0
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       if ((n / i - i + 1) % 2 === 0)
//         res++
//     }
//   }
//   return res
  let res = 0
  for (let i = 1; i * (i + 1) <= 2 * n; i++) {
    if ((n - i * (i + 1) / 2) % i === 0)
      res++
  }
  return res
}
// 看了题解 ，保证两点 ，连续整数的起点val>0  然后就是等差的递推公式
// @lc code=end
