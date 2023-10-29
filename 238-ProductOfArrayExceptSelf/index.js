/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i > -1; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
