/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
const canCross = function (stones) {
  const len = stones.length
  const cache = {}
  const dfs = (cur, jumpLength) => {
    if (cur === len - 1)
      return true
    if (cache[`${cur}:${jumpLength}`])
      return false

    for (let i = cur + 1; i < len; i++) {
      const length = stones[i] - stones[cur]
      if (length > jumpLength + 1)
        break
      else if (length < jumpLength - 1)
        continue
      else if (dfs(i, length))
        return true
    }
    cache[`${cur}:${jumpLength}`] = true
    return false
  }
  return dfs(0, 0)
}
// 看了题解，记忆化缓存
// @lc code=end
