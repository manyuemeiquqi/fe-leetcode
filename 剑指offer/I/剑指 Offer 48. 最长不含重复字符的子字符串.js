/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const map = {

  }
  let r = 0
  let l = 0
  let ans = 0
  while (r < s.length) {
    if (!map[s[r]]) {
      map[s[r]] = 1
      ans = Math.max(ans, r - l + 1)
    }
    else {
      map[s[r]]++
      while (map[s[r]] > 1) {
        map[s[l]]--
        l++
      }
    }
    r++
  }
  return ans
}
