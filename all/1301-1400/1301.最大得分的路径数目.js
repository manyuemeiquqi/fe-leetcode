/*
 * @lc app=leetcode.cn id=1301 lang=javascript
 *
 * [1301] 最大得分的路径数目
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {number[]}
 */
/**
 * @param {string[]} board
 * @return {number[]}
 */
const pathsWithMaxScore = function (board) {
  const m = board.length
  const n = board[0].length
  board = board.map(item => item.split(''))
  const mod = 1e9 + 7
  board[0][0] = '0'
  board[m - 1][n - 1] = '0'
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-Infinity))
  const dp1 = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  dp[m - 1][n - 1] = 0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (board[i][j] === 'X' || (i === m - 1 && j === n - 1))
        continue
      dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j + 1], dp[i + 1][j])
      dp[i][j] += (+board[i][j])
    }
  }
  if (dp[0][0] < 0)
    return [0, 0]
  dp1[m - 1][n - 1] = 1
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (board[i][j] === 'X')
        continue
      let target = dp[i][j]
      target -= (+board[i][j])

      let cnt = 0
      if (dp[i + 1][j + 1] === target)
        cnt += dp1[i + 1][j + 1]
      if (dp[i + 1][j] === target)
        cnt += dp1[i + 1][j]
      if (dp[i][j + 1] === target)
        cnt += dp1[i][j + 1]
      dp1[i][j] = (dp1[i][j] + cnt) % mod
    }
  }
  return [dp[0][0], dp1[0][0]]
}
// 这道题写的很难受，有两点，一个是初始化没有做好，对于有障碍物的没有合理的处理下去，有些测试用例无法通过，二是开始就应该把board处理一遍，board给的就不是很容易进行数据处理
// 最后导致代码还是很冗余，需要优化下结构
// @lc code=end
