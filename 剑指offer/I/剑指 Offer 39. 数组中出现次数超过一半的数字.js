/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[nums.length >> 1]
}
