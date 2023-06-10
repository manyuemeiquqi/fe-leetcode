/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 数字0~9对应的ASCII码（十进制）为“48”~“57”

// 大写字母A~Z对应的ASCII码（十进制）为“65”~“90”

// 小写字母a~z对应的百ASCII码（十进制）为"97"~“122”
const isPalindrome = function (s) {
  s = s.toLocaleLowerCase()
  let l = 0
  let r = s.length - 1
  while (r > l) {
    const lASCII = s[l].charCodeAt()
    if (!((lASCII <= 57 && lASCII >= 48) || (lASCII >= 97 && lASCII <= 122))) {
      l++
      continue
    }
    const rASCII = s[r].charCodeAt()
    if (!((rASCII <= 57 && rASCII >= 48) || (rASCII >= 97 && rASCII <= 122))) {
      r--
      continue
    }
    if (s[r].toLowerCase() !== s[l].toLowerCase())
      return false
    r--
    l++
  }
  return true
}

// @lc code=end
