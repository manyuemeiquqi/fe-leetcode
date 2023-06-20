/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
// 维护一个单调递减的栈
  const len = temperatures.length
  const ans = new Array(len).fill(0)
  const stk = []
  for (let i = 0; i < len; i++) {
    while (temperatures[i] > temperatures[stk[stk.length - 1]]) {
      const idx = stk.pop()
      ans[idx] = i - idx
    }
    stk.push(i)
  }
  return ans
}
// 另一种说法，找右侧大于该元素的距离最小的位置
// @lc code=end
