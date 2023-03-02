/**
 * @param {string} s
 * @return {string}
 */

// 什么是回文子串
// reverse 以后 == 原字符串
var longestPalindrome = function(s) {
  let ans = '';
  const length = s.length; 
  for (let l = 0; l < length; l++ ){
    for (let r = l + 1; r <= length; r++){
      const curString = s.substring(l, r);
      if (isValid(curString)){
         if(curString.length>ans.length){
          ans = curString
        }
      }
    }
  }
  return ans; 
};
const  isValid = (s) => {
  let length = s.length;
  let i = 0;
  while (i <= length / 2) {
    if (s.charAt(i) !== s.charAt(length - 1 - i))
      return false;
    i++;
  }
  return true;
}