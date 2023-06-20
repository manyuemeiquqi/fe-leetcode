/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  // 考虑下排列的规律，先放个子高的，插入位置按从people[i][1]插入 循环下去，就满足题目条件
  people.sort((a, b) => {
    if (a[0] === b[0])
      return a[1] - b[1]
    return b[0] - a[0]
  })
  const ans = []
  for (let i = 0; i < people.length; i++)
    ans.splice(people[i][1], 0, people[i])
  return ans
}
// @lc code=end
