/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//1、是 模拟出四个坐标的表达方式
// 2、是 注意内层循环的边界
var rotate = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < (n / 2); i++) {
        for (let j = i; j < (n - 1 - i); j++) {
            [matrix[i][j], matrix[j][n - 1 - i], matrix[n - 1 - i][n - 1 - j], matrix[n - 1 - j][i]] =
                [matrix[n - 1 - j][i], matrix[i][j], matrix[j][n - 1 - i], matrix[n - 1 - i][n - 1 - j]]
        }
    }
    return matrix
};
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])
// @lc code=end

