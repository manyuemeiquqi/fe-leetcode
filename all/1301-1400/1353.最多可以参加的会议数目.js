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
  events.sort((a, b) => a[1] - b[1])
  let ans = 0
  const arr = []
  for (let i = 0; i < events.length; i++) {
    for (let j = events[i][0]; j <= events[i][1]; j++) {
      if (arr[j] === undefined) {
        arr[j] = 1
        ans++
        break
      }
    }
  }
  return ans
  // let count = 0
  // const had = []

  // events.sort((a, b) => a[1] - b[1])

  // for (let i = 0; i < events.length; i++) {
  //   const [start, end] = events[i]
  //   for (let j = start; j <= end; j++) {
  //     if (had[j] === undefined) {
  //       had[j] = 1
  //       count++
  //       break
  //     }
  //   }
  // }

  // return count
}
// 贪心算法  用堆优化时间复杂度，这里可以发现，同一种写法，解构变量也会影响时间复杂度
// @lc code=end
