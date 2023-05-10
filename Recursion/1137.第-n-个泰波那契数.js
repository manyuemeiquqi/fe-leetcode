/**
 * @param {number} n
 * @return {number}
 */

//通过多项式修改运算条件
var tribonacci = function (n) {
    if (n <= 1) return n
    if (n == 2) return 1
    if (n == 3) return 2
    if (n == 4) return 4
    return 2 * tribonacci(n - 1) - tribonacci(n - 4)
};