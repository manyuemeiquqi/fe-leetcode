/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = function (nums) {
  if (nums[nums.length - 1] > nums[0])
    return nums[0]
  while (nums[nums.length - 1] === nums[nums.length - 2])
    nums.pop()
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = l + r >> 1
    if (nums[mid] >= nums[0])
      l = mid + 1
    else r = mid
  }
  return nums[l]
}
