/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // 점프 수
  let jump = 0;
  // 이전에 가능했던 점프 범위
  let prev = 0;
  // 현재 점프 가능한 범위
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    curr = Math.max(curr, nums[i] + i);

    if (prev === i) {
      prev = curr;
      jump++;
    }
  }

  return jump;
};

console.log(jump([2, 3, 0, 1, 4]));
