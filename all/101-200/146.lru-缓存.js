/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function ListNode(key, val) {
  this.val = (val === undefined ? 0 : val)
  this.key = key
  this.prev = null
  this.next = null
}
const LRUCache = function (capacity) {
  this.head = new ListNode(-1, -1)
  this.tail = new ListNode(-2, -2)
  this.head.next = this.tail
  this.tail.prev = this.head

  this.capacity = capacity
  this.count = 0
  this.map = {}
}
LRUCache.prototype.insert = function (node) {
  node.next = this.head.next
  node.prev = this.head
  this.head.next.prev = node
  this.head.next = node
}

LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map[key]) {
    const node = this.map[key]
    this.remove(node)
    this.insert(node)
    return node.val
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) {
    const node = this.map[key]
    node.val = value
    this.remove(node)
    this.insert(node)
  }
  else {
    if (this.count === this.capacity) {
      const deleteNode = this.tail.prev
      this.remove(deleteNode)
      delete this.map[deleteNode.key]
    }
    else { this.count++ }

    const node = new ListNode(key, value)
    this.insert(node)
    this.map[key] = node
  }
}
// 看了题解，双向链表数据结构要会写，另一个是也能通过object插入顺序去做
// 还有一个要注意的，prototype 因为this的指向问题，不要用箭头函数
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
