/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  // 要找到所有的可能性
  // 规则 1~3 0~255 没有前导0
  const path = []
  const len = s.length
  const ans = []
  const dfs = (cur, i) => {
    if (path.length === 4) {
      if (i === len)
        ans.push(path.join('.'))
      return
    }
    if (cur[0] === '0')
      return
    cur += s[i]
    if (cur.length < 3)
      dfs(cur, i + 1)
    if (Number(cur) <= 255 && Number(cur) >= 0) {
      path.push(cur)
      dfs('', i + 1)
      path.pop()
    }
  }
  dfs('', 0)
  return ans
}
// 写的不算很顺利，需要写的优雅一些，同时可以作为调试案例
// @lc code=end
