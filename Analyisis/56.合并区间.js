/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const ans = []
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    console.log('intervals: ', intervals);

    // for (let item of intervals){

    // }
    ans[0] = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (ans[ans.length - 1][1] < intervals[i][0]) {
            ans.push(intervals[i])
        }
        // else if (ans[ans.length - 1][1] >)
        else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
        }
    }
    return ans
};
merge([[1, 3], [2, 6], [8, 10], [15, 18]])
// @lc code=end

