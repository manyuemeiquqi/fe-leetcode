/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function (nums) {
  nums.sort((a, b) => {
    const str1 = `${a}`
    const str2 = `${b}`
    return Number(str1 + str2) - Number(str2 + str1)
  })

  return nums.join('')
}
// 179的相反
