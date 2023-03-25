/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let ans = false
    const m = board.length, n = board[0].length
    let used = Array.from({ length: m }, () => new Array(n).fill(false))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0] && dfs(i, j, 0)) {
                return true
            }
        }
    }
    return ans
    function dfs(row, col, idx) {
        // 四个个方向可以继续探测 row+1 col+1 row-1 col-1
        if (idx == word.length) return true
        if (row < 0 || row >= m || col < 0 || col >= n) return false
        if (used[row][col] || board[row][col] !== word[idx]) return false
        used[row][col] = true
        const findRes = dfs(row + 1, col, idx + 1) || dfs(row, col - 1, idx + 1) || dfs(row, col + 1, idx + 1) || dfs(row - 1, col, idx + 1)
        if (!findRes) {
            used[row][col] = false
        }
        return findRes
    }
};
exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    "ABCCED")
// @lc code=end

