// 具体解析可看
// https://leetcode.cn/problems/find-the-duplicate-number/solutions/18952/kuai-man-zhi-zhen-de-jie-shi-cong-damien_undoxie-d/

// 快慢指针
var findDuplicate = function (nums) {
  let s = nums[0],
    f = nums[nums[s]];

  while (s !== f) {
    s = nums[s];
    f = nums[nums[f]];
  }
  let pre1 = 0,
    pre2 = s;
  while (pre1 !== pre2) {
    pre1 = nums[pre1];
    pre2 = nums[pre2];
  }
  return nums[pre1];
};
