/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  function isValid(str) {
    let l = 0
    let r = str.length - 1
    while (r > l) {
      if (str[l] !== str[r])
        return [l, r]

      l++
      r--
    }
    return true
  }
  const res = isValid(s)
  if (res === true) {
    return true
  }
  else {
    const [l, r] = isValid(s)
    return isValid(s.slice(l + 1, r + 1)) === true || isValid(s.slice(l, r)) === true
  }
}
// 双指针一次判断，有没有更好的方法
// @lc code=end
