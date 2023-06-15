/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const tmp = board[i].filter(item => item !== '.')
    if (tmp.length !== new Set(tmp).size)
      return false
  }
  for (let i = 0; i < 9; i++) {
    const set = new Set()
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === '.')
        continue
      if (set.has(board[j][i]))
        return false
      else
        set.add(board[j][i])
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set()
      for (let o = i * 3; o < i * 3 + 3; o++) {
        for (let k = j * 3; k < j * 3 + 3; k++) {
          if (board[o][k] === '.')
            continue
          if (set.has(board[o][k]))
            return false
          else
            set.add(board[o][k])
        }
      }
    }
  }
  return true
}
// 暴力模拟的，看看有没有其他解法
// @lc code=end
