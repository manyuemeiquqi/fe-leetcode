/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const length = nums.length
  let ans = -Infinity
  let cur = -Infinity
  for (let i = 0; i < length;) {
    if (cur + nums[i] >= 0) {
      cur += nums[i]

      ans = Math.max(ans, cur)
      i++
    }
    else {
      cur = 0
      while (nums[i] < 0 && i < length) {
        ans = Math.max(ans, nums[i])

        i++
      }
    }
  }
  return ans
}
