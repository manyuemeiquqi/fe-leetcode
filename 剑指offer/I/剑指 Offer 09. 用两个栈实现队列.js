const CQueue = function () {
  this.stk1 = []
  this.stk2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stk1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stk1.length)
    return -1
  while (this.stk1.length) {
    const tmp = this.stk1.pop()
    this.stk2.push(tmp)
  }
  const res = this.stk2.pop()
  while (this.stk2.length) {
    const tmp = this.stk2.pop()
    this.stk1.push(tmp)
  }
  return res
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
