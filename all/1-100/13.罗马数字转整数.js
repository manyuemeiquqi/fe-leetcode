/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let ans = 0
  let prev = Infinity
  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]]
    ans += cur
    if (cur > prev) {
      ans -= 2 * prev
      prev = Infinity
    }
    else { prev = map[s[i]] }
  }
  return ans
}
// 优化时间复杂度
// @lc code=end
