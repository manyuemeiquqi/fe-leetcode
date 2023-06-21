/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const set = new Set()
  const ans = []
  const len = s.length
  for (let i = 0; i < len - 9; i++) {
    const dna = s.slice(i, i + 10)
    if (set.has(dna))
      ans.push(dna)
    else
      set.add(dna)
  }
  return Array.from(new Set(ans))
}
// @lc code=end
