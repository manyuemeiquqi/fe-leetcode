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
var letterCombinations = function (digits) {
  if (digits == "") return [];
  const map = {
    //电话数字到字母的映射
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const ans = [];
  const currentStr = [];
  let arr = digits.split("");
  function dfs(arr, index) {
    if (currentStr.length == arr.length) {
      ans.push(currentStr.join(""));
      return;
    }
    // for()
    let mapValue = map[arr[index]];
    for (let i = 0; i < mapValue.length; i++) {
      currentStr.push(mapValue[i]);
      dfs(arr, index + 1);
      currentStr.pop();
    }
  }
  dfs(arr, 0);

  return ans;
};
letterCombinations("1542");
// @lc code=end
