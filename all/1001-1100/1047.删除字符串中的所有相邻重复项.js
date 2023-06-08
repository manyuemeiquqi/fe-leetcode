/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function (s) {
  const stk = []

  for (let i = 0; i < s.length; i++) {
    if (stk[stk.length - 1] === s[i]) {
      while (stk[stk.length - 1] === s[i])
        stk.pop()
    }
    else {
      stk.push(s[i])
    }
  }
  return stk.join('')
  // 第一次想的是遍历原地操作，这样需要while 不断遍历，
  // 提示后 不如新开辟空间 ，然后单个判断
}
// @lc code=end
