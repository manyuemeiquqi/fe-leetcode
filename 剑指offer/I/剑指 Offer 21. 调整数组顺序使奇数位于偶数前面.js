/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function (nums) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    while (nums[i] % 2 === 1 && i < j)
      i++
    while (nums[j] % 2 === 0 && i < j)
      j--

    [nums[i], nums[j]] = [nums[j], nums[i]]
    i++
    j--
  }
  return nums
}
