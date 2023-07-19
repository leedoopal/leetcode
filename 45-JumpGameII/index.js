/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // 현재 점프할 수 있는 최대 인덱스
  let current = -1;
  // 다음 점프할 수 있는 최대 인덱스
  let next = 0;
  // 점프 횟수 카운트
  let result = 0;

  for (let i = 0; next < nums.length - 1; i++) {
    // 점프를 해야하는 상황
    if (i > current) {
      result++;
      current = next;
    }
    next = Math.max(next, nums[i] + i)
  }

  return result;
};

console.log(jump([2, 3, 0, 1, 4]));
