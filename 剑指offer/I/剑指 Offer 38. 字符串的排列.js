/**
 * @param {string} s
 * @return {string[]}
 */
const permutation = function (s) {
  const ans = []
  const dfs = (path, u) => {
    if (u.length === 0) {
      ans.push(path)
      return
    }
    for (let j = 0; j < u.length; j++)
      dfs(path + u[j], [...u.slice(0, j), ...u.slice(j + 1)])
  }
  dfs('', s.split(''))
  return Array.from(new Set(ans))
}
// 优化剪枝，不用set
