/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const used = Array.from({ length: m }, () => new Array(n).fill(false))
  let ans = false

  const dfs = (i, j, k) => {
    if (i < 0 || i >= m || j < 0 || j >= n)
      return
    if (used[i][j])
      return
    if (board[i][j] === word[k]) {
      used[i][j] = true
      if (k === word.length - 1) {
        ans = true
        return
      }
      dfs(i + 1, j, k + 1)
      dfs(i - 1, j, k + 1)
      dfs(i, j + 1, k + 1)
      dfs(i, j - 1, k + 1)
      used[i][j] = false
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0])
        dfs(i, j, 0)
    }
  }
  return ans
}
