/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  if (!root)
    return []
  // 层序遍历 reverse
  const queue = [root]
  const ans = [[root.val]]
  while (queue.length) {
    let len = queue.length
    const tmp = []
    while (len--) {
      const cur = queue.shift()
      if (cur.left)
        tmp.push(cur.left)

      if (cur.right)
        tmp.push(cur.right)
    }

    if (tmp.length) {
      queue.push(...tmp)
      ans.unshift(tmp.map(node => node.val))
    }
  }
  return ans
}
// 原来想reverse，看先评论，unshift 会更好一些
// @lc code=end
