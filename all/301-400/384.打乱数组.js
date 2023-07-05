/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.arr = [...nums]
  this.cur = [...nums]
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.cur = [...this.arr]
  return this.cur
}

/**
 * @return {number[]}
 */

// (0-1) 目的生成一个i到len-1
Solution.prototype.shuffle = function () {
  const res = this.cur
  const len = res.length
  for (let i = len - 1; i >= 0; i--) {
    // Math.random生成的是[0,1)的数，要注意
    const idx = Math.floor(Math.random() * (i + 1));
    // 生成0-i
    [res[i], res[idx]] = [res[idx], res[i]]
  }
  return res
}
// 要背，洗牌算法，另外一个是js随机数的生成
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
