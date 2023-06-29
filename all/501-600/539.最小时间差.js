/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
  let res = Infinity
  timePoints = timePoints.map((item) => {
    const [h, m] = item.split(':')
    return Number(h) * 60 + Number(m)
  })
  timePoints.sort((a, b) => a - b)

  for (let i = 1; i < timePoints.length; i++) {
    let gap = timePoints[i] - timePoints[i - 1]
    gap = gap > 740 ? 1440 - gap : gap
    res = Math.min(gap, res)
  }
  let headGap = timePoints[timePoints.length - 1] - timePoints[0]
  headGap = headGap > 740 ? 1440 - headGap : headGap
  res = Math.min(headGap, res)
  return res
}
// @lc code=end
