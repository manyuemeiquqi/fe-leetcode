/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  let str = ''
  const dfs = (root) => {
    if (!root) {
      str += '#,'
      return
    }
    else { str += `${root.val},` }
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return str
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  let i = 0
  // data.split()
  const build = () => {
    if (data[i] === '#') {
      i += 2 // 跳过逗号
      return null
    }
    else {
      let cur = ''
      while (i < data.length && data[i] !== ',') {
        cur += data[i]
        i++
      }
      i++
      const root = new TreeNode(cur)
      root.left = build()
      root.right = build()
      return root
    }
  }
  return build()
}
// 看了题解
// 前序其实不太好处理，层序好理解，这里需要全局定义一个移动的指针,而不是将指针当作函数参数传入，这样无法确定右边子树的指针

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
