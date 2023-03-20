/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalRectangle = function(matrix) {
  let ans = 0;
  const n  = matrix.length, m = matrix[0].length;
  let height = new Array(m).fill(0);
  for (let i = 0; i < n; i++){  
    for (let j = 0; j < m; j++){
      height[j] = matrix[i][j] == 1 ? height[j] + 1 : 0;
    }
    let stk  = [], l = [], r = [];
    for (let x = 0; x < m; x++){
      while (stk.length && height[stk[stk.length - 1]] >= height[x]) {
        stk.pop();
      }
      l[x] = stk.length? stk[stk.length - 1]:-1;
      stk.push(x);
    }
    stk = [];
    for (let x = m - 1; x >= 0; x--){
      while (stk.length && height[stk[stk.length - 1]] >= height[x]) {
        stk.pop();
      }
      r[x] = stk.length?stk[stk.length - 1]:m;
      stk.push(x);
    }
    console.log(height);
    console.log(l, r);
    for(let i=0;i<m;i++){
        ans=Math.max(height[i]*(r[i]-l[i]-1),ans)
    }
  }
  return ans;
};
// @lc code=end





function largestRectangleArea(h) {
  const n = h.length;
  const l = Array.from({length: n}, () => -1),
        r = Array.from({length: n}, () => n);
  let stk = [];
  for(let i = 0; i < n; i ++) {
      while(stk.length && h[stk.top()] >= h[i]) stk.pop();
      if(stk.length) l[i] = stk.top();
      stk.push(i);
  }
  stk = [];
  for(let i = n - 1; i >= 0; i --) {
      while(stk.length && h[stk.top()] >= h[i]) stk.pop();
      if(stk.length) r[i] = stk.top();
      stk.push(i);
  }
  let res = 0;
  for(let i = 0; i < n; i ++) res = Math.max(res, h[i] * (r[i] - l[i] - 1));
  return res;
}

