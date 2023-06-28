/*
 * @lc app=leetcode.cn id=1145 lang=javascript
 *
 * [1145] 二叉树着色游戏
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
const btreeGameWinningMove = function (root, n, x) {
  let ans = false
  const target = Math.ceil(n / 2)
  const dfs = (root) => {
    if (!root)
      return 0
    if (ans)
      return
    const lC = dfs(root.left)
    const rC = dfs(root.right)
    if (root.val === x) {
      // 这里意思是堵上面 堵左子树 堵右子树，只要这三个方向有一个方向节点大于n/2 2玩家就可以赢
      if (lC >= target || rC >= target || n - lC - rC - 1 >= target)
        ans = true
    }
    return lC + rC + 1
  }
  dfs(root)
  return ans
}
// 看了题解
// @lc code=end
