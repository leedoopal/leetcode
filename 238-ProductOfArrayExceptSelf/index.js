/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
  let left = 1;
  let right = 1;

  /*
  leftArr[0] = 1
  leftArr[1] = 1 * nums[0] = 1 * 1 = 1
  leftArr[2] = 1 * nums[0] * nums[1] = 1 * 1 * 2 = 2
  leftArr[3] = 1 * nums[0] * nums[1] * nums[2] = 1 * 1 * 2 * 3 = 6
  */
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  /*
  rightArr[3] = 1
  rightArr[2] = 1 * nums[3] = 1 * 4 = 4
  rightArr[1] = 1 * nums[3] * nums[2] = 1 * 4 * 3 = 12
  rightArr[0] = 1 * nums[3] * nums[2] * nums[1] = 1 * 4 * 3 * 2 = 24

  result[0] = leftArr[2] * rightArr[1] = 2 * 12 = 24
  result[1] = leftArr[1] * rightArr[2] = 1 * 24 = 24
  result[2] = leftArr[0] * rightArr[3] = 1 * 1 = 1
  result[3] = leftArr[3] * rightArr[0] = 6 * 1 = 6
  */
  for (let i = nums.length - 1; i >= 0; i--) {
    // compute right product for nums[i] and multiply it with the left product
    result[i] *= right;
    right *= nums[i];
  }

  return result
};

console.log(productExceptSelf([1, 2, 3, 4]));
