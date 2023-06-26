/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const arr = [{
    val: 1,
    label: 'I',
  },
  {
    val: 4,
    label: 'IV',
  },
  {
    val: 5,
    label: 'V',
  },
  {
    val: 9,
    label: 'IX',
  },
  {
    val: 10,
    label: 'X',
  },
  {
    val: 40,
    label: 'XL',
  },
  {
    val: 50,
    label: 'L',
  }, {
    val: 90,
    label: 'XC',
  },

  {
    val: 100,
    label: 'C',
  },
  {
    val: 400,
    label: 'CD',
  },
  {
    val: 500,
    label: 'D',
  },
  {
    val: 900,
    label: 'CM',
  },
  {
    val: 1000,
    label: 'M',
  },
  ]
  let ans = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i]
    while (num >= cur.val) {
      num -= cur.val
      ans += cur.label
    }
  }
  return ans
}
// @lc code=end
