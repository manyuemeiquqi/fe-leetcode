/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

//可以知道是插入，但是如何操作才会不会引发额外的冻结时间 

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    const map = {}
    let c = 0, s = 0
    for (let item of tasks) {
        map[item] = map[item] ? ++map[item] : 1
        if (c < map[item]) {
            c = map[item]
            s = 1
        }
        else if (c == map[item]) ++s
    }
    console.log('c : ', c, s);

    return Math.max((c - 1) * (n + 1) + s, tasks.length)
};

// @lc code=end

