/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function (nums) {
  const map = {
    A: 1,
    Q: 12,
    K: 13,
    J: 10,
  }

  nums = nums.map(item => map[item] ? map[item] : item).filter(item => item !== 0).sort((a, b) => a - b,
  )
  if (nums.length !== new Set(nums).size)
    return false
  if (nums[nums.length - 1] - nums[0] < 5)
    return true
  return false
}
// 这种有点脑筋急转弯，考虑下暴力怎么做，第一下没写出来
