/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const ans = intervals.reduce((prev, cur) => {
    const stackTop = prev[prev.length - 1]
    if (stackTop[1] >= cur[0])
      stackTop[1] = Math.max(stackTop[1], cur[1])

    else
      prev.push(cur)

    return prev
  }, [intervals[0]])
  return ans
}
// @lc code=end
