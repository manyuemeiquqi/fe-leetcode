/*
 * @lc app=leetcode.cn id=1240 lang=javascript
 *
 * [1240] 铺瓷砖
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const tilingRectangle = function (n, m) {
  const st = Array.from(Array(n), () => Array(m))
  const check = (x, y, len) => {
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (st[i][j])
          return false
      }
    }
    return true
  }
  const fill = (x, y, len, t) => {
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++)
        st[i][j] = t
    }
  }

  let ans = 1e9
  const dfs = (x, y, cnt) => {
    if (cnt >= ans)
      return // 最优性剪枝
    if (x === n) {
      ans = cnt
      return
    }
    if (y === m) {
      dfs(x + 1, 0, cnt)
      return
    }
    if (st[x][y]) {
      dfs(x, y + 1, cnt)
      return
    }
    // 正方形从大到小搜索
    for (let len = Math.min(n - x, m - y); len; len--) {
      if (check(x, y, len)) {
        fill(x, y, len, true)
        dfs(x, y + 1, cnt + 1)
        fill(x, y, len, false)
      }
    }
  }
  dfs(0, 0, 0)
  return ans
}
// 看题解
// @lc code=end
