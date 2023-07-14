/*
 * @lc app=leetcode.cn id=847 lang=javascript
 *
 * [847] 访问所有节点的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number}
 */
const shortestPathLength = function (graph) {
  const queue = []
  const n = graph.length
  const seen = new Array(n).fill(0).map(() => new Array(1 << n).fill(false)) // 为避免重复搜索，记录[u,mask]是否为true，表示[u,mask]是否遍历过。
  for (let i = 0; i < n; i++) { // 把所有结点入队，表示广度优先搜索的第一个结点可以从任意结点开始（多源最短路）。
    queue.push([i, 1 << i, 0])
    seen[i][1 << i] = true
  }

  let ans = 0
  while (queue.length > 0) {
    const [u, mask, d] = queue.shift()
    if (mask === (1 << n) - 1) { // 当mask这个二进制数的每一位都是1，说明每一个结点都遍历过了，由于广度优先遍历，所以最早遍历完所有结点的路径就是最短路径。
      ans = d
      break
    }

    for (let i = 0; i < graph[u].length; i++) {
      const v = graph[u][i]
      const maskV = mask | (1 << v) // 把mask的第v位置为1，得到v结点路径经过的路径。
      if (!seen[v][maskV]) {
        queue.push([v, maskV, d + 1])
        seen[v][maskV] = true
      }
    }
  }
  return ans
}
// @lc code=end
