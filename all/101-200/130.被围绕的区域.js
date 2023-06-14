/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  const m = board.length
  const n = board[0].length
  if (m <= 2 || n <= 2)
    return
  const u = Array.from(new Array(m), () => new Array(n).fill(false))
  const dfs = (i, j) => {
    if (i < 0 || i >= m)
      return
    if (j < 0 || j >= n)
      return
    if (u[i][j])
      return
    if (board[i][j] === 'X')
      return
    else
      board[i][j] = 'O1'
    u[i][j] = true
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  for (let i = 0; i < n - 1; i++) {
    if (board[0][i] === 'O')
      dfs(0, i)
  }
  for (let i = 0; i < m - 1; i++) {
    if (board[i][n - 1] === 'O')
      dfs(i, n - 1)
  }
  for (let i = n - 1; i > 0; i--) {
    if (board[m - 1][i] === 'O')
      dfs(m - 1, i)
  }

  for (let i = m - 1; i > 0; i--) {
    if (board[i][0] === 'O')
      dfs(i, 0)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O')
        board[i][j] = 'X'
      else if (board[i][j] === 'O1')
        board[i][j] = 'O'
    }
  }
}
// @lc code=end
