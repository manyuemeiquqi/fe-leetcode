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
// bfs和dfs都可以进行
// 因为存在负数，要先转换成数组，然后再拼接成字符串
var serialize = function (root) {
    const queue = [root]
    let ans = []
    while (queue.length) {
        const cur = queue.shift()
        if (cur) {
            ans.push(cur.val)
            queue.push(cur.left)
            queue.push(cur.right)
        } else {
            ans.push("X")
        }
    }
    console.log('ans: ', ans);

    return ans.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data == 'X')
        return null
    const arr = data.split(',')
    console.log('data: ', arr);
    const root = new TreeNode(arr[0])
    const queue = [root]

    let point = 1
    while (point < arr.length) {
        const node = queue.shift()
        let leftVal = arr[point]
        let rightVal = arr[point + 1]
        if (leftVal != 'X') {
            let leftNode = new TreeNode(leftVal)
            node.left = leftNode
            queue.push(leftNode)
        }
        if (rightVal != 'X') {
            let rightNode = new TreeNode(rightVal)
            node.right = rightNode
            queue.push(rightNode)
        }
        point += 2
    }


    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

