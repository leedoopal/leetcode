// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  // 처음에는 마지막 값으로 셋팅함.
  let last = nums.length - 1;

  // 뒤에서부터 경우의 수 계산함
  // 앞에서부터하면 O(n)^2 됨
  for (let i = nums.length - 1; i > -1; i--) {
    // 현재 위치(i)에서 last까지 갈 수 있는지 계산하고 갈 수 있다면 last 값 변경
    if (nums[i] >= last - i) last = i
  }

  return last === 0;
};

console.log(canJump([3,1,3,0,4]));
