/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function (s) {
  const len = s.length
  const rev_s = s.split('').reverse().join('') // rev_s：banana
  for (let i = len; i >= 0; i--) { // ananab==banana?、anana==anana?、……
    if (s.substring(0, i) === rev_s.substring(len - i))
      return rev_s.substring(0, len - i) + s // 返回 b + ananab
  }
//   该题可以转化为找到字符串的最长前缀回文，子串以后的逆序到前面就可以满足题目要求
// kmp算法 https://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
}

// kmp可以看
// https:// leetcode.cn/problems/shortest-palindrome/solutions/392676/shou-hua-tu-jie-cong-jian-dan-de-bao-li-fa-xiang-d/
// 看了题解，没有继续深深入kmp 跟 字符串hash ，这两个都可以较高效率的匹配字符串

// @lc code=end
