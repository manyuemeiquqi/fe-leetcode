/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

const Trie = function () {
  this.arr = []
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.arr.push(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.arr.includes(word)
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.arr.some(item => item.indexOf(prefix, 0) === 0)
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// 答非所问，需要写成树结构
// @lc code=end
