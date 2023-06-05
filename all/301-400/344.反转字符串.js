/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  const loopCount = s.length >> 1

  for (let i = 0; i < loopCount; i++)
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
}
// 优化时间复杂度
// @lc code=end
