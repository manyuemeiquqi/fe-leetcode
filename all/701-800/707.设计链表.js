/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

const MyLinkedList = function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  this.head = new ListNode()
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this.head
  let count = -1
  while (cur) {
    if (count === index)
      return cur.val
    count++
    cur = cur.next
  }
  return -1
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const headNext = this.head.next
  this.head.next = new ListNode(val)
  this.head.next.next = headNext
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.head
  while (cur.next)
    cur = cur.next
  cur.next = new ListNode(val)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let cur = this.head
  let count = -1
  let tail
  while (cur) {
    if (count + 1 === index) {
      const next = cur.next
      const tmp = new ListNode(val)
      tmp.next = next
      cur.next = tmp
      return
    }
    count++
    tail = cur
    cur = cur.next
  }
  if (index === count)
    tail.next = new ListNode(val)
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.head
  let count = -1

  while (cur) {
    if (count + 1 === index) {
      if (cur.next) {
        const targetNext = cur.next.next
        cur.next = targetNext
        return
      }
    }
    count++
    cur = cur.next
  }
}
// 有几个位置的兜底判断?要注意 优化时间复杂度，空间
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
