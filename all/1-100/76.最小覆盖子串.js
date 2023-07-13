/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  let count = 0
  const map = {}
  for (const i of t) {
    if (map[i]) {
      map[i]++
    }
    else {
      map[i] = 1
      count++
    }
  }

  let ans
  for (let i = 0, j = 0, c1 = 0; j < s.length; j++) {
    // 什么时候左指针移动
    // 覆盖并且左指针目前的指向是多余的 （不管是不是）
    // 什么时候移动右指针，不满足
    if (map[s[j]] !== undefined) {
      if (--map[s[j]] === 0)
        c1++
    }
    if (c1 === count) {
      while ((map[s[i]] < 0 || map[s[i]] === undefined)) {
        if (map[s[i]] !== undefined)
          map[s[i]]++
        i++
      }
    }

    if (c1 === count) {
      if (ans === undefined || s.slice(i, j + 1).length < ans.length)
        ans = s.slice(i, j + 1)
    }
  }
  return ans || ''
}
// 可以想到滑动窗口，难点是右指针满足什么条件再去缩小左边界， 首先要满足题意，覆盖，然后就是左指针指向的元素是没有贡献的，1 计数已经足够了，2根本不需要这个元素
// minWindow('ADOBECODEBANC',
//   'ABC')
// @lc code=end
