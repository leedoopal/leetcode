// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let last = nums.length - 1;

  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] >= last - i) last = i
  }

  return last === 0;
};

console.log(canJump([3,1,3,0,4]));
