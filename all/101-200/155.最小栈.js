/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

const MinStack = function () {
  this.stk = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stk.push(val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stk.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stk[this.stk.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const tmp = [...this.stk]
  return tmp.sort((a, b) => a - b)[0]
}
// 没有想到好办法，需要优化
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
