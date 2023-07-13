/*
 * @lc app=leetcode.cn id=1654 lang=javascript
 *
 * [1654] 到家的最少跳跃次数
 */

// @lc code=start
/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
const minimumJumps = function (forbidden, a, b, x) {
  let ans = Infinity
  // cur 次数 distance距离 bcount 连续b次数
  const map = {}

  for (const item of forbidden)
    map[item] = true

  function dfs(cur, distance, bCount) {
    if (distance > 6000 || distance < 0 || map[distance])
      return
    if (bCount === 0)
      map[distance] = true
    if (distance === x)
      ans = Math.min(cur, ans)

    dfs(cur + 1, distance + a, 0)
    if (bCount === 0)
      dfs(cur + 1, distance - b, bCount + 1)
  }
  dfs(0, 0, 0)
  if (ans === Infinity)
    return -1
  return ans
}
// 看了题解，要记忆话，这里记忆化只能是左走后在记忆化，另一个根据直觉，前进的范围输入用例做一定的限制
// @lc code=end
