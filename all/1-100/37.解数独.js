/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
  const a = Array.from(new Array(9), () => new Array(9).fill(false))
  const b = Array.from(new Array(9), () => new Array(9).fill(false))

  const c = Array.from(new Array(3),
    () => Array.from({ length: 3 }, () => new Array(9).fill(false)))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        a[i][board[i][j] - 1] = true
        b[j][board[i][j] - 1] = true
        c[i / 3 >> 0][j / 3 >> 0][board[i][j] - 1] = true
      }
    }
  }

  const dfs = (x, y) => {
    if (y === 9) {
      if (x === 8)
        return true
      x++
      y = 0
    }
    if (board[x][y] !== '.')
      return dfs(x, y + 1)

    const judgeValid = (a, b, c, num) => {
      return !a[num] && !b[num] && !c[num]
    }

    for (let i = 0; i < 9; i++) {
      if (judgeValid(a[x], b[y], c[x / 3 >> 0][y / 3 >> 0], i)) {
        a[x][i] = true
        b[y][i] = true
        c[x / 3 >> 0][y / 3 >> 0][i] = true
        board[x][y] = `${i + 1}`
        if (dfs(x, y + 1))
          return true
        board[x][y] = '.'
        a[x][i] = false
        b[y][i] = false
        c[x / 3 >> 0][y / 3 >> 0][i] = false
      }
    }
  }
  dfs(0, 0)
}
// 看了题解，有点麻烦，本质可以暴力，但是要注意合法性判断，以及回溯，也就是现场复原
// @lc code=end
