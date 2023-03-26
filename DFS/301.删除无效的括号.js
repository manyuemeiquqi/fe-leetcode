/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */

// 合法括号序列的性质
// 1、左右括号数量相等
// 2、括号序列的任意一个前缀 满足左括号数量大于等于右边括号的数量

var removeInvalidParentheses = function (str) {
    let lCount = 0, ans = [], rCount = 0

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '(') lCount++
        else if (str.charAt(i) == ')') {
            lCount > 0 ? lCount-- : rCount++
        }
        // 计算出需要删除的l 跟 r 
    }
    dfs(lCount, rCount, 0)
    return Array.from(new Set(ans))

    function dfs(l, r, idx) {
        if (!l && !r) {
            console.log(str);
            if (isValid(str)) {
                ans.push(str)
            }
            return
        }
        if (l + r > str.length - idx) return

        dfs(l, r, idx + 1)
        if (str.charAt(idx) == '(' && l > 0) {
            // str = str.split('').splice(idx, 1).join('')
            str = str.substring(0, idx) + str.substring(idx + 1)
            dfs(l - 1, r, idx)
            str = str.substring(0, idx) + '(' + str.substring(idx)
        } else if (str.charAt(idx) == ')' && r > 0) {
            str = str.substring(0, idx) + str.substring(idx + 1)
            dfs(l, r - 1, idx)
            str = str.substring(0, idx) + ')' + str.substring(idx)
        }
    }
    //这里进入的str已经两种括号个数相等，只需要判断是否合理
    function isValid(str) {
        let lCount = 0
        for (letter of str) {
            if (letter == '(') lCount++
            else if (letter == ')') lCount--
            if (lCount < 0) return false
        }
        return true
    }
};

removeInvalidParentheses("()())()")
// @lc code=end

