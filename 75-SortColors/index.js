// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/798/
// library's sort function 사용 금지

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const index = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length && i <= right; i++) {
    if (nums[i] === 2) {
      nums[i] = nums[right];
      nums[right] = 2;
      right--;
      i--;
    } else if (nums[i] === 0) {
      nums[i] = nums[left];
      nums[left] = 0;
      left++
    }
  }
};

console.log(index([0,1,1,0]));
