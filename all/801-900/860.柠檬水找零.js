/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  const has = [0, 0]
  for (let i = 0; i < bills.length; i++) {
    const target = bills[i] - 5
    if (target === 0)
      has[0]++
    if (target === 5) {
      if (has[0])
        has[0]--
      else return false
      has[1]++
    }
    if (target === 15) {
      if (!has[0]) {
        return false
      }
      else if (has[1]) {
        has[1]--
        has[0]--
      }
      else {
        has[0] -= 3
        if (has[0] < 0)
          return false
      }
    }
  }
  return true
}
// 优化时间
// @lc code=end
