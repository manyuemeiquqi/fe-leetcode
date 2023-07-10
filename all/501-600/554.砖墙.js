/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function (wall) {
  // 设计一个计数砖缝的数组
  const countArr = [0]
  let maxIdx = 0
  for (let i = 0; i < wall.length; i++) {
    let cur = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      cur += wall[i][j]
      countArr[cur] = countArr[cur] ? countArr[cur] + 1 : 1
      maxIdx = countArr[maxIdx] >= countArr[cur] ? maxIdx : cur
    }
  }
  if (countArr.length === 0)
    return wall.length
  return wall.length - countArr[maxIdx]
}
// @lc code=end
