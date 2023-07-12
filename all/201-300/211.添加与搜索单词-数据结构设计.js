/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

// 实现一个前缀树
// 前缀树要有一个属性 isWord 用来判断，从根节点到当前节点是否组成一个单词

class TrieNode {
  constructor() {
    this.isWord = false
    this.children = {}
  }

  insertWord(str) {
    let cur = this
    for (let i = 0; i < str.length; i++) {
      if (!cur.children[str[i]])
        cur.children[str[i]] = new TrieNode()
      cur = cur.children[str[i]]
    }
    cur.isWord = true
  }
}
const WordDictionary = function () {
  this.root = new TrieNode()
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.root.insertWord(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (i, node) => {
    if (i === word.length)
      return node.isWord
    if (word[i] === '.') {
      for (const key in node.children) {
        if (dfs(i + 1, node.children[key]))
          return true
      }
    }
    else if (node.children[word[i]]) {
      node = node.children[word[i]]
      return dfs(i + 1, node)
    }
    return false
  }

  return dfs(0, this.root)
}
// 看了题解，主要是去学习怎么构造一个前缀树
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
