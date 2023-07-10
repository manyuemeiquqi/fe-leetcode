/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
const numWays = function (n, relation, k) {
  const g = {
  }
  for (const r of relation) {
    const [a, b] = r
    if (g[a])
      g[a].push(b)
    else
      g[a] = [b]
  }

  const ans = []
  const dfs = (i, path, j) => {
    if (j === k) {
      if (i === n - 1)
        ans.push([...path, i])
      return
    }
    const arr = g[i]
    if (g[i]) {
      for (let k = 0; k < arr.length; k++)
        dfs(arr[k], [...path, i], j + 1)
    }
  }
  dfs(0, [], 0)

  return ans
}
numWays(5, [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], 3)
