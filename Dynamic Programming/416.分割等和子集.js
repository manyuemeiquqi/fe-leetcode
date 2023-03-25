/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// @lc code=start
var canPartition = function (nums) {
    // for(let )
    let n = nums.length

    let sum = 0

    for (let i = 0; i < n; i++) {
        sum = sum + nums[i]
    }
    if (sum % 2) return false
    let m = sum / 2
    let dp = new Array(m + 1).fill(false)
    dp[0] = true
    for (let i = 0; i < n; i++) {
        for (let j = m; j >= nums[i]; j--) {
            // dp[j] = dp[j - nums[i]] || false
            dp[j] = dp[j] || dp[j - nums[i]]
            console.log('dp: ', dp);
        }
    }
    return dp[m]
};

// @lc code=end