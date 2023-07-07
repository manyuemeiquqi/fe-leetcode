/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const dp = [1]
  for (let i = 0, j = 0, k = 0; dp.length < n;) {
    const a = dp[i] * 2
    const b = dp[j] * 3
    const c = dp[k] * 5
    const pushNumber = Math.min(a, b, c)
    if (pushNumber === a)
      i++
    if (pushNumber === b)
      j++
    if (pushNumber === c)
      k++
    dp.push(pushNumber)
  }
  return dp[dp.length - 1]
}
// 看了题解，还有一种小顶堆的思路
// 开始想到了可以用因子*2 *3 *5,但没想到可以用三个变量保存当前到哪个因子了
// @lc code=end
