/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
const findWhetherExistsPath = function (n, graph, start, target) {
  const g = {
  }
  for (const r of graph) {
    const [a, b] = r
    if (g[a])
      g[a].push(b)
    else
      g[a] = [b]
  }

  let ans = false
  const dfs = (i, path, u) => {
    if (i === target) {
      ans = true
      return
    }
    const arr = g[i]
    if (arr) {
      for (let k = 0; k < arr.length; k++) {
        if (!u[i])
          dfs(arr[k], [...path, i], { ...u, i: true })
      }
    }
  }
  dfs(start)
  return ans
}
