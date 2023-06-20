/*
 * @lc app=leetcode.cn id=1353 lang=javascript
 *
 * [1353] 最多可以参加的会议数目
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
const maxEvents = function (events) {
  let count = 0
  const had = []

  events.sort((a, b) => a[1] - b[1])

  for (let i = 0, len = events.length; i < len; i++) {
    const [start, end] = events[i]
    for (let j = start; j <= end; j++) {
      if (had[j] === undefined) {
        had[j] = 1
        count++
        break
      }
    }
  }

  return count
}
// @lc code=end
