/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ans = [];
  const map = {};
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }

  ans = Object.values(map);
  return ans;
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// @lc code=end

