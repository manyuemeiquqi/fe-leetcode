/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    //建立一张图
    // for ()
    let graph = {}, visit = {}
    for (let i = 0; i < equations.length; i++) {
        if (!graph[equations[i][0]]) {
            graph[equations[i][0]] = []
        }
        if (!graph[equations[i][1]]) {
            graph[equations[i][1]] = []
        }

        graph[equations[i][0]].push([equations[i][1], values[i]])
        graph[equations[i][1]].push([equations[i][0], 1 / values[i]])
    }
    return queries.map(([a, b]) => dfs(a, b))
    function dfs(a, b) {
        if (!graph[a]) return -1
        for (let [down, value] of graph[a]) {
            if (down == b) return value
        }
        for (let [down, value] of graph[a]) {
            if (!visit[down]) {
                visit[down] = true
                const val = dfs(down, b)
                delete visit[down]
                if (val !== -1) return value * val
            }
        }
        return -1

    }
};

calcEquation([["a", "b"], ["b", "c"]],
    [2.0, 3.0],
    [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]])
// @lc code=end

