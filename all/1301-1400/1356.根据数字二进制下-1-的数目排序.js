/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */

const sortByBits = function (arr) {
  const ans = []
  for (const item of arr) {
    let tmp = item
    let count = 0

    while (tmp) {
      tmp &= tmp - 1
      count++
    }
    ans[count] ? ans[count].push(item) : ans[count] = [item]
  }

  return ans.map(item => item.sort((a, b) => a - b)).flat(1)
}
// 看了题解，需要理解如何得到一个二进制数中1的个数，& 与运算 数值-1 就可以剔除一个1

// @lc code=end
