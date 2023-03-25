/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const n = s.length, m = p.length
    s = ' ' + s
    p = ' ' + p
    const f = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));
    f[0][0] = true
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 如果下一个字符是 '*'，则代表当前字符不能被单独使用，跳过
            if (j + 1 <= m && p[j + 1] == '*') continue;

            if (p[j] !== '*') {
                dp[i][j] = i && dp[i - 1][j - 1] && (p[j] === s[i] || p[j] === '.');
            } else {
                dp[i][j] = dp[i][j - 2] || i && dp[i - 1][j] && (p[j - 1] === s[i] || p[j - 1] === '.');
            }
        }
    }
    return f[n][m]
};