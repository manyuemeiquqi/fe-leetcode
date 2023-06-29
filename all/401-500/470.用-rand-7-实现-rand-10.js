/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
const rand10 = function () {
  const t = (rand7() - 1) * 7 + rand7()
  if (t > 40)
    return rand10()
  return t % 10 || 10
}
// 看了题解 想要ran10，必须执行两次
// 直接记忆吧

// @lc code=end
