/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
//  不重叠的重复必要 前一个的右边界 <= 下一个的左边界
  intervals.sort((a, b) => {
    if (a[1] === b[1])
      return b[0] - a[0]
    return a[1] - b[1]
  })
  let prev = intervals[0]
  let ans = 0
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][1] === prev[1]) {
      ans++
      continue
    }
    else {
      if (prev[1] <= intervals[i][0])
        prev = intervals[i]
      else
        ans++
    }
  }
  return ans
}
// 很像会议室那个题最多开多少个会，先进行结束时间（右边界）最早（小）的任务，然后对于相同右边界，去时间跨度，长度跨度最小的已达到最多次会议，最少删除次数的目的·
// @lc code=end
