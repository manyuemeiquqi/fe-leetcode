/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 多一次校验的关键 r >= l
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    for (let i = 0; i < m; i++) {
        let j = 0, k = n - 1
        while (k >= j) {
            let m = j + k >> 1
            if (matrix[i][m] == target) return true
            else if (matrix[i][m] > target) {
                k = m - 1
            } else {
                j = m + 1
            }
        }

    }
    return false
};
searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5)
// @lc code=end

