/*
 * @lc app=leetcode.cn id=967 lang=javascript
 *
 * [967] 连续差相同的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function (n, k) {
  const ans = []
  const dfs = (i, path) => {
    if (path.length) {
      if (path.length === n) {
        ans.push(+path.join(''))
        return
      }
    }
    if (i === 0) {
      for (let j = 1; j < 10; j++)
        dfs(i + 1, [j])
    }
    else {
      const prev = path.at(-1)
      const a = prev + k
      const b = prev - k
      if (a >= 0 && a <= 9)
        dfs(i + 1, [...path, a])
      if (b >= 0 && b <= 9 && a !== b)
        dfs(i + 1, [...path, b])
    }
  }
  dfs(0, [])
  return ans
}
// @lc code=end
