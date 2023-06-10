/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function (arr) {
  const len = arr.length
  const sumArr = new Array(len)
  arr.reduce((prev, cur, index) => {
    const sum = prev + cur
    sumArr[index] = sum
    return sum
  }, 0)
  const total = sumArr[len - 1]
  if (!Number.isInteger(total))
    return false

  let times = 1
  for (let i = 0; i < len; i++) {
    if (sumArr[i] === (total / 3) * times)
      times++
    if (times === 3 && i !== len - 1)
      return true
  }
  return false
}

// 写算法尽量只用 for  for in for of 减少使用，因为优化的时候容易拿到index
// 经验 数组长度尽量通过一个变量保存下来，后边很可能会用
// @lc code=end
