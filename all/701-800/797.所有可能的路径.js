/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const n = graph.length - 1
  const ans = []
  const dfs = (u, path) => {
    if (u === n) {
      ans.push([...path, u])
      return
    }
    for (const node of graph[u])
      dfs(node, [...path, u])
  }
  dfs(0, [])
  return ans
}
// 能否优化空间
// @lc code=end
