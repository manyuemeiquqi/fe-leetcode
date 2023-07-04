/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const stk = []
  for (let i = 0; i < num.length; i++) {
    if (k && stk.length) {
      while (k && stk.length && num[i] < stk[stk.length - 1]) {
        k--
        stk.pop()
      }
    }
    stk.push(num[i])
  }
  // 如果还有多余的k，直接截断既可以，因为这个单调栈是递增的，根据贪心，截断后面的数字才满足题意
  stk.length = stk.length - k
  let i = 0
  for (; i < stk.length; i++) {
    if (stk[i] !== '0')
      break
  }

  return stk.slice(i).join('') || '0'
  // 优化空间
}
// @lc code=end
