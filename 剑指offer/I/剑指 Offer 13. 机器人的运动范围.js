/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function (m, n, k) {
  const getVal = (i, j) => {
    i = `${i}`
    j = `${j}`
    let count = 0
    for (let k = 0; k < i.length; k++)
      count += +i[k]

    for (let k = 0; k < j.length; k++)
      count += +j[k]

    return count
  }
  let ans = 0
  const u = Array.from(new Array(m), () => new Array(n).fill(false))
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || getVal(i, j) > k || u[i][j])
      return
    ans++
    u[i][j] = true
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  dfs(0, 0)
  return ans
}
