/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const find = (i, j, k) => {
    if (nums1.length === i)
      return nums2[j + k - 1]
    if (nums2.length === j)
      return nums1[i + k - 1]
    if (k === 1)
      return Math.min(nums1[i], nums2[j])

    const t1 = Math.min(i + (k >> 1), nums1.length)
    const t2 = Math.min(j + (k >> 1), nums2.length)
    if (nums1[t1 - 1] > nums2[t2 - 1])
      return find(i, t2, k - (t2 - j))

    else
      return find(t1, j, k - (t1 - i))
  }
  const len = nums1.length + nums2.length

  if (len % 2 === 0)
    return (find(0, 0, len >> 1) + find(0, 0, (len >> 1) + 1)) / 2
  else
    return find(0, 0, (len >> 1) + 1)
}
// 看了题解，二分太麻烦，考虑递归，类似双指针，y神要根据长度调整传入数组顺序，这里做了调整，一旦某个指针到达数组尾部，直接就可以在另一个数组返回了
// @lc code=end
