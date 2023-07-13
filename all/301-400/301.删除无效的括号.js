/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
  let l = 0
  let r = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      l++
    }
    else if (s[i] === ')') {
      if (l)
        l--
      else r++
    }
  }

  const ans = []
  dfs(0, '', 0, l, r)
  return ans

  function dfs(u, path, cnt, l, r) {
    if (u === s.length) {
      if (!cnt)
        ans.push(path)
      return
    }
    if (s[u] !== '(' && s[u] !== ')') {
      dfs(u + 1, path += s[u], cnt, l, r)
    }
    else if (s[u] === '(') {
      let k = u
      while (k < s.length && s[k] === '(') k++
      l -= k - u
      for (let i = k - u; i >= 0; i--) {
        if (l >= 0)
          dfs(k, path, cnt, l, r)
        path += '('
        l++
        cnt++
      }
    }
    else {
      let k = u
      while (k < s.length && s[k] === ')') k++
      r -= k - u
      for (let i = k - u; i >= 0; i--) {
        if (r >= 0 && cnt >= 0)
          dfs(k, path, cnt, l, r)
        path += ')'
        r++
        cnt--
      }
    }
  }
}
// @lc code=end
