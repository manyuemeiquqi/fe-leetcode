/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0)
    return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const ans = []
  const dfs = (u, path) => {
    if (u === digits.length) {
      ans.push(path)
    }
    else {
      for (const i of map[digits[u]])
        dfs(u + 1, path + i)
    }
  }
  dfs(0, '')
  return ans
}
// 看了题解，半天写不出来的原因是找不到如何向下dfs，如果在外定义一个path，需要明确多会去pop跟
// vector<string> letterCombinations(string digits) {
//   if (digits.empty()) return ans;
//   dfs(digits, 0, "");
//   return ans;
// }

// void dfs(string& digits, int u, string path) {
//   if (u == digits.size()) ans.push_back(path);
//   else {
//       for (auto c : strs[digits[u] - '0'])
//           dfs(digits, u + 1, path + c);
//   }
// }

// letterCombinations('23')
// @lc code=end
