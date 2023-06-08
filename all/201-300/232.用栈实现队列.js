/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

const MyQueue = function () {
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.queue.splice(0, 1)
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.queue.length
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 看了题解，好像只能用 栈的性质
// @lc code=end
