/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = function (num, flag) {
  const a = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen',
    'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen',
    'Nineteen']
  const b = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy',
    'Eighty', 'Ninety']
  const c = [' Billion', ' Million', ' Thousand', ' Hundred']

  if (num >= 1_000_000_000) {
    if (num % 1_000_000_000)
      return `${numberToWords(Math.floor(num / 1_000_000_000))}${c[0]} ${numberToWords(Math.floor(num % 1_000_000_000), true)}`
    else return `${numberToWords(Math.floor(num / 1_000_000_000))}${c[0]}`
  }
  else if (num >= 1_000_000) {
    if (num % 1_000_000)
      return `${numberToWords(Math.floor(num / 1_000_000))}${c[1]} ${numberToWords(Math.floor(num % 1_000_000), true)}`
    else return `${numberToWords(Math.floor(num / 1_000_000))}${c[1]}`
  }
  else if (num >= 1_000) {
    if (num % 1_000)
      return `${numberToWords(Math.floor(num / 1_000))}${c[2]} ${numberToWords(Math.floor(num % 1_000), true)}`
    else return `${numberToWords(Math.floor(num / 1_000))}${c[2]}`
  }
  else if (num >= 100) {
    if (num % 100)
      return `${numberToWords(Math.floor(num / 100))}${c[3]} ${numberToWords(Math.floor(num % 100), true)}`
    else return `${numberToWords(Math.floor(num / 100))}${c[3]}`
  }
  else {
    if (num === 0 && flag)
      return ''
    if (num >= 20) {
      let res = b[Math.floor(num / 10) - 2]
      if (num % 10)
        res += ` ${a[num % 10]}`

      return res
    }
    else {
      return a[num]
    }
  }
}
// 完全的模拟，有点不优雅，需要优化下
// @lc code=end
