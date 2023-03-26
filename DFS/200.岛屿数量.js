/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
//这里注意数组里面是字符串0 ，因此if的时候要注意 if条件判断为if(grid[x][y] == '0')而不是 if(!grid[x][y])
var numIslands = function (grid) {
    let ans = 0
    let m = grid.length, n = grid[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j)
                ans++
            }
        }
    }
    return ans
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] == '0')
            return
        grid[x][y] = '0'
        dfs(x - 1, y)
        dfs(x, y - 1)
        dfs(x + 1, y)
        dfs(x, y + 1)
    }
};
numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]])
// @lc code=end

